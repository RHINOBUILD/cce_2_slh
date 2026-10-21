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
            65,
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
            89,
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
            125,
            "Antes de un procedimiento invasivo o una cirugía, confirma que el paciente porte su brazalete."
          ],
          [
            125,
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
            150,
            "Si el paciente está inconsciente o intubado, coloca su identificación en la ficha de la cabecera de la cama."
          ],
          [
            150,
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
        "tipo": "video",
        "titulo": "Comunicación efectiva: órdenes verbales, entregas y resultados críticos",
        "duracion": "3:39 min",
        "texto": "Escuchar, escribir, leer y confirmar; bitácora y plazos de firma; SBAR y SAMPLE; egreso; resultados críticos y paro cardíaco.",
        "video": "aesp2-comunicacion-efectiva.mp4",
        "segundosMinimos": 200,
        "subtitulos": [
          [
            0.3,
            9.4,
            "Bienvenida al curso de la Acción Esencial para la Seguridad del Paciente número dos: mejorar la comunicación efectiva."
          ],
          [
            10.1,
            15.9,
            "El objetivo es que la información entre profesionales de la salud sea correcta, oportuna y completa."
          ],
          [
            15.9,
            22.9,
            "Así se evitan los errores que nacen de órdenes verbales o telefónicas mal escuchadas, mal escritas o nunca confirmadas."
          ],
          [
            23.6,
            30.2,
            "Aplica a todo el personal clínico: médicos de staff y externos, enfermería, paramédicos, laboratorio e imagenología."
          ],
          [
            30.2,
            36.5,
            "Y a todas las áreas de atención, desde urgencias y quirófano hasta hemodiálisis y dietología."
          ],
          [
            37,
            44.2,
            "Ante una orden verbal o telefónica sigue cuatro pasos: escuchar, escribir, leer y confirmar."
          ],
          [
            44.2,
            51.5,
            "Solo cuando el médico confirma que lo leído es correcto, la indicación se ejecuta."
          ],
          [
            52,
            58.9,
            "Por ejemplo: el médico da la indicación con el nombre completo y la fecha de nacimiento del paciente."
          ],
          [
            58.9,
            65,
            "Enfermería la anota, la lee en voz alta y pregunta si es correcta. El médico confirma."
          ],
          [
            65.5,
            74.2,
            "Toda orden verbal se registra en la bitácora del servicio con fecha, hora, nombre completo y fecha de nacimiento del paciente, y el nombre y cargo de quien la emite."
          ],
          [
            74.2,
            78.5,
            "Si la indicación ocurre durante una urgencia, se usa el formato específico de esa situación."
          ],
          [
            79,
            84.4,
            "El médico que dio la indicación firma la bitácora. Si no está, la registra y firma el jefe de servicio o el médico de guardia."
          ],
          [
            84.4,
            90.5,
            "El plazo para firmar es de veinticuatro horas en días hábiles y setenta y dos en fin de semana. El médico de guardia transcribe la indicación al expediente."
          ],
          [
            91,
            104.5,
            "En la transferencia de pacientes y la entrega de turno usa SBAR: situación, antecedentes, evaluación y recomendación."
          ],
          [
            105,
            112.9,
            "Los paramédicos usan SAMPLE: signos y síntomas, alergias, medicamentos, padecimientos, último alimento y eventos previos."
          ],
          [
            112.9,
            120.7,
            "En cada entrega, documenta qué estudios y documentos recibe la persona que continúa la atención."
          ],
          [
            121.3,
            132.9,
            "Al egreso, pide al paciente que repita sus instrucciones, el horario de sus medicamentos y las señales de alerta."
          ],
          [
            133.6,
            138.5,
            "Los resultados críticos de laboratorio se notifican de inmediato al médico responsable."
          ],
          [
            138.5,
            147.2,
            "Por ejemplo, hemoglobina menor de seis, plaquetas menores de cincuenta mil, o leucocitos fuera del rango de mil a cuarenta mil."
          ],
          [
            147.8,
            161.7,
            "En imagenología también se avisan de inmediato diagnósticos como evento vascular cerebral, sangrado abdominal, tromboembolia pulmonar, pericarditis, derrame pericárdico o isquemia mesentérica."
          ],
          [
            162.3,
            177.4,
            "Durante un paro cardíaco, los medicamentos se registran en el formato específico, que se integra al expediente sin transcribirlo a las hojas de enfermería."
          ],
          [
            178.1,
            189.7,
            "Un aviso de la Acción Esencial número cuatro: ahora cualquier miembro del equipo quirúrgico puede realizar el marcaje."
          ],
          [
            190.3,
            201.7,
            "Como compromisos: registrar y confirmar toda orden verbal, transcribir y firmar a tiempo, y entregar pacientes con SBAR o SAMPLE."
          ],
          [
            202.3,
            218.5,
            "Recuerda: escucha, escribe, lee y confirma. Cada orden, cada vez. Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Guía rápida AESP 2 (PDF)",
            "url": "materiales/aesp2-guia-rapida.pdf"
          },
          {
            "nombre": "Presentación AESP 2",
            "url": "presentaciones/aesp2-comunicacion-efectiva.html"
          }
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
    "id": "aesp3",
    "titulo": "AESP 3: Seguridad en medicamentos de alto riesgo",
    "area": "Calidad y Seguridad",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Alertas visuales, almacenamiento, prescripción, solicitud y doble verificación de medicamentos de alto riesgo y anestésicos.",
    "orden": 3,
    "lecciones": [
      {
        "tipo": "lectura",
        "titulo": "Medicamentos de alto riesgo: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de la sesión del 31 de agosto de 2026.\n\n• Medicamento de alto riesgo: ante un error en su manejo, tiene alta probabilidad de causar un daño grave. Se priorizan electrolitos concentrados, insulinas y anticoagulantes parenterales.\n• Alertas visuales: rojo para alto riesgo, naranja para LASA y amarillo para caducidad menor a 3 meses. La etiqueta no cubre la caducidad.\n• Almacenamiento: en orden alfabético, respetando temperatura; electrolitos concentrados solo en carros rojos.\n• Prescripción: siglas AR o LASA al final; electrolitos en gramos o miliequivalentes, nunca en ámpulas.\n• Solicitud: como máximo 20 minutos antes de administrar; traslado en contenedor con tapa roja o hielera identificada.\n• Doble verificación: una persona prepara y otra verifica. Obligatoria en alto riesgo y anestésicos; solo se omite ante riesgo inminente para la vida. Se registra en la nota de enfermería.\n• Dosis no administrada: registrar la razón en la hoja de enfermería y en el expediente.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
        "materiales": [
          {
            "nombre": "Presentación AESP 3",
            "url": "presentaciones/aesp3-medicamentos-alto-riesgo.html"
          },
          {
            "nombre": "Guía rápida AESP 3 (PDF)",
            "url": "materiales/aesp3-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué es un medicamento de alto riesgo?",
        "opciones": [
          "Aquel que, ante un error en su manejo, tiene alta probabilidad de causar un daño grave",
          "Cualquier medicamento de costo elevado",
          "Un medicamento que solo se usa en quirófano",
          "Un medicamento con fecha de caducidad corta"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué grupos se priorizan en el listado institucional de alto riesgo?",
        "opciones": [
          "Antibióticos, analgésicos y antiácidos",
          "Electrolitos concentrados, insulinas y anticoagulantes parenterales",
          "Vitaminas y suplementos",
          "Solo quimioterapias"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué color de etiqueta identifica a un medicamento de alto riesgo?",
        "opciones": [
          "Amarillo",
          "Verde",
          "Rojo",
          "Azul"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué indica la etiqueta naranja?",
        "opciones": [
          "Medicamento refrigerado",
          "Medicamento controlado",
          "Medicamento caducado",
          "Medicamento LASA, de nombre o apariencia parecida"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué indica la etiqueta amarilla?",
        "opciones": [
          "Caducidad menor a 3 meses",
          "Medicamento de alto riesgo",
          "Medicamento anestésico",
          "Medicamento de uso pediátrico"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Al colocar una etiqueta de alerta visual, se debe cuidar que:",
        "opciones": [
          "Cubra todo el nombre comercial",
          "No cubra información crítica, como la fecha de caducidad",
          "Se coloque solo en la caja exterior",
          "Lleve el nombre del paciente"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cómo se almacenan los medicamentos en el área?",
        "opciones": [
          "Por color de empaque",
          "Por fecha de compra",
          "En orden alfabético de la A a la Z, respetando temperatura y refrigeración",
          "Como lleguen del almacén"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Dónde se guardan los electrolitos concentrados?",
        "opciones": [
          "En el puesto de enfermería",
          "En el cuarto del paciente",
          "En cualquier anaquel identificado",
          "Únicamente en los carros rojos"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué siglas se agregan al final de la prescripción de un medicamento de alto riesgo?",
        "opciones": [
          "AR",
          "MAR",
          "URG",
          "PRN"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cómo deben prescribirse los electrolitos concentrados?",
        "opciones": [
          "En ámpulas",
          "En gramos o miliequivalentes",
          "En frascos",
          "En cucharadas"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Con cuánta anticipación máxima se solicita un medicamento de alto riesgo?",
        "opciones": [
          "Al inicio del turno",
          "Un día antes",
          "20 minutos antes de su administración",
          "2 horas antes"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cómo se trasladan los electrolitos concentrados?",
        "opciones": [
          "En la bolsa del uniforme",
          "En una bolsa sin identificar",
          "Junto con los demás medicamentos del turno",
          "En contenedores con tapa roja o hieleras identificadas"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué es la doble verificación?",
        "opciones": [
          "Una persona prepara el medicamento y otra lo verifica por su cuenta",
          "La misma persona revisa dos veces",
          "El paciente revisa su medicamento",
          "Se revisa solo la receta dos veces"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Según la actualización del manual, la doble verificación ahora también es obligatoria para:",
        "opciones": [
          "Soluciones de hidratación",
          "Medicamentos anestésicos",
          "Vitaminas orales",
          "Medicamentos de venta libre"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuándo se permite omitir la doble verificación?",
        "opciones": [
          "Cuando hay poco personal",
          "Durante el turno nocturno",
          "Solo en una urgencia con riesgo inminente para la vida del paciente",
          "Cuando el medicamento ya se conoce bien"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si una dosis programada no se administra, ¿qué debe hacerse?",
        "opciones": [
          "Administrarla en el siguiente horario sin registrar",
          "Desecharla sin avisar",
          "Comentarlo solo en la entrega de turno",
          "Registrar la razón específica en la hoja de enfermería y en el expediente clínico"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal de enfermería, medicación segura, farmacia y personal médico.",
    "nivel": "Básico",
    "objetivos": [
      "Identificar los medicamentos de alto riesgo y LASA con su alerta visual.",
      "Almacenar, prescribir y solicitar estos medicamentos de forma segura.",
      "Aplicar y registrar la doble verificación en alto riesgo y anestésicos."
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
    "descripcion": "Formas de ingreso, identificación correcta, flujo de admisión a médico, documentos y egreso del paciente.",
    "orden": 6,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "ACC.1.1 · Proceso de aceptación: video del curso",
        "duracion": "1:56 min",
        "texto": "Formas de ingreso, identificación correcta, flujo de admisión a médico, documentos y egreso del paciente.",
        "video": "acc11-proceso-aceptacion.mp4",
        "segundosMinimos": 104,
        "subtitulos": [
          [
            0,
            3.8,
            "Bienvenidos al curso sobre el proceso de aceptación para la atención,"
          ],
          [
            4.3,
            10.1,
            "fundamental para la calidad y seguridad de nuestras unidades ambulatorias, hospitalarias y de urgencias."
          ],
          [
            11.6,
            15.1,
            "Este es un proceso crítico ante el Consejo de Salubridad General,"
          ],
          [
            15.8,
            19.3,
            "establece un estándar riguroso que debe seguir todo el personal de admisión,"
          ],
          [
            19.6,
            24.1,
            "enfermería y medicina para recibir correctamente a cada paciente."
          ],
          [
            24.8,
            28.7,
            "Independientemente de si el paciente llega por consulta externa, urgencias,"
          ],
          [
            28.9,
            31.9,
            "hospitalización programada o servicios ambulatorios,"
          ],
          [
            32.5,
            37,
            "todos siguen un mismo proceso unificado para garantizar una atención segura."
          ],
          [
            37.5,
            41.1,
            "Recuerden que un mal registro inicial afecta todo el expediente."
          ],
          [
            41.4,
            46.1,
            "Utilicen siempre dos identificadores, nombre completo y fecha de nacimiento."
          ],
          [
            46.9,
            51.1,
            "Recuerden que este registro es un documento médico legal de alta importancia."
          ],
          [
            51.3,
            57.2,
            "Ante casos complejos, como fechas con formato extranjero o nombres que no coinciden con seguros,"
          ],
          [
            57.5,
            59.5,
            "verifiquen directamente con el paciente o familiar."
          ],
          [
            60,
            64.2,
            "Mantengan notas temporales para evitar rehacer documentación innecesariamente."
          ],
          [
            65,
            67.7,
            "El flujo de ingreso es claro, admisión registra,"
          ],
          [
            68,
            74.1,
            "enfermería realiza la doble verificación y acompaña al paciente y finalmente el médico establece el plan clínico"
          ],
          [
            74.1,
            75.8,
            "basándose en información precisa."
          ],
          [
            77.9,
            84.1,
            "Al ingresar debemos completar el formato de registro, el aviso de privacidad y el consentimiento informado si hay procedimientos."
          ],
          [
            84.1,
            88.4,
            "A los pacientes hospitalizados, entreguen siempre el reglamento del hospital."
          ],
          [
            91,
            93.7,
            "Para el egreso, nadie debe irse con pendientes."
          ],
          [
            94.2,
            95.6,
            "Una vez que el médico da el alta,"
          ],
          [
            95.9,
            101.1,
            "enfermería notifica a admisión para asegurar que no existan cobros o trámites administrativos incompletos."
          ],
          [
            103.8,
            106.6,
            "En resumen, un buen registro es la base de la seguridad."
          ],
          [
            107.2,
            112.2,
            "Aseguren siempre la identidad del paciente, verifiquen las fechas y revisen los cargos antes del alta."
          ],
          [
            112.2,
            114.3,
            "Pueden continuar con la evaluación."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación ACC.1.1",
            "url": "presentaciones/acc11-proceso-aceptacion.html"
          },
          {
            "nombre": "Guía rápida ACC.1.1 (PDF)",
            "url": "materiales/acc11-proceso-aceptacion-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿A qué áreas aplica el proceso de aceptación?",
        "opciones": [
          "Admisión, enfermería y personal médico",
          "Solo admisión",
          "Solo caja",
          "Solo urgencias"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuáles son las formas de ingreso de un paciente?",
        "opciones": [
          "Solo urgencias",
          "Consulta externa, urgencias, hospitalización programada y procedimiento ambulatorio",
          "Solo hospitalización",
          "Solo por cita telefónica"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué documento debe solicitar admisión al registrar al paciente?",
        "opciones": [
          "Un comprobante de domicilio",
          "Una carta de recomendación",
          "Una identificación oficial, como INE o pasaporte",
          "Ninguno"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Por qué es tan importante el registro inicial?",
        "opciones": [
          "Solo por estadística",
          "Porque lo pide el paciente",
          "Porque se usa para publicidad",
          "Porque es un documento médico-legal y sus errores se repiten en todo el expediente"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Un pasaporte de EE. UU. muestra la fecha 04/03/1990. ¿Qué haces?",
        "opciones": [
          "Preguntas directamente al paciente o familiar su fecha de nacimiento",
          "La registras como 4 de marzo",
          "La registras como 3 de abril",
          "Dejas la fecha vacía"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Si el paciente usa seguro, el nombre registrado debe:",
        "opciones": [
          "Ser el apodo del paciente",
          "Coincidir con la credencial del seguro",
          "Escribirse solo con iniciales",
          "Copiarse del brazalete"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Para un menor mexicano sin documentos, ¿qué puedes buscar en la página del gobierno?",
        "opciones": [
          "Su RFC",
          "Su número de seguro social",
          "Su CURP, con nombre, fecha y estado de nacimiento",
          "Su credencial escolar"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué entrega admisión a enfermería al reportar el arribo?",
        "opciones": [
          "La hoja de cargos",
          "El reglamento",
          "El consentimiento firmado",
          "Una copia de la identificación del paciente"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué hace enfermería al recibir al paciente?",
        "opciones": [
          "La doble verificación de sus datos y lo acompaña con el médico",
          "El cobro del servicio",
          "La factura",
          "El alta"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál de estos documentos se llena al ingreso de todo paciente?",
        "opciones": [
          "La hoja de egreso",
          "El aviso de privacidad",
          "La factura",
          "La nota de defunción"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué se entrega a los pacientes hospitalizados?",
        "opciones": [
          "Un descuento",
          "Las llaves del cuarto",
          "El reglamento del hospital con depósitos, garantías y horarios de visita",
          "Su expediente original"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Al egreso, ¿qué entrega enfermería a admisión?",
        "opciones": [
          "El brazalete",
          "La receta",
          "Las pertenencias",
          "La hoja de cargos para revisar pendientes"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal de admisión, recepción, caja, enfermería y médicos.",
    "nivel": "Básico",
    "objetivos": [
      "Registrar al paciente con identificación oficial y dos identificadores.",
      "Seguir el flujo de ingreso con doble verificación.",
      "Completar los documentos de ingreso y el proceso de egreso."
    ]
  },
  {
    "id": "rpbi",
    "titulo": "RPBI: manejo de residuos biológico-infecciosos",
    "area": "Enfermería",
    "horas": 2,
    "obligatorio": true,
    "descripcion": "Identificación, envasado, almacenamiento temporal y recolección de RPBI conforme a la NOM-087.",
    "orden": 7,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "RPBI · Manejo hospitalario: video del curso",
        "duracion": "2:57 min",
        "texto": "Identificación, envasado, almacenamiento temporal y recolección de RPBI conforme a la NOM-087.",
        "video": "rpbi-manejo-hospitalario.mp4",
        "segundosMinimos": 159,
        "subtitulos": [
          [
            0,
            5.4,
            "Bienvenidos a este curso sobre el manejo de residuos peligrosos, biológico-infecciosos,"
          ],
          [
            5.5,
            11.9,
            "también conocidos como RPBI, basado en la normativa vigente para garantizar la seguridad de nuestras instalaciones."
          ],
          [
            13.5,
            19.5,
            "Manejar estos residuos adecuadamente protege a todo nuestro personal, a los pacientes y al medio ambiente."
          ],
          [
            20.4,
            25.7,
            "La norma NOM-087 es de cumplimiento obligatorio para todo establecimiento de salud,"
          ],
          [
            25.7,
            32.6,
            "donde el personal clínico identifica y separa los residuos, mientras que el equipo de intendencia realiza el registro,"
          ],
          [
            32.7,
            35.9,
            "mensaje y entrega a la empresa recolectora autorizada."
          ],
          [
            37.3,
            42.4,
            "El proceso técnico consta de cuatro pasos fundamentales que inician en el punto de generación."
          ],
          [
            43,
            46.6,
            "Identificar el tipo de residuo, envasarlo correctamente,"
          ],
          [
            47,
            52.2,
            "almacenarlo temporalmente y finalmente realizar su recolección bajo protocolos establecidos."
          ],
          [
            52.2,
            56.1,
            "Cada residuo requiere un recipiente específico."
          ],
          [
            56.3,
            61.1,
            "Use bolsas rojas para materiales empapados, contenedores herméticos para sangre líquida,"
          ],
          [
            61.6,
            67.1,
            "bolsas amarillas para patológicos y los contenedores rígidos rojos para objetos punzocortantes,"
          ],
          [
            67.5,
            69.6,
            "los cuales nunca deben ser reencapuchados."
          ],
          [
            70.3,
            75,
            "Es importante recordar que no todo lo que se genera en el hospital es un residuo peligroso."
          ],
          [
            75.2,
            81.2,
            "Artículos como pañales o toallas de pacientes sin sospecha de enfermedades infectocontagiosas se consideran basura"
          ],
          [
            81.2,
            84.3,
            "común, lo que simplifica nuestra gestión y separación."
          ],
          [
            86.5,
            90.9,
            "Una vez que el contenedor o la bolsa alcanza el 80% de su capacidad,"
          ],
          [
            91.6,
            95.4,
            "debe cerrarse y etiquetarse claramente con la fecha y el área de origen."
          ],
          [
            96.3,
            100,
            "Solicite sus insumos necesarios directamente a la jefatura de intendencia."
          ],
          [
            100.6,
            104.2,
            "El almacenamiento temporal debe ubicarse fuera del área operativa."
          ],
          [
            104.6,
            110.4,
            "Es vital resguardar los patológicos en congelación y consultar siempre con la jefatura de intendencia sobre la"
          ],
          [
            110.4,
            113.2,
            "situación legal de cualquier muestra antes de desecharla."
          ],
          [
            114.9,
            117.2,
            "La recolección interna debe ser segura,"
          ],
          [
            117.6,
            124.6,
            "utilizando rutas que eviten áreas de espera y horarios de comida de los pacientes, prefiriendo siempre el horario nocturno."
          ],
          [
            124.8,
            128.9,
            "Además, el carro de transporte debe lavarse diariamente con jabón."
          ],
          [
            129.3,
            133.2,
            "Todo proceso administrativo de residuos debe dejar un rastro documental."
          ],
          [
            133.2,
            137.4,
            "Esto incluye el registro como generador, el uso de bitácoras,"
          ],
          [
            137.7,
            143.7,
            "la elaboración del reporte anual y el seguimiento estricto de los manifiestos de entrega, transporte y recepción."
          ],
          [
            145,
            146.5,
            "La seguridad es prioridad."
          ],
          [
            146.9,
            153.4,
            "Cualquier exposición accidental, como un pinchazo, debe reportarse inmediatamente a Epidemiología y a la Dirección Médica."
          ],
          [
            153.9,
            159.2,
            "Del mismo modo, reporte cualquier objeto punzocortante fuera de lugar a la Jefatura de Enfermería."
          ],
          [
            160.3,
            167.8,
            "Recuerde siempre seguir el orden de identificar, envasar, almacenar y recolectar, mantenga cada residuo en su lugar,"
          ],
          [
            168.3,
            172.5,
            "respete los límites de capacidad y reporte cualquier incidente de inmediato."
          ],
          [
            173.1,
            175.3,
            "Ahora, proceda con la evaluación de este curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación RPBI",
            "url": "presentaciones/rpbi-manejo-hospitalario.html"
          },
          {
            "nombre": "Guía rápida RPBI (PDF)",
            "url": "materiales/rpbi-manejo-hospitalario-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué norma regula el manejo de los RPBI?",
        "opciones": [
          "NOM-087-SEMARNAT-SSA1-2002",
          "NOM-017-STPS-2008",
          "NOM-004-SSA3-2012",
          "NOM-220-SSA1-2016"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es el orden de los cuatro pasos del manejo de RPBI?",
        "opciones": [
          "Recolectar, envasar, identificar, almacenar",
          "Identificar, envasar, almacenar y recolectar",
          "Almacenar, identificar, recolectar, envasar",
          "Envasar, recolectar, almacenar, identificar"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Una gasa empapada de sangre va en:",
        "opciones": [
          "Bolsa negra",
          "Bolsa amarilla",
          "Bolsa roja",
          "Recipiente rígido"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La sangre líquida se deposita en:",
        "opciones": [
          "Bolsa roja abierta",
          "El drenaje",
          "Bolsa negra",
          "Recipiente hermético con tapa"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Una placenta que no está en formol va en:",
        "opciones": [
          "Bolsa amarilla",
          "Bolsa roja",
          "Recipiente rígido",
          "Basura común"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cómo se desechan las agujas?",
        "opciones": [
          "Reencapuchadas en la bolsa roja",
          "Sin reencapuchar, en el recipiente rígido rojo",
          "En la basura común envueltas en papel",
          "En la bolsa amarilla"
        ],
        "correcta": 1
      },
      {
        "pregunta": "El pañal de un paciente sin sospecha de enfermedad infectocontagiosa es:",
        "opciones": [
          "RPBI en bolsa roja",
          "RPBI en bolsa amarilla",
          "Basura común",
          "Punzocortante"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿A qué nivel de llenado se cierra un recipiente o bolsa de RPBI?",
        "opciones": [
          "100 %",
          "Cuando ya no cierra",
          "50 %",
          "80 %"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué datos lleva la etiqueta del recipiente?",
        "opciones": [
          "Fecha y área de origen",
          "Solo el nombre del paciente",
          "El costo del material",
          "Nada, no se etiqueta"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Dónde se resguardan los residuos patológicos?",
        "opciones": [
          "En el cuarto del paciente",
          "En un congelador hasta su disposición final",
          "En la central de enfermería",
          "En la bolsa negra común"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué deben evitar las rutas de recolección interna?",
        "opciones": [
          "Los elevadores de servicio",
          "El almacén temporal",
          "Las áreas de espera y los horarios de alimentación de los pacientes",
          "La salida del hospital"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si sufres un pinchazo con una aguja usada, debes:",
        "opciones": [
          "Esperar a ver si hay síntomas",
          "Comentarlo al final del turno",
          "Lavarte y no decir nada",
          "Reportarlo de inmediato a Epidemiología y a la Dirección Médica"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal de enfermería, médicos, laboratorio, quirófano e intendencia.",
    "nivel": "Básico",
    "objetivos": [
      "Clasificar y envasar cada tipo de RPBI en su contenedor.",
      "Distinguir el RPBI de la basura común.",
      "Aplicar los criterios de cierre, almacenamiento, recolección y reporte de accidentes."
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
    "descripcion": "Qué es el EPP, cómo se elige según la NOM-017-STPS-2008 y qué riesgo predomina en cada área del hospital.",
    "orden": 13,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "EPP · Equipo de protección personal: video del curso",
        "duracion": "2:24 min",
        "texto": "Qué es el EPP, cómo se elige según la NOM-017-STPS-2008 y qué riesgo predomina en cada área del hospital.",
        "video": "epp-equipo-proteccion-personal.mp4",
        "segundosMinimos": 129,
        "subtitulos": [
          [
            0,
            3.5,
            "Bienvenidos a este curso sobre el equipo de protección personal."
          ],
          [
            4.2,
            11.5,
            "Vamos a explorar cómo utilizar correctamente estos elementos esenciales para garantizar nuestra seguridad en el entorno hospitalario."
          ],
          [
            12.6,
            16.6,
            "El equipo de protección personal es tu última barrera contra los riesgos."
          ],
          [
            17.2,
            20.8,
            "Recuerda que no sustituye a otros controles de ingeniería o prevención,"
          ],
          [
            21.1,
            28.1,
            "sino que los complementa bajo la norma oficial mexicana NOM-017-STPS-2008."
          ],
          [
            29.1,
            32.3,
            "No existe un equipo universal para todo el hospital."
          ],
          [
            32.8,
            36,
            "La elección adecuada debe basarse en cuatro factores clave."
          ],
          [
            36.4,
            42.3,
            "La actividad, el tipo de riesgo, la región del cuerpo a proteger y las tablas normativas."
          ],
          [
            43.2,
            51.2,
            "Para proteger la cabeza, ojos, cara y oídos, debemos considerar cascos de impacto o dieléctricos, goggles,"
          ],
          [
            51.6,
            57.8,
            "caretas o protección auditiva, dependiendo siempre de la naturaleza específica de la amenaza en nuestra zona."
          ],
          [
            58.3,
            61.4,
            "El cuidado de las vías respiratorias y las manos es crucial."
          ],
          [
            62,
            65.3,
            "Utiliza mascarillas o respiradores adecuados según la exposición."
          ],
          [
            65.9,
            71.1,
            "Y recuerda que no existe un guante único capaz de proteger contra todos los riesgos simultáneamente."
          ],
          [
            72.2,
            78.3,
            "Finalmente, protegemos el tronco con batas o mandiles y seleccionamos calzado ocupacional específico."
          ],
          [
            78.3,
            84.9,
            "Además, existen equipos especializados como arneses para alturas o indumentaria técnica para brigadistas,"
          ],
          [
            85.3,
            86.8,
            "según cada necesidad puntual."
          ],
          [
            87.7,
            89.7,
            "Cada área clínica tiene sus desafíos."
          ],
          [
            89.9,
            96.4,
            "Por ejemplo, en terapia intensiva predomina el riesgo biológico, mientras que en áreas como hemodinamia o quirófano,"
          ],
          [
            96.7,
            100.9,
            "debemos añadir protección contra radiación o material punzocortante, respectivamente."
          ],
          [
            103.1,
            106.4,
            "El personal de apoyo también requiere protección específica,"
          ],
          [
            106.5,
            110.7,
            "desde el manejo de muestras biológicas y químicos en laboratorios y limpieza,"
          ],
          [
            111,
            115.4,
            "hasta los riesgos eléctricos o mecánicos que enfrenta el equipo de mantenimiento diariamente."
          ],
          [
            117.5,
            121,
            "El uso razonado es fundamental, ni de menos ni de más."
          ],
          [
            121.4,
            123.9,
            "El equipo debe elegirse con una intención clara."
          ],
          [
            124.2,
            130.6,
            "La sobreutilización no garantiza mayor seguridad, sino que desgasta el material y dificulta nuestras labores."
          ],
          [
            131.8,
            136.1,
            "En resumen, identifica siempre el riesgo antes de elegir tu equipo."
          ],
          [
            136.7,
            139.7,
            "Prioriza y usa solo lo necesario."
          ],
          [
            140.5,
            143.9,
            "Has terminado esta parte, puedes proceder con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación EPP",
            "url": "presentaciones/epp-equipo-proteccion-personal.html"
          },
          {
            "nombre": "Guía rápida EPP (PDF)",
            "url": "materiales/epp-equipo-proteccion-personal-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué es el equipo de protección personal?",
        "opciones": [
          "Elementos que usa el trabajador para disminuir su exposición a un riesgo específico",
          "El uniforme institucional",
          "Cualquier equipo médico del hospital",
          "Las señales de seguridad del edificio"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué norma regula la selección, uso y manejo del EPP?",
        "opciones": [
          "NOM-087",
          "NOM-017-STPS-2008",
          "NOM-004",
          "NOM-220"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Respecto a los controles de ingeniería, el EPP:",
        "opciones": [
          "Los sustituye por completo",
          "Los vuelve innecesarios",
          "Los complementa; no los sustituye",
          "No tiene relación con ellos"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Con qué criterio se elige el EPP?",
        "opciones": [
          "Por gusto personal",
          "Por el color del uniforme",
          "Por antigüedad en el puesto",
          "Por la actividad, el tipo de riesgo y la región del cuerpo"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Para proteger ojos y cara de salpicaduras de líquidos se usa:",
        "opciones": [
          "Pantalla facial, careta o goggles",
          "Tapones auditivos",
          "Casco dieléctrico",
          "Polainas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué protección se usa contra el ruido?",
        "opciones": [
          "Mascarilla desechable",
          "Tapones o conchas auditivas",
          "Careta",
          "Mandil"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué afirmación sobre los guantes es correcta?",
        "opciones": [
          "Un mismo guante protege de todo",
          "Los guantes de nitrilo sirven para electricidad",
          "No existe un guante universal; se elige según el riesgo",
          "Los guantes no son EPP"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Para gases y vapores se requiere:",
        "opciones": [
          "Cubrebocas de tela",
          "Mascarilla desechable para polvos",
          "Careta",
          "Un respirador específico para gases y vapores"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuál es el riesgo predominante en hemodinamia?",
        "opciones": [
          "Biológico y radiación ionizante",
          "Solo ruido",
          "Solo químicos",
          "Caídas de altura"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es el riesgo predominante en CEyE?",
        "opciones": [
          "Radiación ionizante",
          "Instrumental contaminado",
          "Ruido",
          "Temperaturas extremas"
        ],
        "correcta": 1
      },
      {
        "pregunta": "El calzado conductivo protege contra:",
        "opciones": [
          "Caída de objetos",
          "Agua",
          "Electricidad estática",
          "Altas temperaturas"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuál es la forma correcta de usar el EPP?",
        "opciones": [
          "Usar todo el equipo disponible toda la jornada",
          "No usarlo si la tarea es corta",
          "Compartirlo entre compañeros",
          "Elegirlo con intención según la tarea y evitar la sobreutilización"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Todo el personal expuesto a riesgos biológicos, químicos o físicos.",
    "nivel": "Básico",
    "objetivos": [
      "Explicar qué es el EPP y su lugar entre las medidas de prevención.",
      "Elegir el equipo según actividad, riesgo y región del cuerpo.",
      "Reconocer el riesgo predominante de cada área del hospital."
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
  },
  {
    "id": "aesp6",
    "titulo": "AESP 6: Evaluar y reevaluar el riesgo de caídas",
    "area": "Calidad y Seguridad",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Evaluación inicial y reevaluación del riesgo de caídas, medidas de prevención, señalización y reporte de eventos.",
    "orden": 3.5,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "AESP 6 · Riesgo de caídas: video del curso",
        "duracion": "3:06 min",
        "texto": "Evaluación inicial y reevaluación del riesgo de caídas, medidas de prevención, señalización y reporte de eventos.",
        "video": "aesp6-riesgo-caidas.mp4",
        "segundosMinimos": 167,
        "subtitulos": [
          [
            0,
            5.3,
            "Bienvenida a este repaso sobre la Acción Esencial para la Seguridad del Paciente número 6,"
          ],
          [
            5.6,
            11,
            "centrada en cómo evaluar y reevaluar de manera efectiva el riesgo de caídas en nuestro entorno hospitalario."
          ],
          [
            12,
            17.2,
            "Nuestro objetivo fundamental es reducir al mínimo el riesgo de daños por caídas."
          ],
          [
            17.5,
            23.9,
            "Esta meta nos involucra a todos, tanto al personal clínico como no clínico, en cada interacción con nuestros pacientes."
          ],
          [
            24.6,
            31.1,
            "La evaluación debe ocurrir desde el primer contacto, documentándose en enfermería dentro de las primeras 24 horas."
          ],
          [
            31.7,
            37.8,
            "La reevaluación es obligatoria ante cambios de turno, variaciones en el estado de alerta o cambios de servicio."
          ],
          [
            39.1,
            44.3,
            "Es importante identificar de inmediato a los pacientes con alto riesgo sin necesidad de aplicar escalas."
          ],
          [
            44.4,
            48.6,
            "Esto incluye a menores de tres años, mayores de 65, embarazadas,"
          ],
          [
            49.1,
            53.8,
            "personas inconscientes y quienes tienen dificultad para caminar."
          ],
          [
            54.5,
            61.9,
            "Sin importar el riesgo, aplicamos medidas universales: barandales elevados, camas frenadas, buena iluminación,"
          ],
          [
            62.4,
            66.7,
            "timbre al alcance, paso libre de obstáculos y calzado adecuado."
          ],
          [
            67.3,
            71.2,
            "La educación al paciente y su familia con su firma es indispensable."
          ],
          [
            71.8,
            75.6,
            "Para pacientes mayores de 13 años, utilizamos la escala de Morse."
          ],
          [
            76,
            83,
            "Esta herramienta analiza seis variables clave: caídas previas, diagnóstico secundario, ayudas para la marcha,"
          ],
          [
            83.1,
            88,
            "vía intravenosa, tipo de marcha y el estado mental del paciente."
          ],
          [
            88.4,
            91,
            "El puntaje de Morse define nuestras acciones."
          ],
          [
            91.4,
            94.2,
            "De 0 a 24 puntos son cuidados básicos."
          ],
          [
            94.6,
            101.7,
            "Hasta 50 puntos aumentamos medidas de seguridad y con 51 o más el acompañamiento continuo es obligatorio."
          ],
          [
            102.6,
            108.4,
            "En pediatría, específicamente entre los 3 y 13 años, empleamos la escala Humpty Dumpty."
          ],
          [
            108.9,
            115.2,
            "Aquí, un puntaje de 7 a 11 indica riesgo bajo, mientras que 12 o más puntos señalan un riesgo elevado."
          ],
          [
            116.8,
            123.1,
            "En el área de Imagenología, basta una respuesta afirmativa a las preguntas sobre dispositivos invasivos,"
          ],
          [
            123.4,
            130.6,
            "dependencia para moverse o necesidad de sedación para clasificar al paciente como de alto riesgo y requerir traslado asistido."
          ],
          [
            131.1,
            132.8,
            "La señalización visual es clave."
          ],
          [
            133.1,
            137.6,
            "Una ficha verde, amarilla o roja en la puerta comunica el riesgo a todo el equipo."
          ],
          [
            138.3,
            143.1,
            "El personal de enfermería se encarga de mantener esta información actualizada tras cada reevaluación."
          ],
          [
            145.3,
            148,
            "Ante cualquier caída, el protocolo es claro."
          ],
          [
            148.5,
            151.7,
            "Notifica inmediatamente al jefe y al médico de guardia."
          ],
          [
            151.9,
            153.4,
            "Valora el estado del paciente."
          ],
          [
            154.1,
            158,
            "Completa el formato de registro en el Anexo 4 y reporta el incidente."
          ],
          [
            158.4,
            161.6,
            "En la plataforma de calidad, clasifica el evento según su impacto."
          ],
          [
            162.1,
            164.6,
            "Cuasi falla si el evento no llegó a concretarse."
          ],
          [
            164.6,
            170.2,
            "Evento adverso si hubo daño, o centinela en casos de lesiones graves o fallecimiento."
          ],
          [
            171.7,
            177.5,
            "Recuerden, la clave es evaluar al ingreso, reevaluar ante cambios y proteger siempre."
          ],
          [
            178,
            181.4,
            "Sigamos estas pautas para garantizar la seguridad de nuestros pacientes."
          ],
          [
            182.1,
            184.6,
            "Ahora pueden continuar con la evaluación final del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación AESP 6",
            "url": "presentaciones/aesp6-riesgo-caidas.html"
          },
          {
            "nombre": "Guía rápida AESP 6 (PDF)",
            "url": "materiales/aesp6-riesgo-caidas-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿A quién aplica la AESP 6?",
        "opciones": [
          "A todo el personal clínico y no clínico con contacto con pacientes",
          "Solo a enfermería",
          "Solo al personal médico",
          "Solo a camilleros"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿En qué plazo se documenta la evaluación inicial del riesgo de caídas?",
        "opciones": [
          "En la primera semana",
          "Dentro de las primeras 24 horas",
          "Solo al egreso",
          "Cuando el paciente lo solicite"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuándo es obligatorio reevaluar el riesgo de caídas?",
        "opciones": [
          "Solo al ingreso",
          "Una vez por semana",
          "En cada cambio de turno, de estado de alerta o de servicio",
          "Únicamente si el paciente se cae"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuál de estos pacientes es de alto riesgo sin necesidad de aplicar una escala?",
        "opciones": [
          "Adulto de 40 años que camina sin ayuda",
          "Paciente de 30 años ambulatorio",
          "Adolescente de 15 años sin diagnóstico secundario",
          "Paciente embarazada"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuál es una medida universal que se aplica a todos los pacientes?",
        "opciones": [
          "Mantener los barandales elevados y la cama frenada",
          "Sujetar a todos los pacientes",
          "Prohibir que caminen",
          "Retirar el timbre de la habitación"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué escala se usa en pacientes mayores de 13 años?",
        "opciones": [
          "Humpty Dumpty",
          "Morse",
          "Glasgow",
          "Apgar"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En la escala de Morse, ¿qué puntaje indica riesgo alto?",
        "opciones": [
          "0 a 24",
          "25 a 50",
          "51 o más",
          "10 o más"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Con riesgo alto en la escala de Morse, ¿qué medida es obligatoria?",
        "opciones": [
          "Que camine solo para fortalecerse",
          "Dejar la cama en la posición más alta",
          "Apagar la luz por la noche",
          "Que permanezca acompañado por un familiar las 24 horas"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué escala se usa en pacientes pediátricos de 3 a 13 años?",
        "opciones": [
          "Humpty Dumpty",
          "Morse",
          "Braden",
          "Norton"
        ],
        "correcta": 0
      },
      {
        "pregunta": "En la escala Humpty Dumpty, ¿qué puntaje indica riesgo alto?",
        "opciones": [
          "7 a 11",
          "12 o más",
          "Menos de 7",
          "Exactamente 10"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En imagenología, ¿cuándo se clasifica al paciente como de alto riesgo?",
        "opciones": [
          "Solo si es mayor de 80 años",
          "Solo si ya se cayó antes",
          "Si tiene drenajes o dispositivos, depende de otros para moverse o requiere sedación",
          "Nunca, en imagenología no se evalúa"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué color de ficha en la puerta indica riesgo medio?",
        "opciones": [
          "Verde",
          "Rojo",
          "Azul",
          "Amarillo"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si un paciente se cae, ¿a quién se avisa primero?",
        "opciones": [
          "Al jefe inmediato y al médico de guardia",
          "Solo a la familia",
          "A mantenimiento",
          "A nadie, solo se registra"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué formato se llena para registrar una caída?",
        "opciones": [
          "La hoja de cargos",
          "El anexo 4, formato de registro de caídas",
          "El consentimiento informado",
          "La nota de egreso"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Una caída que provocó una fractura se reporta en la plataforma de calidad como:",
        "opciones": [
          "Cuasifalla",
          "Sin daño",
          "Evento centinela",
          "No se reporta"
        ],
        "correcta": 2
      }
    ],
    "dirigido": "Todo el personal clínico y no clínico con contacto con pacientes.",
    "nivel": "Básico",
    "objetivos": [
      "Evaluar y reevaluar el riesgo de caídas con la escala que corresponde.",
      "Aplicar las medidas universales y las de cada nivel de riesgo.",
      "Actuar y reportar correctamente ante una caída."
    ]
  },
  {
    "id": "huracanes",
    "titulo": "Tormentas y huracanes",
    "area": "Seguridad e Higiene",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Clasificación de ciclones tropicales, preparación del hospital y protocolo de actuación durante la contingencia.",
    "orden": 12.2,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Tormentas y huracanes: video del curso",
        "duracion": "1:59 min",
        "texto": "Clasificación de ciclones tropicales, preparación del hospital y protocolo de actuación durante la contingencia.",
        "video": "huracanes-tormentas.mp4",
        "segundosMinimos": 106,
        "subtitulos": [
          [
            0,
            4.6,
            "Bienvenidos a este curso sobre la prevención y el manejo de tormentas y huracanes,"
          ],
          [
            4.9,
            7.8,
            "diseñado para garantizar la seguridad de nuestras instalaciones."
          ],
          [
            8.5,
            14.1,
            "Un ciclón tropical es un sistema meteorológico de aire cálido y húmedo con vientos intensos."
          ],
          [
            14.5,
            20.8,
            "Su evolución comienza como depresión tropical, se convierte en tormenta y puede alcanzar el grado de huracán."
          ],
          [
            21.6,
            27,
            "La escala Saffir-Simpson clasifica los huracanes del 1 al 5 basándose en la velocidad de sus vientos."
          ],
          [
            27.6,
            34.9,
            "Es importante recordar que, a mayor categoría, aumenta exponencialmente el riesgo de daños estructurales."
          ],
          [
            35.2,
            39.5,
            "Gracias al monitoreo de fuentes oficiales como CONAGUA y el Servicio Meteorológico Nacional,"
          ],
          [
            39.9,
            41.8,
            "podemos anticiparnos a estos fenómenos."
          ],
          [
            42.2,
            47,
            "En Los Cabos, el seguimiento constante nos permite una preparación oportuna."
          ],
          [
            47.9,
            50.4,
            "La prevención comienza en la infraestructura."
          ],
          [
            50.4,
            56.3,
            "Antes de cualquier viento fuerte, debemos inspeccionar azoteas, asegurar objetos externos,"
          ],
          [
            56.6,
            61.3,
            "limpiar desagües y verificar el estado de nuestras instalaciones eléctricas."
          ],
          [
            61.6,
            68.4,
            "Para que el hospital siga operando ante una emergencia, es vital contar con reservas de agua, suministros médicos y alimentos."
          ],
          [
            69.1,
            72.9,
            "Asimismo, debemos asegurar el funcionamiento de nuestra planta de emergencia."
          ],
          [
            73.5,
            80.3,
            "La seguridad física depende de proteger los equipos contra el agua y mantener siempre libres nuestras rutas de evacuación."
          ],
          [
            80.5,
            84.8,
            "Cualquier condición insegura detectada debe ser reportada de inmediato."
          ],
          [
            85.2,
            91.9,
            "La organización es clave. Debemos tener claro de antemano qué personal permanece en el hospital y mantener un canal de"
          ],
          [
            91.9,
            95.4,
            "comunicación constante con la Unidad Interna de Protección Civil."
          ],
          [
            96.2,
            99.7,
            "Durante la contingencia, mantén la calma y permanece en tu área."
          ],
          [
            100.2,
            107.7,
            "No intentes reparaciones eléctricas o de gas por tu cuenta y utiliza únicamente información de fuentes oficiales para evitar rumores."
          ],
          [
            108.2,
            113.8,
            "En resumen, prepárate con antelación, mantén la calma y confía solo en información oficial."
          ],
          [
            114.5,
            117.4,
            "Ahora, por favor, continúa con la evaluación final de este curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Huracanes",
            "url": "presentaciones/huracanes-tormentas.html"
          },
          {
            "nombre": "Guía rápida Huracanes (PDF)",
            "url": "materiales/huracanes-tormentas-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué es un ciclón tropical?",
        "opciones": [
          "Un sistema de aire cálido y húmedo con vientos que giran alrededor de un centro",
          "Un sismo en el mar",
          "Una lluvia ligera de temporada",
          "Un frente frío del norte"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es el orden de evolución de un ciclón?",
        "opciones": [
          "Huracán, tormenta, depresión",
          "Depresión tropical, tormenta tropical, huracán",
          "Tormenta, huracán, depresión",
          "Depresión, huracán, tormenta"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿En qué se basa la escala Saffir-Simpson?",
        "opciones": [
          "En la cantidad de lluvia",
          "En el tamaño del ojo del huracán",
          "En la velocidad máxima del viento",
          "En la temperatura del mar"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuántas categorías tiene la escala Saffir-Simpson?",
        "opciones": [
          "3",
          "4",
          "10",
          "5"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuál es una fuente oficial de información durante un huracán?",
        "opciones": [
          "El Servicio Meteorológico Nacional",
          "Un grupo de chat de vecinos",
          "Un video viral",
          "Comentarios en redes sociales"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Antes de la temporada, ¿qué se revisa en azoteas y exteriores?",
        "opciones": [
          "La pintura",
          "Que desagües y canaletas estén libres y no haya objetos sueltos",
          "Las plantas de ornato",
          "Los letreros de horario"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué suministro es indispensable para la continuidad del hospital?",
        "opciones": [
          "Papelería decorativa",
          "Uniformes nuevos",
          "Agua potable, gases medicinales y combustible para la planta de emergencia",
          "Mobiliario de oficina"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cómo deben estar las rutas de evacuación?",
        "opciones": [
          "Con material almacenado",
          "Cerradas con llave",
          "Solo señalizadas en la entrada",
          "Libres de obstáculos"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si detectas un objeto que el viento podría lanzar, debes:",
        "opciones": [
          "Reportarlo de inmediato para que se corrija",
          "Ignorarlo si es pequeño",
          "Esperar a que pase el huracán",
          "Moverlo a la azotea"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Durante la contingencia observas un daño en la instalación de gas. ¿Qué haces?",
        "opciones": [
          "Lo reparo yo mismo",
          "Lo reporto al encargado y no lo manipulo",
          "Abro todas las válvulas",
          "Salgo del hospital sin avisar"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Durante el fenómeno, el personal debe:",
        "opciones": [
          "Salir a revisar los daños",
          "Ir a su casa",
          "Mantener la calma y permanecer en su área asignada",
          "Cambiar de área según prefiera"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Con quién se mantiene la comunicación durante una contingencia?",
        "opciones": [
          "Con proveedores",
          "Con la prensa",
          "Con los pacientes dados de alta",
          "Con la Unidad Interna de Protección Civil"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Todo el personal.",
    "nivel": "Básico",
    "objetivos": [
      "Reconocer cómo se clasifican los ciclones tropicales.",
      "Aplicar las medidas de preparación del hospital antes de un fenómeno.",
      "Actuar de forma segura durante la contingencia."
    ]
  },
  {
    "id": "codigo-amarillo",
    "titulo": "Código Amarillo: derrames de materiales peligrosos",
    "area": "Seguridad e Higiene",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Identificación de derrames químicos y de RPBI, kit de derrames y procedimiento de contención y limpieza.",
    "orden": 12.3,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Código Amarillo · Derrames: video del curso",
        "duracion": "2:18 min",
        "texto": "Identificación de derrames químicos y de RPBI, kit de derrames y procedimiento de contención y limpieza.",
        "video": "codigo-amarillo-derrames.mp4",
        "segundosMinimos": 124,
        "subtitulos": [
          [
            0,
            3.1,
            "Bienvenidos a este curso sobre el Código Amarillo,"
          ],
          [
            3.2,
            9.4,
            "donde aprenderemos la atención y manejo correcto ante derrames de materiales peligrosos dentro de nuestro entorno hospitalario."
          ],
          [
            10.5,
            15.2,
            "Los códigos de seguridad utilizan colores para agilizar nuestra respuesta ante emergencias."
          ],
          [
            15.7,
            22.6,
            "Podrás encontrar estos protocolos al reverso de tu credencial en el procedimiento 8 o consultando la página de calidad de tu sede."
          ],
          [
            24.3,
            32.3,
            "El Código Amarillo se activa ante derrames de sustancias químicas como reactivos o infectantes y residuos biológico-infecciosos."
          ],
          [
            33,
            36.1,
            "El objetivo principal es contener el derrame de forma segura,"
          ],
          [
            36.3,
            40.5,
            "minimizando riesgos y daños mediante el equipo de higiene y limpieza."
          ],
          [
            42.1,
            44.2,
            "Identificar el material es clave."
          ],
          [
            44.5,
            51,
            "Los químicos se reconocen por pictogramas en forma de rombo, mientras que los biológicos llevan el símbolo de riesgo biológico."
          ],
          [
            51.5,
            56.5,
            "Ante químicos, recuerda siempre consultar la hoja de datos de seguridad disponible en el área."
          ],
          [
            57.5,
            61.4,
            "Para responder eficazmente, tu kit debe estar siempre completo."
          ],
          [
            62,
            66.8,
            "Este incluye elementos de protección personal como botas, guantes, bata y lentes,"
          ],
          [
            67.1,
            73.6,
            "además de herramientas esenciales como cordones absorbentes, bolsas para residuos y señales de advertencia."
          ],
          [
            75.5,
            78.4,
            "Ante un derrame químico, sigue estos pasos."
          ],
          [
            78.7,
            80,
            "Detecta y activa el código."
          ],
          [
            80.7,
            83.6,
            "Avisa a higiene e identifica la sustancia."
          ],
          [
            84.1,
            93.2,
            "Protégete con tu equipo. Delimita la zona, absorbe con tapetes en forma de S, limpia y finalmente repone el material utilizado."
          ],
          [
            93.8,
            97,
            "Para derrames biológicos, activa el código y delimita el área."
          ],
          [
            97.5,
            103,
            "Usa guantes de carnaza antipunzocortantes, inactiva la sangre con hipoclorito al 6%,"
          ],
          [
            103.6,
            109.2,
            "desecha el residuo correctamente y realiza una desinfección profunda con sales cuaternarias."
          ],
          [
            110,
            112.3,
            "Un kit incompleto pone en riesgo la seguridad."
          ],
          [
            112.3,
            117.3,
            "El área de Seguridad e Higiene garantiza el suministro en zonas críticas,"
          ],
          [
            117.8,
            124.9,
            "pero es responsabilidad de todos reponer cualquier elemento utilizado durante una emergencia para asegurar la preparación continua."
          ],
          [
            125.7,
            131,
            "Recuerda, identifica, protégete, delimita, limpia y repón."
          ],
          [
            131.6,
            133.8,
            "Estos pasos son fundamentales para tu seguridad."
          ],
          [
            134.2,
            136.9,
            "Ahora estás listo para continuar con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Código Amarillo",
            "url": "presentaciones/codigo-amarillo-derrames.html"
          },
          {
            "nombre": "Guía rápida Código Amarillo (PDF)",
            "url": "materiales/codigo-amarillo-derrames-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Para qué emergencia se activa el Código Amarillo?",
        "opciones": [
          "Derrames de sustancias químicas o de RPBI",
          "Incendio",
          "Amenaza de bomba",
          "Paro cardiorrespiratorio"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Dónde puedes consultar los códigos de seguridad y sus extensiones?",
        "opciones": [
          "Solo con el director",
          "Al reverso de la credencial, en el procedimiento 8 o en la página de calidad",
          "En el periódico mural de la cafetería",
          "En ningún lado, se memorizan"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué equipo responde al Código Amarillo?",
        "opciones": [
          "Mantenimiento eléctrico",
          "Admisión",
          "Higiene y limpieza",
          "Recursos humanos"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cómo identificas que un derrame es químico?",
        "opciones": [
          "Por el olor",
          "Por el color del piso",
          "Por el símbolo de riesgo biológico",
          "Por los pictogramas en rombo del envase"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué documento indica los riesgos de la sustancia química derramada?",
        "opciones": [
          "La hoja de datos de seguridad",
          "La factura del proveedor",
          "El expediente clínico",
          "La bitácora de visitas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cómo se colocan los tapetes absorbentes en un derrame químico?",
        "opciones": [
          "En forma de cruz",
          "En forma de “S”",
          "Solo en el centro",
          "No se usan tapetes"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En un derrame químico, ¿dónde se depositan los residuos recogidos?",
        "opciones": [
          "En el drenaje",
          "En una bolsa amarilla",
          "En una bolsa negra",
          "En el contenedor de punzocortantes"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué guantes son obligatorios si el derrame incluye punzocortantes?",
        "opciones": [
          "Guantes de látex",
          "Guantes de nitrilo delgados",
          "Ningún guante",
          "Guantes de carnaza"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Con qué se inactiva la sangre en un derrame biológico?",
        "opciones": [
          "Hipoclorito de sodio al 6 %",
          "Alcohol en gel",
          "Agua caliente",
          "Detergente de ropa"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Con qué se hace la desinfección profunda después de un derrame de RPBI?",
        "opciones": [
          "Solo con agua",
          "Con sales cuaternarias y después agua y jabón",
          "Con aromatizante",
          "No se desinfecta"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuál es el primer paso ante cualquier derrame?",
        "opciones": [
          "Limpiar con un trapo",
          "Esperar a que se seque",
          "Detectarlo y activar el código",
          "Tomar una foto para redes"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Después de usar el kit de derrames, ¿qué debes hacer?",
        "opciones": [
          "Guardarlo como quedó",
          "Llevárselo a casa",
          "Tirarlo completo",
          "Reponer el material que se usó"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Todo el personal; en especial higiene, limpieza, laboratorio y enfermería.",
    "nivel": "Básico",
    "objetivos": [
      "Identificar un derrame químico o biológico.",
      "Aplicar el procedimiento de contención y limpieza que corresponde.",
      "Mantener completo el kit de derrames."
    ]
  },
  {
    "id": "accidentes-incidentes",
    "titulo": "Peligros, reporte e investigación de accidentes e incidentes",
    "area": "Seguridad e Higiene",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Conceptos de peligro y riesgo, Comisión Mixta, ciclo de prevención y cómo reportar e investigar accidentes e incidentes.",
    "orden": 12.4,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Accidentes e incidentes: video del curso",
        "duracion": "2:08 min",
        "texto": "Conceptos de peligro y riesgo, Comisión Mixta, ciclo de prevención y cómo reportar e investigar accidentes e incidentes.",
        "video": "accidentes-incidentes.mp4",
        "segundosMinimos": 114,
        "subtitulos": [
          [
            0,
            4.1,
            "Bienvenidos a este video sobre la importancia de identificar peligros,"
          ],
          [
            4.4,
            11.2,
            "reportar situaciones de riesgo y realizar investigaciones exhaustivas de accidentes e incidentes en nuestro entorno de trabajo."
          ],
          [
            12.1,
            14,
            "Es fundamental distinguir conceptos."
          ],
          [
            14.1,
            17.5,
            "Un peligro es cualquier elemento con el potencial de causar daño,"
          ],
          [
            17.7,
            24,
            "mientras que el riesgo es la probabilidad de que ese peligro efectivamente lo cause, como ocurre al manipular agujas."
          ],
          [
            25.9,
            31.1,
            "Entender la diferencia entre un acto inseguro, un incidente que pudo causar daño pero no lo hizo,"
          ],
          [
            31.7,
            37.4,
            "un accidente con lesiones y una enfermedad de trabajo es el primer paso para una gestión efectiva."
          ],
          [
            38.4,
            40.3,
            "La prevención diaria depende de nosotros."
          ],
          [
            40.8,
            46.9,
            "Seguir los procedimientos establecidos y usar nuestro equipo de protección personal evita convertir actos inseguros en"
          ],
          [
            46.9,
            49.4,
            "accidentes que ponen en riesgo nuestra integridad."
          ],
          [
            49.4,
            57.3,
            "Nuestra Comisión Mixta de Seguridad e Higiene trabaja activamente identificando causas y proponiendo mejoras mediante"
          ],
          [
            57.3,
            62.8,
            "recorridos de verificación, asegurando un entorno más seguro para todos los trabajadores."
          ],
          [
            63.3,
            65.6,
            "Seguir nuestro ciclo de prevención es clave."
          ],
          [
            65.9,
            70.9,
            "Comenzamos inspeccionando para identificar riesgos, luego investigamos y reportamos,"
          ],
          [
            71.3,
            76.5,
            "para finalmente corregir las fallas y verificar que nuestras soluciones realmente funcionen."
          ],
          [
            76.5,
            83.5,
            "Para que un reporte sea efectivo, debemos detallar con precisión quién estuvo involucrado, qué actividades realizaba,"
          ],
          [
            83.9,
            90,
            "dónde ocurrió y qué condiciones del entorno influyeron, proponiendo siempre medidas correctivas claras."
          ],
          [
            90.3,
            93.9,
            "Al investigar, prioricemos siempre los hechos sobre las suposiciones."
          ],
          [
            94.6,
            101,
            "Realicemos entrevistas individuales, documentemos con evidencia fotográfica y actuemos de forma objetiva y oportuna"
          ],
          [
            101,
            102.9,
            "para obtener resultados veraces."
          ],
          [
            104.2,
            105.8,
            "Tu participación es vital."
          ],
          [
            106.3,
            112.4,
            "Si detectas una condición insegura como un mal manejo de punzocortantes, repórtalo de inmediato a tu jefatura."
          ],
          [
            113,
            117.4,
            "Seguridad e Higiene dará el seguimiento necesario a tu reporte."
          ],
          [
            117.9,
            122.4,
            "Recuerda que un incidente reportado hoy es la clave para evitar un accidente mañana."
          ],
          [
            122.9,
            127.2,
            "Mantén la prevención como prioridad y continúa ahora con la evaluación de este curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Accidentes e incidentes",
            "url": "presentaciones/accidentes-incidentes.html"
          },
          {
            "nombre": "Guía rápida Accidentes e incidentes (PDF)",
            "url": "materiales/accidentes-incidentes-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué es un peligro?",
        "opciones": [
          "Algo con el potencial de causar daño",
          "La probabilidad de que ocurra un daño",
          "Un accidente que ya ocurrió",
          "Una sanción laboral"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué es el riesgo?",
        "opciones": [
          "Un objeto peligroso",
          "La probabilidad de que un peligro cause daño",
          "Una enfermedad de trabajo",
          "El formato de reporte"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Un evento que pudo causar daño pero no provocó lesión es:",
        "opciones": [
          "Un accidente",
          "Una enfermedad de trabajo",
          "Un incidente",
          "Un acto seguro"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Un evento que causó una lesión es:",
        "opciones": [
          "Un incidente",
          "Un peligro",
          "Un riesgo",
          "Un accidente"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Operar un equipo sin autorización es un ejemplo de:",
        "opciones": [
          "Acto inseguro",
          "Medida preventiva",
          "Control de ingeniería",
          "Incidente"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Quiénes integran la Comisión Mixta de Seguridad e Higiene?",
        "opciones": [
          "Solo directivos",
          "Representantes de los trabajadores y del patrón",
          "Solo personal de Protección Civil",
          "Pacientes y familiares"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cómo verifica la Comisión Mixta el cumplimiento de las medidas?",
        "opciones": [
          "Con encuestas a pacientes",
          "Revisando redes sociales",
          "Con recorridos de verificación en las instalaciones",
          "No verifica"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuál es el orden del ciclo de prevención?",
        "opciones": [
          "Reportar, olvidar, corregir",
          "Corregir, inspeccionar, investigar",
          "Investigar, sancionar, cerrar",
          "Inspeccionar, investigar, reportar, corregir y dar seguimiento"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué dato debe incluir el formato de reporte?",
        "opciones": [
          "Descripción de los hechos, turno, lugar y actividad",
          "Solo el nombre del jefe",
          "La opinión personal de quien reporta",
          "El salario del trabajador"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cómo debe ser la información de una investigación?",
        "opciones": [
          "Basada en rumores",
          "Objetiva, comprobable y sin suposiciones",
          "Basada en la opinión del grupo",
          "Recabada semanas después"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Por qué las entrevistas de una investigación se hacen por separado?",
        "opciones": [
          "Para ahorrar tiempo",
          "Para sancionar a alguien",
          "Para evitar sesgos",
          "No es necesario hacerlas"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si encuentras una aguja fuera de su contenedor, ¿qué haces?",
        "opciones": [
          "La dejas donde está",
          "La tiras a la basura común",
          "Esperas a fin de mes",
          "La desechas con seguridad en su contenedor y reportas la condición a tu jefatura"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Todo el personal.",
    "nivel": "Básico",
    "objetivos": [
      "Distinguir peligro, riesgo, acto inseguro, incidente y accidente.",
      "Reportar un evento con la información completa.",
      "Aplicar los criterios de una investigación objetiva."
    ]
  },
  {
    "id": "mejora-continua-sst",
    "titulo": "Mejora continua del sistema de gestión de seguridad y salud en el trabajo",
    "area": "Seguridad e Higiene",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Ciclo PHVA, fuentes de mejora, acciones correctivas y preventivas, indicadores y responsabilidad compartida.",
    "orden": 12.5,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Mejora continua en SST: video del curso",
        "duracion": "2:06 min",
        "texto": "Ciclo PHVA, fuentes de mejora, acciones correctivas y preventivas, indicadores y responsabilidad compartida.",
        "video": "mejora-continua-sst.mp4",
        "segundosMinimos": 113,
        "subtitulos": [
          [
            0,
            5.9,
            "Bienvenidos a este curso sobre la mejora continua del sistema de gestión de seguridad y salud en el trabajo."
          ],
          [
            6.5,
            10.8,
            "Exploraremos los pilares para mantener entornos laborales seguros y eficientes."
          ],
          [
            11.3,
            16,
            "La mejora continua es un proceso permanente que va más allá de cumplir protocolos."
          ],
          [
            16.2,
            18.3,
            "Se trata de identificar oportunidades,"
          ],
          [
            18.6,
            24.6,
            "implementar acciones y evaluar resultados para prevenir accidentes y minimizar riesgos de manera constante."
          ],
          [
            24.6,
            31.5,
            "Este proceso se estructura mediante el ciclo de planear, hacer, verificar y actuar."
          ],
          [
            31.8,
            34.4,
            "Identificamos peligros, ejecutamos controles,"
          ],
          [
            34.8,
            39.7,
            "supervisamos los resultados con indicadores y corregimos cualquier desviación para cerrar brechas."
          ],
          [
            41.2,
            46.5,
            "Las oportunidades de mejora provienen de múltiples fuentes, como auditorías, recorridos,"
          ],
          [
            46.8,
            49.6,
            "sugerencias del personal y cambios en las instalaciones."
          ],
          [
            50.4,
            56,
            "Recuerde que cualquier condición insegura observada debe registrarse para ser corregida eficazmente."
          ],
          [
            57.7,
            63.4,
            "Las acciones pueden ser correctivas, para eliminar la causa raíz de un incidente ocurrido, o preventivas,"
          ],
          [
            63.7,
            66.7,
            "para anticiparnos antes de que suceda una situación de riesgo."
          ],
          [
            66.8,
            70.2,
            "En ambos casos, documentamos y verificamos la solución."
          ],
          [
            71.8,
            74.3,
            "Ante un accidente, el protocolo es claro."
          ],
          [
            74.7,
            80.7,
            "Notifique de inmediato, investigue las causas, establezca las acciones correctivas necesarias,"
          ],
          [
            80.7,
            86.8,
            "Verifique su correcta implementación y, finalmente, documente todo el proceso para el cierre."
          ],
          [
            87.2,
            91.1,
            "Para medir el éxito de nuestras acciones, utilizamos indicadores clave."
          ],
          [
            91.3,
            97.7,
            "Estos van desde el número de incidentes y el avance en el cierre de acciones hasta el nivel de capacitación de nuestro personal."
          ],
          [
            98.9,
            101.8,
            "La seguridad es una responsabilidad compartida."
          ],
          [
            102.3,
            104.4,
            "Mientras los trabajadores reportan riesgos,"
          ],
          [
            104.6,
            111.9,
            "los responsables de área implementan los controles necesarios y la dirección facilita los recursos para garantizar el éxito del sistema."
          ],
          [
            113.1,
            118.5,
            "Recuerde, planee, haga, verifique, actúe y vuelva a empezar."
          ],
          [
            119.2,
            122.3,
            "Mantenga el compromiso de registrar y seguir cada hallazgo."
          ],
          [
            122.7,
            125.3,
            "Ahora, lo invito a continuar con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Mejora continua",
            "url": "presentaciones/mejora-continua-sst.html"
          },
          {
            "nombre": "Guía rápida Mejora continua (PDF)",
            "url": "materiales/mejora-continua-sst-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué es la mejora continua?",
        "opciones": [
          "Un proceso permanente de identificar oportunidades, implementar acciones y evaluar resultados",
          "Una auditoría que se hace una vez al año",
          "Un trámite exclusivo de Seguridad e Higiene",
          "Un castigo por incumplir"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué significan las siglas PHVA?",
        "opciones": [
          "Prevenir, Hablar, Vigilar, Avisar",
          "Planear, Hacer, Verificar, Actuar",
          "Proteger, Higiene, Vida, Ayuda",
          "Pedir, Hacer, Validar, Archivar"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En la etapa “Verificar” se realizan:",
        "opciones": [
          "Compras de equipo",
          "Contrataciones",
          "Inspecciones, auditorías y análisis de indicadores",
          "Vacaciones del personal"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuál es una fuente de oportunidades de mejora?",
        "opciones": [
          "Los rumores",
          "Las redes sociales",
          "El clima",
          "Las sugerencias del personal"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Una acción correctiva busca:",
        "opciones": [
          "Eliminar la causa raíz de una desviación para que no se repita",
          "Anticipar algo que nunca ha pasado",
          "Sancionar al responsable",
          "Cerrar el hallazgo sin revisar"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Asegurar un estante antes de que se caiga es un ejemplo de acción:",
        "opciones": [
          "Correctiva",
          "Preventiva",
          "Disciplinaria",
          "Administrativa"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Antes de cerrar formalmente un hallazgo se debe:",
        "opciones": [
          "Esperar un año",
          "Avisar a los pacientes",
          "Verificar que la acción funcionó y documentarlo",
          "Borrar el registro"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Ante un accidente, ¿a quién se notifica?",
        "opciones": [
          "A nadie",
          "Solo a un compañero",
          "A recursos humanos de otra sede",
          "Al jefe inmediato y a Seguridad e Higiene"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuál es un indicador de desempeño en seguridad?",
        "opciones": [
          "Porcentaje de acciones correctivas cerradas",
          "Número de pacientes atendidos",
          "Ventas de la farmacia",
          "Temperatura ambiente"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué le corresponde a cada trabajador?",
        "opciones": [
          "Aprobar presupuestos",
          "Reportar riesgos y condiciones inseguras",
          "Firmar auditorías externas",
          "Nada, es tarea de Seguridad e Higiene"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué le corresponde a la dirección?",
        "opciones": [
          "Hacer las inspecciones diarias",
          "Llenar los formatos de cada área",
          "Facilitar los recursos necesarios",
          "Ignorar los indicadores"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si después de aplicar una acción el problema persiste, se debe:",
        "opciones": [
          "Cerrar el hallazgo de todos modos",
          "Dejar de medirlo",
          "Culpar al área",
          "Reiniciar el ciclo con nuevas acciones"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Todo el personal; en especial jefes y responsables de área.",
    "nivel": "Básico",
    "objetivos": [
      "Explicar el ciclo de mejora continua (PHVA).",
      "Distinguir acciones correctivas y preventivas.",
      "Reportar riesgos y oportunidades de mejora."
    ]
  },
  {
    "id": "rpbi-prehospitalario",
    "titulo": "Manejo de RPBI en el área prehospitalaria",
    "area": "Atención Prehospitalaria",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Clasificación, envasado, sellado y recolección de RPBI en consultorios y unidades prehospitalarias.",
    "orden": 20,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "RPBI · Área prehospitalaria: video del curso",
        "duracion": "2:27 min",
        "texto": "Clasificación, envasado, sellado y recolección de RPBI en consultorios y unidades prehospitalarias.",
        "video": "rpbi-prehospitalario.mp4",
        "segundosMinimos": 132,
        "subtitulos": [
          [
            0,
            6.7,
            "Bienvenidos a este breve entrenamiento sobre el manejo adecuado de residuos peligrosos biológico-infecciosos, o RPBI,"
          ],
          [
            7.1,
            14,
            "dentro del entorno prehospitalario, un componente esencial para garantizar la seguridad de nuestro equipo y pacientes."
          ],
          [
            14.9,
            19.5,
            "Recientes supervisiones han detectado errores críticos en el manejo de bolsas y recipientes."
          ],
          [
            20.2,
            27.8,
            "Es fundamental recordar que los RPBI son residuos peligrosos capaces de causar enfermedades regulados estrictamente"
          ],
          [
            27.8,
            31,
            "por la norma NOM-087."
          ],
          [
            32.1,
            33.5,
            "Clasifiquemos correctamente."
          ],
          [
            33.8,
            38.2,
            "Usamos bolsas rojas para sangre y materiales empapados o que goteen fluidos."
          ],
          [
            38.8,
            45.7,
            "Las bolsas amarillas se reservan para tejidos o restos patológicos, aunque su uso sea poco frecuente en el consultorio."
          ],
          [
            46.2,
            50.3,
            "La regla de oro es: si no está saturado de sangre, es basura común."
          ],
          [
            50.7,
            57.2,
            "Artículos como cubrebocas, guantes limpios o jeringas sin aguja contaminada deben desecharse en los contenedores"
          ],
          [
            57.2,
            59.2,
            "habituales, no como RPBI."
          ],
          [
            61.6,
            68.7,
            "El recipiente rígido rojo es exclusivo para objetos punzocortantes, como agujas sin capuchón, lancetas y bisturís."
          ],
          [
            69.4,
            74.1,
            "Bajo ninguna circunstancia se deben introducir jeringas completas o residuos ajenos."
          ],
          [
            74.5,
            75.5,
            "No es un bote de basura."
          ],
          [
            76.6,
            81.4,
            "Las ámpulas de vidrio deben depositarse únicamente en el recipiente blanco destinado para vidrio."
          ],
          [
            81.4,
            86.1,
            "Estas no son RPBI a menos que estén contaminadas con material biológico."
          ],
          [
            86.4,
            89.5,
            "Mantenlas separadas hasta contar con el contenedor adecuado."
          ],
          [
            91.7,
            95.9,
            "Al llenar los contenedores, detente al alcanzar el 80% de su capacidad."
          ],
          [
            96.8,
            101.2,
            "Sella el borde con cinta adhesiva y rotula el nombre del consultorio y la fecha."
          ],
          [
            101.7,
            104.8,
            "Recuerda, una vez sellados, no deben abrirse."
          ],
          [
            105.1,
            109.8,
            "Mantén la continuidad operativa solicitando retiros a través de los canales oficiales."
          ],
          [
            109.8,
            115.9,
            "Asegúrate siempre de contar con un contenedor vacío disponible antes de entregar el lleno y notifica cualquier"
          ],
          [
            115.9,
            117.4,
            "necesidad especial al conductor."
          ],
          [
            119.5,
            121.6,
            "La responsabilidad es compartida."
          ],
          [
            122,
            128.1,
            "Durante tu guardia, supervisa que el manejo de residuos sea impecable, incluso si no los generaste tú."
          ],
          [
            128.7,
            133.8,
            "Si detectas alguna anomalía, es tu deber corregirla o reportarla de inmediato."
          ],
          [
            135.1,
            142.4,
            "Recuerda, recipientes rígidos solo para punzocortantes, vidrio en botes blancos y siempre sella correctamente."
          ],
          [
            143,
            144.5,
            "Has concluido esta revisión."
          ],
          [
            144.8,
            146.8,
            "Ahora puedes continuar con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación RPBI prehospitalario",
            "url": "presentaciones/rpbi-prehospitalario.html"
          },
          {
            "nombre": "Guía rápida RPBI prehospitalario (PDF)",
            "url": "materiales/rpbi-prehospitalario-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué es un RPBI?",
        "opciones": [
          "Material generado en la atención médica con microorganismos capaces de causar enfermedad",
          "Cualquier basura del consultorio",
          "Solo los medicamentos caducados",
          "El papel de la recepción"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué va en la bolsa roja?",
        "opciones": [
          "Botellas de solución vacías",
          "Sangre y materiales saturados o que gotean fluidos",
          "Agujas",
          "Ámpulas de vidrio"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Un cubrebocas usado, sin sangre, es:",
        "opciones": [
          "RPBI en bolsa roja",
          "RPBI en bolsa amarilla",
          "Basura común",
          "Punzocortante"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué puede ir dentro del recipiente rígido rojo?",
        "opciones": [
          "Jeringas completas y gasas",
          "Basura del escritorio",
          "Ámpulas de vidrio",
          "Solo punzocortantes: agujas sin capuchón, lancetas y bisturís"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Dónde se desechan las ámpulas de vidrio no contaminadas?",
        "opciones": [
          "En el recipiente blanco para vidrio",
          "En el recipiente rígido rojo",
          "En la bolsa amarilla",
          "En la bolsa roja"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿A qué nivel de llenado se retira el recipiente rígido?",
        "opciones": [
          "Al 100 %",
          "Al 75–80 %",
          "Al 50 %",
          "Cuando ya no cierra"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Se pueden comprimir las bolsas de RPBI para que quepa más?",
        "opciones": [
          "Sí, siempre",
          "Solo al final del turno",
          "No, está prohibido porque se rompen y derraman",
          "Solo si están medio llenas"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Con qué se recomienda sellar el recipiente rígido?",
        "opciones": [
          "Con cinta transparente solo en la entrada",
          "Con una liga",
          "No se sella",
          "Con tela adhesiva cubriendo todo el borde"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué se anota sobre el recipiente sellado?",
        "opciones": [
          "La fecha y el nombre del consultorio",
          "El nombre del paciente",
          "El costo del material",
          "Nada"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Una vez sellado un recipiente rígido:",
        "opciones": [
          "Se puede abrir para agregar más",
          "No se vuelve a abrir",
          "Se vacía y se reutiliza",
          "Se tira en la basura común"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Antes de entregar un contenedor lleno, debes:",
        "opciones": [
          "Vaciarlo",
          "Lavarlo",
          "Tener un contenedor de reemplazo disponible",
          "Dejarlo afuera del consultorio"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Durante tu guardia ves residuos mal separados que no generaste tú. ¿Qué haces?",
        "opciones": [
          "Nada, no son míos",
          "Esperar al siguiente turno",
          "Tirarlos todos a la basura común",
          "Corregirlo o reportarlo"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Médicos y personal de consultorios y unidades prehospitalarias.",
    "nivel": "Básico",
    "objetivos": [
      "Distinguir el RPBI de la basura común en el consultorio.",
      "Usar correctamente bolsas, recipiente rígido y recipiente para vidrio.",
      "Sellar, rotular y solicitar el retiro de los residuos."
    ]
  },
  {
    "id": "insumos-prehospitalarios",
    "titulo": "Insumos, materiales y medicamentos en consultorios y maletas",
    "area": "Atención Prehospitalaria",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Cargos en cuenta, requisiciones, recepción, faltantes y caducados en consultorios y maletas prehospitalarias.",
    "orden": 21,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Insumos prehospitalarios: video del curso",
        "duracion": "1:56 min",
        "texto": "Cargos en cuenta, requisiciones, recepción, faltantes y caducados en consultorios y maletas prehospitalarias.",
        "video": "insumos-prehospitalarios.mp4",
        "segundosMinimos": 104,
        "subtitulos": [
          [
            0,
            5.2,
            "Bienvenidos a este curso sobre la gestión de insumos, materiales y medicamentos esenciales,"
          ],
          [
            5.3,
            9,
            "tanto en nuestros consultorios como en las maletas de atención prehospitalaria."
          ],
          [
            10.6,
            16.7,
            "Actualmente, enfrentamos discrepancias entre los cargos en el sistema, las requisiciones y el material recibido."
          ],
          [
            17.1,
            23,
            "Nuestro objetivo es garantizar que cada área cuente con el suministro completo para brindar atención sin contratiempos."
          ],
          [
            25.3,
            26.5,
            "Recuerden la regla de oro."
          ],
          [
            27,
            29.3,
            "Lo que no se carga, no se resurte."
          ],
          [
            29.3,
            34.7,
            "Mientras que el material de consumo interno no requiere cargo, es vital registrar jeringas,"
          ],
          [
            34.9,
            37.8,
            "gasas y todo insumo cobrable al paciente."
          ],
          [
            38.2,
            41.7,
            "Para evitar surtidos incompletos, la requisición debe ser clara."
          ],
          [
            41.9,
            47.1,
            "Especifiquen el material usado, la cuenta del paciente y si es para consultorio o maleta."
          ],
          [
            47.7,
            50.6,
            "Envíen siempre el formato en PDF a los correos correspondientes."
          ],
          [
            52.1,
            59.9,
            "Sigan nuestro calendario. Villa del Palmar y Fiesta Americana solicitan insumos los lunes y el resto de Cabo San Lucas"
          ],
          [
            59.9,
            65,
            "los jueves. Asegúrense de enviar sus pedidos antes de las nueve de la mañana siguiente."
          ],
          [
            65.7,
            68.3,
            "Al recibir material, realicen un doble cotejo."
          ],
          [
            68.5,
            74.3,
            "Verifiquen que lo físico coincida con la hoja de traspaso y que ésta coincida con su requisición original."
          ],
          [
            74.7,
            78.4,
            "Si algo falta, consulten el correo de almacén."
          ],
          [
            78.7,
            83.5,
            "Ante cualquier faltante, actúen según el escenario: elaboren una carta de hechos,"
          ],
          [
            83.9,
            91.1,
            "soliciten autorizaciones para cargos posteriores o notifiquen a Auditoría si el sistema marca existencias que no llegaron."
          ],
          [
            91.4,
            94.6,
            "Para el manejo de caducados, retiren y separen el material,"
          ],
          [
            95.1,
            99.3,
            "notifiquen mediante carta de hechos y realicen el envío físico al almacén central,"
          ],
          [
            99.9,
            103.6,
            "asegurándose de rotular correctamente el origen de cada paquete."
          ],
          [
            104.7,
            111.3,
            "En resumen, carguen todo lo usado, realicen sus peticiones a tiempo y verifiquen siempre lo que reciben."
          ],
          [
            111.8,
            115.1,
            "Ahora los invito a continuar con la evaluación final de este curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Insumos prehospitalarios",
            "url": "presentaciones/insumos-prehospitalarios.html"
          },
          {
            "nombre": "Guía rápida Insumos prehospitalarios (PDF)",
            "url": "materiales/insumos-prehospitalarios-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Por qué es indispensable cargar el material en la cuenta del paciente?",
        "opciones": [
          "Porque el sistema solo resurte lo que se descontó del stock",
          "Porque así lo pide el paciente",
          "Para tener menos material",
          "No es indispensable"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál de estos materiales es de consumo interno y no se carga?",
        "opciones": [
          "Jeringas",
          "Guantes de nitrilo",
          "Gasas",
          "Medicamentos inyectables"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué debe indicar la requisición además del material usado?",
        "opciones": [
          "El nombre del proveedor",
          "El costo unitario",
          "La cuenta donde se cargó y si es para maleta o consultorio",
          "El diagnóstico del paciente"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿En qué formato se envía la requisición?",
        "opciones": [
          "Foto por WhatsApp",
          "Papel por mensajería",
          "Mensaje de voz",
          "PDF a los correos de prehospitalario y almacén"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué días envían requisición Villa del Palmar y Fiesta Americana?",
        "opciones": [
          "Lunes y jueves",
          "Solo viernes",
          "Todos los días",
          "Una vez al mes"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es el límite para el resto de consultorios de Cabo San Lucas?",
        "opciones": [
          "Lunes a mediodía",
          "Viernes antes de las 9:00 a. m.",
          "Domingo por la noche",
          "No hay límite"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Al recibir material, ¿qué se coteja?",
        "opciones": [
          "Solo la factura",
          "Solo el número de cajas",
          "El material contra la hoja de traspaso, y la hoja de traspaso contra la requisición",
          "Nada, se acomoda directo"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Un insumo se cargó pero no se surtió. ¿Qué haces?",
        "opciones": [
          "Lo compras por tu cuenta",
          "Lo olvidas",
          "Lo cargas otra vez",
          "Elaboras una carta de hechos solicitando el envío"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Olvidaste cargar un insumo. ¿Qué procede?",
        "opciones": [
          "Pedir autorización al Dr. Vera para cargarlo en una consulta posterior y solicitarlo después",
          "Pedirlo sin cargo",
          "Cargarlo a cualquier paciente sin autorización",
          "No pedirlo nunca"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El insumo se cargó bien, pero almacén sigue mostrando existencia. ¿A quién avisas?",
        "opciones": [
          "Al paciente",
          "Al Lic. Armando Hernández de Auditoría",
          "A recepción del hotel",
          "A nadie"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué material caducado debes retirar?",
        "opciones": [
          "Solo el que ya caducó hace un año",
          "Ninguno, lo retira almacén",
          "El que caduca en el mes en curso, e identificar el que caduca en los próximos 3 meses",
          "Solo los medicamentos controlados"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cómo se repone el material caducado?",
        "opciones": [
          "Automáticamente por sistema",
          "Tirándolo a la basura",
          "Pidiéndolo como nuevo sin avisar",
          "Enviándolo físicamente al almacén, rotulado, con su carta de hechos"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Médicos y personal de consultorios y unidades prehospitalarias.",
    "nivel": "Básico",
    "objetivos": [
      "Cargar correctamente los insumos en la cuenta del paciente.",
      "Elaborar y enviar la requisición a tiempo.",
      "Resolver faltantes y gestionar caducados."
    ]
  },
  {
    "id": "papeleria-ambulancia",
    "titulo": "Papelería y cobranza de ambulancia",
    "area": "Atención Prehospitalaria",
    "horas": 2,
    "obligatorio": false,
    "descripcion": "Cortes de guardia, billing, códigos, FRAP y documentación de cuentas por cobrar internacionales.",
    "orden": 22,
    "lecciones": [
      {
        "tipo": "lectura",
        "titulo": "Papelería y cobranza: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de las sesiones del 7 de abril y del 1 de septiembre de 2026.\n\n• La papelería es requisito de COFEPRIS y de las aseguradoras; hospital y ambulancia son entidades distintas y cada una necesita sus formatos.\n• Corte de paramédico y corte de operador deben coincidir en unidad, fecha, base y tripulación.\n• El método de pago va como título del documento. Solo coordinador, gerente o director autorizan un cobro.\n• Identificaciones válidas: licencia, INE o pasaporte. La residencia temporal no sirve para C×C internacional.\n• El folio del billing coincide con el del FRAP. Códigos sin espacios: A0425 (kilometraje, siempre) y A0398 (consumibles).\n• FRAP: ubicación con ciudad, destino con nombre completo del hospital, hora de 24 h y sin tachaduras.\n• C×C internacional: carátula con celular y correo, voucher de depósito y envío en máximo 24 horas.\n• Canadá: nunca depósito e itinerario de vuelo completo. EE. UU.: Passage y Medicare a partir de 62 años; solo firma el paciente o su representante legal.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
        "materiales": [
          {
            "nombre": "Presentación Papelería de ambulancia",
            "url": "presentaciones/papeleria-cobranza-ambulancia.html"
          },
          {
            "nombre": "Guía rápida Papelería de ambulancia (PDF)",
            "url": "materiales/papeleria-cobranza-ambulancia-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Por qué hospital y ambulancia necesitan cada uno su juego de formatos?",
        "opciones": [
          "Porque son entidades distintas, con razón social propia",
          "Porque así se ve más ordenado",
          "Porque lo pide el paciente",
          "No los necesitan"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Dónde se escribe el método de pago?",
        "opciones": [
          "Al reverso del FRAP",
          "Como título del documento",
          "En una nota aparte",
          "No se escribe"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Quién puede autorizar un cobro?",
        "opciones": [
          "Cualquier paramédico",
          "El paciente",
          "El coordinador, el gerente o el director",
          "El operador"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuál de estas identificaciones NO es válida para una cuenta por cobrar internacional?",
        "opciones": [
          "Pasaporte",
          "Licencia de conducir",
          "INE",
          "Residencia temporal en México"
        ],
        "correcta": 3
      },
      {
        "pregunta": "El folio del billing debe coincidir con:",
        "opciones": [
          "El folio del FRAP",
          "El número de la ambulancia",
          "La fecha de nacimiento",
          "El número de póliza"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es la forma correcta de escribir el código de kilometraje?",
        "opciones": [
          "A0 425",
          "A0425",
          "A-0425",
          "a 0425"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué código corresponde a consumibles médicos?",
        "opciones": [
          "A0425",
          "A0999",
          "A0398",
          "A0427"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Al registrar la ubicación del servicio en el FRAP, debes incluir:",
        "opciones": [
          "Solo el nombre de la calle",
          "Solo el número de la ambulancia",
          "Nada si es carretera",
          "La dirección y la ciudad específica"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si una sección del FRAP no aplica al caso, se debe:",
        "opciones": [
          "Dejar en blanco, sin tachar ni subrayar",
          "Tachar con una línea",
          "Escribir “N/A” en grande",
          "Llenar con datos inventados"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Por qué se registran las pertenencias del paciente?",
        "opciones": [
          "Para inventario de la ambulancia",
          "Para proteger al personal ante posibles reclamos",
          "Para cobrarlas",
          "No se registran"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué datos de contacto son obligatorios en la carátula de una cuenta internacional?",
        "opciones": [
          "Dirección del hotel",
          "Número de habitación",
          "Celular y correo electrónico del paciente",
          "Nombre del agente de viajes"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿En qué plazo se envía la documentación de una cuenta internacional?",
        "opciones": [
          "Al cierre del mes",
          "En una semana",
          "Cuando haya varias acumuladas",
          "En un máximo de 24 horas"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Con un paciente con seguro canadiense:",
        "opciones": [
          "Nunca se cobra depósito y se solicita su itinerario de vuelo completo",
          "Siempre se cobra depósito",
          "Se usa el formato Medicare",
          "No se necesita número de caso"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿A partir de qué edad se agrega el formato Medicare, según el procedimiento interno?",
        "opciones": [
          "18 años",
          "62 años",
          "40 años",
          "Ninguna, nunca se usa"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Quién puede firmar los formatos del seguro?",
        "opciones": [
          "Cualquier acompañante",
          "El paramédico en nombre del paciente",
          "Solo el paciente o su representante legal",
          "El operador"
        ],
        "correcta": 2
      }
    ],
    "dirigido": "Paramédicos, operadores y coordinadores de ambulancia.",
    "nivel": "Intermedio",
    "objetivos": [
      "Llenar correctamente cortes, billing y FRAP.",
      "Integrar el expediente de una cuenta por cobrar internacional.",
      "Evitar los errores que retrasan el pago de las aseguradoras."
    ]
  },
  {
    "id": "notas-medicas",
    "titulo": "Importancia de las notas médicas",
    "area": "Atención Prehospitalaria",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Nota médica conforme a la NOM-004: calidad, notas obligatorias, procedimientos, consentimiento, riesgos de trabajo y traslados.",
    "orden": 23,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Notas médicas: video del curso",
        "duracion": "2:08 min",
        "texto": "Nota médica conforme a la NOM-004: calidad, notas obligatorias, procedimientos, consentimiento, riesgos de trabajo y traslados.",
        "video": "notas-medicas.mp4",
        "segundosMinimos": 114,
        "subtitulos": [
          [
            0,
            3.5,
            "Bienvenidos a esta sesión sobre la importancia de las notas médicas,"
          ],
          [
            3.6,
            10.1,
            "enfocada en los lineamientos de la norma NOM-004 para el expediente clínico en nuestros consultorios."
          ],
          [
            11.9,
            19.6,
            "La NOM-004 establece que la nota médica no es solo un registro clínico, sino también un documento administrativo y legal."
          ],
          [
            20.3,
            25.5,
            "Es nuestra garantía de continuidad, respaldo de decisiones y protección institucional."
          ],
          [
            26.3,
            33.5,
            "Para mejorar la calidad de nuestras notas, debemos abandonar prácticas como el copiar y pegar, o el uso de machotes genéricos."
          ],
          [
            33.8,
            37.3,
            "Prioricemos la exploración personalizada y el lenguaje objetivo."
          ],
          [
            38.9,
            43.8,
            "Recuerden que cada atención, por mínima que sea, exige una nota inicial y una receta completa."
          ],
          [
            44.6,
            48.6,
            "Asegúrense siempre de incluir los datos de alarma y la fecha de la próxima cita."
          ],
          [
            50.8,
            55.1,
            "Cualquier procedimiento, incluyendo inyecciones simples o anticonceptivos,"
          ],
          [
            55.5,
            62.7,
            "debe contar con una valoración, su nota médica y receta, además del registro detallado de los insumos utilizados."
          ],
          [
            63.4,
            65.6,
            "El consentimiento informado es indispensable,"
          ],
          [
            66.1,
            71.5,
            "debe quedar por escrito siempre que el procedimiento lo amerite o cuando el paciente rechace un manejo,"
          ],
          [
            71.6,
            74.3,
            "documentando claramente lo que se le explicó."
          ],
          [
            75,
            80,
            "En casos de accidentes laborales, el detalle es clave para respaldar a recursos humanos."
          ],
          [
            80.6,
            87.9,
            "Registren el momento, lugar, actividad, mecanismo de lesión y testigos, refiriendo al IMSS cuando sea necesario."
          ],
          [
            89.5,
            95.4,
            "Para cada paciente referido a un hospital, la nota de traslado debe incluir el diagnóstico, un resumen clínico,"
          ],
          [
            95.8,
            100.7,
            "el tratamiento otorgado, su condición actual y el método de transporte utilizado."
          ],
          [
            102.1,
            105.7,
            "Al redactar notas sobre huéspedes, mantengamos un enfoque clínico objetivo."
          ],
          [
            106.2,
            112.2,
            "Describamos los síntomas y lesiones sin emitir juicios sobre la propiedad que puedan generar responsabilidades legales"
          ],
          [
            112.2,
            113.2,
            "ajenas a lo médico."
          ],
          [
            114.8,
            117.8,
            "Para cerrar, tengan presente esta regla de oro."
          ],
          [
            118.2,
            120,
            "Si no está escrito, no se hizo."
          ],
          [
            120.6,
            126.4,
            "Sigamos estos lineamientos para garantizar la seguridad del paciente y ahora continúen con su evaluación."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Notas médicas",
            "url": "presentaciones/notas-medicas.html"
          },
          {
            "nombre": "Guía rápida Notas médicas (PDF)",
            "url": "materiales/notas-medicas-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "Según la NOM-004, la nota médica es un documento:",
        "opciones": [
          "Clínico, administrativo y médico-legal",
          "Solo administrativo",
          "Opcional",
          "Solo para el seguro"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es una práctica incorrecta al elaborar una nota?",
        "opciones": [
          "Registrar signos vitales reales",
          "Copiar y pegar la nota anterior",
          "Hacer exploración física personalizada",
          "Usar lenguaje objetivo"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué frase debe evitarse en una nota médica?",
        "opciones": [
          "Edema leve en tobillo derecho",
          "Frecuencia cardiaca de 78 por minuto",
          "“Resto normal”",
          "Sin deformidad aparente"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuántas notas iniciales de urgencias se elaboran?",
        "opciones": [
          "Una por día",
          "Solo en casos graves",
          "Una por semana",
          "Una por cada atención brindada"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué campos de la receta deben llenarse siempre?",
        "opciones": [
          "Datos de alarma y próxima cita",
          "Solo el nombre del medicamento",
          "El costo de la consulta",
          "Ninguno en particular"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Para aplicar una inyección se requiere:",
        "opciones": [
          "Solo que el paciente la pida",
          "Valoración previa, nota médica y receta",
          "Nada, es un procedimiento simple",
          "Únicamente la firma del paciente"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si el paciente rechaza el manejo propuesto, ¿qué se hace?",
        "opciones": [
          "No se registra",
          "Se obliga al paciente",
          "Se usa el formato de consentimiento para dejar constancia y se anotan las recomendaciones",
          "Se cancela la nota"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En un paciente que regresa a consulta, la nota debe:",
        "opciones": [
          "Repetir la nota anterior",
          "Omitir el tratamiento previo",
          "Ser más corta",
          "Detallar su evolución y estado actual"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué dato es indispensable documentar en un riesgo de trabajo?",
        "opciones": [
          "El mecanismo de lesión y la ubicación exacta",
          "El salario del colaborador",
          "La opinión del jefe",
          "La marca del calzado"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Un colaborador con una lesión que requiere estudios de imagen se:",
        "opciones": [
          "Envía a casa",
          "Refiere al IMSS con la hoja de traslado impresa",
          "Atiende sin nota",
          "Cita la próxima semana"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué debe incluir una nota de traslado?",
        "opciones": [
          "Solo el nombre del hospital destino",
          "Solo la firma del médico",
          "Diagnóstico, resumen clínico, tratamiento, condición al traslado y método de transporte",
          "El costo del traslado"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En la nota de un huésped del hotel, debes:",
        "opciones": [
          "Explicar qué parte del hotel causó el accidente",
          "Opinar sobre el mantenimiento del hotel",
          "Omitir la exploración",
          "Describir objetivamente síntomas y lesiones, sin detalles de la propiedad"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Médicos de consultorios y atención prehospitalaria.",
    "nivel": "Básico",
    "objetivos": [
      "Elaborar notas médicas completas y objetivas.",
      "Cumplir las notas, recetas y consentimientos obligatorios.",
      "Documentar riesgos de trabajo y traslados."
    ]
  },
  {
    "id": "farmacia-hospitalaria",
    "titulo": "Farmacia hospitalaria",
    "area": "Farmacia",
    "horas": 2,
    "obligatorio": false,
    "descripcion": "Regulación, controlados, recetas, almacenamiento, inventario, proveedores, cuadro básico, conciliación y farmacovigilancia.",
    "orden": 11.5,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Farmacia hospitalaria: video del curso",
        "duracion": "4:07 min",
        "texto": "Regulación, controlados, recetas, almacenamiento, inventario, proveedores, cuadro básico, conciliación y farmacovigilancia.",
        "video": "farmacia-hospitalaria.mp4",
        "segundosMinimos": 222,
        "subtitulos": [
          [
            0,
            5.3,
            "Bienvenidos a este recorrido sobre los fundamentos y la operación de la farmacia hospitalaria,"
          ],
          [
            5.8,
            10.5,
            "una pieza clave en la seguridad y el cuidado del paciente dentro de nuestra institución."
          ],
          [
            11,
            14.3,
            "Es importante diferenciar la farmacia hospitalaria de la externa."
          ],
          [
            14.5,
            19.6,
            "Mientras la externa sirve al público en general, la hospitalaria opera dentro del centro médico,"
          ],
          [
            20,
            23.2,
            "suministrando medicamentos bajo estricta prescripción institucional."
          ],
          [
            25.4,
            27.8,
            "La normativa es el pilar de nuestra labor."
          ],
          [
            27.8,
            32.4,
            "Desde la licencia sanitaria federal hasta la disponibilidad de la farmacopea vigente."
          ],
          [
            32.8,
            35.4,
            "El cumplimiento riguroso es obligatorio."
          ],
          [
            36.1,
            39.3,
            "Recuérdenlo, desconocer la norma no nos exime de ella."
          ],
          [
            40.1,
            42.6,
            "Cada rol requiere preparación específica."
          ],
          [
            42.9,
            48.2,
            "Nuestros químicos validan dosis e interacciones, mientras el personal auxiliar apoya en el surtido."
          ],
          [
            48.8,
            54.8,
            "Todos, sin excepción, se capacitan anualmente para mantener los estándares más altos."
          ],
          [
            54.8,
            61.1,
            "Optimizamos la seguridad a través de nuestros sistemas de distribución que van desde el stock en piso hasta el modelo"
          ],
          [
            61.1,
            66.5,
            "de dosis unitaria, este último diseñado para ofrecer un control total sobre la administración."
          ],
          [
            67.5,
            71.8,
            "La gestión de receta sigue clasificaciones precisas según el grupo del medicamento,"
          ],
          [
            72.1,
            78.3,
            "exigiendo desde códigos QR de COFEPRIS para el grupo 1 hasta procesos simplificados para fármacos de venta libre."
          ],
          [
            80.5,
            83.8,
            "Para los medicamentos controlados, la seguridad es absoluta."
          ],
          [
            83.8,
            87.6,
            "Se resguardan bajo llave, se registran en libros autorizados,"
          ],
          [
            87.9,
            92.1,
            "y cada movimiento es validado con la firma del responsable sanitario."
          ],
          [
            92.4,
            95,
            "Una receta completa es fundamental para el surtido."
          ],
          [
            95.6,
            97.9,
            "Debe integrar claramente los datos del prescriptor,"
          ],
          [
            98.2,
            104.4,
            "la información del paciente y los detalles específicos del medicamento, siempre incluyendo su nombre genérico."
          ],
          [
            105.2,
            109.6,
            "En el manejo de antimicrobianos aplicamos el semáforo AWaRe de la OMS."
          ],
          [
            109.6,
            113.5,
            "Clasificarlos en acceso, vigilancia o reserva es vital,"
          ],
          [
            114,
            118.2,
            "y su conocimiento es una competencia obligatoria para nuestro equipo de farmacia."
          ],
          [
            118.8,
            125.3,
            "Para minimizar riesgos aplicamos barreras de seguridad: etiquetas rojas para medicamentos de alto riesgo,"
          ],
          [
            125.5,
            132.7,
            "con doble verificación, y etiquetas naranjas para identificar aquellos que suenan o se ven parecidos, los llamados LASA."
          ],
          [
            133,
            139,
            "El almacenamiento se gestiona con precisión milimétrica: controlamos temperatura y humedad constantemente,"
          ],
          [
            139,
            145.6,
            "manteniendo los insumos en condiciones óptimas sobre anaqueles adecuados para garantizar la integridad de cada producto."
          ],
          [
            146.9,
            151.1,
            "La gestión de inventario sigue la regla de oro: primero lo que caduca primero."
          ],
          [
            151.4,
            159,
            "Aplicamos protocolos estrictos de PEPS y PCPS para asegurar que cada insumo cumpla su propósito antes de su vencimiento."
          ],
          [
            160.4,
            163,
            "Comprar bien comienza con proveedores confiables."
          ],
          [
            163.9,
            167.3,
            "Evaluamos periódicamente su documentación legal y desempeño,"
          ],
          [
            167.3,
            173.7,
            "asegurando que cada adquisición cuente con múltiples cotizaciones y la autorización necesaria de nuestra dirección."
          ],
          [
            175.3,
            177,
            "Nuestro cuadro básico es dinámico."
          ],
          [
            177.4,
            182.1,
            "Se revisa anualmente para integrar medicamentos con alta frecuencia y eficacia,"
          ],
          [
            182.5,
            187.6,
            "mientras excluimos aquellos que no registran movimiento o que han presentado riesgos para nuestros pacientes."
          ],
          [
            189.2,
            192.1,
            "Finalmente, gestionamos cualquier error con formalidad."
          ],
          [
            192.6,
            194.6,
            "Las discrepancias se documentan por escrito,"
          ],
          [
            194.6,
            201.3,
            "exigiendo cartas de cambio cuando es necesario y comunicamos cualquier desabasto de forma transparente a través de los"
          ],
          [
            201.3,
            203.1,
            "canales oficiales."
          ],
          [
            203.7,
            206.1,
            "La seguridad del paciente es nuestra prioridad."
          ],
          [
            206.4,
            210.7,
            "Implementamos una conciliación rigurosa al ingreso, traslados y egresos,"
          ],
          [
            211,
            217.1,
            "validamos cada prescripción con un sello de idoneidad y actualizamos diariamente el perfil farmacoterapéutico digital"
          ],
          [
            217.1,
            218.4,
            "para cada tratamiento."
          ],
          [
            219.5,
            225.6,
            "La farmacovigilancia no es un castigo, sino una herramienta esencial de mejora. Cumpliendo con la norma oficial,"
          ],
          [
            226.2,
            230.1,
            "notificamos de forma activa cualquier reacción adversa en las plataformas de COFEPRIS,"
          ],
          [
            230.6,
            233.5,
            "para garantizar procesos seguros y no punitivos."
          ],
          [
            234.1,
            240.7,
            "Para concluir, recuerde siempre, cada medicamento debe contar con su norma, su registro y su responsable."
          ],
          [
            241.2,
            246.6,
            "Mantengamos el orden, la vigilancia y la seguridad para continuar con éxito la evaluación de este curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Farmacia hospitalaria",
            "url": "presentaciones/farmacia-hospitalaria.html"
          },
          {
            "nombre": "Guía rápida Farmacia hospitalaria (PDF)",
            "url": "materiales/farmacia-hospitalaria-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Cuál es una característica de la farmacia hospitalaria?",
        "opciones": [
          "Suministra medicamentos por prescripción institucional, sin venta al público",
          "Vende al público en general",
          "Debe estar fuera del hospital",
          "No requiere licencia sanitaria"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué permiso requiere la farmacia hospitalaria?",
        "opciones": [
          "Solo un aviso de funcionamiento",
          "Licencia sanitaria federal",
          "Ninguno",
          "Un permiso municipal"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué calificación mínima se requiere en el examen anual del personal de farmacia?",
        "opciones": [
          "6",
          "7",
          "8",
          "10"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué sistema de distribución permite el mayor control en la administración?",
        "opciones": [
          "Stock en piso",
          "Venta directa",
          "Caja completa",
          "Dosis unitaria"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué receta requiere un medicamento del grupo I?",
        "opciones": [
          "Receta especial con código QR de COFEPRIS",
          "Receta ordinaria",
          "Ninguna",
          "Receta simple sin firma"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cómo se resguardan los medicamentos controlados?",
        "opciones": [
          "En el anaquel general",
          "Bajo llave, con libro de control y movimientos firmados por el responsable sanitario",
          "En la central de enfermería",
          "En el carro de paro sin registro"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En la receta, ¿qué dato del medicamento es obligatorio?",
        "opciones": [
          "El nombre comercial",
          "El laboratorio fabricante",
          "El nombre genérico",
          "El precio"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En la clasificación AWaRe, los antimicrobianos de “Reserva” son:",
        "opciones": [
          "De primera línea",
          "De venta libre",
          "De uso veterinario",
          "De uso hospitalario, generalmente parenterales"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué color de etiqueta identifica a los medicamentos LASA?",
        "opciones": [
          "Naranja",
          "Rojo",
          "Verde",
          "Amarillo"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿A qué temperatura se conservan los medicamentos de red fría?",
        "opciones": [
          "15–25 °C",
          "2–8 °C",
          "Menos de 0 °C",
          "30–35 °C"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué separación deben tener los anaqueles del piso y del techo?",
        "opciones": [
          "5 cm",
          "No importa",
          "20 cm",
          "1 metro"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Al recibir un medicamento, ¿qué caducidad mínima debe tener?",
        "opciones": [
          "1 mes",
          "3 meses",
          "6 meses",
          "Más de 12 meses, salvo excepciones"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué documento exiges cuando el proveedor se equivoca en la entrega?",
        "opciones": [
          "Una carta de cambio",
          "Una receta",
          "Un pagaré",
          "Ninguno"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿En qué momentos se realiza la conciliación de medicamentos?",
        "opciones": [
          "Solo al egreso",
          "Al ingreso, al cambiar de médico o área y al egreso",
          "Una vez por semana",
          "Solo si el paciente lo pide"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si al validar una prescripción detectas un problema, debes:",
        "opciones": [
          "Sellarla de todos modos",
          "Cambiar la dosis por tu cuenta",
          "Avisar al médico tratante y no sellar hasta resolverlo",
          "Ignorarlo"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué norma hace obligatoria la farmacovigilancia?",
        "opciones": [
          "NOM-087",
          "NOM-017",
          "NOM-004",
          "NOM-220-SSA1-2016"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal de farmacia hospitalaria, medicación segura y farmacia externa.",
    "nivel": "Intermedio",
    "objetivos": [
      "Aplicar la regulación sanitaria de la farmacia hospitalaria y de los controlados.",
      "Almacenar, recibir y controlar el inventario de medicamentos.",
      "Participar en la conciliación, la idoneidad y la farmacovigilancia."
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
      "aesp3",
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
      "accidentes-incidentes",
      "mejora-continua-sst",
      "codigo-amarillo",
      "huracanes",
      "calor",
      "bombas",
      "5s"
    ],
    "orden": 4
  },
  {
    "id": "atencion-prehospitalaria",
    "titulo": "Atención prehospitalaria",
    "descripcion": "Papelería y cobranza, notas médicas, insumos y residuos para el personal de ambulancias y consultorios prehospitalarios.",
    "cursos": [
      "papeleria-ambulancia",
      "notas-medicas",
      "insumos-prehospitalarios",
      "rpbi-prehospitalario"
    ],
    "orden": 5
  },
  {
    "id": "farmacia-hospitalaria",
    "titulo": "Farmacia hospitalaria",
    "descripcion": "Regulación, controlados, almacenamiento y medicamentos de alto riesgo para el personal de farmacia y medicación segura.",
    "cursos": [
      "farmacia-hospitalaria",
      "aesp3",
      "med-alto-riesgo"
    ],
    "orden": 6
  }
];
