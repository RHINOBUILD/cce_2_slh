/**
 * CCE 2.0 · Catálogo inicial de cursos.
 * setup() lo copia a la hoja CURSOS. Después, el catálogo se administra en la hoja.
 * Para reemplazar contenido y evaluaciones con esta versión ejecuta actualizarCatalogo().
 * "correcta" es el índice (desde 0) de la opción correcta. Nunca se envía al navegador.
 */
var CCE_CATALOG = [
  {
    "id": "aesp1",
    "titulo": "AESP 1: Identificación correcta del paciente",
    "area": "Calidad y Seguridad",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Aplicación de dos identificadores durante todos los procesos asistenciales.",
    "orden": 1,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Protocolo completo y situaciones especiales",
        "duracion": "3:25 min",
        "texto": "Repaso completo de la AESP 1: dos identificadores, verificación verbal, momentos críticos, pacientes desconocidos, inconscientes, recién nacidos y fallecimientos.",
        "video": "aesp1-identificacion-protocolos.mp4",
        "segundosMinimos": 190,
        "subtitulos": [
          [
            0.3,
            6.7,
            "Bienvenida al curso de la Acción Esencial para la Seguridad del Paciente número uno: identificación correcta del paciente."
          ],
          [
            7.3,
            13.6,
            "El modelo MOCEBPASS establece los lineamientos para certificar al hospital ante el Consejo de Salubridad General."
          ],
          [
            13.6,
            21.9,
            "Es un esfuerzo multidisciplinario. Identificar al paciente es tarea de todas las áreas, no solo de enfermería o del área médica."
          ],
          [
            22.6,
            29.1,
            "El objetivo es contar con un proceso confiable que prevenga errores, eventos adversos y eventos centinela."
          ],
          [
            29.1,
            35.7,
            "Es obligatorio para todo el personal, clínico y no clínico, que tiene contacto con el paciente."
          ],
          [
            36.3,
            45.4,
            "Usa siempre dos identificadores: el nombre completo, sin abreviaturas, y la fecha de nacimiento con día, mes y año."
          ],
          [
            45.4,
            48.7,
            "Ambos datos funcionan como barreras de seguridad."
          ],
          [
            49.3,
            56.6,
            "Con pacientes internacionales el formato de fecha puede cambiar. Confirma el mes en palabras."
          ],
          [
            56.6,
            64.5,
            "Los datos iniciales pueden anotarse con lápiz. Cuando Admisión los confirme, se registran con bolígrafo."
          ],
          [
            65.0,
            72.4,
            "Al verificar, no sugieras el nombre. Pide al paciente que diga su nombre completo y su fecha de nacimiento."
          ],
          [
            72.4,
            76.7,
            "Después, compara sus respuestas con el brazalete y con el expediente."
          ],
          [
            77.3,
            81.3,
            "En recién nacidos, coloca el brazalete en la muñeca derecha y en el tobillo izquierdo."
          ],
          [
            81.3,
            85.5,
            "Si no hay identificación oficial, puede usarse el acta de nacimiento o la cartilla de vacunación."
          ],
          [
            85.5,
            88.5,
            "El brazalete se retira al egreso y nunca sale del hospital."
          ],
          [
            89.0,
            96.7,
            "Verifica la identidad antes de administrar medicamentos, transfundir, tomar muestras de laboratorio y realizar procedimientos invasivos."
          ],
          [
            96.7,
            102.9,
            "La entrega de paciente entre turnos se hace siempre dentro de la habitación."
          ],
          [
            103.5,
            117.7,
            "Nutrición, fisioterapia e intendencia también corroboran la identidad antes de actuar. Así se evitan reacciones alérgicas y errores de atención."
          ],
          [
            118.3,
            125.0,
            "Antes de un procedimiento invasivo o una cirugía, confirma que el paciente porte su brazalete."
          ],
          [
            125.0,
            130.4,
            "El equipo de trabajo valida la identidad en conjunto antes de iniciar."
          ],
          [
            131.1,
            137.3,
            "Ante un paciente desconocido, por ejemplo en un Código Naranja, asigna una secuencia: Desconocido uno, Desconocido dos."
          ],
          [
            137.3,
            142.4,
            "Usa la fecha y hora de ingreso como identificadores temporales hasta obtener sus documentos."
          ],
          [
            143.1,
            150.0,
            "Si el paciente está inconsciente o intubado, coloca su identificación en la ficha de la cabecera de la cama."
          ],
          [
            150.0,
            154.4,
            "Esa ficha es válida para la doble verificación entre médicos y enfermería."
          ],
          [
            155.1,
            160.6,
            "En caso de fallecimiento, retira el brazalete y coloca la identificación sobre el tórax."
          ],
          [
            160.6,
            165.7,
            "Debe incluir nombre completo, fecha de nacimiento, y fecha y hora de defunción."
          ],
          [
            166.3,
            177.7,
            "Todo dispositivo, sonda o solución lleva una etiqueta con fecha, hora e iniciales de quien lo instaló."
          ],
          [
            178.3,
            189.2,
            "Como compromisos, todas las áreas actualizarán sus formatos de registro, el almacén garantizará existencias de brazaletes y Admisión identificará a los visitantes."
          ],
          [
            189.8,
            201.4,
            "Recuerda: nombre completo y fecha de nacimiento, siempre, antes de actuar. Ante cualquier discrepancia, detén el proceso y aclara."
          ],
          [
            201.4,
            205.1,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Guía rápida AESP 1 (PDF)",
            "url": "materiales/aesp1-guia-rapida.pdf"
          },
          {
            "nombre": "Presentación AESP 1",
            "url": "presentaciones/aesp1-identificacion-correcta-paciente.html"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Cuáles son los dos identificadores obligatorios del paciente?",
        "opciones": [
          "Nombre completo y fecha de nacimiento",
          "Nombre y número de cama",
          "Número de expediente y número de habitación",
          "Nombre y diagnóstico"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cómo debe escribirse el nombre del paciente en sus registros e identificadores?",
        "opciones": [
          "Solo el nombre y el primer apellido",
          "Completo y sin abreviaturas",
          "Con iniciales para ahorrar espacio",
          "Como lo indique el familiar"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuál es la forma correcta de verificar verbalmente la identidad del paciente?",
        "opciones": [
          "Preguntar: «¿Usted es el señor Juan Pérez?»",
          "Preguntar: «¿Usted es el paciente de la cama 5?»",
          "Pedirle que diga su nombre completo y su fecha de nacimiento",
          "Leer el brazalete sin hablar con el paciente"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿El número de cama o de habitación puede usarse como identificador?",
        "opciones": [
          "Sí, si el paciente está dormido",
          "Sí, durante la noche",
          "Solo en urgencias",
          "No, nunca identifica al paciente"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Un paciente internacional anota su fecha de nacimiento como 04/03/1985. ¿Qué debes hacer?",
        "opciones": [
          "Confirmar el mes en palabras con el paciente o con su documento",
          "Registrarla como 4 de marzo, formato mexicano",
          "Registrarla como 3 de abril, formato de Estados Unidos",
          "Dejar la fecha en blanco hasta su egreso"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cómo se registran los datos iniciales del paciente mientras Admisión los confirma?",
        "opciones": [
          "Siempre con bolígrafo",
          "Con lápiz; una vez confirmados, con bolígrafo",
          "Con marcador permanente",
          "Solo en el sistema, nunca en papel"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Dónde se colocan los brazaletes de identificación de un recién nacido?",
        "opciones": [
          "Muñeca izquierda y tobillo derecho",
          "Solo en el tobillo",
          "Muñeca derecha y tobillo izquierdo",
          "En la cuna, no en el bebé"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Dónde debe realizarse la entrega de paciente entre turnos?",
        "opciones": [
          "En la central de enfermería",
          "Por teléfono",
          "En el pasillo",
          "Dentro de la habitación del paciente"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿En cuál de estos momentos es obligatorio verificar la identidad del paciente?",
        "opciones": [
          "Antes de una transfusión",
          "Al limpiar el pasillo",
          "Al reponer insumos del almacén",
          "Al registrar la asistencia del personal"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Durante un Código Naranja llega un paciente sin documentos y sin poder responder. ¿Cómo se identifica?",
        "opciones": [
          "Con un nombre ficticio elegido por el personal",
          "Como Desconocido 1, 2…, con la fecha y hora de ingreso como identificadores temporales",
          "Solo con el número de cama",
          "No se identifica hasta que llegue un familiar"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cómo se identifica a un paciente inconsciente o intubado?",
        "opciones": [
          "Se le pregunta su nombre de todos modos",
          "No requiere identificación",
          "Con la ficha de identificación en la cabecera de la cama, válida para la doble verificación entre médicos y enfermería",
          "Por su diagnóstico de ingreso"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En caso de fallecimiento, ¿qué se hace con la identificación?",
        "opciones": [
          "Se deja el brazalete y no se agrega nada",
          "Se coloca una etiqueta en el pie solo con el nombre",
          "Se anota el número de cama en la sábana",
          "Se retira el brazalete y se coloca la identificación sobre el tórax con nombre, fecha de nacimiento, y fecha y hora de defunción"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué pasa con el brazalete cuando el paciente egresa?",
        "opciones": [
          "Se retira y nunca sale del hospital",
          "Se le entrega al paciente",
          "Se deja puesto hasta su domicilio",
          "Se reutiliza con el siguiente paciente"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué datos debe llevar la etiqueta de una sonda, catéter o solución?",
        "opciones": [
          "Solo el nombre del paciente",
          "Fecha, hora e iniciales de quien la instaló",
          "Solo la fecha de instalación",
          "El diagnóstico del paciente"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Quién es responsable de identificar correctamente al paciente?",
        "opciones": [
          "Solo enfermería",
          "Solo el personal médico",
          "Todo el personal, clínico y no clínico, que interactúa con el paciente",
          "Solo Admisión"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si los datos del paciente no coinciden con el brazalete o el documento, debes:",
        "opciones": [
          "Continuar y corregir después",
          "Cambiar el brazalete sin verificar",
          "Avisar al final del turno",
          "Detener el proceso y aclarar la discrepancia"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal clínico y de apoyo que tiene contacto con pacientes.",
    "nivel": "Básico",
    "objetivos": [
      "Usar dos identificadores en todo proceso asistencial.",
      "Confirmar la identidad con preguntas abiertas.",
      "Detener el proceso ante cualquier discrepancia."
    ]
  },
  {
    "id": "aesp2",
    "titulo": "AESP 2: Comunicación efectiva",
    "area": "Calidad y Seguridad",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Comunicación estructurada, órdenes verbales y transferencia segura de información.",
    "orden": 2,
    "lecciones": [
      {
        "titulo": "Comunicación efectiva mediante SAER",
        "duracion": "0:56 min",
        "texto": "Organiza los datos clínicos como Situación, Antecedentes, Evaluación y Recomendación. En órdenes verbales: escucha, escribe, lee y confirma.",
        "video": "comunicacion-saer.mp4",
        "segundosMinimos": 50,
        "materiales": [
          {
            "nombre": "Guía rápida AESP 2 (PDF)",
            "url": "materiales/aesp2-guia-rapida.pdf"
          },
          {
            "nombre": "Presentación AESP 2",
            "url": "presentaciones/aesp2-comunicacion-efectiva.html"
          }
        ],
        "subtitulos": [
          [
            0,
            8,
            "Una comunicación clara y estructurada reduce omisiones y fortalece la seguridad del paciente."
          ],
          [
            8,
            16,
            "Situación: identifica al paciente y explica brevemente qué ocurre en este momento."
          ],
          [
            16,
            24,
            "Antecedentes: comparte diagnóstico, tratamiento, alergias y datos clínicos relevantes."
          ],
          [
            24,
            32,
            "Evaluación: describe los cambios observados, los resultados y aquello que te preocupa."
          ],
          [
            32,
            40,
            "Recomendación: expresa la acción que necesitas y confirma quién dará seguimiento."
          ],
          [
            40,
            48,
            "En órdenes verbales o telefónicas: escucha, escribe, lee en voz alta y confirma."
          ],
          [
            48,
            55.9,
            "Pregunta, aclara y confirma que el mensaje fue comprendido. Continúa con la evaluación."
          ]
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Cuál es el objetivo de la AESP 2?",
        "opciones": [
          "Que la información entre profesionales sea correcta, oportuna y completa",
          "Reducir el tiempo de las entregas de turno",
          "Sustituir las órdenes escritas por órdenes verbales",
          "Que solo los médicos den indicaciones"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es el orden correcto ante una orden verbal o telefónica?",
        "opciones": [
          "Escribir, escuchar, confirmar y leer",
          "Escuchar, escribir, leer y confirmar",
          "Escuchar, ejecutar y escribir después",
          "Leer, escuchar, escribir y confirmar"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿En qué momento se ejecuta una orden verbal?",
        "opciones": [
          "En cuanto se escucha",
          "Al terminar el turno",
          "Cuando el médico confirma que lo leído en voz alta es correcto",
          "Cuando la firma el jefe de servicio"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué datos se registran en la bitácora de comunicación efectiva?",
        "opciones": [
          "Solo la indicación y la hora",
          "El número de cama y el diagnóstico",
          "Únicamente el nombre del médico",
          "Fecha, hora, nombre completo y fecha de nacimiento del paciente, y nombre y cargo de quien emite la orden"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si la orden verbal se da durante una urgencia, ¿dónde se registra?",
        "opciones": [
          "En el formato específico de la urgencia",
          "En una hoja suelta",
          "No se registra",
          "En el chat del servicio"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Quién debe firmar la bitácora para validar una orden verbal?",
        "opciones": [
          "El paciente",
          "El médico que emitió la indicación",
          "Cualquier persona del turno",
          "El personal de admisión"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuál es el plazo para firmar la bitácora?",
        "opciones": [
          "Una semana",
          "Al cierre del mes",
          "24 horas en días hábiles y 72 horas en fin de semana",
          "48 horas siempre"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si el médico tratante no está, ¿quién registra y firma la indicación?",
        "opciones": [
          "El personal de enfermería",
          "Nadie, se espera al médico tratante",
          "El familiar del paciente",
          "El jefe de servicio o el médico de guardia"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Quién transcribe las indicaciones de la bitácora a la hoja de indicaciones médicas?",
        "opciones": [
          "El médico de guardia",
          "El personal de archivo clínico",
          "El paciente",
          "El personal de laboratorio"
        ],
        "correcta": 0
      },
      {
        "pregunta": "En la técnica SBAR, ¿qué significa la R?",
        "opciones": [
          "Resultado",
          "Recomendación",
          "Registro",
          "Riesgo"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué técnica se recomienda a los paramédicos para la entrega del paciente?",
        "opciones": [
          "ABCDE",
          "5 correctos",
          "SAMPLE",
          "FAST"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En SAMPLE, ¿qué significa la L?",
        "opciones": [
          "Lesiones",
          "Laboratorios",
          "Lugar del evento",
          "Último alimento"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Al egreso, ¿cómo se confirma que el paciente entendió sus indicaciones?",
        "opciones": [
          "Pidiéndole que repita las instrucciones, el horario de medicamentos y las señales de alerta",
          "Entregándole la receta sin explicar",
          "Preguntando solo si tiene dudas",
          "Explicándole únicamente al familiar"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál de estos resultados de laboratorio es crítico y se notifica de inmediato?",
        "opciones": [
          "Hemoglobina de 12 g/dL",
          "Hemoglobina menor de 6 g/dL",
          "Plaquetas de 250,000 /µL",
          "Leucocitos de 8,000 /µL"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuál de estos hallazgos de imagenología requiere aviso inmediato?",
        "opciones": [
          "Fractura antigua consolidada",
          "Quiste renal simple",
          "Tromboembolia pulmonar",
          "Calcificación vascular leve"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Durante un paro cardíaco, ¿dónde se registran los medicamentos administrados?",
        "opciones": [
          "En la bitácora estándar",
          "En las hojas de enfermería, transcritos después",
          "No se registran",
          "En el formato específico, que se integra al expediente"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal que transmite información clínica o recibe órdenes verbales.",
    "nivel": "Básico",
    "objetivos": [
      "Aplicar escuchar, escribir, leer y confirmar en toda orden verbal o telefónica.",
      "Registrar y firmar las órdenes verbales en la bitácora dentro del plazo.",
      "Entregar pacientes con SBAR o SAMPLE.",
      "Notificar de inmediato los resultados críticos."
    ]
  },
  {
    "id": "aesp5",
    "titulo": "AESP 5: Reducción del riesgo de infecciones",
    "area": "Calidad y Seguridad",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Higiene de manos y medidas para prevenir infecciones asociadas a la atención.",
    "orden": 3,
    "lecciones": [
      {
        "titulo": "Higiene de manos: cinco momentos",
        "duracion": "0:56 min",
        "texto": "Realiza higiene de manos en los cinco momentos. Usa solución alcoholada cuando las manos no estén visiblemente sucias y agua con jabón cuando sí lo estén.",
        "video": "higiene-de-manos.mp4",
        "segundosMinimos": 50,
        "subtitulos": [
          [
            0,
            8,
            "La higiene de manos protege al paciente, al personal y a toda la comunidad."
          ],
          [
            8,
            16,
            "Recuerda los cinco momentos: antes del contacto y de una tarea aséptica; después de fluidos, del paciente y de su entorno."
          ],
          [
            16,
            24,
            "Utiliza solución alcoholada cuando las manos no estén visiblemente sucias y frótalas hasta que se sequen."
          ],
          [
            24,
            32,
            "Usa agua y jabón cuando exista suciedad visible y después de utilizar el sanitario."
          ],
          [
            32,
            40,
            "Los guantes no sustituyen la higiene. Limpia tus manos antes de colocarlos y después de retirarlos."
          ],
          [
            40,
            48,
            "Detente, identifica el momento y realiza la técnica completa en cada atención."
          ],
          [
            48,
            55.9,
            "Manos limpias significan atención más segura. Continúa con la evaluación."
          ]
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Cuántos momentos de higiene de manos se consideran?",
        "opciones": [
          "Tres",
          "Cinco",
          "Siete"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Los guantes sustituyen la higiene de manos?",
        "opciones": [
          "Sí, siempre",
          "Solo en procedimientos cortos",
          "No"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La solución alcoholada se utiliza preferentemente cuando:",
        "opciones": [
          "Las manos no están visiblemente sucias",
          "Hay suciedad visible",
          "Se termina el turno"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Si las manos están visiblemente sucias se debe usar:",
        "opciones": [
          "Agua y jabón",
          "Solo una toalla seca",
          "Únicamente guantes"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Después de retirar los guantes se debe:",
        "opciones": [
          "Realizar higiene de manos",
          "Tocar el expediente primero",
          "Esperar hasta el siguiente paciente"
        ],
        "correcta": 0
      }
    ],
    "dirigido": "Todo el personal que tiene contacto con pacientes o su entorno.",
    "nivel": "Básico",
    "objetivos": [
      "Identificar los cinco momentos de la higiene de manos.",
      "Elegir entre solución alcoholada y agua con jabón.",
      "Reconocer que los guantes no sustituyen la higiene de manos."
    ]
  },
  {
    "id": "precauciones-estandar",
    "titulo": "Precauciones estándar y uso seguro de EPP",
    "area": "Calidad y Seguridad",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Medidas básicas para prevenir exposiciones y cortar cadenas de transmisión.",
    "orden": 4,
    "lecciones": [
      {
        "titulo": "Precauciones estándar y EPP",
        "duracion": "0:56 min",
        "texto": "Aplica las precauciones estándar con toda persona. Selecciona el equipo de protección según el riesgo y retíralo evitando la autocontaminación.",
        "video": "precauciones-estandar-epp.mp4",
        "segundosMinimos": 50,
        "subtitulos": [
          [
            0,
            8,
            "Las precauciones estándar se aplican a todos los pacientes, independientemente de su diagnóstico."
          ],
          [
            8,
            16,
            "Antes del contacto, evalúa el riesgo de exposición a sangre, fluidos y material contaminado."
          ],
          [
            16,
            24,
            "Selecciona guantes, bata, mascarilla y protección ocular de acuerdo con el riesgo esperado."
          ],
          [
            24,
            32,
            "Realiza higiene de manos, revisa el equipo y colócalo en el orden institucional."
          ],
          [
            32,
            40,
            "Al retirarlo, evita tocar superficies contaminadas y finaliza con higiene de manos."
          ],
          [
            40,
            48,
            "No reencapuches agujas. Deséchalas inmediatamente en el recipiente rígido correspondiente."
          ],
          [
            48,
            55.9,
            "El equipo protege cuando se selecciona, utiliza y retira correctamente. Continúa con la evaluación."
          ]
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "Las precauciones estándar se aplican a:",
        "opciones": [
          "Todas las personas atendidas",
          "Solo pacientes con aislamiento",
          "Únicamente quirófano"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El EPP debe seleccionarse según:",
        "opciones": [
          "El color del uniforme",
          "El riesgo de exposición",
          "La antigüedad del personal"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Los guantes sustituyen la higiene de manos?",
        "opciones": [
          "Sí",
          "No",
          "Solo en urgencias"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Con una aguja usada se debe:",
        "opciones": [
          "Reencapuchar con ambas manos",
          "Desechar inmediatamente en el contenedor indicado",
          "Dejarla sobre la charola"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Al retirar el EPP se debe:",
        "opciones": [
          "Evitar tocar superficies contaminadas y realizar higiene de manos",
          "Retirarlo sin una secuencia",
          "Conservar los guantes para otro procedimiento"
        ],
        "correcta": 0
      }
    ],
    "dirigido": "Personal clínico, de laboratorio, limpieza y prehospitalario.",
    "nivel": "Básico",
    "objetivos": [
      "Aplicar las precauciones estándar con toda persona atendida.",
      "Seleccionar el EPP según el riesgo de exposición.",
      "Desechar punzocortantes de forma segura."
    ]
  },
  {
    "id": "trato-digno",
    "titulo": "Trato digno y experiencia del paciente",
    "area": "Calidad y Seguridad",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Comunicación respetuosa, privacidad, escucha y participación del paciente.",
    "orden": 5,
    "lecciones": [
      {
        "titulo": "Trato digno y experiencia del paciente",
        "duracion": "0:56 min",
        "texto": "Preséntate, escucha, protege la privacidad y explica con lenguaje claro. Confirma la comprensión y respeta las decisiones informadas.",
        "video": "trato-digno-experiencia-paciente.mp4",
        "segundosMinimos": 50,
        "subtitulos": [
          [
            0,
            8,
            "Cada interacción cuenta. Un trato humano genera confianza y fortalece la seguridad del paciente."
          ],
          [
            8,
            16,
            "Preséntate, explica tu función, escucha sin interrumpir y confirma lo que comprendiste."
          ],
          [
            16,
            24,
            "Protege las conversaciones, documentos, imágenes y datos clínicos del paciente."
          ],
          [
            24,
            32,
            "Utiliza lenguaje sencillo, informa los próximos pasos y verifica la comprensión."
          ],
          [
            32,
            40,
            "Respeta la identidad, cultura, creencias, discapacidad y decisiones informadas de cada persona."
          ],
          [
            40,
            48,
            "Ante una inconformidad, escucha, conserva la calma, reconoce la preocupación y canaliza una solución."
          ],
          [
            48,
            55.9,
            "Despídete, aclara las dudas y orienta sobre el seguimiento. Continúa con la evaluación."
          ]
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "Al iniciar la atención se debe:",
        "opciones": [
          "Presentarse y escuchar al paciente",
          "Hablar solo con el acompañante",
          "Evitar explicar el proceso"
        ],
        "correcta": 0
      },
      {
        "pregunta": "La privacidad del paciente debe protegerse:",
        "opciones": [
          "Durante toda la atención",
          "Solo al momento del alta",
          "Únicamente si la solicita"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Para confirmar la comprensión es útil:",
        "opciones": [
          "Pedir al paciente que explique con sus palabras",
          "Repetir más rápido",
          "Entregar documentos sin explicación"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El trato digno incluye:",
        "opciones": [
          "Respetar cultura, decisiones y preferencias",
          "Usar tecnicismos en todo momento",
          "Decidir sin informar al paciente"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Ante una inconformidad se debe:",
        "opciones": [
          "Escuchar con calma y canalizarla",
          "Interrumpir al paciente",
          "Ignorarla si el servicio está ocupado"
        ],
        "correcta": 0
      }
    ],
    "dirigido": "Todo el personal que interactúa con pacientes y familiares.",
    "nivel": "Básico",
    "objetivos": [
      "Comunicar con lenguaje claro y respetuoso.",
      "Proteger la privacidad del paciente.",
      "Canalizar inconformidades con calma."
    ]
  },
  {
    "id": "acc11",
    "titulo": "ACC.1.1 Proceso de aceptación para la atención",
    "area": "Admisión y Recepción",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Ingreso ambulatorio y hospitalario con información completa y segura.",
    "orden": 6,
    "lecciones": [
      {
        "titulo": "Recepción del paciente",
        "duracion": "12 min",
        "texto": "Confirma identidad, servicio solicitado, cobertura y requisitos documentales.",
        "segundosMinimos": 20
      },
      {
        "titulo": "Aceptación y registro",
        "duracion": "15 min",
        "texto": "Registra la información sin abreviaturas y comunica oportunamente las condiciones del servicio.",
        "segundosMinimos": 20
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué debe verificarse primero?",
        "opciones": [
          "Identidad y servicio solicitado",
          "Habitación preferida",
          "Forma de salida"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Al registrar los datos del paciente se debe:",
        "opciones": [
          "Usar abreviaturas para agilizar",
          "Registrar la información completa y sin abreviaturas",
          "Dejar campos vacíos y completarlos después"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si el servicio solicitado no está disponible en la unidad:",
        "opciones": [
          "Aceptar al paciente de todas formas",
          "Pedirle que regrese otro día sin explicación",
          "Informar al paciente y orientarlo o referirlo conforme al proceso"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Las condiciones del servicio (costos y requisitos) se comunican:",
        "opciones": [
          "Oportunamente, antes de iniciar la atención programada",
          "Únicamente al alta",
          "Solo si el paciente las solicita"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Ante un paciente en estado de urgencia:",
        "opciones": [
          "Se condiciona la atención a completar el registro",
          "Se prioriza la estabilización y el registro se completa después",
          "Se difiere hasta confirmar la cobertura"
        ],
        "correcta": 1
      }
    ],
    "dirigido": "Personal de admisión, recepción y caja.",
    "nivel": "Básico",
    "objetivos": [
      "Verificar identidad y servicio solicitado.",
      "Registrar la información completa y sin abreviaturas.",
      "Comunicar a tiempo las condiciones del servicio."
    ]
  },
  {
    "id": "rpbi",
    "titulo": "RPBI: manejo de residuos biológico-infecciosos",
    "area": "Enfermería",
    "horas": 2,
    "obligatorio": true,
    "descripcion": "Clasificación, envasado, almacenamiento y disposición segura de RPBI.",
    "orden": 7,
    "lecciones": [
      {
        "titulo": "Clasificación",
        "duracion": "18 min",
        "texto": "Identifica sangre, cultivos, patológicos, no anatómicos y punzocortantes.",
        "segundosMinimos": 20
      },
      {
        "titulo": "Envasado y ruta",
        "duracion": "18 min",
        "texto": "Usa el recipiente y color correspondiente; no rebases la capacidad indicada.",
        "segundosMinimos": 20
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Dónde se eliminan punzocortantes?",
        "opciones": [
          "Bolsa roja",
          "Recipiente rígido rojo",
          "Bolsa negra"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La sangre y sus componentes en forma líquida se envasan en:",
        "opciones": [
          "Bolsa negra",
          "Recipiente hermético rojo",
          "Bolsa amarilla"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Los residuos patológicos sólidos (tejidos, órganos) se depositan en:",
        "opciones": [
          "Bolsa amarilla",
          "Bolsa negra",
          "Recipiente rígido rojo"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El recipiente de punzocortantes se llena hasta:",
        "opciones": [
          "Su capacidad total",
          "La mitad de su capacidad",
          "El 80 % de su capacidad"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Las gasas empapadas de sangre (no anatómicos) se depositan en:",
        "opciones": [
          "Bolsa negra de basura municipal",
          "Bolsa roja",
          "Recipiente rígido amarillo"
        ],
        "correcta": 1
      }
    ],
    "dirigido": "Personal de enfermería, laboratorio, limpieza y quirófano.",
    "nivel": "Básico",
    "objetivos": [
      "Clasificar los residuos biológico-infecciosos.",
      "Elegir el recipiente y color correctos.",
      "Respetar la capacidad de llenado de los contenedores."
    ]
  },
  {
    "id": "gasometria",
    "titulo": "Gasometría arterial: toma y manejo",
    "area": "Enfermería",
    "horas": 2,
    "obligatorio": false,
    "descripcion": "Preparación, técnica, conservación y traslado de muestras de gasometría.",
    "orden": 8,
    "lecciones": [
      {
        "titulo": "Preparación",
        "duracion": "15 min",
        "texto": "Verifica indicación, identidad, insumos y condiciones de oxigenoterapia.",
        "segundosMinimos": 20
      },
      {
        "titulo": "Muestra y traslado",
        "duracion": "18 min",
        "texto": "Evita burbujas, identifica inmediatamente y traslada conforme al protocolo.",
        "segundosMinimos": 20
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué debe evitarse en la muestra?",
        "opciones": [
          "Etiquetado",
          "Burbujas de aire",
          "Traslado inmediato"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Antes de la punción radial se valora la circulación colateral con la:",
        "opciones": [
          "Prueba de Allen",
          "Prueba de Romberg",
          "Maniobra de Valsalva"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Después de la punción arterial se debe:",
        "opciones": [
          "Doblar el brazo sin presionar",
          "Dar masaje vigoroso en el sitio",
          "Aplicar presión firme en el sitio al menos 5 minutos"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La jeringa para gasometría debe contener:",
        "opciones": [
          "Solución salina",
          "Anticoagulante (heparina)",
          "Alcohol"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Una vez tomada, la muestra se debe:",
        "opciones": [
          "Procesar lo antes posible conforme al protocolo del laboratorio",
          "Dejar varias horas a temperatura ambiente",
          "Destapar para eliminar el aire después de horas"
        ],
        "correcta": 0
      }
    ],
    "dirigido": "Personal de enfermería y terapia respiratoria.",
    "nivel": "Intermedio",
    "objetivos": [
      "Preparar al paciente y los insumos para la punción arterial.",
      "Tomar la muestra sin burbujas de aire.",
      "Identificar y trasladar la muestra conforme al protocolo."
    ]
  },
  {
    "id": "ekg",
    "titulo": "Electrocardiografía básica EKG 12D",
    "area": "Enfermería",
    "horas": 3,
    "obligatorio": false,
    "descripcion": "Colocación de electrodos, adquisición y detección de trazos críticos.",
    "orden": 9,
    "lecciones": [
      {
        "titulo": "Preparación del paciente",
        "duracion": "15 min",
        "texto": "Explica el procedimiento, asegura privacidad y prepara la piel.",
        "segundosMinimos": 20
      },
      {
        "titulo": "Derivaciones",
        "duracion": "20 min",
        "texto": "Coloca correctamente electrodos periféricos y precordiales.",
        "segundosMinimos": 20
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Cuántas derivaciones registra el estudio estándar?",
        "opciones": [
          "6",
          "10",
          "12"
        ],
        "correcta": 2
      },
      {
        "pregunta": "El electrodo V1 se coloca en:",
        "opciones": [
          "5.º espacio intercostal, línea medioclavicular izquierda",
          "4.º espacio intercostal, borde esternal derecho",
          "2.º espacio intercostal izquierdo"
        ],
        "correcta": 1
      },
      {
        "pregunta": "El electrodo V4 se coloca en:",
        "opciones": [
          "5.º espacio intercostal, línea medioclavicular izquierda",
          "4.º espacio intercostal, borde esternal izquierdo",
          "Línea axilar media derecha"
        ],
        "correcta": 0
      },
      {
        "pregunta": "La velocidad estándar del papel es:",
        "opciones": [
          "10 mm/s",
          "50 mm/min",
          "25 mm/s"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Ante un trazo con signos de alarma (p. ej., elevación del ST) se debe:",
        "opciones": [
          "Archivar el estudio",
          "Notificar de inmediato al médico responsable",
          "Repetirlo al día siguiente"
        ],
        "correcta": 1
      }
    ],
    "dirigido": "Personal de enfermería y técnicos que realizan electrocardiogramas.",
    "nivel": "Intermedio",
    "objetivos": [
      "Preparar al paciente y la piel.",
      "Colocar correctamente los electrodos de las 12 derivaciones.",
      "Reconocer trazos que requieren aviso inmediato."
    ]
  },
  {
    "id": "bls",
    "titulo": "Soporte Vital Básico para personal de salud",
    "area": "Área Médica",
    "horas": 4,
    "obligatorio": false,
    "descripcion": "Reconocimiento del paro, RCP de calidad y uso del DEA.",
    "orden": 10,
    "lecciones": [
      {
        "titulo": "Cadena de supervivencia",
        "duracion": "18 min",
        "texto": "Reconoce el paro y activa de inmediato el sistema de respuesta.",
        "segundosMinimos": 20
      },
      {
        "titulo": "RCP y DEA",
        "duracion": "25 min",
        "texto": "Realiza compresiones de calidad y sigue las indicaciones del desfibrilador.",
        "segundosMinimos": 20
      }
    ],
    "evaluacion": [
      {
        "pregunta": "Frecuencia de compresiones en adulto:",
        "opciones": [
          "60–80/min",
          "100–120/min",
          "140–160/min"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La profundidad de las compresiones en un adulto es de:",
        "opciones": [
          "2 a 3 cm",
          "Más de 8 cm",
          "Al menos 5 cm sin exceder 6 cm"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Con un solo reanimador en adulto, la relación compresiones:ventilaciones es:",
        "opciones": [
          "30:2",
          "15:2",
          "5:1"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Al llegar el DEA se debe:",
        "opciones": [
          "Esperar al médico para usarlo",
          "Encenderlo y seguir sus indicaciones",
          "Usarlo solo si la persona respira"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Ante una persona que colapsa, lo primero es:",
        "opciones": [
          "Darle agua",
          "Iniciar ventilaciones prolongadas",
          "Verificar la seguridad de la escena y si responde"
        ],
        "correcta": 2
      }
    ],
    "dirigido": "Médicos, enfermería y personal de respuesta a emergencias.",
    "nivel": "Intermedio",
    "objetivos": [
      "Reconocer el paro cardiorrespiratorio.",
      "Realizar compresiones de calidad.",
      "Usar el desfibrilador externo automático."
    ]
  },
  {
    "id": "med-alto-riesgo",
    "titulo": "Medicamentos de alto riesgo",
    "area": "Farmacia",
    "horas": 2,
    "obligatorio": true,
    "descripcion": "Identificación, almacenamiento y doble verificación de medicamentos de alto riesgo.",
    "orden": 11,
    "lecciones": [
      {
        "titulo": "Identificación y resguardo",
        "duracion": "15 min",
        "texto": "Separa, identifica y restringe los medicamentos conforme a la política.",
        "segundosMinimos": 20
      },
      {
        "titulo": "Doble verificación",
        "duracion": "15 min",
        "texto": "Dos profesionales verifican paciente, medicamento, dosis, vía y velocidad.",
        "segundosMinimos": 20
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué control se requiere?",
        "opciones": [
          "Doble verificación",
          "Entrega abierta",
          "Sin identificación"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Es un ejemplo de medicamento de alto riesgo:",
        "opciones": [
          "Insulina",
          "Lágrimas artificiales",
          "Vitamina C oral"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Los electrolitos concentrados (p. ej., cloruro de potasio) deben:",
        "opciones": [
          "Almacenarse sin restricción en el piso",
          "Resguardarse separados, identificados y con acceso restringido",
          "Mezclarse con otros medicamentos"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La doble verificación la realizan:",
        "opciones": [
          "Un profesional que revisa dos veces",
          "El paciente y un familiar",
          "Dos profesionales de forma independiente"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Ante una duda sobre la dosis de un medicamento de alto riesgo:",
        "opciones": [
          "Detener y aclarar con quien prescribe o con farmacia",
          "Administrar y consultar después",
          "Ajustar la dosis por criterio propio"
        ],
        "correcta": 0
      }
    ],
    "dirigido": "Personal de farmacia, enfermería y médicos.",
    "nivel": "Intermedio",
    "objetivos": [
      "Identificar los medicamentos de alto riesgo.",
      "Almacenarlos separados y con acceso restringido.",
      "Aplicar la doble verificación independiente."
    ]
  },
  {
    "id": "nom018",
    "titulo": "NOM-018-STPS-2015: sistema armonizado",
    "area": "Seguridad e Higiene",
    "horas": 2,
    "obligatorio": true,
    "descripcion": "Pictogramas, hojas de datos de seguridad y comunicación de peligros.",
    "orden": 12,
    "lecciones": [
      {
        "titulo": "Pictogramas",
        "duracion": "14 min",
        "texto": "Reconoce peligros físicos, a la salud y al ambiente.",
        "segundosMinimos": 20
      },
      {
        "titulo": "Hoja de seguridad",
        "duracion": "16 min",
        "texto": "Consulta medidas de prevención, respuesta y almacenamiento.",
        "segundosMinimos": 20
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Dónde se consulta la respuesta ante exposición?",
        "opciones": [
          "Hoja de datos de seguridad",
          "Recibo de compra",
          "Bitácora de asistencia"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El sistema armonizado clasifica peligros:",
        "opciones": [
          "Solo de incendio",
          "Físicos, para la salud y para el medio ambiente",
          "Únicamente biológicos"
        ],
        "correcta": 1
      },
      {
        "pregunta": "El pictograma de llama indica:",
        "opciones": [
          "Peligro para el medio ambiente",
          "Gas a presión",
          "Sustancia inflamable"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La hoja de datos de seguridad debe estar:",
        "opciones": [
          "Disponible para el personal que maneja la sustancia",
          "Guardada solo en la dirección",
          "Disponible únicamente en inglés"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Un recipiente sin etiqueta debe:",
        "opciones": [
          "Usarse si el olor es reconocible",
          "No utilizarse hasta identificar y etiquetar su contenido",
          "Vaciarse al drenaje"
        ],
        "correcta": 1
      }
    ],
    "dirigido": "Personal que maneja sustancias químicas peligrosas.",
    "nivel": "Básico",
    "objetivos": [
      "Reconocer los pictogramas del sistema armonizado.",
      "Consultar la hoja de datos de seguridad.",
      "Actuar ante recipientes sin etiqueta."
    ]
  },
  {
    "id": "epp",
    "titulo": "Equipo de protección personal",
    "area": "Seguridad e Higiene",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Selección, colocación, retiro y disposición del EPP.",
    "orden": 13,
    "lecciones": [
      {
        "titulo": "Selección por riesgo",
        "duracion": "12 min",
        "texto": "El equipo se elige conforme a la evaluación del riesgo.",
        "segundosMinimos": 20
      },
      {
        "titulo": "Colocación y retiro",
        "duracion": "12 min",
        "texto": "Evita la autocontaminación siguiendo la secuencia institucional.",
        "segundosMinimos": 20
      }
    ],
    "evaluacion": [
      {
        "pregunta": "El EPP debe elegirse según:",
        "opciones": [
          "Preferencia personal",
          "Evaluación del riesgo",
          "Color del uniforme"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Antes de colocarse el EPP se debe:",
        "opciones": [
          "Tocar el entorno del paciente",
          "Retirar el gafete",
          "Realizar higiene de manos"
        ],
        "correcta": 2
      },
      {
        "pregunta": "El EPP desechable, después de usarse:",
        "opciones": [
          "Se desecha en el contenedor correspondiente",
          "Se reutiliza con el siguiente paciente",
          "Se guarda en el bolsillo"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Si el EPP se daña durante la atención:",
        "opciones": [
          "Se continúa hasta terminar",
          "Se retira de forma segura y se reemplaza",
          "Se repara con cinta"
        ],
        "correcta": 1
      },
      {
        "pregunta": "El respirador N95 está indicado ante riesgo de:",
        "opciones": [
          "Contacto con piel intacta",
          "Exposición a ruido",
          "Transmisión aérea"
        ],
        "correcta": 2
      }
    ],
    "dirigido": "Todo el personal expuesto a riesgos biológicos, químicos o físicos.",
    "nivel": "Básico",
    "objetivos": [
      "Seleccionar el equipo según la evaluación del riesgo.",
      "Colocar y retirar el EPP sin autocontaminarse.",
      "Desechar el equipo de un solo uso correctamente."
    ]
  },
  {
    "id": "5s",
    "titulo": "Metodología 5S",
    "area": "Administración",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Orden, limpieza, estandarización y disciplina en el lugar de trabajo.",
    "orden": 14,
    "lecciones": [
      {
        "titulo": "Las cinco etapas",
        "duracion": "15 min",
        "texto": "Clasificar, ordenar, limpiar, estandarizar y mantener la disciplina.",
        "segundosMinimos": 20
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Cuál es el objetivo principal?",
        "opciones": [
          "Acumular materiales",
          "Mantener espacios seguros y eficientes",
          "Cambiar horarios"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La primera S (Seiri) significa:",
        "opciones": [
          "Clasificar",
          "Limpiar",
          "Disciplina"
        ],
        "correcta": 0
      },
      {
        "pregunta": "\"Un lugar para cada cosa y cada cosa en su lugar\" corresponde a:",
        "opciones": [
          "Clasificar (Seiri)",
          "Ordenar (Seiton)",
          "Estandarizar (Seiketsu)"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Estandarizar implica:",
        "opciones": [
          "Comprar material nuevo",
          "Cambiar de área de trabajo",
          "Establecer normas visuales y rutinas para mantener lo logrado"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La quinta S (Shitsuke) se refiere a:",
        "opciones": [
          "Seguridad del paciente",
          "Disciplina y mejora sostenida",
          "Sustitución de equipo"
        ],
        "correcta": 1
      }
    ],
    "dirigido": "Personal administrativo, de almacén y de servicios.",
    "nivel": "Básico",
    "objetivos": [
      "Explicar las cinco etapas de la metodología.",
      "Ordenar el área de trabajo con criterios visuales.",
      "Sostener la disciplina de mejora continua."
    ]
  },
  {
    "id": "calor",
    "titulo": "Prevención del agotamiento por calor",
    "area": "Seguridad e Higiene",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Factores de riesgo, signos de alarma y respuesta inmediata.",
    "orden": 15,
    "lecciones": [
      {
        "titulo": "Prevención y respuesta",
        "duracion": "15 min",
        "texto": "Hidrátate, reconoce signos y traslada a la persona a un sitio fresco.",
        "segundosMinimos": 20
      }
    ],
    "evaluacion": [
      {
        "pregunta": "Ante signos de agotamiento debe:",
        "opciones": [
          "Continuar trabajando",
          "Trasladar a lugar fresco e hidratar",
          "Administrar café"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Son signos de alarma de agotamiento por calor:",
        "opciones": [
          "Apetito aumentado y somnolencia leve",
          "Sudoración intensa, mareo y debilidad",
          "Manos frías sin otros síntomas"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Una medida preventiva es:",
        "opciones": [
          "Esperar a tener sed para beber",
          "Usar ropa oscura y gruesa",
          "Hidratarse con frecuencia y hacer pausas en zonas frescas"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si la persona presenta confusión o pérdida del estado de alerta:",
        "opciones": [
          "Es una urgencia: activar atención médica inmediata",
          "Darle de beber aunque no pueda tragar",
          "Dejarla descansar sola"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Tiene mayor riesgo el personal que:",
        "opciones": [
          "Trabaja en oficina climatizada",
          "Trabaja al exterior en las horas de mayor temperatura",
          "Trabaja en turno nocturno en interiores"
        ],
        "correcta": 1
      }
    ],
    "dirigido": "Personal que trabaja al exterior o en áreas calurosas.",
    "nivel": "Básico",
    "objetivos": [
      "Identificar los factores de riesgo de agotamiento por calor.",
      "Reconocer los signos de alarma.",
      "Aplicar la respuesta inmediata."
    ]
  },
  {
    "id": "bombas",
    "titulo": "Protocolo ante amenaza de bomba",
    "area": "Seguridad e Higiene",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Recepción de la amenaza, aviso, evacuación y preservación de información.",
    "orden": 16,
    "lecciones": [
      {
        "titulo": "Recepción y notificación",
        "duracion": "15 min",
        "texto": "Mantén la calma, registra datos y activa el protocolo sin difundir rumores.",
        "segundosMinimos": 20
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué debe hacerse primero?",
        "opciones": [
          "Difundir en redes",
          "Registrar datos y activar protocolo",
          "Manipular objetos sospechosos"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Durante una llamada de amenaza se debe:",
        "opciones": [
          "Colgar de inmediato",
          "Discutir con quien llama",
          "Mantener la calma, prolongar la llamada y anotar detalles"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Ante un objeto sospechoso:",
        "opciones": [
          "No tocarlo, alejarse y dar aviso",
          "Tocarlo para verificar",
          "Moverlo a otro sitio"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El uso de radios y celulares cerca de un objeto sospechoso:",
        "opciones": [
          "Se recomienda",
          "Debe evitarse",
          "Es indistinto"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La evacuación se realiza:",
        "opciones": [
          "Por el elevador",
          "Cada quien como pueda",
          "Por las rutas que indique la brigada"
        ],
        "correcta": 2
      }
    ],
    "dirigido": "Todo el personal, en especial recepción, telefonía y seguridad.",
    "nivel": "Básico",
    "objetivos": [
      "Registrar los datos de una amenaza telefónica.",
      "Actuar ante un objeto sospechoso.",
      "Seguir las rutas de evacuación indicadas."
    ]
  },
  {
    "id": "induccion-rh",
    "titulo": "Inducción institucional Saint Luke’s",
    "area": "Capital Humano",
    "horas": 2,
    "obligatorio": true,
    "descripcion": "Cultura, normativas, seguridad, prestaciones y responsabilidades.",
    "orden": 17,
    "lecciones": [
      {
        "titulo": "Nuestra cultura",
        "duracion": "15 min",
        "texto": "Conoce misión, valores y compromiso con la seguridad del paciente.",
        "segundosMinimos": 20
      },
      {
        "titulo": "Normas de trabajo",
        "duracion": "20 min",
        "texto": "Revisa asistencia, confidencialidad, imagen y canales de atención.",
        "segundosMinimos": 20
      }
    ],
    "evaluacion": [
      {
        "pregunta": "La seguridad del paciente corresponde a:",
        "opciones": [
          "Solo Calidad",
          "Todo el personal",
          "Solo personal clínico"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La información de pacientes y colaboradores es:",
        "opciones": [
          "Confidencial y de uso exclusivamente laboral",
          "Pública",
          "Apta para compartirse en redes sociales"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Para dudas sobre prestaciones o nómina se acude a:",
        "opciones": [
          "Seguridad",
          "Capital Humano",
          "Mantenimiento"
        ],
        "correcta": 1
      },
      {
        "pregunta": "El gafete institucional debe:",
        "opciones": [
          "Guardarse durante la jornada",
          "Prestarse a otros colaboradores",
          "Portarse visible durante la jornada"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Los incidentes y eventos adversos:",
        "opciones": [
          "Se reportan por los canales institucionales",
          "Se ocultan para evitar sanciones",
          "Solo se comentan con compañeros"
        ],
        "correcta": 0
      }
    ],
    "dirigido": "Colaboradores de nuevo ingreso.",
    "nivel": "Básico",
    "objetivos": [
      "Conocer la misión, los valores y la cultura de seguridad.",
      "Identificar las normas de trabajo y confidencialidad.",
      "Saber a qué área acudir para cada trámite."
    ]
  },
  {
    "id": "consentimientos-sistema",
    "titulo": "Consentimientos informados en el sistema clínico",
    "area": "Área Médica",
    "horas": 0.25,
    "obligatorio": false,
    "descripcion": "Selección, personalización, explicación e impresión segura de consentimientos informados desde el expediente clínico.",
    "orden": 18,
    "lecciones": [
      {
        "titulo": "Gestión de consentimientos informados",
        "duracion": "3:10 min",
        "texto": "Aprende a localizar el formato correspondiente, seleccionar al médico tratante, completar los datos del procedimiento y obtener la autorización del paciente.",
        "video": "consentimientos-informados-sistema-clinico.mp4",
        "segundosMinimos": 171
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Dónde se localizan los consentimientos dentro del expediente?",
        "opciones": [
          "En Cartas y consentimientos",
          "En Facturación",
          "En Agenda médica"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Si el procedimiento no aparece en la lista, ¿qué debe utilizarse?",
        "opciones": [
          "Una nota libre sin formato",
          "El consentimiento informado general",
          "Un formato de otro paciente"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Antes de obtener la firma del paciente se debe:",
        "opciones": [
          "Imprimir sin revisar",
          "Explicar el procedimiento, beneficios, riesgos y alternativas",
          "Solicitar únicamente el nombre"
        ],
        "correcta": 1
      }
    ],
    "dirigido": "Médicos y personal que gestiona expedientes clínicos.",
    "nivel": "Básico",
    "objetivos": [
      "Localizar el formato de consentimiento en el expediente.",
      "Personalizar los datos del procedimiento.",
      "Explicar beneficios, riesgos y alternativas antes de la firma."
    ]
  }
];

/** Rutas de aprendizaje de ejemplo. Se cargan una sola vez, al crearse la hoja RUTAS. */
var CCE_ROUTES = [
  {
    "id": "nuevo-ingreso",
    "titulo": "Inducción para nuevo ingreso",
    "descripcion": "Los cursos básicos que todo colaborador debe acreditar en sus primeras semanas: cultura institucional y metas de seguridad del paciente.",
    "cursos": [
      "induccion-rh",
      "aesp1",
      "aesp2",
      "aesp5",
      "precauciones-estandar",
      "trato-digno"
    ],
    "orden": 1
  },
  {
    "id": "enfermeria-hospitalaria",
    "titulo": "Enfermería hospitalaria",
    "descripcion": "Procedimientos y controles que el personal de enfermería aplica en el día a día.",
    "cursos": [
      "rpbi",
      "med-alto-riesgo",
      "gasometria",
      "ekg",
      "epp"
    ],
    "orden": 2
  },
  {
    "id": "admision-atencion",
    "titulo": "Admisión y atención al paciente",
    "descripcion": "Recepción, registro y comunicación con pacientes y familiares desde el primer contacto.",
    "cursos": [
      "acc11",
      "aesp1",
      "aesp2",
      "trato-digno"
    ],
    "orden": 3
  },
  {
    "id": "seguridad-higiene",
    "titulo": "Seguridad e higiene en el trabajo",
    "descripcion": "Prevención de riesgos, manejo de sustancias y respuesta ante emergencias en las instalaciones.",
    "cursos": [
      "nom018",
      "epp",
      "calor",
      "bombas",
      "5s"
    ],
    "orden": 4
  }
];
