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
        "tipo": "lectura",
        "titulo": "Proceso de aceptación: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de la sesión del 17 de abril de 2026.\n\n• Proceso crítico ante el Consejo de Salubridad General. Aplica a admisión, enfermería y personal médico.\n• Formas de ingreso: consulta externa, urgencias, hospitalización programada y procedimiento ambulatorio.\n• Dos identificadores (nombre completo y fecha de nacimiento) e identificación oficial (INE o pasaporte). El registro es un documento médico-legal.\n• En documentos de EE. UU. la fecha va mes/día/año: preguntar directamente. Con seguro, el nombre coincide con la credencial. Menores sin documentos: buscar su CURP.\n• Flujo: admisión registra y avisa a enfermería con copia de la identificación; enfermería hace doble verificación; el médico valora y hace el plan.\n• Documentos: formato de registro, aviso de privacidad, consentimiento informado si aplica; reglamento para hospitalizados.\n• Egreso: enfermería entrega la hoja de cargos a admisión, que revisa pendientes antes de la salida.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
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
        "tipo": "lectura",
        "titulo": "Manejo de RPBI: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de la sesión del 16 de junio de 2026.\n\n• La NOM-087-SEMARNAT-SSA1-2002 es obligatoria para todo establecimiento que genera RPBI.\n• Cuatro pasos: identificar, envasar, almacenar y recolectar.\n• Bolsa roja: material empapado de sangre o fluidos. Hermético con tapa: sangre líquida. Bolsa amarilla: patológicos. Rígido rojo: punzocortantes, sin reencapuchar.\n• Pañales, toallas femeninas y condones de pacientes sin sospecha infectocontagiosa son basura común.\n• Cerrar al 80 % y etiquetar con fecha y área de origen.\n• Almacén temporal fuera del área operativa; patológicos en congelador.\n• Recolección diaria por rutas que eviten áreas de espera; carro lavado diario con jabón.\n• Un pinchazo se reporta de inmediato a Epidemiología y a la Dirección Médica.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
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
        "tipo": "lectura",
        "titulo": "Equipo de protección personal: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de la sesión del 4 de septiembre de 2026.\n\n• El EPP disminuye la exposición a un riesgo específico. Complementa, no sustituye, la prevención y los controles de ingeniería.\n• Se elige por actividad, tipo de riesgo y región del cuerpo, con las tablas de la NOM-017-STPS-2008. No hay un EPP único para todo el hospital.\n• Cabeza: casco contra impacto o dieléctrico. Ojos y cara: anteojos, goggles o careta. Oídos: tapones o conchas.\n• Respiratorio: mascarilla para polvos o respirador para gases y vapores. No existe un guante universal.\n• Tronco: mandil, overol o bata. Pies: calzado ocupacional, contra impacto, dieléctrico o conductivo.\n• Riesgos por área: biológico en terapia intensiva y hemodiálisis; radiación en hemodinamia; punzocortantes en quirófano; químicos en laboratorio y limpieza.\n• El EPP se usa con intención, según la tarea; se evita la sobreutilización.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
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
        "tipo": "lectura",
        "titulo": "Riesgo de caídas: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de la sesión del 31 de agosto de 2026.\n\n• Evaluación inicial al primer contacto, documentada en las primeras 24 horas. Reevaluación en cada cambio de turno, de estado de alerta o de servicio.\n• Alto riesgo sin escala: menores de 3 años, mayores de 65, embarazadas, inconscientes o con dificultad para caminar.\n• Medidas universales para todos: barandales elevados, cama frenada, iluminación, timbre al alcance, paso libre, piso mojado señalizado y calzado adecuado.\n• Escala de Morse (mayores de 13 años): 0-24 bajo, 25-50 medio, 51 o más alto.\n• Escala Humpty Dumpty (3 a 13 años): 7-11 bajo, 12 o más alto.\n• Imagenología: con drenajes, dependencia para moverse o sedación, el riesgo es alto.\n• Ficha en la puerta: verde bajo, amarillo medio, rojo alto.\n• Ante una caída: avisar al jefe y al médico de guardia, llenar el anexo 4 y reportar en la plataforma de calidad como cuasifalla, evento adverso o evento centinela.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
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
        "tipo": "lectura",
        "titulo": "Tormentas y huracanes: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de la sesión del 26 de agosto de 2026.\n\n• Un ciclón evoluciona de depresión tropical a tormenta tropical y a huracán. Los huracanes se clasifican del 1 al 5 en la escala Saffir-Simpson, según la velocidad máxima del viento.\n• Fuentes oficiales: CONAGUA, Servicio Meteorológico Nacional, CENAPRED, Sistema de Alerta Temprana y autoridades locales.\n• Antes: revisar azoteas, desagües y canaletas, retirar objetos sueltos y revisar instalaciones eléctricas.\n• Asegurar agua potable, gases medicinales, insumos médicos, alimentos no perecederos, limpieza, y planta de emergencia con combustible.\n• Mantener libres las rutas de evacuación y reportar condiciones inseguras.\n• Durante: mantener la calma, permanecer en el área asignada, no salir sin autorización y no reparar daños eléctricos o de gas por cuenta propia.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
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
        "tipo": "lectura",
        "titulo": "Código Amarillo: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de la sesión del 8 de agosto de 2026.\n\n• Los códigos de seguridad están al reverso de la credencial, en el procedimiento 8 de emergencias o en la página de calidad.\n• El Código Amarillo atiende derrames de sustancias químicas y de RPBI. Responde el equipo de higiene y limpieza.\n• Químicos: pictogramas en rombo; se consulta la hoja de datos de seguridad. Biológicos: símbolo de riesgo biológico.\n• Derrame químico: activar, avisar, identificar, EPP, delimitar con conos y cordones, absorber con tapetes en S, bolsa negra, agua y jabón, reponer el kit.\n• Derrame de RPBI: activar y delimitar, guantes de carnaza para punzocortantes, sangre con hipoclorito de sodio al 6 %, desechar como RPBI, desinfectar con sales cuaternarias.\n• El kit debe estar completo; quien lo usa repone el material.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
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
        "tipo": "lectura",
        "titulo": "Accidentes e incidentes: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de la sesión del 24 de agosto de 2026.\n\n• Peligro: algo con potencial de causar daño. Riesgo: probabilidad de que lo cause.\n• Acto inseguro: acción incorrecta. Incidente: pudo causar daño y no lo hizo. Accidente: causó lesión o daño.\n• Prevención: seguir procedimientos, usar EPP, manejar herramientas correctamente, sin bromas ni operar equipo sin autorización.\n• La Comisión Mixta de Seguridad e Higiene (trabajadores y patrón) identifica causas, propone medidas y verifica con recorridos.\n• Ciclo: inspeccionar, investigar, reportar, corregir y dar seguimiento.\n• La investigación es objetiva, con entrevistas individuales, evidencia y lo antes posible.\n• Toda condición insegura se reporta de inmediato a la jefatura.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
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
        "tipo": "lectura",
        "titulo": "Mejora continua: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de la sesión del 9 de septiembre de 2026.\n\n• La mejora continua es un proceso permanente: identificar oportunidades, implementar acciones y evaluar resultados.\n• Ciclo PHVA: planear (peligros y objetivos), hacer (controles y capacitación), verificar (inspecciones, auditorías, indicadores) y actuar (corregir y prevenir recurrencias).\n• Fuentes de mejora: recorridos, auditorías, investigación de accidentes, sugerencias, indicadores, cambios en instalaciones y requisitos legales.\n• Acción correctiva: elimina la causa raíz después de un incidente. Acción preventiva: se anticipa a él. Siempre se verifica antes de cerrar.\n• Ante un accidente: notificar al jefe y a Seguridad e Higiene, investigar, corregir, verificar y documentar el cierre.\n• Responsabilidad compartida: trabajadores reportan, responsables de área implementan y la dirección facilita recursos.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
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
        "tipo": "lectura",
        "titulo": "RPBI prehospitalario: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de la sesión del 5 de agosto de 2026.\n\n• Un RPBI es material de la atención médica con microorganismos capaces de causar enfermedad. Lo regula la NOM-087-SEMARNAT-SSA1-2002.\n• Bolsa roja: sangre y materiales saturados o que gotean. Bolsa amarilla: tejidos y partes del cuerpo.\n• Basura común: cubrebocas, guantes no saturados, frascos vacíos, botellas de solución y jeringas sin aguja contaminada.\n• Recipiente rígido rojo: solo punzocortantes (agujas sin capuchón, lancetas, bisturís).\n• Ámpulas de vidrio: recipiente blanco, separadas del rígido.\n• Retirar el rígido al 75–80 %, no comprimir bolsas, sellar con tela adhesiva todo el borde y rotular fecha y consultorio.\n• Retiro por el grupo de asesores de la salud, con reemplazo listo antes de entregar.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
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
        "tipo": "lectura",
        "titulo": "Insumos prehospitalarios: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de la sesión del 10 de abril de 2026.\n\n• Lo que no se carga en la cuenta del paciente no se resurte: el sistema solo repone lo descontado del stock.\n• Consumo interno (abatelenguas, conos óticos, cubrebocas, guantes de nitrilo) no se carga; jeringas y gasas sí.\n• Requisición en PDF con el material usado, la cuenta donde se cargó y si es para maleta o consultorio.\n• Villa del Palmar y Fiesta Americana: lunes y jueves. Resto de CSL: jueves. Límite: 9:00 a. m. del día siguiente.\n• Al recibir: cotejar material contra hoja de traspaso y traspaso contra requisición.\n• Faltantes: carta de hechos (cargado y no surtido), autorización del Dr. Vera (no cargado) o aviso a Auditoría (desfase de sistema).\n• Caducados: retirar los del mes, carta de hechos con copia al Dr. Vera y envío físico rotulado al almacén central.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
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
        "tipo": "lectura",
        "titulo": "Notas médicas: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de la sesión del 6 de agosto de 2026.\n\n• La nota médica es un documento clínico, administrativo y médico-legal (NOM-004).\n• Evitar copiar y pegar, machotes, signos vitales no tomados, abreviaturas no permitidas y frases como “resto normal”.\n• En cada atención: nota inicial de urgencias, receta (farmacológica y no farmacológica), datos de alarma y próxima cita.\n• Todo procedimiento, incluso una inyección, requiere valoración, nota y receta.\n• Consentimiento informado cuando el manejo lo amerite y cuando el paciente rechaza un tratamiento.\n• Riesgos de trabajo: momento, lugar exacto, actividad, mecanismo de lesión y testigos. Con estudios de imagen, se refiere al IMSS con hoja de traslado.\n• Nota de traslado: diagnóstico, resumen clínico, tratamiento, condición al traslado y transporte.\n• Notas de huéspedes: objetivas y clínicas, sin detalles de la propiedad.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
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
        "tipo": "lectura",
        "titulo": "Farmacia hospitalaria: puntos clave",
        "duracion": "10 min",
        "texto": "Repaso de las sesiones del 25 de mayo y del 21 de agosto de 2026.\n\n• La farmacia hospitalaria está dentro del hospital, suministra por prescripción institucional y requiere licencia sanitaria federal.\n• Grupo I: receta especial con QR de COFEPRIS. Grupo II: receta retenida y libro de control. Grupo III: hasta 3 presentaciones. V y VI sin receta.\n• Controlados: aviso de previsiones, libros autorizados, bajo llave y cada movimiento firmado por el responsable sanitario.\n• La receta lleva datos del prescriptor y del paciente, y el medicamento con nombre genérico, dosis, vía, frecuencia y duración.\n• Antimicrobianos: clasificación ATC y semáforo AWaRe (acceso, vigilancia, reserva).\n• Almacén: 15–25 °C, humedad máxima 65 %, red fría 2–8 °C, anaqueles a 20 cm de piso y techo.\n• Recepción con caducidad mayor a 12 meses; PEPS y PCPS; caducos dados de baja y dispuestos antes de un año.\n• Proveedores con documentación legal y evaluación cada 6 a 12 meses; al menos 3 cotizaciones por compra.\n• Conciliación al ingreso, cambio de área y egreso; sello de idoneidad; perfil farmacoterapéutico cada 24 h.\n• Farmacovigilancia obligatoria (NOM-220-SSA1-2016) y no punitiva.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
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
