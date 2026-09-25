#!/usr/bin/env python3
"""Genera narraciones gratuitas con Kokoro y las integra en las microcapsulas CCE."""

from __future__ import annotations

import re
import subprocess
import tempfile
from pathlib import Path

import numpy as np
import soundfile as sf
from kokoro import KPipeline

ROOT = Path(__file__).resolve().parents[1]
VIDEO_DIR = ROOT
PREVIEW_DIR = ROOT / "narraciones-kokoro"
VOICE = "ef_dora"
SAMPLE_RATE = 24000
COURSES = (
    "identificacion-correcta-paciente",
    "comunicacion-saer",
    "higiene-de-manos",
    "precauciones-estandar-epp",
    "trato-digno-experiencia-paciente",
)

def run(*args: str) -> None:
    subprocess.run(args, check=True)

def timestamp(value: str) -> float:
    minutes, seconds = value.split(":")
    return int(minutes) * 60 + float(seconds)

def read_vtt(path: Path) -> list[tuple[float, float, str]]:
    pattern = re.compile(
        r"(\d{2}:\d{2}\.\d{3})\s+-->\s+(\d{2}:\d{2}\.\d{3})\s*\n(.+?)(?=\n\n|\Z)",
        re.S,
    )
    return [
        (timestamp(start), timestamp(end), " ".join(text.split()))
        for start, end, text in pattern.findall(path.read_text(encoding="utf-8"))
    ]

def synthesize(pipeline: KPipeline, text: str) -> np.ndarray:
    pieces = []
    for _, _, audio in pipeline(text, voice=VOICE, speed=0.96, split_pattern=r"\n+"):
        pieces.append(np.asarray(audio, dtype=np.float32))
    if not pieces:
        raise RuntimeError(f"Kokoro no genero audio para: {text}")
    pause = np.zeros(int(SAMPLE_RATE * 0.12), dtype=np.float32)
    result = pieces[0]
    for piece in pieces[1:]:
        result = np.concatenate((result, pause, piece))
    return result

def fit_segment(source: Path, target: Path, available: float) -> None:
    duration = float(subprocess.check_output(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=nk=1:nw=1", str(source)], text=True
    ).strip())
    if duration <= available:
        run("ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(source), str(target))
        return
    tempo = duration / available
    run("ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(source),
        "-filter:a", f"atempo={tempo:.6f}", str(target))

def build_course(pipeline: KPipeline, slug: str) -> None:
    cues = read_vtt(ROOT / f"{slug}.vtt")
    video = VIDEO_DIR / f"{slug}.mp4"
    if not video.exists():
        raise FileNotFoundError(video)
    duration = float(subprocess.check_output(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=nk=1:nw=1", str(video)], text=True
    ).strip())

    with tempfile.TemporaryDirectory(prefix=f"cce-{slug}-") as temp_name:
        temp = Path(temp_name)
        fitted = []
        for index, (start, end, text) in enumerate(cues, start=1):
            raw = temp / f"raw-{index:02d}.wav"
            final = temp / f"cue-{index:02d}.wav"
            sf.write(raw, synthesize(pipeline, text), SAMPLE_RATE, subtype="PCM_16")
            fit_segment(raw, final, max(0.5, end - start - 0.25))
            fitted.append((start, final))

        inputs = ["-f", "lavfi", "-t", f"{duration:.3f}", "-i", f"anullsrc=r={SAMPLE_RATE}:cl=mono"]
        for _, cue in fitted:
            inputs.extend(("-i", str(cue)))
        filters = [f"[{i}:a]adelay={int(start * 1000)}[a{i}]" for i, (start, _) in enumerate(fitted, start=1)]
        mix_inputs = "[0:a]" + "".join(f"[a{i}]" for i in range(1, len(fitted) + 1))
        filters.append(
            f"{mix_inputs}amix=inputs={len(fitted)+1}:duration=first:normalize=0,"
            "loudnorm=I=-16:TP=-1.5:LRA=7[narration]"
        )
        narration = temp / "narration.wav"
        run("ffmpeg", "-hide_banner", "-loglevel", "error", "-y", *inputs,
            "-filter_complex", ";".join(filters), "-map", "[narration]", "-ar", "48000", str(narration))

        PREVIEW_DIR.mkdir(exist_ok=True)
        run("ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(narration),
            "-c:a", "libmp3lame", "-b:a", "128k", str(PREVIEW_DIR / f"{slug}.mp3"))

        output = temp / f"{slug}.mp4"
        run("ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(video), "-i", str(narration),
            "-map", "0:v:0", "-map", "1:a:0", "-c:v", "copy", "-c:a", "aac", "-b:a", "128k",
            "-movflags", "+faststart", "-shortest", str(output))
        output.replace(video)
    print(f"Narracion integrada: {video}")

def main() -> None:
    pipeline = KPipeline(lang_code="e")
    for course in COURSES:
        build_course(pipeline, course)

if __name__ == "__main__":
    main()
