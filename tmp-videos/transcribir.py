import json, os
from pathlib import Path
from faster_whisper import WhisperModel
m = WhisperModel("medium", device="cpu", compute_type="int8", cpu_threads=os.cpu_count())
prompt = ("Capacitación hospitalaria Saint Luke's. NOM-004, NOM-087, NOM-017-STPS, NOM-220, COFEPRIS, RPBI, EPP, "
          "AESP, MOCEBPASS, Saffir-Simpson, CONAGUA, CENAPRED, FRAP, IMSS, CEyE, LASA, AWaRe, Humpty Dumpty, Morse, ACC.1.1.")
for f in sorted(Path("tmp-videos").glob("*.ogg")):
    segs, info = m.transcribe(str(f), language="es", beam_size=5, word_timestamps=True,
                              initial_prompt=prompt, vad_filter=False, condition_on_previous_text=False)
    out = [{"start": s.start, "end": s.end, "text": s.text.strip(),
            "words": [[w.start, w.end, w.word] for w in (s.words or [])]} for s in segs]
    f.with_suffix(".json").write_text(json.dumps(out, ensure_ascii=False, indent=0))
    print(f.name, len(out), flush=True)
