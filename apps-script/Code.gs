/**
 * CCE 2.0 · Centro de Capacitación y Enseñanza
 * Backend seguro en Google Apps Script.
 *
 * Principio: el navegador solo muestra; este script decide.
 *  - Valida el acceso (PIN con hash + sal + pimienta, límite de intentos).
 *  - Emite sesiones con vencimiento.
 *  - Entrega cursos SIN las respuestas correctas.
 *  - Registra el avance en la hoja y exige el tiempo mínimo de cada lección.
 *  - Califica las evaluaciones y emite constancias con folio y código de verificación.
 *  - Inserta las firmas solo al entregar una constancia válida.
 *
 * Despliegue: Implementar > Nueva implementación > Aplicación web
 *   Ejecutar como: Yo · Quién tiene acceso: Cualquier usuario
 */

/* ===================== Configuración base ===================== */

var SHEETS = {
  USUARIOS: ['NUMERO_EMPLEADO', 'NOMBRE', 'EMPRESA', 'AREA', 'PUESTO', 'ROL', 'ACTIVO', 'CORREO', 'PIN_INICIAL', 'PIN_HASH', 'PIN_SALT', 'DEBE_CAMBIAR_PIN', 'ULTIMO_ACCESO'],
  CURSOS: ['ID', 'TITULO', 'AREA', 'HORAS', 'OBLIGATORIO', 'EMPRESAS', 'ACTIVO', 'ORDEN', 'DESCRIPCION', 'LECCIONES_JSON', 'EVALUACION_JSON'],
  ASIGNACIONES: ['TIPO', 'VALOR', 'CURSO_ID', 'FECHA_LIMITE', 'ASIGNADO_POR', 'FECHA_ASIGNACION'],
  PROGRESO: ['NUMERO_EMPLEADO', 'CURSO_ID', 'LECCIONES', 'ESTADO', 'MEJOR_CALIFICACION', 'INTENTOS', 'ACTUALIZADO'],
  EVALUACIONES: ['FECHA', 'NUMERO_EMPLEADO', 'NOMBRE', 'CURSO_ID', 'CURSO', 'CALIFICACION', 'ESTADO', 'INTENTO', 'FOLIO'],
  CERTIFICADOS: ['FOLIO', 'CODIGO', 'NUMERO_EMPLEADO', 'NOMBRE', 'EMPRESA', 'CURSO_ID', 'CURSO', 'HORAS', 'CALIFICACION', 'FECHA_EMISION', 'FECHA_VENCIMIENTO', 'ESTADO', 'MOTIVO_REVOCACION'],
  CONFIGURACION: ['CLAVE', 'VALOR', 'DESCRIPCION'],
  BITACORA: ['FECHA', 'NUMERO_EMPLEADO', 'ACCION', 'DETALLE']
};

var DEFAULT_CONFIG = [
  ['CALIFICACION_MINIMA', 80, 'Porcentaje mínimo para aprobar una evaluación.'],
  ['INTENTOS_EVALUACION_DIA', 3, 'Intentos permitidos por curso en un mismo día (0 = sin límite).'],
  ['INTENTOS_LOGIN', 5, 'Intentos fallidos de acceso antes del bloqueo temporal.'],
  ['BLOQUEO_MINUTOS', 15, 'Minutos de bloqueo después de agotar los intentos de acceso.'],
  ['SESION_HORAS', 6, 'Duración de la sesión (máximo 6).'],
  ['ASIGNAR_POR_AREA', 'SI', 'SI = los cursos del área del colaborador se asignan automáticamente.'],
  ['VIGENCIA_MESES_CONSTANCIA', 12, 'Meses de vigencia de cada constancia (0 = sin vencimiento).'],
  ['FOLIO_CONSECUTIVO', 0, 'Último consecutivo de folio emitido. No editar.'],
  ['URL_PLATAFORMA', 'https://capacitacion.rhinobuild.org/', 'URL pública usada en el QR de verificación.'],
  ['FIRMANTE_1_NOMBRE', 'Dr. Luis Enrique Espinoza Reyes', 'Nombre del primer firmante.'],
  ['FIRMANTE_1_CARGO', 'Director Médico', 'Cargo del primer firmante.'],
  ['FIRMANTE_1_FIRMA_ID', '', 'ID del archivo PNG de la firma en Google Drive.'],
  ['FIRMANTE_2_NOMBRE', 'Lic. Psic. Fernando Carrillo Ramírez', 'Nombre del segundo firmante.'],
  ['FIRMANTE_2_CARGO', 'Director de Capital Humano', 'Cargo del segundo firmante.'],
  ['FIRMANTE_2_FIRMA_ID', '', 'ID del archivo PNG de la firma en Google Drive.']
];

var MIN_PIN = 4, MAX_PIN = 8;
var HASH_ROUNDS = 250;

/* ===================== Entrada HTTP ===================== */

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.action === 'verify') return respond_(safe_(function () { return verifyCertificate_(p.code); }));
  return respond_({ ok: true, service: 'CCE 2.0 API', time: new Date().toISOString() });
}

function doPost(e) {
  return respond_(safe_(function () {
    var body = {};
    try { body = JSON.parse((e && e.postData && e.postData.contents) || '{}'); }
    catch (err) { throw publicError_('Solicitud no válida.'); }
    return route_(body);
  }));
}

function route_(b) {
  var publicActions = {
    ping: function () { return { ok: true }; },
    login: function () { return login_(b.employeeNumber, b.pin); },
    setPin: function () { return setPin_(b.setupToken, b.newPin); },
    verify: function () { return verifyCertificate_(b.code); }
  };
  if (publicActions[b.action]) return publicActions[b.action]();

  var s = requireSession_(b.token);
  var actions = {
    session: function () { return { ok: true, user: publicUser_(s.user) }; },
    logout: function () { CacheService.getScriptCache().remove('ses_' + b.token); return { ok: true }; },
    catalog: function () { return catalog_(s.user); },
    course: function () { return courseDetail_(s.user, b.courseId); },
    startLesson: function () { return startLesson_(s.user, b.courseId, b.lesson); },
    completeLesson: function () { return completeLesson_(s.user, b.courseId, b.lesson); },
    startQuiz: function () { return startQuiz_(s.user, b.courseId); },
    submitQuiz: function () { return submitQuiz_(s.user, b.attemptId, b.answers); },
    certificates: function () { return myCertificates_(s.user); },
    certificate: function () { return certificate_(s.user, b.folio); },
    changePin: function () { return changePin_(s.user, b.currentPin, b.newPin); },
    adminSummary: function () { requireAdmin_(s.user); return adminSummary_(); },
    adminUsers: function () { requireAdmin_(s.user); return adminUsers_(b.query); },
    adminUser: function () { requireAdmin_(s.user); return adminUser_(b.employeeNumber); },
    adminResetPin: function () { requireAdmin_(s.user); return adminResetPin_(s.user, b.employeeNumber); },
    adminRevoke: function () { requireAdmin_(s.user); return adminRevoke_(s.user, b.folio, b.reason); },
    adminAssign: function () { requireAdmin_(s.user); return adminAssign_(s.user, b); },
    adminReport: function () { requireAdmin_(s.user); return adminReport_(); },
    adminCourses: function () { requireAdmin_(s.user); return adminCourses_(); },
    adminSaveCourse: function () { requireAdmin_(s.user); return adminSaveCourse_(s.user, b.course, b.isNew); },
    adminSetCourseActive: function () { requireAdmin_(s.user); return adminSetCourseActive_(s.user, b.courseId, b.active); }
  };
  if (!actions[b.action]) throw publicError_('Acción no reconocida.');
  return actions[b.action]();
}

function respond_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function safe_(fn) {
  try { return fn(); }
  catch (err) {
    if (err && err.isPublic) return { ok: false, message: err.message, code: err.code || 'ERROR' };
    console.error(err && err.stack ? err.stack : err);
    return { ok: false, message: 'Ocurrió un error interno. Intenta nuevamente.', code: 'INTERNAL' };
  }
}

function publicError_(message, code) {
  var e = new Error(message); e.isPublic = true; e.code = code; return e;
}

/* ===================== Acceso ===================== */

function login_(employeeNumber, pin) {
  var emp = cleanEmp_(employeeNumber);
  pin = String(pin || '').trim();
  if (!emp || !pin) throw publicError_('Ingresa tu número de empleado y tu PIN.');

  var cache = CacheService.getScriptCache();
  if (cache.get('lock_' + emp)) throw publicError_('Acceso bloqueado temporalmente por intentos fallidos. Intenta en ' + cfgNum_('BLOQUEO_MINUTOS', 15) + ' minutos.', 'LOCKED');

  var user = findUser_(emp);
  var valid = false, mustSetPin = false;
  if (user && isYes_(user.ACTIVO)) {
    if (user.PIN_HASH) {
      valid = hashPin_(pin, user.PIN_SALT) === user.PIN_HASH;
      mustSetPin = valid && isYes_(user.DEBE_CAMBIAR_PIN);
    } else if (String(user.PIN_INICIAL || '').trim()) {
      valid = String(user.PIN_INICIAL).trim() === pin;
      mustSetPin = valid;
    } else {
      registerFailure_(emp);
      throw publicError_('Tu acceso aún no está habilitado. Solicita tu PIN a Capital Humano.', 'NO_PIN');
    }
  }

  if (!valid) {
    var left = registerFailure_(emp);
    throw publicError_(left > 0
      ? 'Número de empleado o PIN incorrectos. Intentos restantes: ' + left + '.'
      : 'Acceso bloqueado temporalmente por intentos fallidos.', left > 0 ? 'BAD_CREDENTIALS' : 'LOCKED');
  }

  cache.remove('fail_' + emp);
  if (mustSetPin) {
    var setupToken = randomToken_();
    cache.put('setup_' + setupToken, emp, 900);
    return { ok: true, mustSetPin: true, setupToken: setupToken, name: firstName_(user.NOMBRE) };
  }
  return openSession_(user);
}

function setPin_(setupToken, newPin) {
  var cache = CacheService.getScriptCache();
  var emp = setupToken && cache.get('setup_' + setupToken);
  if (!emp) throw publicError_('La solicitud de cambio de PIN venció. Ingresa de nuevo.', 'SETUP_EXPIRED');
  validateNewPin_(newPin, emp);
  var user = writePin_(emp, newPin);
  cache.remove('setup_' + setupToken);
  log_(emp, 'PIN_CONFIGURADO', 'Primer acceso o PIN temporal reemplazado');
  return openSession_(user);
}

function changePin_(user, currentPin, newPin) {
  var fresh = findUser_(user.NUMERO_EMPLEADO);
  if (!fresh.PIN_HASH || hashPin_(String(currentPin || ''), fresh.PIN_SALT) !== fresh.PIN_HASH) {
    throw publicError_('El PIN actual no es correcto.');
  }
  validateNewPin_(newPin, user.NUMERO_EMPLEADO);
  writePin_(user.NUMERO_EMPLEADO, newPin);
  log_(user.NUMERO_EMPLEADO, 'PIN_CAMBIADO', '');
  return { ok: true };
}

function validateNewPin_(pin, emp) {
  pin = String(pin || '');
  if (!/^\d+$/.test(pin) || pin.length < MIN_PIN || pin.length > MAX_PIN) {
    throw publicError_('El PIN debe tener de ' + MIN_PIN + ' a ' + MAX_PIN + ' dígitos.');
  }
  var allSame = /^(\d)\1+$/.test(pin);
  var seq = '01234567890', rseq = '09876543210';
  if (allSame || seq.indexOf(pin) >= 0 || rseq.indexOf(pin) >= 0 || pin === cleanEmp_(emp)) {
    throw publicError_('Elige un PIN menos predecible (sin dígitos repetidos, consecutivos ni tu número de empleado).');
  }
}

function writePin_(emp, pin) {
  emp = cleanEmp_(emp);
  return withLock_(function () {
    var t = table_('USUARIOS');
    var row = t.find(function (r) { return cleanEmp_(r.NUMERO_EMPLEADO) === emp; });
    if (!row) throw publicError_('Colaborador no encontrado.');
    var salt = randomToken_().slice(0, 16);
    t.update(row, { PIN_HASH: hashPin_(String(pin), salt), PIN_SALT: salt, PIN_INICIAL: '', DEBE_CAMBIAR_PIN: 'NO' });
    return row;
  });
}

function registerFailure_(emp) {
  var cache = CacheService.getScriptCache();
  var max = cfgNum_('INTENTOS_LOGIN', 5);
  var n = Number(cache.get('fail_' + emp) || 0) + 1;
  cache.put('fail_' + emp, String(n), 3600);
  if (n >= max) {
    cache.put('lock_' + emp, '1', cfgNum_('BLOQUEO_MINUTOS', 15) * 60);
    cache.remove('fail_' + emp);
    log_(emp, 'ACCESO_BLOQUEADO', n + ' intentos fallidos');
    return 0;
  }
  return max - n;
}

function openSession_(user) {
  var token = randomToken_();
  var hours = Math.min(Math.max(cfgNum_('SESION_HORAS', 6), 1), 6);
  CacheService.getScriptCache().put('ses_' + token, cleanEmp_(user.NUMERO_EMPLEADO), hours * 3600);
  withLock_(function () {
    var t = table_('USUARIOS');
    var row = t.find(function (r) { return cleanEmp_(r.NUMERO_EMPLEADO) === cleanEmp_(user.NUMERO_EMPLEADO); });
    if (row) t.update(row, { ULTIMO_ACCESO: new Date() });
  });
  log_(user.NUMERO_EMPLEADO, 'INICIO_SESION', '');
  return { ok: true, token: token, expiresIn: hours * 3600, user: publicUser_(user) };
}

function requireSession_(token) {
  var emp = token && CacheService.getScriptCache().get('ses_' + token);
  if (!emp) throw publicError_('Tu sesión terminó. Ingresa nuevamente.', 'SESSION_EXPIRED');
  var user = findUser_(emp);
  if (!user || !isYes_(user.ACTIVO)) throw publicError_('Tu acceso fue desactivado.', 'SESSION_EXPIRED');
  return { user: user };
}

function requireAdmin_(user) {
  if (String(user.ROL).toUpperCase() !== 'ADMIN') throw publicError_('No tienes permisos de administración.', 'FORBIDDEN');
}

function publicUser_(u) {
  return {
    employeeNumber: cleanEmp_(u.NUMERO_EMPLEADO), name: String(u.NOMBRE || ''), company: String(u.EMPRESA || ''),
    area: String(u.AREA || ''), position: String(u.PUESTO || ''), role: String(u.ROL || 'COLABORADOR').toUpperCase()
  };
}

function hashPin_(pin, salt) {
  var pepper = PropertiesService.getScriptProperties().getProperty('PIN_PEPPER') || '';
  var h = salt + ':' + pin + ':' + pepper;
  for (var i = 0; i < HASH_ROUNDS; i++) {
    h = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, h + salt + pepper, Utilities.Charset.UTF_8));
  }
  return h;
}

/* ===================== Cursos y asignaciones ===================== */

function allCourses_(includeInactive) {
  return table_('CURSOS').rows.filter(function (r) { return String(r.ID || '').trim() && (includeInactive || isYes_(r.ACTIVO)); }).map(function (r) {
    return {
      id: String(r.ID).trim(), title: String(r.TITULO), area: String(r.AREA), hours: Number(r.HORAS) || 0,
      required: isYes_(r.OBLIGATORIO), companies: splitList_(r.EMPRESAS), order: Number(r.ORDEN) || 999,
      description: String(r.DESCRIPCION || ''), lessons: parseJson_(r.LECCIONES_JSON, []), quiz: parseJson_(r.EVALUACION_JSON, []),
      active: isYes_(r.ACTIVO)
    };
  }).sort(function (a, b) { return a.order - b.order; });
}

function findCourse_(id, includeInactive) {
  var c = allCourses_(includeInactive).filter(function (x) { return x.id === String(id); })[0];
  if (!c) throw publicError_('El curso no existe o no está activo.');
  return c;
}

function quizSig_(course) {
  return Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, JSON.stringify(course.quiz), Utilities.Charset.UTF_8)).slice(0, 16);
}

function courseVisible_(course, user) {
  if (!course.companies.length) return true;
  var company = normalize_(user.EMPRESA);
  return course.companies.some(function (c) { return normalize_(c) === company; });
}

/** Devuelve { courseId: fechaLimite|null } de los cursos asignados al colaborador. */
function assignmentsFor_(user, courses) {
  var map = {};
  var byArea = isYes_(cfg_('ASIGNAR_POR_AREA', 'SI'));
  courses.forEach(function (c) {
    if (!courseVisible_(c, user)) return;
    if (c.required || (byArea && normalize_(c.area) === normalize_(user.AREA))) map[c.id] = null;
  });
  table_('ASIGNACIONES').rows.forEach(function (a) {
    var type = String(a.TIPO || '').toUpperCase().trim(), value = normalize_(a.VALOR), match = false;
    if (type === 'TODOS') match = true;
    else if (type === 'EMPLEADO') match = value === normalize_(user.NUMERO_EMPLEADO);
    else if (type === 'AREA') match = value === normalize_(user.AREA);
    else if (type === 'PUESTO') match = value === normalize_(user.PUESTO);
    else if (type === 'EMPRESA') match = value === normalize_(user.EMPRESA);
    if (!match) return;
    var id = String(a.CURSO_ID).trim();
    var due = a.FECHA_LIMITE instanceof Date ? a.FECHA_LIMITE : null;
    if (!(id in map) || (due && (!map[id] || due < map[id]))) map[id] = due;
  });
  return map;
}

function progressMap_(emp) {
  var map = {};
  table_('PROGRESO').rows.forEach(function (r) {
    if (cleanEmp_(r.NUMERO_EMPLEADO) !== emp) return;
    map[String(r.CURSO_ID)] = {
      lessons: String(r.LECCIONES || '').split(',').filter(String).map(Number),
      best: Number(r.MEJOR_CALIFICACION) || 0, attempts: Number(r.INTENTOS) || 0, row: r
    };
  });
  return map;
}

function certificatesFor_(emp) {
  var now = new Date();
  return table_('CERTIFICADOS').rows.filter(function (r) { return cleanEmp_(r.NUMERO_EMPLEADO) === emp; }).map(function (r) {
    var expired = r.FECHA_VENCIMIENTO instanceof Date && r.FECHA_VENCIMIENTO < now;
    var status = String(r.ESTADO || 'VIGENTE').toUpperCase();
    if (status === 'VIGENTE' && expired) status = 'VENCIDA';
    return {
      folio: String(r.FOLIO), courseId: String(r.CURSO_ID), course: String(r.CURSO), hours: Number(r.HORAS) || 0,
      score: Number(r.CALIFICACION) || 0, issuedAt: iso_(r.FECHA_EMISION), expiresAt: iso_(r.FECHA_VENCIMIENTO), status: status
    };
  });
}

function validCertificate_(certs, courseId) {
  return certs.filter(function (c) { return c.courseId === courseId && c.status === 'VIGENTE'; })[0] || null;
}

function courseStatus_(course, prog, cert) {
  if (cert) return 'APROBADO';
  var done = prog ? prog.lessons.length : 0;
  if (!prog) return 'PENDIENTE';
  if (done >= course.lessons.length) return 'EVALUACION';
  return 'EN_CURSO';
}

function summarizeCourse_(c, assigned, prog, cert, due) {
  var done = prog ? Math.min(prog.lessons.length, c.lessons.length) : 0;
  return {
    id: c.id, title: c.title, area: c.area, hours: c.hours, required: c.required, description: c.description,
    lessonCount: c.lessons.length, questionCount: c.quiz.length, assigned: assigned, dueDate: iso_(due),
    lessonsDone: done, progress: c.lessons.length ? Math.round(done / c.lessons.length * 100) : 0,
    bestScore: prog ? prog.best : 0, attempts: prog ? prog.attempts : 0,
    status: courseStatus_(c, prog, cert), certificate: cert ? cert.folio : null
  };
}

function catalog_(user) {
  var emp = cleanEmp_(user.NUMERO_EMPLEADO);
  var courses = allCourses_().filter(function (c) { return courseVisible_(c, user); });
  var assign = assignmentsFor_(user, courses), prog = progressMap_(emp), certs = certificatesFor_(emp);
  var list = courses.map(function (c) {
    return summarizeCourse_(c, c.id in assign, prog[c.id], validCertificate_(certs, c.id), assign[c.id]);
  });
  var assigned = list.filter(function (c) { return c.assigned; });
  var approved = assigned.filter(function (c) { return c.status === 'APROBADO'; });
  var hours = list.filter(function (c) { return c.status === 'APROBADO'; }).reduce(function (n, c) { return n + c.hours; }, 0);
  return {
    ok: true, courses: list,
    stats: {
      assigned: assigned.length, approved: approved.length, hours: Math.round(hours * 100) / 100,
      certificates: certs.filter(function (c) { return c.status === 'VIGENTE'; }).length,
      compliance: assigned.length ? Math.round(approved.length / assigned.length * 100) : 100,
      overdue: assigned.filter(function (c) { return c.status !== 'APROBADO' && c.dueDate && new Date(c.dueDate) < new Date(); }).length
    },
    minScore: cfgNum_('CALIFICACION_MINIMA', 80)
  };
}

function courseDetail_(user, courseId) {
  var isAdmin = String(user.ROL).toUpperCase() === 'ADMIN';
  var c = findCourse_(courseId, isAdmin);
  if (!courseVisible_(c, user)) throw publicError_('Este curso no está disponible para tu empresa.');
  var emp = cleanEmp_(user.NUMERO_EMPLEADO);
  var prog = progressMap_(emp)[c.id];
  var cert = validCertificate_(certificatesFor_(emp), c.id);
  var assign = assignmentsFor_(user, [c]);
  var summary = summarizeCourse_(c, c.id in assign, prog, cert, assign[c.id]);
  summary.lessons = c.lessons.map(function (l, i) {
    return {
      index: i, title: l.titulo, duration: l.duracion, text: l.texto, video: l.video || null,
      captions: l.subtitulos || null, minSeconds: Number(l.segundosMinimos) || 0,
      done: !!(prog && prog.lessons.indexOf(i) >= 0)
    };
  });
  summary.completedLessons = prog ? prog.lessons : [];
  summary.active = c.active;
  summary.minScore = cfgNum_('CALIFICACION_MINIMA', 80);
  return { ok: true, course: summary };
}

/* ===================== Avance ===================== */

function startLesson_(user, courseId, lesson) {
  var c = findCourse_(courseId), i = Number(lesson);
  if (!courseVisible_(c, user)) throw publicError_('Este curso no está disponible para tu empresa.');
  if (!(i >= 0 && i < c.lessons.length)) throw publicError_('Módulo no válido.');
  var key = lessonKey_(user, c.id, i), cache = CacheService.getScriptCache();
  if (!cache.get(key)) cache.put(key, String(Date.now()), 21600);
  return { ok: true, minSeconds: Number(c.lessons[i].segundosMinimos) || 0 };
}

function completeLesson_(user, courseId, lesson) {
  var c = findCourse_(courseId), i = Number(lesson), emp = cleanEmp_(user.NUMERO_EMPLEADO);
  if (!(i >= 0 && i < c.lessons.length)) throw publicError_('Módulo no válido.');
  var prog = progressMap_(emp)[c.id];
  var done = prog ? prog.lessons : [];
  if (done.indexOf(i) >= 0) return { ok: true, completedLessons: done };
  for (var k = 0; k < i; k++) {
    if (done.indexOf(k) < 0) throw publicError_('Completa primero los módulos anteriores.');
  }
  var started = Number(CacheService.getScriptCache().get(lessonKey_(user, c.id, i)) || 0);
  var min = Number(c.lessons[i].segundosMinimos) || 0;
  var elapsed = started ? (Date.now() - started) / 1000 : 0;
  if (!started || elapsed + 3 < min) {
    var wait = Math.max(1, Math.ceil(min - elapsed));
    throw publicError_(c.lessons[i].video
      ? 'Reproduce el video completo para continuar.'
      : 'Revisa el contenido del módulo antes de continuar (' + wait + ' s).', 'TOO_SOON');
  }
  done = done.concat([i]).sort(function (a, b) { return a - b; });
  saveProgress_(emp, c.id, { LECCIONES: done.join(','), ESTADO: done.length >= c.lessons.length ? 'EVALUACION' : 'EN_CURSO' });
  return { ok: true, completedLessons: done };
}

function saveProgress_(emp, courseId, values) {
  withLock_(function () {
    var t = table_('PROGRESO', true);
    var row = t.find(function (r) { return cleanEmp_(r.NUMERO_EMPLEADO) === emp && String(r.CURSO_ID) === courseId; });
    values.ACTUALIZADO = new Date();
    if (row) t.update(row, values);
    else {
      var base = { NUMERO_EMPLEADO: emp, CURSO_ID: courseId, LECCIONES: '', ESTADO: 'EN_CURSO', MEJOR_CALIFICACION: 0, INTENTOS: 0 };
      Object.keys(values).forEach(function (k) { base[k] = values[k]; });
      t.append(base);
    }
  });
}

function lessonKey_(user, courseId, i) { return 'ls_' + cleanEmp_(user.NUMERO_EMPLEADO) + '_' + courseId + '_' + i; }

/* ===================== Evaluaciones ===================== */

function startQuiz_(user, courseId) {
  var c = findCourse_(courseId), emp = cleanEmp_(user.NUMERO_EMPLEADO);
  var prog = progressMap_(emp)[c.id];
  if (!prog || prog.lessons.length < c.lessons.length) throw publicError_('Completa todos los módulos antes de presentar la evaluación.');
  if (!c.quiz.length) throw publicError_('Este curso aún no tiene evaluación configurada.');
  var limit = cfgNum_('INTENTOS_EVALUACION_DIA', 3);
  if (limit > 0 && attemptsToday_(emp, c.id) >= limit) {
    throw publicError_('Alcanzaste el máximo de ' + limit + ' intentos por día para este curso. Podrás intentarlo mañana.', 'ATTEMPTS');
  }

  var qOrder = shuffle_(c.quiz.map(function (_, i) { return i; }));
  var map = qOrder.map(function (qi) { return { q: qi, opts: shuffle_(c.quiz[qi].opciones.map(function (_, j) { return j; })) }; });
  var attemptId = randomToken_();
  CacheService.getScriptCache().put('qz_' + attemptId, JSON.stringify({ emp: emp, course: c.id, map: map, sig: quizSig_(c) }), 7200);
  return {
    ok: true, attemptId: attemptId, minScore: cfgNum_('CALIFICACION_MINIMA', 80),
    questions: map.map(function (m) {
      var q = c.quiz[m.q];
      return { text: q.pregunta, options: m.opts.map(function (j) { return q.opciones[j]; }) };
    })
  };
}

function submitQuiz_(user, attemptId, answers) {
  var cache = CacheService.getScriptCache(), raw = attemptId && cache.get('qz_' + attemptId);
  if (!raw) throw publicError_('La evaluación expiró. Iníciala de nuevo.', 'QUIZ_EXPIRED');
  var att = JSON.parse(raw), emp = cleanEmp_(user.NUMERO_EMPLEADO);
  if (att.emp !== emp) throw publicError_('Evaluación no válida.');
  cache.remove('qz_' + attemptId);

  var c = findCourse_(att.course);
  if (att.sig && att.sig !== quizSig_(c)) throw publicError_('La evaluación de este curso se actualizó. Iníciala de nuevo.', 'QUIZ_EXPIRED');
  if (!Array.isArray(answers) || answers.length !== att.map.length) throw publicError_('Responde todas las preguntas.');
  var correct = 0;
  att.map.forEach(function (m, i) {
    var shown = Number(answers[i]);
    if (shown >= 0 && shown < m.opts.length && m.opts[shown] === Number(c.quiz[m.q].correcta)) correct++;
  });
  var score = Math.round(correct / att.map.length * 100);
  var min = cfgNum_('CALIFICACION_MINIMA', 80), passed = score >= min;

  return withLock_(function () {
    var prog = progressMap_(emp)[c.id];
    var attempts = (prog ? prog.attempts : 0) + 1, best = Math.max(prog ? prog.best : 0, score);
    var certs = certificatesFor_(emp), cert = validCertificate_(certs, c.id), issued = null;
    if (passed && !cert) issued = issueCertificate_(user, c, score);
    var folio = issued ? issued.folio : (cert ? cert.folio : '');
    table_('EVALUACIONES', true).append({
      FECHA: new Date(), NUMERO_EMPLEADO: emp, NOMBRE: user.NOMBRE, CURSO_ID: c.id, CURSO: c.title,
      CALIFICACION: score, ESTADO: passed ? 'APROBADO' : 'NO APROBADO', INTENTO: attempts, FOLIO: passed ? folio : ''
    });
    saveProgress_(emp, c.id, { INTENTOS: attempts, MEJOR_CALIFICACION: best, ESTADO: (passed || cert) ? 'APROBADO' : 'EVALUACION' });
    log_(emp, 'EVALUACION', c.id + ' · ' + score + '%');
    return {
      ok: true, score: score, correct: correct, total: att.map.length, passed: passed, minScore: min,
      attempt: attempts, folio: passed ? folio : null, newCertificate: !!issued
    };
  });
}

function attemptsToday_(emp, courseId) {
  var tz = Session.getScriptTimeZone(), today = Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd');
  return table_('EVALUACIONES').rows.filter(function (r) {
    return cleanEmp_(r.NUMERO_EMPLEADO) === emp && String(r.CURSO_ID) === courseId &&
      r.FECHA instanceof Date && Utilities.formatDate(r.FECHA, tz, 'yyyy-MM-dd') === today;
  }).length;
}

/* ===================== Constancias ===================== */

function issueCertificate_(user, course, score) {
  var next = cfgNum_('FOLIO_CONSECUTIVO', 0) + 1;
  setCfg_('FOLIO_CONSECUTIVO', next);
  var now = new Date(), months = cfgNum_('VIGENCIA_MESES_CONSTANCIA', 12), expires = '';
  if (months > 0) { expires = new Date(now); expires.setMonth(expires.getMonth() + months); }
  var folio = 'CCE-' + now.getFullYear() + '-' + ('00000' + next).slice(-6);
  var code = verificationCode_();
  table_('CERTIFICADOS', true).append({
    FOLIO: folio, CODIGO: code, NUMERO_EMPLEADO: cleanEmp_(user.NUMERO_EMPLEADO), NOMBRE: user.NOMBRE, EMPRESA: user.EMPRESA,
    CURSO_ID: course.id, CURSO: course.title, HORAS: course.hours, CALIFICACION: score, FECHA_EMISION: now,
    FECHA_VENCIMIENTO: expires, ESTADO: 'VIGENTE', MOTIVO_REVOCACION: ''
  });
  log_(user.NUMERO_EMPLEADO, 'CONSTANCIA_EMITIDA', folio + ' · ' + course.id);
  return { folio: folio, code: code };
}

function myCertificates_(user) {
  var list = certificatesFor_(cleanEmp_(user.NUMERO_EMPLEADO)).sort(function (a, b) { return (b.issuedAt || '').localeCompare(a.issuedAt || ''); });
  return { ok: true, certificates: list };
}

function certificate_(user, folio) {
  var row = table_('CERTIFICADOS').find(function (r) { return String(r.FOLIO) === String(folio); });
  if (!row) throw publicError_('Constancia no encontrada.');
  var isAdmin = String(user.ROL).toUpperCase() === 'ADMIN';
  if (!isAdmin && cleanEmp_(row.NUMERO_EMPLEADO) !== cleanEmp_(user.NUMERO_EMPLEADO)) throw publicError_('Constancia no encontrada.');
  var status = certStatus_(row);
  if (status !== 'VIGENTE' && !isAdmin) throw publicError_('Esta constancia no está vigente (' + status.toLowerCase() + ').');
  return {
    ok: true,
    certificate: {
      folio: String(row.FOLIO), code: String(row.CODIGO), name: String(row.NOMBRE), employeeNumber: cleanEmp_(row.NUMERO_EMPLEADO),
      company: String(row.EMPRESA || ''), course: String(row.CURSO), hours: Number(row.HORAS) || 0, score: Number(row.CALIFICACION) || 0,
      issuedAt: iso_(row.FECHA_EMISION), expiresAt: iso_(row.FECHA_VENCIMIENTO), status: status,
      verifyUrl: String(cfg_('URL_PLATAFORMA', '')).replace(/\/?$/, '/') + '?verificar=' + encodeURIComponent(row.CODIGO),
      signers: [1, 2].map(function (n) {
        return {
          name: String(cfg_('FIRMANTE_' + n + '_NOMBRE', '')), role: String(cfg_('FIRMANTE_' + n + '_CARGO', '')),
          signature: signatureData_(String(cfg_('FIRMANTE_' + n + '_FIRMA_ID', '')))
        };
      })
    }
  };
}

function verifyCertificate_(code) {
  code = String(code || '').trim().toUpperCase();
  if (!/^[A-Z0-9-]{6,20}$/.test(code)) throw publicError_('Código de verificación no válido.');
  var cache = CacheService.getScriptCache();
  var n = Number(cache.get('vrf_rate') || 0);
  if (n > 300) throw publicError_('Demasiadas consultas. Intenta más tarde.');
  cache.put('vrf_rate', String(n + 1), 60);
  var row = table_('CERTIFICADOS').find(function (r) { return String(r.CODIGO).toUpperCase() === code; });
  if (!row) return { ok: true, found: false };
  return {
    ok: true, found: true,
    certificate: {
      folio: String(row.FOLIO), name: String(row.NOMBRE), company: String(row.EMPRESA || ''), course: String(row.CURSO),
      hours: Number(row.HORAS) || 0, issuedAt: iso_(row.FECHA_EMISION), expiresAt: iso_(row.FECHA_VENCIMIENTO), status: certStatus_(row)
    }
  };
}

function certStatus_(row) {
  var s = String(row.ESTADO || 'VIGENTE').toUpperCase();
  if (s === 'VIGENTE' && row.FECHA_VENCIMIENTO instanceof Date && row.FECHA_VENCIMIENTO < new Date()) return 'VENCIDA';
  return s;
}

function signatureData_(fileId) {
  if (!fileId) return null;
  var cache = CacheService.getScriptCache(), key = 'sig_' + fileId, hit = cache.get(key);
  if (hit) return hit;
  try {
    var blob = DriveApp.getFileById(fileId).getBlob();
    var data = 'data:' + blob.getContentType() + ';base64,' + Utilities.base64Encode(blob.getBytes());
    if (data.length < 95000) cache.put(key, data, 21600);
    return data;
  } catch (e) {
    console.warn('No se pudo leer la firma ' + fileId + ': ' + e);
    return null;
  }
}

/* ===================== Administración ===================== */

function complianceRows_() {
  var users = table_('USUARIOS').rows.filter(function (u) { return u.NUMERO_EMPLEADO && isYes_(u.ACTIVO); });
  var courses = allCourses_();
  var prog = {};
  table_('PROGRESO').rows.forEach(function (r) { prog[cleanEmp_(r.NUMERO_EMPLEADO) + '|' + r.CURSO_ID] = r; });
  var certs = {};
  table_('CERTIFICADOS').rows.forEach(function (r) {
    if (certStatus_(r) === 'VIGENTE') certs[cleanEmp_(r.NUMERO_EMPLEADO) + '|' + r.CURSO_ID] = r;
  });
  var now = new Date();
  return users.map(function (u) {
    var emp = cleanEmp_(u.NUMERO_EMPLEADO);
    var visible = courses.filter(function (c) { return courseVisible_(c, u); });
    var assign = assignmentsFor_(u, visible);
    var items = visible.filter(function (c) { return c.id in assign; }).map(function (c) {
      var p = prog[emp + '|' + c.id], cert = certs[emp + '|' + c.id], due = assign[c.id];
      var lessons = p ? String(p.LECCIONES || '').split(',').filter(String).length : 0;
      var status = cert ? 'APROBADO' : !p ? 'PENDIENTE' : lessons >= c.lessons.length ? 'EVALUACION' : 'EN_CURSO';
      return {
        courseId: c.id, course: c.title, area: c.area, hours: c.hours, status: status, score: p ? Number(p.MEJOR_CALIFICACION) || 0 : 0,
        attempts: p ? Number(p.INTENTOS) || 0 : 0, folio: cert ? String(cert.FOLIO) : '', issuedAt: cert ? iso_(cert.FECHA_EMISION) : '',
        dueDate: iso_(due), overdue: !cert && due instanceof Date && due < now,
        progress: c.lessons.length ? Math.round(Math.min(lessons, c.lessons.length) / c.lessons.length * 100) : 0
      };
    });
    var approved = items.filter(function (i) { return i.status === 'APROBADO'; }).length;
    return {
      employeeNumber: emp, name: String(u.NOMBRE), company: String(u.EMPRESA || ''), area: String(u.AREA || ''),
      position: String(u.PUESTO || ''), role: String(u.ROL || '').toUpperCase(), lastAccess: iso_(u.ULTIMO_ACCESO),
      pinStatus: u.PIN_HASH ? (isYes_(u.DEBE_CAMBIAR_PIN) ? 'TEMPORAL' : 'ACTIVO') : (String(u.PIN_INICIAL || '').trim() ? 'INICIAL' : 'SIN_PIN'),
      assigned: items.length, approved: approved, overdue: items.filter(function (i) { return i.overdue; }).length,
      compliance: items.length ? Math.round(approved / items.length * 100) : 100, items: items
    };
  });
}

function adminSummary_() {
  var rows = complianceRows_();
  var totalAssigned = 0, totalApproved = 0, overdue = 0, areas = {};
  rows.forEach(function (r) {
    totalAssigned += r.assigned; totalApproved += r.approved; overdue += r.overdue;
    var key = r.area || 'Sin área';
    areas[key] = areas[key] || { area: key, people: 0, assigned: 0, approved: 0 };
    areas[key].people++; areas[key].assigned += r.assigned; areas[key].approved += r.approved;
  });
  var since = new Date(Date.now() - 30 * 864e5);
  var evals = table_('EVALUACIONES').rows.filter(function (e) { return e.FECHA instanceof Date && e.FECHA >= since; });
  var passed = evals.filter(function (e) { return String(e.ESTADO).toUpperCase() === 'APROBADO'; }).length;
  var recent = table_('EVALUACIONES').rows.filter(function (e) { return e.FECHA instanceof Date; })
    .sort(function (a, b) { return b.FECHA - a.FECHA; }).slice(0, 12).map(function (e) {
      return { date: iso_(e.FECHA), employeeNumber: cleanEmp_(e.NUMERO_EMPLEADO), name: String(e.NOMBRE), course: String(e.CURSO), score: Number(e.CALIFICACION), status: String(e.ESTADO) };
    });
  var certCount = table_('CERTIFICADOS').rows.filter(function (r) { return certStatus_(r) === 'VIGENTE'; }).length;
  return {
    ok: true,
    stats: {
      users: rows.length, courses: allCourses_().length, certificates: certCount,
      compliance: totalAssigned ? Math.round(totalApproved / totalAssigned * 100) : 100, overdue: overdue,
      evaluations30: evals.length, passRate30: evals.length ? Math.round(passed / evals.length * 100) : 0,
      withoutPin: rows.filter(function (r) { return r.pinStatus === 'SIN_PIN'; }).length
    },
    areas: Object.keys(areas).map(function (k) {
      var a = areas[k]; a.compliance = a.assigned ? Math.round(a.approved / a.assigned * 100) : 100; return a;
    }).sort(function (a, b) { return a.compliance - b.compliance; }),
    recent: recent,
    courses: allCourses_().map(function (c) { return { id: c.id, title: c.title }; })
  };
}

function adminUsers_(query) {
  var q = normalize_(query);
  var rows = complianceRows_().filter(function (r) {
    return !q || normalize_(r.name + ' ' + r.employeeNumber + ' ' + r.area + ' ' + r.position + ' ' + r.company).indexOf(q) >= 0;
  });
  return {
    ok: true, total: rows.length,
    users: rows.slice(0, 100).map(function (r) { var o = {}; Object.keys(r).forEach(function (k) { if (k !== 'items') o[k] = r[k]; }); return o; })
  };
}

function adminUser_(employeeNumber) {
  var emp = cleanEmp_(employeeNumber);
  var row = complianceRows_().filter(function (r) { return r.employeeNumber === emp; })[0];
  if (!row) throw publicError_('Colaborador no encontrado o inactivo.');
  row.certificates = certificatesFor_(emp);
  return { ok: true, user: row };
}

function adminResetPin_(admin, employeeNumber) {
  var emp = cleanEmp_(employeeNumber);
  var pin;
  do { pin = String(100000 + Math.floor(Math.random() * 900000)); } while (/^(\d)\1+$/.test(pin));
  withLock_(function () {
    var t = table_('USUARIOS');
    var row = t.find(function (r) { return cleanEmp_(r.NUMERO_EMPLEADO) === emp; });
    if (!row) throw publicError_('Colaborador no encontrado.');
    t.update(row, { PIN_INICIAL: pin, PIN_HASH: '', PIN_SALT: '', DEBE_CAMBIAR_PIN: 'SI' });
  });
  CacheService.getScriptCache().removeAll(['lock_' + emp, 'fail_' + emp]);
  log_(admin.NUMERO_EMPLEADO, 'PIN_TEMPORAL', 'Para ' + emp);
  return { ok: true, temporaryPin: pin };
}

function adminRevoke_(admin, folio, reason) {
  reason = String(reason || '').trim();
  if (!reason) throw publicError_('Indica el motivo de la revocación.');
  return withLock_(function () {
    var t = table_('CERTIFICADOS');
    var row = t.find(function (r) { return String(r.FOLIO) === String(folio); });
    if (!row) throw publicError_('Constancia no encontrada.');
    t.update(row, { ESTADO: 'REVOCADA', MOTIVO_REVOCACION: reason });
    saveProgress_(cleanEmp_(row.NUMERO_EMPLEADO), String(row.CURSO_ID), { ESTADO: 'EVALUACION' });
    log_(admin.NUMERO_EMPLEADO, 'CONSTANCIA_REVOCADA', folio + ' · ' + reason);
    return { ok: true };
  });
}

function adminAssign_(admin, b) {
  var type = String(b.type || '').toUpperCase();
  if (['TODOS', 'EMPLEADO', 'AREA', 'PUESTO', 'EMPRESA'].indexOf(type) < 0) throw publicError_('Tipo de asignación no válido.');
  var value = String(b.value || '').trim();
  if (type !== 'TODOS' && !value) throw publicError_('Indica a quién se asigna el curso.');
  var course = findCourse_(b.courseId);
  var due = b.dueDate ? new Date(b.dueDate + 'T23:59:59') : '';
  if (due && isNaN(due)) throw publicError_('Fecha límite no válida.');
  withLock_(function () {
    table_('ASIGNACIONES', true).append({
      TIPO: type, VALOR: type === 'EMPLEADO' ? cleanEmp_(value) : value, CURSO_ID: course.id, FECHA_LIMITE: due,
      ASIGNADO_POR: cleanEmp_(admin.NUMERO_EMPLEADO), FECHA_ASIGNACION: new Date()
    });
  });
  log_(admin.NUMERO_EMPLEADO, 'ASIGNACION', type + ':' + value + ' → ' + course.id);
  return { ok: true };
}

/* ---------- Editor de cursos ---------- */

function adminCourses_() {
  var courses = allCourses_(true).map(function (c) {
    return {
      id: c.id, title: c.title, area: c.area, hours: c.hours, required: c.required, companies: c.companies, order: c.order,
      description: c.description, active: c.active, lessons: c.lessons, quiz: c.quiz
    };
  });
  var areas = {}, companies = {};
  var add = function (map, v) { v = String(v || '').trim(); if (v && !map[normalize_(v)]) map[normalize_(v)] = v; };
  courses.forEach(function (c) { add(areas, c.area); c.companies.forEach(function (x) { add(companies, x); }); });
  table_('USUARIOS').rows.forEach(function (u) { add(areas, u.AREA); add(companies, u.EMPRESA); });
  var values = function (m) { return Object.keys(m).map(function (k) { return m[k]; }).sort(); };
  return { ok: true, courses: courses, areas: values(areas), companies: values(companies) };
}

function cleanText_(v, max) { return String(v == null ? '' : v).replace(/\s+$/g, '').replace(/^\s+/g, '').slice(0, max || 2000); }

function validateCourse_(c) {
  if (!c || typeof c !== 'object') throw publicError_('Datos del curso no válidos.');
  var id = String(c.id || '').trim().toLowerCase();
  if (!/^[a-z0-9][a-z0-9-]{1,39}$/.test(id)) throw publicError_('La clave del curso debe tener de 2 a 40 caracteres: letras minúsculas, números y guiones.');
  var title = cleanText_(c.title, 160);
  if (title.length < 3) throw publicError_('Escribe el título del curso.');
  var hours = Number(c.hours);
  if (!(hours > 0 && hours <= 200)) throw publicError_('Indica la duración en horas (por ejemplo 1 o 0.5).');
  if (!Array.isArray(c.lessons) || !c.lessons.length) throw publicError_('Agrega al menos un módulo.');
  if (c.lessons.length > 40) throw publicError_('El curso no puede tener más de 40 módulos.');
  var lessons = c.lessons.map(function (l, i) {
    var n = 'Módulo ' + (i + 1) + ': ';
    var t = cleanText_(l.titulo, 160), text = cleanText_(l.texto, 6000), video = cleanText_(l.video, 500);
    if (!t) throw publicError_(n + 'escribe el título.');
    if (!text && !video) throw publicError_(n + 'agrega el texto o un video.');
    if (video && !/^(https:\/\/[^\s"'<>]+|[A-Za-z0-9._\/-]+)\.mp4(\?[^\s"'<>]*)?$/i.test(video)) {
      throw publicError_(n + 'el video debe ser un archivo .mp4 del repositorio (ej. curso.mp4) o una dirección https que termine en .mp4.');
    }
    var min = Math.round(Number(l.segundosMinimos) || 0);
    if (min < 0 || min > 7200) throw publicError_(n + 'el tiempo mínimo debe estar entre 0 y 7200 segundos.');
    var out = { titulo: t, duracion: cleanText_(l.duracion, 30) || (video ? 'Video' : 'Lectura'), texto: text, segundosMinimos: min };
    if (video) {
      out.video = video;
      if (Array.isArray(l.subtitulos) && l.subtitulos.length) out.subtitulos = l.subtitulos.filter(function (x) {
        return Array.isArray(x) && x.length === 3 && isFinite(x[0]) && isFinite(x[1]);
      }).map(function (x) { return [Number(x[0]), Number(x[1]), cleanText_(x[2], 400)]; });
    }
    return out;
  });
  if (!Array.isArray(c.quiz) || !c.quiz.length) throw publicError_('Agrega al menos una pregunta a la evaluación.');
  if (c.quiz.length > 50) throw publicError_('La evaluación no puede tener más de 50 preguntas.');
  var quiz = c.quiz.map(function (q, i) {
    var n = 'Pregunta ' + (i + 1) + ': ';
    var text = cleanText_(q.pregunta, 600);
    if (!text) throw publicError_(n + 'escribe el enunciado.');
    if (!Array.isArray(q.opciones) || q.opciones.length < 2 || q.opciones.length > 6) throw publicError_(n + 'debe tener de 2 a 6 opciones.');
    var opts = q.opciones.map(function (o, k) {
      var t = cleanText_(o, 300);
      if (!t) throw publicError_(n + 'la opción ' + String.fromCharCode(65 + k) + ' está vacía.');
      return t;
    });
    var seen = {};
    opts.forEach(function (o) { var k = normalize_(o); if (seen[k]) throw publicError_(n + 'hay opciones repetidas.'); seen[k] = 1; });
    var correct = Number(q.correcta);
    if (!(correct >= 0 && correct < opts.length && Math.floor(correct) === correct)) throw publicError_(n + 'marca la respuesta correcta.');
    return { pregunta: text, opciones: opts, correcta: correct };
  });
  var lessonsJson = JSON.stringify(lessons), quizJson = JSON.stringify(quiz);
  if (lessonsJson.length > 49000) throw publicError_('El contenido de los módulos es demasiado largo para una celda. Divide el curso o reduce el texto.');
  if (quizJson.length > 49000) throw publicError_('La evaluación es demasiado larga para una celda. Reduce el número de preguntas.');
  return {
    ID: id, TITULO: title, AREA: cleanText_(c.area, 80), HORAS: hours, OBLIGATORIO: c.required ? 'SI' : 'NO',
    EMPRESAS: (Array.isArray(c.companies) ? c.companies : splitList_(c.companies)).map(function (x) { return cleanText_(x, 80); }).filter(String).join(', '),
    ACTIVO: c.active === false ? 'NO' : 'SI', ORDEN: Math.max(1, Math.round(Number(c.order) || 999)),
    DESCRIPCION: cleanText_(c.description, 600), LECCIONES_JSON: lessonsJson, EVALUACION_JSON: quizJson
  };
}

function adminSaveCourse_(admin, course, isNew) {
  var values = validateCourse_(course);
  withLock_(function () {
    var t = table_('CURSOS', true);
    var row = t.find(function (r) { return String(r.ID || '').trim().toLowerCase() === values.ID; });
    if (isNew && row) throw publicError_('Ya existe un curso con la clave "' + values.ID + '". Elige otra.');
    if (!isNew && !row) throw publicError_('El curso que intentas editar ya no existe.');
    if (row) t.update(row, values); else t.append(values);
  });
  log_(admin.NUMERO_EMPLEADO, isNew ? 'CURSO_CREADO' : 'CURSO_EDITADO', values.ID);
  return { ok: true, id: values.ID };
}

function adminSetCourseActive_(admin, courseId, active) {
  withLock_(function () {
    var t = table_('CURSOS', true);
    var row = t.find(function (r) { return String(r.ID || '').trim() === String(courseId); });
    if (!row) throw publicError_('Curso no encontrado.');
    t.update(row, { ACTIVO: active ? 'SI' : 'NO' });
  });
  log_(admin.NUMERO_EMPLEADO, active ? 'CURSO_ACTIVADO' : 'CURSO_DESACTIVADO', courseId);
  return { ok: true };
}

function adminReport_() {
  var out = [];
  complianceRows_().forEach(function (r) {
    r.items.forEach(function (i) {
      out.push({
        employeeNumber: r.employeeNumber, name: r.name, company: r.company, area: r.area, position: r.position,
        course: i.course, status: i.status, score: i.score, attempts: i.attempts, folio: i.folio,
        issuedAt: i.issuedAt, dueDate: i.dueDate, overdue: i.overdue
      });
    });
  });
  return { ok: true, rows: out };
}

/* ===================== Hoja de cálculo ===================== */

var TABLE_CACHE_ = {};

function spreadsheet_() {
  var id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  return id ? SpreadsheetApp.openById(id) : SpreadsheetApp.getActiveSpreadsheet();
}

/** Lee una hoja como objetos por encabezado. fresh=true ignora el caché de la petición. */
function table_(name, fresh) {
  if (!fresh && TABLE_CACHE_[name]) return TABLE_CACHE_[name];
  var sh = spreadsheet_().getSheetByName(name);
  if (!sh) throw new Error('Falta la hoja ' + name + '. Ejecuta setup().');
  var values = sh.getDataRange().getValues();
  var headers = (values[0] || []).map(function (h) { return String(h).trim().toUpperCase(); });
  var rows = values.slice(1).map(function (v, i) {
    var o = { _row: i + 2 };
    headers.forEach(function (h, j) { if (h) o[h] = v[j]; });
    return o;
  });
  var t = {
    sheet: sh, headers: headers, rows: rows,
    find: function (fn) { return rows.filter(fn)[0] || null; },
    update: function (row, values) {
      Object.keys(values).forEach(function (k) {
        var col = headers.indexOf(k);
        if (col < 0) throw new Error('Columna ' + k + ' no existe en ' + name);
        sh.getRange(row._row, col + 1).setValue(values[k]);
        row[k] = values[k];
      });
    },
    append: function (obj) {
      var line = headers.map(function (h) { return h in obj ? obj[h] : ''; });
      sh.appendRow(line);
      var o = { _row: sh.getLastRow() }; headers.forEach(function (h, j) { o[h] = line[j]; });
      rows.push(o);
      return o;
    }
  };
  TABLE_CACHE_[name] = t;
  return t;
}

function findUser_(emp) {
  emp = cleanEmp_(emp);
  return table_('USUARIOS').find(function (r) { return cleanEmp_(r.NUMERO_EMPLEADO) === emp; });
}

var CONFIG_CACHE_ = null;
function cfg_(key, fallback) {
  if (!CONFIG_CACHE_) {
    CONFIG_CACHE_ = {};
    table_('CONFIGURACION').rows.forEach(function (r) { if (r.CLAVE) CONFIG_CACHE_[String(r.CLAVE).trim()] = r.VALOR; });
  }
  var v = CONFIG_CACHE_[key];
  return v === undefined || v === '' ? fallback : v;
}
function cfgNum_(key, fallback) { var n = Number(cfg_(key, fallback)); return isNaN(n) ? fallback : n; }
function setCfg_(key, value) {
  var t = table_('CONFIGURACION', true);
  var row = t.find(function (r) { return String(r.CLAVE).trim() === key; });
  if (row) t.update(row, { VALOR: value }); else t.append({ CLAVE: key, VALOR: value, DESCRIPCION: '' });
  if (CONFIG_CACHE_) CONFIG_CACHE_[key] = value;
}

function log_(emp, action, detail) {
  try { table_('BITACORA', true).append({ FECHA: new Date(), NUMERO_EMPLEADO: cleanEmp_(emp), ACCION: action, DETALLE: detail || '' }); }
  catch (e) { console.warn('Bitácora: ' + e); }
}

var LOCK_DEPTH_ = 0;
function withLock_(fn) {
  if (LOCK_DEPTH_ > 0) return fn();
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(20000)) throw publicError_('El sistema está ocupado. Intenta en unos segundos.');
  LOCK_DEPTH_++;
  try { return fn(); } finally { LOCK_DEPTH_--; lock.releaseLock(); }
}

/* ===================== Utilidades ===================== */

function cleanEmp_(v) { return String(v == null ? '' : v).trim().replace(/\.0+$/, ''); }
function isYes_(v) { return v === true || ['SI', 'SÍ', 'TRUE', 'VERDADERO', '1', 'X', 'ACTIVO'].indexOf(String(v).trim().toUpperCase()) >= 0; }
function normalize_(v) { return String(v == null ? '' : v).normalize('NFD').replace(/[̀-ͯ]/g, '').trim().toLowerCase(); }
function splitList_(v) { return String(v || '').split(/[,;|]/).map(function (x) { return x.trim(); }).filter(String); }
function parseJson_(v, fallback) { try { return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; } }
function iso_(d) { return d instanceof Date && !isNaN(d) ? d.toISOString() : null; }
function firstName_(n) { return String(n || '').trim().split(/\s+/)[0] || ''; }
function randomToken_() { return (Utilities.getUuid() + Utilities.getUuid()).replace(/-/g, ''); }
function verificationCode_() {
  var alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', out = '';
  var src = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, Utilities.getUuid() + Date.now());
  for (var i = 0; i < 10; i++) out += alphabet[(src[i] + 256) % alphabet.length];
  return out.slice(0, 5) + '-' + out.slice(5);
}
function shuffle_(arr) {
  for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; }
  return arr;
}

/* ===================== Instalación y mantenimiento ===================== */

/**
 * Ejecutar UNA vez desde el editor. Crea (o completa) las hojas, la configuración,
 * el catálogo inicial y la clave secreta para los PIN. No borra datos existentes.
 */
function setup() {
  var props = PropertiesService.getScriptProperties();
  var ss = null;
  try { ss = spreadsheet_(); } catch (e) { ss = null; }
  if (!ss) {
    ss = SpreadsheetApp.create('CCE 2.0 · Base de datos');
    props.setProperty('SPREADSHEET_ID', ss.getId());
  }
  if (!props.getProperty('PIN_PEPPER')) props.setProperty('PIN_PEPPER', randomToken_());

  Object.keys(SHEETS).forEach(function (name) {
    var sh = ss.getSheetByName(name) || ss.insertSheet(name);
    var wanted = SHEETS[name];
    var lastCol = Math.max(sh.getLastColumn(), 1);
    var current = sh.getRange(1, 1, 1, lastCol).getValues()[0].map(function (h) { return String(h).trim().toUpperCase(); }).filter(String);
    var missing = wanted.filter(function (h) { return current.indexOf(h) < 0; });
    if (missing.length) sh.getRange(1, current.length + 1, 1, missing.length).setValues([missing]);
    var total = current.length + missing.length;
    sh.getRange(1, 1, 1, total).setFontWeight('bold').setBackground('#002B49').setFontColor('#FFFFFF');
    sh.setFrozenRows(1);
  });
  var first = ss.getSheetByName('Hoja 1') || ss.getSheetByName('Sheet1');
  if (first && first.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(first);

  TABLE_CACHE_ = {}; CONFIG_CACHE_ = null;
  var conf = table_('CONFIGURACION', true);
  DEFAULT_CONFIG.forEach(function (c) {
    if (!conf.find(function (r) { return String(r.CLAVE).trim() === c[0]; })) conf.append({ CLAVE: c[0], VALOR: c[1], DESCRIPCION: c[2] });
  });
  syncCatalog_(false);

  var protect = ['PIN_HASH', 'PIN_SALT'];
  var users = ss.getSheetByName('USUARIOS'), uh = table_('USUARIOS', true).headers;
  protect.forEach(function (h) { var col = uh.indexOf(h) + 1; if (col) users.hideColumns(col); });
  console.log('CCE 2.0 listo. Hoja: ' + ss.getUrl());
  return ss.getUrl();
}

/** Agrega al catálogo los cursos que falten. Con overwrite=true reemplaza contenido y evaluaciones. */
function syncCatalog_(overwrite) {
  var t = table_('CURSOS', true);
  CCE_CATALOG.forEach(function (c) {
    var values = {
      ID: c.id, TITULO: c.titulo, AREA: c.area, HORAS: c.horas, OBLIGATORIO: c.obligatorio ? 'SI' : 'NO', EMPRESAS: '',
      ACTIVO: 'SI', ORDEN: c.orden, DESCRIPCION: c.descripcion,
      LECCIONES_JSON: JSON.stringify(c.lecciones), EVALUACION_JSON: JSON.stringify(c.evaluacion)
    };
    var row = t.find(function (r) { return String(r.ID).trim() === c.id; });
    if (!row) t.append(values);
    else if (overwrite) t.update(row, { TITULO: values.TITULO, DESCRIPCION: values.DESCRIPCION, LECCIONES_JSON: values.LECCIONES_JSON, EVALUACION_JSON: values.EVALUACION_JSON });
  });
}

/** Reemplaza contenido y evaluaciones del catálogo con la versión de Catalogo.gs. */
function actualizarCatalogo() { syncCatalog_(true); }

/** Menú en la hoja (si el script está vinculado a ella). */
function onOpen() {
  try {
    SpreadsheetApp.getUi().createMenu('CCE 2.0')
      .addItem('Generar PIN temporal (fila seleccionada)', 'menuPinTemporal')
      .addItem('Actualizar catálogo desde Catalogo.gs', 'actualizarCatalogo')
      .addToUi();
  } catch (e) { /* sin interfaz */ }
}

function menuPinTemporal() {
  var ui = SpreadsheetApp.getUi(), sh = SpreadsheetApp.getActiveSheet();
  if (sh.getName() !== 'USUARIOS') { ui.alert('Selecciona una fila en la hoja USUARIOS.'); return; }
  var row = sh.getActiveRange().getRow();
  if (row < 2) { ui.alert('Selecciona la fila de un colaborador.'); return; }
  var emp = cleanEmp_(sh.getRange(row, table_('USUARIOS').headers.indexOf('NUMERO_EMPLEADO') + 1).getValue());
  var res = adminResetPin_({ NUMERO_EMPLEADO: 'MENU' }, emp);
  ui.alert('PIN temporal para ' + emp + ': ' + res.temporaryPin + '\n\nEl colaborador deberá cambiarlo al ingresar.');
}
