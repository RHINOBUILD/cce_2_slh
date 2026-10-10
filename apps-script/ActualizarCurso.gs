/**
 * CCE 2.0 · Actualizar un solo curso desde Catalogo.gs.
 *
 * "Actualizar catálogo" reescribe el contenido de TODOS los cursos. Estas funciones
 * actualizan únicamente el curso indicado y dejan intactos los demás (incluidos los
 * editados desde Administración → Cursos). No borran avances, calificaciones ni constancias.
 *
 * Uso: en el editor de Apps Script elige la función y presiona Ejecutar.
 */

/** Actualiza AESP 1: módulos, video, subtítulos, materiales, evaluación, objetivos y público. */
function actualizarCursoAesp1() {
  return actualizarCursoDesdeCatalogo_('aesp1');
}

/** Actualiza AESP 2: comunicación efectiva. */
function actualizarCursoAesp2() {
  return actualizarCursoDesdeCatalogo_('aesp2');
}

/** Agrega o actualiza AESP 3: medicamentos de alto riesgo. */
function actualizarCursoAesp3() {
  return actualizarCursoDesdeCatalogo_('aesp3');
}

/** Actualiza AESP 1, 2 y 3 de una sola vez. */
function actualizarCursosAesp() {
  return ['aesp1', 'aesp2', 'aesp3'].map(actualizarCursoDesdeCatalogo_);
}

function actualizarCursoDesdeCatalogo_(id) {
  var c = CCE_CATALOG.filter(function (x) { return x.id === id; })[0];
  if (!c) throw new Error('El curso "' + id + '" no existe en Catalogo.gs.');
  var t = table_('CURSOS', true);
  var row = t.find(function (r) { return String(r.ID).trim() === id; });
  var values = {
    TITULO: c.titulo,
    DESCRIPCION: c.descripcion,
    LECCIONES_JSON: JSON.stringify(c.lecciones),
    EVALUACION_JSON: JSON.stringify(c.evaluacion),
    OBJETIVOS: (c.objetivos || []).join('\n'),
    DIRIGIDO_A: c.dirigido || '',
    NIVEL: c.nivel || ''
  };
  if (!row) {
    values.ID = c.id; values.AREA = c.area; values.HORAS = c.horas;
    values.OBLIGATORIO = c.obligatorio ? 'SI' : 'NO'; values.EMPRESAS = '';
    values.ACTIVO = 'SI'; values.ORDEN = c.orden; values.IMAGEN = '';
    t.append(values);
  } else {
    t.update(row, values);
  }
  Logger.log('Curso actualizado: ' + c.titulo + ' · ' + c.lecciones.length + ' módulos · ' + c.evaluacion.length + ' preguntas.');
  return { ok: true, id: id, modulos: c.lecciones.length, preguntas: c.evaluacion.length };
}
