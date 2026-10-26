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
    "obligatorio": false,
    "descripcion": "Aplicación de dos identificadores durante todos los procesos asistenciales.",
    "orden": 10,
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
            19.3,
            "Es un esfuerzo multidisciplinario. Identificar al paciente es tarea de todas las áreas,"
          ],
          [
            19.3,
            21.9,
            "no solo de enfermería o del área médica."
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
            92.9,
            "Verifica la identidad antes de administrar medicamentos, transfundir,"
          ],
          [
            92.9,
            96.7,
            "tomar muestras de laboratorio y realizar procedimientos invasivos."
          ],
          [
            96.7,
            102.9,
            "La entrega de paciente entre turnos se hace siempre dentro de la habitación."
          ],
          [
            103.5,
            112,
            "Nutrición, fisioterapia e intendencia también corroboran la identidad antes de actuar."
          ],
          [
            112,
            117.7,
            "Así se evitan reacciones alérgicas y errores de atención."
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
            183.1,
            "Como compromisos, todas las áreas actualizarán sus formatos de registro,"
          ],
          [
            183.1,
            189.2,
            "el almacén garantizará existencias de brazaletes y Admisión identificará a los visitantes."
          ],
          [
            189.8,
            194.9,
            "Recuerda: nombre completo y fecha de nacimiento, siempre,"
          ],
          [
            194.9,
            201.4,
            "antes de actuar. Ante cualquier discrepancia, detén el proceso y aclara."
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
          "Preguntar: «¿Usted es el señor Juan Pérez?» y esperar que confirme",
          "Preguntar: «¿Usted es el paciente de la cama 5?»",
          "Pedirle que diga su nombre completo y su fecha de nacimiento",
          "Leer el brazalete en voz alta sin pedirle que hable"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿El número de cama o de habitación puede usarse como identificador?",
        "opciones": [
          "Sí, cuando el paciente está dormido o sedado",
          "Sí, durante el turno nocturno para no despertarlo",
          "Solo en urgencias, mientras llega Admisión",
          "No, nunca identifica al paciente"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Un paciente internacional anota su fecha de nacimiento como 04/03/1985. ¿Qué debes hacer?",
        "opciones": [
          "Confirmar el mes en palabras con el paciente o con su documento",
          "Registrarla como 4 de marzo, por ser el formato mexicano",
          "Registrarla como 3 de abril, por ser el formato de Estados Unidos",
          "Dejar la fecha en blanco hasta el egreso del paciente"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cómo se registran los datos iniciales del paciente mientras Admisión los confirma?",
        "opciones": [
          "Siempre con bolígrafo, para que no se pueda borrar",
          "Con lápiz; una vez confirmados, con bolígrafo",
          "Con marcador permanente sobre el brazalete",
          "Solo en el sistema, nunca en papel ni en el brazalete"
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
          "En la central de enfermería, revisando el expediente",
          "Por teléfono, para no interrumpir al paciente",
          "En el pasillo, frente a la puerta del cuarto",
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
          "Con un nombre ficticio elegido por el personal de turno hasta que se aclare su identidad",
          "Como Desconocido 1, 2…, con fecha y hora de ingreso como identificadores temporales",
          "Solo con el número de cama mientras se estabiliza y llega Admisión",
          "No se identifica hasta que llegue un familiar con sus documentos oficiales"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cómo se identifica a un paciente inconsciente o intubado?",
        "opciones": [
          "Se le pregunta su nombre de todos modos y se anota lo que se entienda",
          "No requiere identificación mientras permanezca en terapia intensiva",
          "Con la ficha de identificación en la cabecera de la cama",
          "Por su diagnóstico de ingreso y el número de cama asignado"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En caso de fallecimiento, ¿qué se hace con la identificación?",
        "opciones": [
          "Se deja el brazalete puesto y no se agrega ninguna otra identificación al cuerpo",
          "Se coloca una etiqueta en el pie solo con el nombre y el número de cama que ocupaba",
          "Se anota el número de cama y la hora del fallecimiento en la sábana que lo cubre",
          "Se retira el brazalete y se coloca la identificación sobre el tórax con sus datos y la hora de defunción"
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
          "Solo el nombre del paciente y su número de cama",
          "Fecha, hora e iniciales de quien la instaló",
          "Solo la fecha de instalación y el calibre",
          "El diagnóstico del paciente y el servicio tratante"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Quién es responsable de identificar correctamente al paciente?",
        "opciones": [
          "Solo enfermería, porque coloca el brazalete al ingreso del paciente",
          "Solo el personal médico que indica el tratamiento y los estudios",
          "Todo el personal, clínico y no clínico, que interactúa con el paciente",
          "Solo Admisión, que registra los datos del paciente en el sistema"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si los datos del paciente no coinciden con el brazalete o el documento, debes:",
        "opciones": [
          "Continuar con el procedimiento y corregir después",
          "Cambiar el brazalete por uno nuevo sin verificar",
          "Avisar al final del turno durante la entrega",
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
    "obligatorio": false,
    "descripcion": "Comunicación estructurada, órdenes verbales y transferencia segura de información.",
    "orden": 20,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Comunicación efectiva: órdenes verbales, entregas y resultados críticos",
        "duracion": "3:27 min",
        "texto": "Escuchar, escribir, leer y confirmar; bitácora y plazos de firma; SBAR y SAMPLE; egreso; resultados críticos y paro cardíaco.",
        "video": "aesp2-comunicacion-efectiva.mp4",
        "segundosMinimos": 185,
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
            69.4,
            "Toda orden verbal se registra en la bitácora del servicio con fecha, hora,"
          ],
          [
            69.4,
            74.2,
            "nombre completo y fecha de nacimiento del paciente, y el nombre y cargo de quien la emite."
          ],
          [
            74.2,
            78.5,
            "Si la indicación ocurre durante una urgencia, se usa el formato específico de esa situación."
          ],
          [
            79,
            81.7,
            "El médico que dio la indicación firma la bitácora. Si no está,"
          ],
          [
            81.7,
            84.4,
            "la registra y firma el jefe de servicio o el médico de guardia."
          ],
          [
            84.4,
            88.1,
            "El plazo para firmar es de veinticuatro horas en días hábiles y setenta y dos en fin de semana."
          ],
          [
            88.1,
            90.5,
            "El médico de guardia transcribe la indicación al expediente."
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
            143.7,
            "Por ejemplo, hemoglobina menor de seis, plaquetas menores de cincuenta mil,"
          ],
          [
            143.7,
            147.2,
            "o leucocitos fuera del rango de mil a cuarenta mil."
          ],
          [
            147.8,
            154.3,
            "En imagenología también se avisan de inmediato diagnósticos como evento vascular cerebral,"
          ],
          [
            154.3,
            161.7,
            "sangrado abdominal, tromboembolia pulmonar, pericarditis, derrame pericárdico o isquemia mesentérica."
          ],
          [
            162.3,
            170.2,
            "Durante un paro cardíaco, los medicamentos se registran en el formato específico,"
          ],
          [
            170.2,
            177.2,
            "que se integra al expediente sin transcribirlo a las hojas de enfermería."
          ],
          [
            177.9,
            183.1,
            "Como compromisos: registrar y confirmar toda orden verbal,"
          ],
          [
            183.1,
            189.3,
            "transcribir y firmar a tiempo, y entregar pacientes con SBAR o SAMPLE."
          ],
          [
            189.9,
            206.1,
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
          "Reducir el tiempo que toman las entregas de turno en cada servicio",
          "Sustituir las órdenes escritas por órdenes verbales siempre que se pueda",
          "Que solo los médicos de base puedan dar indicaciones al personal"
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
          "En cuanto se escucha, para no retrasar la atención",
          "Al terminar el turno, cuando se revisa la bitácora",
          "Cuando el médico confirma que lo leído es correcto",
          "Cuando la firma el jefe de servicio en la bitácora"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué datos se registran en la bitácora de comunicación efectiva?",
        "opciones": [
          "Solo la indicación, la hora y el servicio donde se dio, sin datos del paciente",
          "El número de cama, el diagnóstico y el nombre de la enfermera que la recibió",
          "Únicamente el nombre del médico y la indicación que dio por teléfono o en persona",
          "Fecha, hora, nombre y fecha de nacimiento del paciente, y nombre y cargo de quien emite la orden"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si la orden verbal se da durante una urgencia, ¿dónde se registra?",
        "opciones": [
          "En el formato específico de la urgencia",
          "En una hoja suelta que se anexa después",
          "No se registra porque es una urgencia",
          "En el chat del servicio para que quede constancia"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Quién debe firmar la bitácora para validar una orden verbal?",
        "opciones": [
          "El paciente o su familiar responsable",
          "El médico que emitió la indicación",
          "Cualquier persona del turno que esté presente",
          "El personal de admisión al cierre del día"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuál es el plazo para firmar la bitácora?",
        "opciones": [
          "Una semana, al revisar el expediente",
          "Al cierre del mes, junto con las estadísticas",
          "24 horas en días hábiles y 72 horas en fin de semana",
          "48 horas siempre, sin importar el día de la semana"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si el médico tratante no está, ¿quién registra y firma la indicación?",
        "opciones": [
          "El personal de enfermería que recibió la orden",
          "Nadie; se espera a que regrese el médico tratante",
          "El familiar del paciente, como testigo de la orden",
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
          "Respuesta"
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
          "Pidiéndole que repita sus instrucciones, horarios y señales de alerta",
          "Entregándole la receta impresa y el resumen sin dar más explicación",
          "Preguntándole solo si tiene alguna duda antes de retirarse del hospital",
          "Explicándole las indicaciones únicamente al familiar que lo acompaña"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál de estos resultados de laboratorio es crítico y se notifica de inmediato?",
        "opciones": [
          "Hemoglobina de 12 g/dL",
          "Hemoglobina menor de 6 g/dL",
          "Plaquetas de 250,000 /µL",
          "Leucocitos de 8,000 /µL en adulto"
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
          "En la bitácora estándar de comunicación efectiva",
          "En las hojas de enfermería, transcritos después del evento",
          "No se registran, porque se trata de una urgencia",
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
    "orden": 30,
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
          "Aquel que, ante un error en su manejo, puede causar un daño grave",
          "Cualquier medicamento de costo elevado o de importación",
          "Un medicamento que solo se usa en quirófano o terapia intensiva",
          "Un medicamento con caducidad corta que debe usarse primero"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué grupos se priorizan en el listado institucional de alto riesgo?",
        "opciones": [
          "Antibióticos, analgésicos y antiácidos de uso frecuente",
          "Electrolitos concentrados, insulinas y anticoagulantes parenterales",
          "Vitaminas, suplementos y soluciones de hidratación oral",
          "Solo quimioterapias y medicamentos oncológicos orales"
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
          "Medicamento que requiere refrigeración",
          "Medicamento controlado que exige receta especial",
          "Medicamento caducado que debe retirarse",
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
          "Cubra todo el nombre comercial para evitar confusiones",
          "No cubra información crítica, como la fecha de caducidad",
          "Se coloque solo en la caja exterior y no en el frasco",
          "Lleve el nombre del paciente al que se administrará"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cómo se almacenan los medicamentos en el área?",
        "opciones": [
          "Por color de empaque, para encontrarlos rápido",
          "Por fecha de compra, del más antiguo al más reciente",
          "En orden alfabético, respetando temperatura y refrigeración",
          "Como lleguen del almacén, en sus cajas originales"
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
          "En ámpulas o frascos completos",
          "En gramos o miliequivalentes",
          "En mililitros del frasco",
          "En cucharadas o gotas"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Con cuánta anticipación máxima se solicita un medicamento de alto riesgo?",
        "opciones": [
          "Al inicio del turno, junto con los demás",
          "Un día antes, para tenerlo disponible",
          "20 minutos antes de su administración",
          "2 horas antes de la dosis programada"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cómo se trasladan los electrolitos concentrados?",
        "opciones": [
          "En la bolsa del uniforme de quien los traslada",
          "En una bolsa sin identificar para mayor discreción",
          "Junto con los demás medicamentos del turno en la charola",
          "En contenedores con tapa roja o hieleras identificadas"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué es la doble verificación?",
        "opciones": [
          "Una persona prepara el medicamento y otra lo verifica por su cuenta",
          "La misma persona revisa dos veces el medicamento antes de administrarlo",
          "El paciente revisa su medicamento antes de que se le administre",
          "Se revisa dos veces la receta, sin revisar el medicamento preparado"
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
          "Cuando hay poco personal en el turno",
          "Durante el turno nocturno, si no hay otro profesional",
          "Solo en una urgencia con riesgo inminente para la vida",
          "Cuando el medicamento ya se conoce bien en el servicio"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si una dosis programada no se administra, ¿qué debe hacerse?",
        "opciones": [
          "Administrarla en el siguiente horario sin dejar registro",
          "Desecharla sin avisar para no duplicar la dosis",
          "Comentarlo solo de forma verbal en la entrega de turno",
          "Registrar la razón en la hoja de enfermería y en el expediente"
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
    "obligatorio": false,
    "descripcion": "Higiene de manos y medidas para prevenir infecciones asociadas a la atención.",
    "orden": 50,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "AESP 5 · Higiene de manos: video del curso",
        "duracion": "1:33 min",
        "texto": "Higiene de manos y medidas para prevenir infecciones asociadas a la atención.",
        "video": "aesp5-higiene-manos.mp4",
        "segundosMinimos": 83,
        "subtitulos": [
          [
            0.5,
            5.1,
            "Bienvenida al curso de la Acción Esencial para la Seguridad del Paciente número 5:"
          ],
          [
            5.4,
            8.4,
            "reducción del riesgo de infecciones asociadas a la atención."
          ],
          [
            9.3,
            12.8,
            "Las manos son el principal vehículo de transmisión dentro del hospital."
          ],
          [
            13.2,
            19.2,
            "Por eso la higiene de manos es obligatoria para todo el personal que tiene contacto con pacientes o con su entorno,"
          ],
          [
            19.5,
            21,
            "en todos los turnos y servicios."
          ],
          [
            21.5,
            26.8,
            "Realiza higiene de manos en los cinco momentos de la OMS: antes del contacto con el paciente,"
          ],
          [
            26.8,
            31.3,
            "antes de una tarea aséptica, después de la exposición a líquidos corporales,"
          ],
          [
            31.6,
            35.6,
            "después del contacto con el paciente y después del contacto con su entorno,"
          ],
          [
            35.9,
            41.9,
            "usa agua y jabón de 40 a 60 segundos cuando las manos estén visiblemente sucias."
          ],
          [
            42.6,
            48.1,
            "En los demás casos, usa solución alcoholada de 20 a 30 segundos hasta que las manos queden"
          ],
          [
            48.1,
            56.4,
            "secas. Frota cada superficie en orden: palmas, dorsos, espacios entre los dedos, nudillos, pulgares y yemas."
          ],
          [
            57.1,
            61.5,
            "Si usaste agua, seca con toalla desechable y cierra el grifo con ella."
          ],
          [
            62.2,
            64.6,
            "Los guantes no sustituyen la higiene de manos."
          ],
          [
            65.5,
            70.3,
            "Lávate antes de ponértelos y en cuanto te los quites, y cámbialos entre un paciente y otro."
          ],
          [
            71.1,
            72.6,
            "Mantén las uñas naturales,"
          ],
          [
            72.8,
            79,
            "cortas y limpias. Además de la higiene de manos, aplica las precauciones según la forma de transmisión,"
          ],
          [
            79.5,
            85.6,
            "estándar con todos los pacientes y de contacto, por gotas o por vía aérea cuando se indiquen."
          ],
          [
            86.1,
            90.1,
            "Recuerda, cinco momentos, técnica completa y sin excepciones."
          ],
          [
            91,
            92.7,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación AESP 5",
            "url": "presentaciones/aesp5-higiene-manos.html"
          },
          {
            "nombre": "Guía rápida AESP 5 (PDF)",
            "url": "materiales/aesp5-higiene-manos-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Cuántos momentos de higiene de manos establece la OMS?",
        "opciones": [
          "Cinco",
          "Tres",
          "Siete",
          "Dos"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál de estos es uno de los cinco momentos?",
        "opciones": [
          "Al terminar el turno, antes de salir del hospital",
          "Antes de realizar una tarea limpia o aséptica",
          "Al entrar al comedor del personal",
          "Antes de checar la entrada en el reloj"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Tocar el barandal o el monitor del paciente y salir de la habitación corresponde al momento:",
        "opciones": [
          "Antes del contacto con el paciente, por tocar su cama",
          "Antes de una tarea limpia o aséptica en la habitación",
          "Después del contacto con el entorno del paciente",
          "Ninguno, porque no se tuvo contacto directo con el paciente"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si las manos están visiblemente sucias se debe usar:",
        "opciones": [
          "Solución alcoholada",
          "Solo una toalla seca",
          "Únicamente guantes",
          "Agua y jabón"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuánto dura la higiene de manos con agua y jabón?",
        "opciones": [
          "40 a 60 segundos",
          "5 a 10 segundos",
          "20 a 30 segundos",
          "2 minutos"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuánto dura la fricción con solución alcoholada?",
        "opciones": [
          "5 segundos",
          "20 a 30 segundos",
          "Hasta que se acabe el producto",
          "60 a 90 segundos"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La solución alcoholada se aplica correctamente cuando:",
        "opciones": [
          "Se enjuaga con agua al terminar la fricción",
          "Se seca con toalla de inmediato para no gotear",
          "Se frota hasta que las manos quedan secas",
          "Se aplica solo en las palmas y los dedos"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Los guantes sustituyen la higiene de manos?",
        "opciones": [
          "Sí, siempre",
          "Solo en procedimientos cortos",
          "Solo si son estériles",
          "No"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Después de retirar los guantes se debe:",
        "opciones": [
          "Realizar higiene de manos",
          "Tocar el expediente primero",
          "Esperar hasta el siguiente paciente",
          "Ponerse otros sin lavarse"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Al lavarte con agua y jabón, el grifo se cierra:",
        "opciones": [
          "Con la mano limpia, al terminar",
          "Con la toalla desechable",
          "Con el codo, aún mojado",
          "Se deja abierto para el siguiente"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué recomendación sobre uñas es correcta?",
        "opciones": [
          "Las uñas artificiales son seguras si están limpias",
          "El esmalte sustituye la higiene",
          "Mantenerlas naturales, cortas y limpias",
          "El largo no importa"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Las precauciones por vía aérea (tuberculosis, sarampión) requieren:",
        "opciones": [
          "Solo guantes y bata desechable",
          "Mascarilla quirúrgica y distancia de 2 m",
          "Ninguna medida especial si no hay fiebre",
          "Respirador N95 y puerta cerrada"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Todo el personal que tiene contacto con pacientes o su entorno.",
    "nivel": "Básico",
    "objetivos": [
      "Identificar los cinco momentos de la higiene de manos.",
      "Elegir entre solución alcoholada y agua con jabón y aplicar la técnica completa.",
      "Reconocer que los guantes no sustituyen la higiene de manos."
    ]
  },
  {
    "id": "precauciones-estandar",
    "titulo": "Precauciones estándar y uso seguro de EPP",
    "area": "Calidad y Seguridad",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Medidas básicas para prevenir exposiciones y cortar cadenas de transmisión.",
    "orden": 90,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Precauciones estándar · EPP: video del curso",
        "duracion": "1:32 min",
        "texto": "Medidas básicas para prevenir exposiciones y cortar cadenas de transmisión.",
        "video": "precauciones-estandar.mp4",
        "segundosMinimos": 82,
        "subtitulos": [
          [
            0.8,
            5.8,
            "Bienvenida al curso de precauciones estándar y uso seguro del equipo de protección personal."
          ],
          [
            6.2,
            13,
            "Toda sangre, fluido corporal, secreción, piel no intacta y mucosa se considera potencialmente infecciosa."
          ],
          [
            13.4,
            18.6,
            "Por eso las precauciones estándar se aplican con cada paciente, sin importar su diagnóstico."
          ],
          [
            19.2,
            21.6,
            "Son ocho medidas que siempre van juntas."
          ],
          [
            21.6,
            28.7,
            "Higiene de manos, equipo de protección según el riesgo, higiene respiratoria, manejo seguro de punzocortantes,"
          ],
          [
            29,
            35.6,
            "inyección segura, limpieza del equipo, limpieza del entorno y manejo correcto de ropa y residuos."
          ],
          [
            35.9,
            42.1,
            "El riesgo de la tarea decide el equipo, guantes ante sangre o fluidos, bata ante salpicaduras a la ropa,"
          ],
          [
            42.5,
            44.6,
            "mascarilla y lentes ante salpicaduras a la cara."
          ],
          [
            45.1,
            47.8,
            "Usar más equipo del necesario no te protege más."
          ],
          [
            47.8,
            53.6,
            "Para colocarte el equipo, haz higiene de manos y después ponte la bata, la mascarilla,"
          ],
          [
            53.8,
            58.2,
            "los lentes o la careta y al final, los guantes por encima del puño de la bata."
          ],
          [
            58.7,
            61.5,
            "Al retirarlo, lo más contaminado sale primero."
          ],
          [
            61.9,
            64.1,
            "Guantes, lentes, bata y mascarilla."
          ],
          [
            65.2,
            67,
            "Termina siempre con higiene de manos."
          ],
          [
            67.8,
            69.1,
            "Nunca reencapuches agujas."
          ],
          [
            70.2,
            73.2,
            "Deséchalas de inmediato en el recipiente rígido."
          ],
          [
            73.7,
            76.3,
            "Si te pinchas o te salpicas, lava la zona,"
          ],
          [
            76.3,
            81.7,
            "enjuaga la mucosa con agua abundante y reporta de inmediato a tu jefe y a Epidemiología."
          ],
          [
            82.8,
            85.4,
            "Recuerda, cada paciente, cada vez."
          ],
          [
            86,
            90,
            "Evalúa el riesgo, elige el equipo y retíralo sin contaminarte."
          ],
          [
            90.3,
            91.9,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Precauciones estándar",
            "url": "presentaciones/precauciones-estandar.html"
          },
          {
            "nombre": "Guía rápida Precauciones estándar (PDF)",
            "url": "materiales/precauciones-estandar-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "Las precauciones estándar se aplican a:",
        "opciones": [
          "Todas las personas atendidas",
          "Solo pacientes con diagnóstico infeccioso",
          "Solo pacientes en aislamiento",
          "Solo en quirófano"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El EPP debe seleccionarse según:",
        "opciones": [
          "La preferencia personal de quien atiende",
          "El riesgo de exposición de la tarea",
          "El color del uniforme del servicio",
          "La disponibilidad del material del día"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuál NO es un componente de las precauciones estándar?",
        "opciones": [
          "Higiene respiratoria y etiqueta de la tos",
          "Inyección segura con material de un solo uso",
          "Aislar a todos los pacientes en presión negativa",
          "Limpieza y desinfección del entorno del paciente"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Ante riesgo de salpicadura a los ojos se usa:",
        "opciones": [
          "Solo guantes de nitrilo",
          "Solo bata impermeable",
          "Gorro y cubrebocas",
          "Lentes o careta"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué se coloca al final?",
        "opciones": [
          "Los guantes",
          "La bata",
          "La mascarilla",
          "Los lentes"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué se retira primero?",
        "opciones": [
          "La mascarilla",
          "Los guantes",
          "La bata",
          "Los lentes"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La mascarilla se retira:",
        "opciones": [
          "Tocando el frente para retirarla rápido",
          "Antes que los guantes, para no tocarla sucia",
          "Por las cintas, al final",
          "No se retira hasta terminar el turno"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Los guantes sustituyen la higiene de manos?",
        "opciones": [
          "Sí",
          "Solo si son estériles",
          "Solo en procedimientos cortos",
          "No"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Con una aguja usada se debe:",
        "opciones": [
          "Desechar inmediatamente en el recipiente rígido",
          "Reencapucharla con las dos manos antes de tirarla",
          "Dejarla en la charola para desecharla al final",
          "Doblarla o romperla antes de tirarla a la bolsa"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Usar más EPP del necesario:",
        "opciones": [
          "Siempre es más seguro, aunque se gaste más material",
          "Desperdicia material y aumenta el riesgo de autocontaminación",
          "Es obligatorio en todos los procedimientos del hospital",
          "No tiene ningún efecto en la seguridad del personal"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si te pinchas con una aguja usada, lo primero es:",
        "opciones": [
          "Esperar a ver si aparecen síntomas en los días siguientes",
          "Exprimir la herida y no decir nada para no preocupar a nadie",
          "Lavar con agua y jabón y reportar de inmediato",
          "Terminar el turno y luego avisar al jefe inmediato"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Una medida de higiene respiratoria es:",
        "opciones": [
          "Toser sobre la mano y seguir trabajando",
          "Retirar la mascarilla para hablar con claridad",
          "Compartir el cubrebocas cuando falte material",
          "Dar mascarilla al paciente que tose"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal clínico, de laboratorio, limpieza y prehospitalario.",
    "nivel": "Básico",
    "objetivos": [
      "Aplicar las precauciones estándar con todos los pacientes.",
      "Seleccionar, colocar y retirar el EPP sin autocontaminarse.",
      "Prevenir y reportar exposiciones a punzocortantes y fluidos."
    ]
  },
  {
    "id": "trato-digno",
    "titulo": "Trato digno y experiencia del paciente",
    "area": "Calidad y Seguridad",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Comunicación respetuosa, privacidad, escucha y participación del paciente.",
    "orden": 100,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Trato digno: video del curso",
        "duracion": "1:26 min",
        "texto": "Comunicación respetuosa, privacidad, escucha y participación del paciente.",
        "video": "trato-digno.mp4",
        "segundosMinimos": 77,
        "subtitulos": [
          [
            0.9,
            4.6,
            "Bienvenida al curso de trato digno y experiencia del paciente."
          ],
          [
            5.2,
            8,
            "Cada interacción construye o rompe la confianza."
          ],
          [
            8.8,
            12.5,
            "Un paciente que confía pregunta, avisa y sigue las indicaciones,"
          ],
          [
            12.5,
            16.1,
            "y el trato digno es un derecho de toda persona que atendemos."
          ],
          [
            16.9,
            23.2,
            "La Carta de los Derechos Generales de los Pacientes reconoce 10 derechos, entre ellos recibir un trato digno,"
          ],
          [
            23.5,
            29.5,
            "información clara, decidir libremente, la confidencialidad y ser atendido cuando se inconforme."
          ],
          [
            30.4,
            35.6,
            "En el primer contacto, saluda con un tono cálido, preséntate con tu nombre y tu función,"
          ],
          [
            36.1,
            39.2,
            "escucha sin interrumpir y explica qué harás y qué sigue."
          ],
          [
            40,
            46.1,
            "Usa un lenguaje sencillo y confirma la comprensión pidiendo al paciente que explique con sus palabras lo que entendió."
          ],
          [
            46.8,
            49.6,
            "Si habla otro idioma, busca apoyo bilingüe."
          ],
          [
            50,
            57.4,
            "Protege la privacidad: toca antes de entrar, cubre al paciente y comenta los casos solo con quien participa en la atención."
          ],
          [
            58.3,
            61.2,
            "Nunca compartas datos ni imágenes en redes sociales."
          ],
          [
            62.1,
            68.3,
            "Respeta la identidad, la cultura, las creencias y las decisiones informadas de cada persona, sin distinción."
          ],
          [
            69,
            73.1,
            "Ante una inconformidad, escucha con calma, reconoce la molestia,"
          ],
          [
            73.4,
            76.8,
            "resuelve lo que esté en tus manos y canaliza a tu jefe o a Calidad."
          ],
          [
            77.6,
            83.4,
            "Recuerda, preséntate, escucha, explica con claridad y protege la privacidad."
          ],
          [
            84.1,
            85.7,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Trato digno",
            "url": "presentaciones/trato-digno.html"
          },
          {
            "nombre": "Guía rápida Trato digno (PDF)",
            "url": "materiales/trato-digno-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "Al iniciar la atención se debe:",
        "opciones": [
          "Presentarse con nombre y función, y escuchar",
          "Ir directo al procedimiento",
          "Pedir la credencial del seguro antes de saludar",
          "Hablar solo con el familiar"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuántos derechos reconoce la Carta de los Derechos Generales de los Pacientes?",
        "opciones": [
          "Cinco",
          "Diez",
          "Doce",
          "Ocho"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Es un derecho del paciente:",
        "opciones": [
          "Elegir el horario y al personal que lo atiende",
          "Recibir medicamentos sin receta si los solicita",
          "Contar con facilidades para una segunda opinión",
          "Revisar los expedientes de otros pacientes"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Para confirmar la comprensión es útil:",
        "opciones": [
          "Preguntar solo “¿entendió?” al terminar",
          "Repetir la explicación más rápido y más fuerte",
          "Entregar un folleto sin dar explicación",
          "Pedir al paciente que lo explique con sus palabras"
        ],
        "correcta": 3
      },
      {
        "pregunta": "La privacidad del paciente debe protegerse:",
        "opciones": [
          "Durante toda la atención",
          "Solo en quirófano",
          "Solo si el paciente lo pide",
          "Solo con pacientes famosos"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Tomar una foto de un paciente con tu celular para compartirla en un chat:",
        "opciones": [
          "Está permitido si no se ve la cara del paciente",
          "Viola su confidencialidad y no debe hacerse",
          "Está bien si es para enseñar a otros compañeros",
          "Depende del turno y de quién esté en el chat"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si el paciente habla otro idioma que no dominas:",
        "opciones": [
          "Hablas más fuerte",
          "Le pides a otro paciente que traduzca",
          "Buscas apoyo bilingüe",
          "Omites la explicación"
        ],
        "correcta": 2
      },
      {
        "pregunta": "El trato digno incluye:",
        "opciones": [
          "Atender primero a quien pueda pagar más rápido",
          "Corregir las creencias del paciente cuando no coinciden",
          "Decidir por el paciente lo que más le conviene",
          "Respetar su cultura, creencias y decisiones informadas"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Ante una inconformidad se debe:",
        "opciones": [
          "Escuchar con calma y canalizarla",
          "Discutir para aclarar quién tiene razón",
          "Ignorarla",
          "Culpar a otra área"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es la forma correcta de contestar una llamada externa?",
        "opciones": [
          "“¿Bueno?, ¿con quién desea hablar? Aquí es el hospital”",
          "“Saint Luke's Hospitals, buenos días, le atiende (nombre)”",
          "“¿Qué necesita? Aquí es el hospital, dígame por favor”",
          "“Hospital, diga, ¿en qué le puedo ayudar el día de hoy?”"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Comentar el caso de un paciente en el elevador con un compañero:",
        "opciones": [
          "Es correcto si no se menciona el nombre del paciente",
          "Ayuda a resolver dudas rápido entre compañeros de turno",
          "Debe evitarse; se comenta en privado con quien participa en la atención",
          "Está permitido entre médicos, porque todos guardan el secreto profesional"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Respetar una decisión informada del paciente significa:",
        "opciones": [
          "Estar de acuerdo con ella aunque no la comparta",
          "Insistir hasta que cambie de opinión por su bien",
          "Retirarle la atención si no sigue las indicaciones",
          "Informar con claridad y aceptar lo que decida"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Todo el personal que interactúa con pacientes y familiares.",
    "nivel": "Básico",
    "objetivos": [
      "Reconocer los derechos generales de los pacientes.",
      "Comunicarse con respeto, claridad y confirmación de la comprensión.",
      "Proteger la privacidad y atender inconformidades."
    ]
  },
  {
    "id": "acc11",
    "titulo": "ACC.1.1 Proceso de aceptación para la atención",
    "area": "Admisión y Recepción",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Formas de ingreso, identificación correcta, flujo de admisión a médico, documentos y egreso del paciente.",
    "orden": 110,
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
            80.5,
            "Al ingresar debemos completar el formato de registro,"
          ],
          [
            80.5,
            84.1,
            "el aviso de privacidad y el consentimiento informado si hay procedimientos."
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
          "Solo admisión, que registra al paciente",
          "Solo caja, al momento de cobrar",
          "Solo urgencias, por ser la entrada principal"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuáles son las formas de ingreso de un paciente?",
        "opciones": [
          "Solo urgencias, que es la única puerta de entrada al hospital",
          "Consulta externa, urgencias, hospitalización programada y ambulatorio",
          "Solo hospitalización, siempre con cita previa y depósito en caja",
          "Solo por cita telefónica con el médico tratante o con su asistente"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué documento debe solicitar admisión al registrar al paciente?",
        "opciones": [
          "Un comprobante de domicilio reciente",
          "Una carta de recomendación de su médico",
          "Una identificación oficial, como INE o pasaporte",
          "Ninguno, basta con lo que diga el paciente"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Por qué es tan importante el registro inicial?",
        "opciones": [
          "Solo para las estadísticas mensuales del hospital",
          "Porque lo solicita el paciente al llegar a admisión",
          "Porque se usa para campañas de publicidad del hospital",
          "Porque es un documento médico-legal y sus errores se repiten"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Un pasaporte de EE. UU. muestra la fecha 04/03/1990. ¿Qué haces?",
        "opciones": [
          "Preguntas directamente al paciente o familiar su fecha de nacimiento",
          "La registras como 4 de marzo, por el formato que usamos en México",
          "La registras como 3 de abril, por ser un documento de EE. UU.",
          "Dejas la fecha vacía hasta que el paciente sea dado de alta"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Si el paciente usa seguro, el nombre registrado debe:",
        "opciones": [
          "Ser el apodo con el que el paciente se presenta",
          "Coincidir con la credencial del seguro",
          "Escribirse solo con iniciales para ahorrar espacio",
          "Copiarse del brazalete que ya tenga puesto"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Para un menor mexicano sin documentos, ¿qué puedes buscar en la página del gobierno?",
        "opciones": [
          "Su RFC con homoclave, en el portal del SAT",
          "Su número de seguro social en el portal del IMSS",
          "Su CURP, con nombre, fecha y estado de nacimiento",
          "Su credencial escolar en la página de la SEP"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué entrega admisión a enfermería al reportar el arribo?",
        "opciones": [
          "La hoja de cargos con los servicios solicitados",
          "El reglamento firmado por el paciente",
          "El consentimiento informado ya firmado",
          "Una copia de la identificación del paciente"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué hace enfermería al recibir al paciente?",
        "opciones": [
          "La doble verificación de sus datos y lo acompaña con el médico",
          "El cobro del servicio antes de pasarlo con el médico",
          "La factura del servicio con los datos fiscales",
          "El alta administrativa y la entrega de pertenencias"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál de estos documentos se llena al ingreso de todo paciente?",
        "opciones": [
          "La hoja de egreso con el resumen clínico",
          "El aviso de privacidad",
          "La factura con los datos fiscales",
          "La nota de defunción, por precaución"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué se entrega a los pacientes hospitalizados?",
        "opciones": [
          "Un descuento por pronto pago en caja y la factura del depósito",
          "Las llaves del cuarto y del guardarropa con su inventario",
          "El reglamento del hospital con depósitos, garantías y visitas",
          "Su expediente clínico original para que lo resguarde la familia"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Al egreso, ¿qué entrega enfermería a admisión?",
        "opciones": [
          "El brazalete de identificación retirado",
          "La receta de egreso firmada por el médico",
          "Las pertenencias del paciente inventariadas",
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
    "obligatorio": false,
    "descripcion": "Identificación, envasado, almacenamiento temporal y recolección de RPBI conforme a la NOM-087.",
    "orden": 120,
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
            "pesaje y entrega a la empresa recolectora autorizada."
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
          "NOM-017-STPS-2008 (EPP)",
          "NOM-004-SSA3-2012 (expediente)",
          "NOM-045-SSA2-2005 (vigilancia)"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es el orden de los cuatro pasos del manejo de RPBI?",
        "opciones": [
          "Recolectar, envasar, identificar y almacenar",
          "Identificar, envasar, almacenar y recolectar",
          "Almacenar, identificar, recolectar y envasar",
          "Envasar, recolectar, almacenar e identificar"
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
          "Bolsa roja abierta para que escurra",
          "El drenaje, con abundante agua",
          "Bolsa negra doble, bien cerrada",
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
          "Reencapuchadas, dentro de la bolsa roja",
          "Sin reencapuchar, en el recipiente rígido rojo",
          "En la basura común, envueltas en papel",
          "En la bolsa amarilla de patológicos"
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
          "En el cuarto del paciente hasta su egreso",
          "En un congelador hasta su disposición final",
          "En la central de enfermería, en una caja rotulada",
          "En la bolsa negra común del área"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué deben evitar las rutas de recolección interna?",
        "opciones": [
          "Los elevadores de servicio y las escaleras de emergencia",
          "El almacén temporal y el cuarto de limpieza",
          "Las áreas de espera y los horarios de alimentación",
          "La salida del hospital y el andén de carga"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si sufres un pinchazo con una aguja usada, debes:",
        "opciones": [
          "Esperar unos días a ver si aparecen síntomas antes de avisar",
          "Comentarlo al final del turno con tu jefe inmediato",
          "Lavarte la herida y no decir nada a nadie para no alarmar",
          "Reportarlo de inmediato a Epidemiología y Dirección Médica"
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
    "orden": 130,
    "lecciones": [
      {
        "tipo": "lectura",
        "titulo": "Gasometría arterial: puntos clave",
        "duracion": "10 min",
        "texto": "Lectura de apoyo con las prácticas recomendadas para la toma de gasometría arterial. Prevalece siempre el protocolo institucional y del laboratorio.\n\n• Antes: orden médica, identificación con nombre completo y fecha de nacimiento, FiO₂ estable al menos 10 minutos, y registro de FiO₂ y temperatura.\n• Pregunta por anticoagulantes o trastornos de coagulación: requerirán más tiempo de presión.\n• Prueba de Allen antes de puncionar la radial: si el color no regresa en segundos, no punciones esa muñeca.\n• Técnica: muñeca en ligera extensión, antisepsia, bisel hacia arriba a 45°; el flujo arterial es pulsátil y llena la jeringa sin aspirar.\n• Después: presión firme al menos 5 minutos, aguja segura, sin burbujas, tapada, mezclada y etiquetada.\n• Envía de inmediato; idealmente se analiza antes de 30 minutos.\n• Errores: burbujas, exceso de heparina, muestra venosa y retraso.\n• Vigila la mano: dolor intenso, palidez, frialdad o entumecimiento se informan de inmediato.\n\nRevisa la presentación y la guía rápida antes de la evaluación.",
        "segundosMinimos": 60,
        "materiales": [
          {
            "nombre": "Presentación Gasometría arterial",
            "url": "presentaciones/gasometria-arterial.html"
          },
          {
            "nombre": "Guía rápida Gasometría arterial (PDF)",
            "url": "materiales/gasometria-arterial-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "Antes de la punción radial se valora la circulación colateral con la:",
        "opciones": [
          "Prueba de Allen",
          "Prueba de Romberg",
          "Maniobra de Valsalva",
          "Escala de Glasgow"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuánto tiempo debe mantenerse estable la FiO₂ antes de tomar la muestra?",
        "opciones": [
          "No importa el tiempo",
          "Al menos 10 minutos",
          "Basta con 1 minuto",
          "Deben ser 2 horas exactas"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La jeringa para gasometría debe contener:",
        "opciones": [
          "Solución salina para lavar",
          "Alcohol para esterilizar",
          "Anticoagulante (heparina)",
          "Nada, debe ir vacía"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Con qué ángulo se punciona la arteria radial?",
        "opciones": [
          "90°, perpendicular a la piel",
          "10°, casi paralela a la piel",
          "Paralela a la piel",
          "Aproximadamente 45°"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cómo se reconoce el flujo arterial?",
        "opciones": [
          "Es pulsátil y llena la jeringa sin aspirar",
          "Es oscuro, lento y requiere aspirar",
          "Requiere aspirar con fuerza para llenar",
          "No sale sangre hasta retirar la aguja"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Después de la punción arterial se debe:",
        "opciones": [
          "Doblar el brazo sin presionar el sitio",
          "Aplicar presión firme al menos 5 minutos",
          "Dar masaje vigoroso para evitar el hematoma",
          "Colocar un torniquete durante 10 minutos"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En un paciente con anticoagulantes, la presión en el sitio:",
        "opciones": [
          "No es necesaria",
          "Debe ser de 1 minuto",
          "Debe mantenerse más tiempo",
          "Debe evitarse por riesgo de trombosis"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué debe evitarse en la muestra?",
        "opciones": [
          "El etiquetado",
          "La mezcla",
          "El traslado inmediato",
          "Las burbujas de aire"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Las burbujas de aire en la muestra:",
        "opciones": [
          "Suben la PaO₂ y bajan la PaCO₂",
          "No alteran el resultado",
          "Suben el pH en todos los casos",
          "Mejoran la conservación de la muestra"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Además de los identificadores, la etiqueta debe indicar:",
        "opciones": [
          "El costo del estudio y la forma de pago",
          "La hora de toma, la FiO₂ y la temperatura",
          "Solo el número de cama y el servicio",
          "El nombre del laboratorista que la procesa"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Una vez tomada, la muestra se debe:",
        "opciones": [
          "Dejar varias horas a temperatura ambiente",
          "Destapar para eliminar el aire después de tomarla",
          "Enviar de inmediato para analizarse lo antes posible",
          "Guardar en el congelador hasta el día siguiente"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Después de la punción el paciente refiere la mano fría, pálida y entumecida. ¿Qué haces?",
        "opciones": [
          "Aplicas calor y esperas",
          "Lo registras al final del turno",
          "Le pides que mueva la mano",
          "Avisas de inmediato al médico"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal de enfermería y terapia respiratoria.",
    "nivel": "Intermedio",
    "objetivos": [
      "Preparar al paciente y los insumos para la punción arterial.",
      "Tomar la muestra sin burbujas de aire y con la técnica correcta.",
      "Identificar, conservar y trasladar la muestra conforme al protocolo."
    ]
  },
  {
    "id": "ekg",
    "titulo": "Electrocardiografía básica EKG 12D",
    "area": "Enfermería",
    "horas": 3,
    "obligatorio": false,
    "descripcion": "Colocación de electrodos, adquisición y detección de trazos críticos.",
    "orden": 140,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Electrocardiograma 12D: video del curso",
        "duracion": "1:40 min",
        "texto": "Colocación de electrodos, adquisición y detección de trazos críticos.",
        "video": "ekg-12-derivaciones.mp4",
        "segundosMinimos": 89,
        "subtitulos": [
          [
            0.9,
            4.5,
            "Bienvenida al curso de electrocardiograma de 12 derivaciones."
          ],
          [
            5.2,
            7.3,
            "Ante un paciente con dolor torácico,"
          ],
          [
            7.5,
            13,
            "el electrocardiograma se toma en los primeros 10 minutos desde su llegada y se entrega de inmediato al médico."
          ],
          [
            13.4,
            16.6,
            "Se repite si el dolor o el estado del paciente cambian."
          ],
          [
            16.9,
            18.5,
            "Un buen trazo empieza en la piel."
          ],
          [
            19.4,
            23.9,
            "Identifica al paciente, explica el procedimiento, cuida su privacidad,"
          ],
          [
            24.2,
            28.1,
            "colócalo en decúbito supino y relajado y asegura una piel limpia y"
          ],
          [
            28.1,
            33.1,
            "seca. Coloca los cuatro electrodos de las extremidades de forma simétrica."
          ],
          [
            33.7,
            38.7,
            "Revisa el código de color de tu equipo, porque el error más común es invertir los brazos."
          ],
          [
            39,
            42.4,
            "Para las precordiales, cuenta los espacios intercostales."
          ],
          [
            43,
            47.6,
            "V1 y V2 van en el cuarto espacio a cada lado del esternón."
          ],
          [
            48.4,
            51.9,
            "V4 va en el quinto espacio, en la línea medioclavicular."
          ],
          [
            52.7,
            56.8,
            "V3 queda entre ambos y V5 y V6 al nivel de V4."
          ],
          [
            56.8,
            64.1,
            "Las 12 derivaciones miran distintas caras del corazón, inferior, lateral, septal y anterior."
          ],
          [
            64.9,
            71.1,
            "Verifica la calibración estándar, 25 milímetros por segundo y 10 milímetros por milivoltio."
          ],
          [
            71.3,
            77.8,
            "Si hay movimiento, interferencia, línea basal errante o brazos invertidos, corrige y repite el trazo."
          ],
          [
            78.1,
            80.8,
            "Tú no interpretas pero sí reconoces y notificas."
          ],
          [
            80.8,
            88,
            "Ante una elevación del segmento ST, un ritmo muy rápido o muy lento, o un trazo caótico, avisa de inmediato."
          ],
          [
            88.7,
            91.7,
            "Si el paciente no responde, activa el Código Azul."
          ],
          [
            93.2,
            96.9,
            "Recuerda, electrodos en su lugar, trazo limpio y entrega inmediata."
          ],
          [
            98.2,
            99.8,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación EKG",
            "url": "presentaciones/ekg-12-derivaciones.html"
          },
          {
            "nombre": "Guía rápida EKG (PDF)",
            "url": "materiales/ekg-12-derivaciones-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Cuántas derivaciones registra el estudio estándar?",
        "opciones": [
          "12",
          "10",
          "6",
          "3"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Ante un paciente con dolor torácico, el electrocardiograma debe tomarse en:",
        "opciones": [
          "La primera hora desde su llegada",
          "10 minutos o menos desde su llegada",
          "Cuando lo valore el cardiólogo de guardia",
          "Al día siguiente, en ayuno"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuántos electrodos se colocan para un electrocardiograma de 12 derivaciones?",
        "opciones": [
          "12",
          "6",
          "10",
          "4"
        ],
        "correcta": 2
      },
      {
        "pregunta": "El electrodo V1 se coloca en:",
        "opciones": [
          "5.º espacio intercostal, línea medioclavicular izquierda",
          "4.º espacio intercostal, borde esternal izquierdo",
          "Línea axilar media",
          "4.º espacio intercostal, borde esternal derecho"
        ],
        "correcta": 3
      },
      {
        "pregunta": "El electrodo V4 se coloca en:",
        "opciones": [
          "5.º espacio intercostal, línea medioclavicular izquierda",
          "2.º espacio intercostal, borde esternal derecho",
          "5.º espacio intercostal, línea axilar anterior derecha",
          "Sobre el esternón, a nivel del 4.º espacio"
        ],
        "correcta": 0
      },
      {
        "pregunta": "V6 se coloca en:",
        "opciones": [
          "El 4.º espacio intercostal, borde esternal derecho",
          "La línea axilar media, al nivel de V4",
          "Entre V2 y V4, en el 5.º espacio",
          "El hombro izquierdo, sobre la clavícula"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La velocidad estándar del papel es:",
        "opciones": [
          "50 mm/s",
          "10 mm/s",
          "25 mm/s",
          "5 mm/s"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Las derivaciones II, III y aVF observan la cara:",
        "opciones": [
          "Lateral",
          "Anterior",
          "Septal",
          "Inferior"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Un cuadro grande del papel equivale a:",
        "opciones": [
          "0.20 segundos",
          "0.04 segundos",
          "1 segundo",
          "0.10 segundos"
        ],
        "correcta": 0
      },
      {
        "pregunta": "La derivación I negativa y aVR positiva sugiere:",
        "opciones": [
          "Un infarto de cara inferior",
          "Electrodos de los brazos invertidos",
          "Una calibración correcta del equipo",
          "Que el paciente se movió durante el trazo"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Una línea basal que sube y baja suele deberse a:",
        "opciones": [
          "Una velocidad del papel de 25 mm/s",
          "Que el paciente está en decúbito supino",
          "Respiración o mal contacto del electrodo",
          "Electrodos colocados sobre tejido blando"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Ante un trazo con signos de alarma (p. ej., elevación del ST) se debe:",
        "opciones": [
          "Esperar a que el paciente vuelva a tener dolor",
          "Repetirlo al día siguiente para confirmar",
          "Archivarlo en el expediente para la visita",
          "Notificar de inmediato al médico responsable"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal de enfermería y técnicos que realizan electrocardiogramas.",
    "nivel": "Intermedio",
    "objetivos": [
      "Preparar al paciente y colocar correctamente los 10 electrodos.",
      "Obtener un trazo calibrado y libre de artefactos.",
      "Reconocer trazos de alarma y notificarlos de inmediato."
    ]
  },
  {
    "id": "bls",
    "titulo": "Soporte Vital Básico para personal de salud",
    "area": "Área Médica",
    "horas": 4,
    "obligatorio": false,
    "descripcion": "Reconocimiento del paro, RCP de calidad y uso del DEA.",
    "orden": 150,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Soporte vital básico: video del curso",
        "duracion": "1:39 min",
        "texto": "Reconocimiento del paro, RCP de calidad y uso del DEA.",
        "video": "soporte-vital-basico.mp4",
        "segundosMinimos": 89,
        "subtitulos": [
          [
            0.9,
            4.6,
            "Bienvenida al repaso de soporte vital básico para personal de salud,"
          ],
          [
            5.1,
            9.1,
            "con base en las guías de la Asociación Americana del Corazón de 2025."
          ],
          [
            9.9,
            14,
            "La cadena de supervivencia empieza con reconocer el paro y activar la respuesta."
          ],
          [
            14.8,
            19,
            "Cada eslabón que se retrasa reduce la posibilidad de sobrevivir."
          ],
          [
            19.2,
            26.5,
            "Verifica que la escena sea segura, comprueba si la persona responde, activa el Código Azul y pide el desfibrilador."
          ],
          [
            26.9,
            30.5,
            "Revisa pulso y respiración a la vez, en no más de 10 segundos."
          ],
          [
            31.2,
            38.9,
            "Si no hay pulso, inicia compresiones de alta calidad, de 100 a 120 por minuto, de 5 a 6 centímetros de profundidad,"
          ],
          [
            39.3,
            42.5,
            "con reexpansión completa y pausas menores a 10 segundos."
          ],
          [
            43.1,
            47.6,
            "Sin vía aérea avanzada, alterna 30 compresiones con 2 ventilaciones."
          ],
          [
            47.9,
            53.1,
            "Con vía aérea avanzada, da compresiones continuas y una ventilación cada 6 segundos,"
          ],
          [
            53.2,
            58.9,
            "sin hiperventilar. En cuanto llegue el desfibrilador, enciéndelo y sigue sus indicaciones."
          ],
          [
            59.8,
            65.3,
            "Nadie toca al paciente durante el análisis ni la descarga, y las compresiones se reanudan de inmediato."
          ],
          [
            66,
            69.9,
            "En niños y lactantes, comprime un tercio del diámetro del tórax."
          ],
          [
            70.3,
            73.4,
            "Con dos reanimadores, la relación es 15 a 2."
          ],
          [
            74.1,
            77.2,
            "En lactantes usa el talón de una mano, o los dos pulgares."
          ],
          [
            77.2,
            85,
            "Ante un atragantamiento en adultos y niños, alterna cinco golpes en la espalda con cinco compresiones abdominales."
          ],
          [
            85.4,
            89.3,
            "Si la persona pierde el estado de alerta, inicia la reanimación."
          ],
          [
            90,
            96.7,
            "Recuerda, reconoce, activa el Código Azul, comprime fuerte y rápido y usa el desfibrilador."
          ],
          [
            97.2,
            98.9,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Soporte vital básico",
            "url": "presentaciones/soporte-vital-basico.html"
          },
          {
            "nombre": "Guía rápida Soporte vital básico (PDF)",
            "url": "materiales/soporte-vital-basico-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "Ante una persona que colapsa, lo primero es:",
        "opciones": [
          "Verificar la seguridad de la escena y si responde",
          "Dar dos ventilaciones de rescate de inmediato",
          "Buscar una vena para administrar medicamentos",
          "Llamar a un familiar para pedir su autorización"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuánto tiempo como máximo se revisan pulso y respiración?",
        "opciones": [
          "30 segundos",
          "10 segundos",
          "1 minuto",
          "No se revisan"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En el hospital, ante un paro cardiorrespiratorio se activa el código:",
        "opciones": [
          "Rojo",
          "Negro",
          "Azul",
          "Verde"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Frecuencia de compresiones en adulto:",
        "opciones": [
          "60–80/min",
          "80–100/min",
          "Más de 140/min",
          "100–120/min"
        ],
        "correcta": 3
      },
      {
        "pregunta": "La profundidad de las compresiones en un adulto es de:",
        "opciones": [
          "Al menos 5 cm sin exceder 6 cm",
          "Entre 2 y 3 cm",
          "Entre 8 y 10 cm",
          "La que permita la complexión del paciente"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Sin vía aérea avanzada, la relación compresiones:ventilaciones en adulto es:",
        "opciones": [
          "15:2",
          "30:2",
          "5:1",
          "Solo compresiones"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Con vía aérea avanzada se da:",
        "opciones": [
          "30:2, con pausas para ventilar",
          "2 ventilaciones por minuto, sin compresiones",
          "Compresiones continuas y 1 ventilación cada 6 segundos",
          "Ventilaciones lo más rápido posible, sin pausa"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Las interrupciones de las compresiones deben ser:",
        "opciones": [
          "De 30 segundos",
          "Cada 30 compresiones por 1 minuto",
          "Solo para revisar el pulso cada ciclo",
          "Menores a 10 segundos"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Al llegar el DEA se debe:",
        "opciones": [
          "Encenderlo y seguir sus indicaciones",
          "Esperar al médico para usarlo",
          "Terminar 5 ciclos antes de encenderlo",
          "Colocarlo sobre la ropa"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Inmediatamente después de una descarga:",
        "opciones": [
          "Se revisa el pulso por 30 segundos",
          "Se reanudan las compresiones",
          "Se da otra descarga",
          "Se retira el DEA"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Con dos reanimadores, la relación en un niño es:",
        "opciones": [
          "30:2",
          "5:1",
          "15:2",
          "10:1"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Ante un adulto consciente que se atraganta y no puede toser, las guías 2025 indican:",
        "opciones": [
          "Darle agua a sorbos para que pase el objeto",
          "Solo compresiones abdominales hasta que hable",
          "Esperar a que pierda el estado de alerta para iniciar RCP",
          "Alternar 5 golpes en la espalda y 5 compresiones abdominales"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Médicos, enfermería y personal de respuesta a emergencias.",
    "nivel": "Intermedio",
    "objetivos": [
      "Reconocer el paro cardiorrespiratorio y activar el Código Azul.",
      "Realizar compresiones y ventilaciones de alta calidad.",
      "Usar el DEA y resolver la obstrucción de la vía aérea."
    ]
  },
  {
    "id": "med-alto-riesgo",
    "titulo": "Medicamentos de alto riesgo",
    "area": "Farmacia",
    "horas": 2,
    "obligatorio": false,
    "descripcion": "Identificación, almacenamiento y doble verificación de medicamentos de alto riesgo.",
    "orden": 160,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Medicamentos de alto riesgo: video del curso",
        "duracion": "1:37 min",
        "texto": "Identificación, almacenamiento y doble verificación de medicamentos de alto riesgo.",
        "video": "medicamentos-alto-riesgo.mp4",
        "segundosMinimos": 87,
        "subtitulos": [
          [
            0.9,
            3.8,
            "Bienvenida al curso de medicamentos de alto riesgo."
          ],
          [
            4,
            5.1,
            "Barreras contra el error."
          ],
          [
            5.9,
            10.4,
            "Un medicamento de alto riesgo no se equivoca más que otros, pero cuando hay un error,"
          ],
          [
            10.8,
            13.6,
            "la probabilidad de daño grave o muerte es mucho mayor."
          ],
          [
            14.4,
            17.4,
            "Por eso cada paso lleva barreras adicionales."
          ],
          [
            17.6,
            24.5,
            "Los grupos más frecuentes son los electrolitos concentrados, las insulinas, los anticoagulantes, los opioides,"
          ],
          [
            24.8,
            30.5,
            "los sedantes intravenosos, los bloqueadores neuromusculares, los vasoactivos y la quimioterapia."
          ],
          [
            31.1,
            33,
            "La lista vigente la publica Farmacia."
          ],
          [
            34,
            35.4,
            "Se identifican a simple vista."
          ],
          [
            35.8,
            40.8,
            "Etiqueta roja para alto riesgo y naranja para los medicamentos que se ven o suenan parecido."
          ],
          [
            41.7,
            45.2,
            "Los electrolitos concentrados solo se resguardan en los carros rojos."
          ],
          [
            45.4,
            53.5,
            "Prescribe sin ambigüedad. Nombre genérico, dosis en miliequivalentes, gramos o miligramos, vía, velocidad y duración."
          ],
          [
            53.5,
            59.2,
            "Nunca indiques ámpulas como dosis, ni la letra U por unidades, ni ceros a la derecha."
          ],
          [
            60.1,
            66.5,
            "Antes de administrar, dos profesionales verifican por separado el paciente, el medicamento, la dosis, la vía,"
          ],
          [
            66.7,
            68.9,
            "la velocidad y el registro."
          ],
          [
            69.2,
            71.6,
            "Solo se omite ante riesgo inminente para la vida."
          ],
          [
            72,
            78.2,
            "En las infusiones, un segundo profesional revisa la programación de la bomba y la línea se sigue desde el paciente"
          ],
          [
            78.2,
            79.7,
            "hasta la bolsa antes de conectar."
          ],
          [
            79.7,
            82.4,
            "Ante cualquier duda, detén la administración,"
          ],
          [
            82.4,
            87.5,
            "aclara con quien prescribe o con Farmacia y reporta los errores y las cuasi fallas."
          ],
          [
            88.4,
            94.5,
            "Recuerda, identifica, prescribe sin ambigüedad, verifica dos veces y detente ante la duda."
          ],
          [
            95.4,
            97,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Medicamentos de alto riesgo",
            "url": "presentaciones/medicamentos-alto-riesgo.html"
          },
          {
            "nombre": "Guía rápida Medicamentos de alto riesgo (PDF)",
            "url": "materiales/medicamentos-alto-riesgo-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "Un medicamento de alto riesgo es aquel que:",
        "opciones": [
          "Ante un error tiene alta probabilidad de causar daño grave o muerte",
          "Es el de mayor costo en el inventario de la farmacia del hospital",
          "Se usa solo en terapia intensiva y quirófano bajo vigilancia",
          "Requiere receta especial con código de barras para surtirse"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Es un ejemplo de medicamento de alto riesgo:",
        "opciones": [
          "Paracetamol oral",
          "Insulina",
          "Vitamina C",
          "Solución salina al 0.9 % para lavado"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué color de etiqueta identifica a los medicamentos de alto riesgo?",
        "opciones": [
          "Naranja",
          "Verde",
          "Rojo",
          "Azul"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Los electrolitos concentrados (p. ej., cloruro de potasio) deben:",
        "opciones": [
          "Estar en todos los botiquines de piso para usarse rápido",
          "Guardarse junto a las soluciones de uso general",
          "Prepararse por cualquier persona del turno que esté disponible",
          "Resguardarse separados, identificados y con acceso restringido"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuál es una prescripción correcta?",
        "opciones": [
          "Cloruro de potasio 20 mEq en 250 mL, a pasar en 2 horas",
          "1 ámpula de KCl diluida en la solución que tenga el paciente",
          "KCl lo necesario para corregir el potasio, según laboratorio",
          "KCl rápido por vía intravenosa, valorar respuesta en 1 hora"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Por qué no se escribe “5.0 mg”?",
        "opciones": [
          "Porque ocupa demasiado espacio en la receta",
          "Porque el punto puede no verse y leerse 50 mg",
          "Porque la dosis se debe escribir en ámpulas",
          "Está permitido; es la forma más precisa"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La abreviatura “U” para unidades:",
        "opciones": [
          "Es la forma recomendada por ser más corta",
          "Solo se usa en la prescripción de insulina",
          "Debe evitarse; se escribe “unidades”",
          "Significa microgramos en la receta médica"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La doble verificación la realizan:",
        "opciones": [
          "Una misma persona que revisa dos veces",
          "El paciente y su familiar antes de aplicarla",
          "El médico, por teléfono, con la enfermera",
          "Dos profesionales de forma independiente"
        ],
        "correcta": 3
      },
      {
        "pregunta": "En la doble verificación de una infusión se revisa también:",
        "opciones": [
          "La programación de la bomba y la línea",
          "El color de la bolsa y de la etiqueta",
          "El turno y el nombre del compañero",
          "Solo el nombre del medicamento"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuándo puede omitirse la doble verificación?",
        "opciones": [
          "Cuando hay mucho trabajo en el servicio",
          "Solo ante riesgo inminente para la vida, documentándolo",
          "Si el medicamento es conocido por el personal",
          "En el turno nocturno, cuando hay menos personal"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Ante una duda sobre la dosis de un medicamento de alto riesgo:",
        "opciones": [
          "Administrar la mitad de la dosis y vigilar al paciente",
          "Preguntar a otro paciente con la misma indicación",
          "Detener y aclarar con quien prescribe o con Farmacia",
          "Administrar la dosis completa y avisar después al médico"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Un error detectado antes de llegar al paciente:",
        "opciones": [
          "No se reporta",
          "Se comenta solo en el turno",
          "Se borra del registro",
          "Se reporta como cuasi falla"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal de farmacia, enfermería y médicos.",
    "nivel": "Intermedio",
    "objetivos": [
      "Reconocer los medicamentos de alto riesgo y su identificación visual.",
      "Prescribir y preparar sin ambigüedades.",
      "Aplicar la doble verificación independiente y reportar errores."
    ]
  },
  {
    "id": "nom018",
    "titulo": "NOM-018-STPS-2015: sistema armonizado",
    "area": "Seguridad e Higiene",
    "horas": 2,
    "obligatorio": false,
    "descripcion": "Pictogramas, hojas de datos de seguridad y comunicación de peligros.",
    "orden": 180,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "NOM-018 · Comunicación de peligros: video del curso",
        "duracion": "1:37 min",
        "texto": "Pictogramas, hojas de datos de seguridad y comunicación de peligros.",
        "video": "nom018-comunicacion-peligros.mp4",
        "segundosMinimos": 87,
        "subtitulos": [
          [
            0.9,
            7.9,
            "Bienvenida al curso de la NOM-018, sistema armonizado de comunicación de peligros por sustancias químicas."
          ],
          [
            8.3,
            12.9,
            "Este sistema clasifica los peligros físicos, para la salud y para el ambiente,"
          ],
          [
            13.3,
            17.1,
            "y los comunica con etiquetas y hojas de datos iguales en todo el mundo."
          ],
          [
            17.4,
            23.8,
            "En el hospital aplica al alcohol, al cloro, a los desinfectantes, al formol, a los reactivos y al"
          ],
          [
            23.8,
            29.3,
            "oxígeno. Hay nueve pictogramas, un rombo con borde rojo y un símbolo negro."
          ],
          [
            30.3,
            32.6,
            "Por ejemplo, la llama indica inflamable,"
          ],
          [
            33,
            38.1,
            "la llama sobre un círculo indica comburente y la calavera indica toxicidad aguda grave."
          ],
          [
            38.6,
            45,
            "Toda etiqueta muestra el nombre del producto, los pictogramas, la palabra de advertencia, las indicaciones de peligro,"
          ],
          [
            45.3,
            48,
            "los consejos de prudencia y los datos del proveedor."
          ],
          [
            48.5,
            50.1,
            "Peligro es más grave que Atención."
          ],
          [
            50.1,
            56.3,
            "La hoja de datos de seguridad tiene 16 secciones y debe estar en español y al alcance."
          ],
          [
            57.2,
            62.7,
            "Ahí encuentras primeros auxilios, qué hacer ante un derrame y qué equipo de protección usar."
          ],
          [
            63.5,
            66.7,
            "Si pasas una sustancia a otro recipiente, etiquétalo."
          ],
          [
            67.5,
            72.9,
            "Nunca uses envases de alimentos o bebidas y nunca mezcles cloro con amoníaco o con ácidos."
          ],
          [
            73.7,
            78.8,
            "El centro de trabajo proporciona las hojas, la señalización y la capacitación."
          ],
          [
            78.8,
            85,
            "Tú lees la etiqueta, usas el equipo indicado y reportas los envases sin etiqueta."
          ],
          [
            85.3,
            88.1,
            "Ante un derrame, activa el Código Amarillo."
          ],
          [
            88.9,
            94.4,
            "Recuerda, mira el pictograma, lee la palabra de advertencia y consulta la hoja de datos."
          ],
          [
            95.3,
            97,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación NOM-018",
            "url": "presentaciones/nom018-comunicacion-peligros.html"
          },
          {
            "nombre": "Guía rápida NOM-018 (PDF)",
            "url": "materiales/nom018-comunicacion-peligros-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "El sistema armonizado clasifica peligros:",
        "opciones": [
          "Físicos, para la salud y para el medio ambiente",
          "Solo químicos, según su concentración",
          "Solo biológicos, según su vía de entrada",
          "Solo eléctricos, según su voltaje y uso"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cómo son los pictogramas del sistema armonizado?",
        "opciones": [
          "Círculos azules con un símbolo blanco",
          "Rombo con borde rojo y símbolo negro",
          "Triángulos amarillos con borde negro",
          "Cuadros verdes con un número de riesgo"
        ],
        "correcta": 1
      },
      {
        "pregunta": "El pictograma de llama indica:",
        "opciones": [
          "Sustancia corrosiva",
          "Gas a presión",
          "Sustancia inflamable",
          "Peligro para el ambiente"
        ],
        "correcta": 2
      },
      {
        "pregunta": "El oxígeno medicinal se identifica, entre otros, con el pictograma de:",
        "opciones": [
          "Calavera y tibias cruzadas",
          "Pez y árbol (medio ambiente)",
          "Corrosión sobre la mano",
          "Llama sobre círculo (comburente)"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué palabra de advertencia indica el peligro más grave?",
        "opciones": [
          "Peligro",
          "Atención",
          "Cuidado",
          "Aviso"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuántas secciones tiene la hoja de datos de seguridad?",
        "opciones": [
          "8",
          "16",
          "4",
          "12"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Dónde se consulta la respuesta ante exposición?",
        "opciones": [
          "En la factura del proveedor",
          "En el inventario del almacén",
          "En la hoja de datos de seguridad",
          "En el reglamento interior de trabajo"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La hoja de datos de seguridad debe estar:",
        "opciones": [
          "En la oficina del proveedor, para consulta",
          "Solo en inglés, como la envía el fabricante",
          "Guardada bajo llave en la dirección del hospital",
          "Disponible para el personal que maneja la sustancia"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Un recipiente sin etiqueta debe:",
        "opciones": [
          "No utilizarse hasta identificar y etiquetar su contenido",
          "Usarse si huele a alcohol o a algún desinfectante conocido",
          "Vaciarse en el drenaje con abundante agua para eliminarlo",
          "Usarse con guantes y lentes mientras se averigua qué es"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Al pasar una sustancia a otro recipiente se debe:",
        "opciones": [
          "Usar una botella de agua limpia y bien tapada",
          "Etiquetarlo con su nombre y su pictograma",
          "Dejarlo sin tapa para que se ventile el vapor",
          "Mezclarla con otra sustancia para que rinda más"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Mezclar cloro con amoniaco:",
        "opciones": [
          "Mejora la limpieza de superficies muy sucias",
          "Es indispensable para desinfectar áreas de aislamiento",
          "Libera gases tóxicos y no debe hacerse",
          "No tiene efecto si el área está ventilada"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Ante un derrame de una sustancia química se activa el código:",
        "opciones": [
          "Código Azul",
          "Código Negro",
          "Código Rosa",
          "Código Amarillo"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal que maneja sustancias químicas peligrosas.",
    "nivel": "Básico",
    "objetivos": [
      "Reconocer los nueve pictogramas y la palabra de advertencia.",
      "Localizar en la hoja de datos de seguridad la información de respuesta.",
      "Etiquetar, almacenar y manejar sustancias de forma segura."
    ]
  },
  {
    "id": "epp",
    "titulo": "Equipo de protección personal",
    "area": "Seguridad e Higiene",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Qué es el EPP, cómo se elige según la NOM-017-STPS-2008 y qué riesgo predomina en cada área del hospital.",
    "orden": 240,
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
            8.1,
            "Vamos a explorar cómo utilizar correctamente estos elementos esenciales"
          ],
          [
            8.1,
            11.5,
            "para garantizar nuestra seguridad en el entorno hospitalario."
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
          "Elementos que usa el trabajador para disminuir su exposición a un riesgo",
          "El uniforme institucional que se entrega a cada colaborador",
          "Cualquier equipo médico que se utiliza en la atención del paciente",
          "Las señales de seguridad y las rutas de evacuación del edificio"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué norma regula la selección, uso y manejo del EPP?",
        "opciones": [
          "NOM-087-SEMARNAT-SSA1-2002",
          "NOM-017-STPS-2008",
          "NOM-004-SSA3-2012",
          "NOM-220-SSA1-2016"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Respecto a los controles de ingeniería, el EPP:",
        "opciones": [
          "Los sustituye por completo",
          "Los vuelve innecesarios en el área",
          "Los complementa; no los sustituye",
          "No tiene relación con ellos"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Con qué criterio se elige el EPP?",
        "opciones": [
          "Por gusto personal y comodidad de quien lo usa",
          "Por el color del uniforme de cada área del hospital",
          "Por antigüedad en el puesto y tipo de contrato",
          "Por la actividad, el tipo de riesgo y la región del cuerpo"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Para proteger ojos y cara de salpicaduras de líquidos se usa:",
        "opciones": [
          "Pantalla facial, careta o goggles",
          "Tapones u orejeras auditivas",
          "Casco dieléctrico con barbiquejo",
          "Polainas y botas de hule"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué protección se usa contra el ruido?",
        "opciones": [
          "Mascarilla desechable para polvos",
          "Tapones o conchas auditivas",
          "Careta de policarbonato",
          "Mandil plomado"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué afirmación sobre los guantes es correcta?",
        "opciones": [
          "Un mismo guante protege de todos los riesgos",
          "Los guantes de nitrilo sirven para trabajos eléctricos",
          "No existe un guante universal; se elige según el riesgo",
          "Los guantes no son EPP, son material de curación"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Para gases y vapores se requiere:",
        "opciones": [
          "Cubrebocas de tela lavable",
          "Mascarilla desechable para polvos",
          "Careta de policarbonato sin filtro",
          "Un respirador para gases y vapores"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuál es el riesgo predominante en hemodinamia?",
        "opciones": [
          "Biológico y radiación ionizante",
          "Solo ruido de los equipos",
          "Solo químicos de limpieza",
          "Caídas de altura y golpes"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es el riesgo predominante en CEyE?",
        "opciones": [
          "Radiación ionizante de los equipos",
          "Instrumental contaminado",
          "Ruido de los autoclaves",
          "Temperaturas extremas bajo cero"
        ],
        "correcta": 1
      },
      {
        "pregunta": "El calzado conductivo protege contra:",
        "opciones": [
          "Caída de objetos pesados",
          "Agua y superficies mojadas",
          "Electricidad estática",
          "Altas temperaturas de hornos"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuál es la forma correcta de usar el EPP?",
        "opciones": [
          "Usar todo el equipo disponible durante toda la jornada",
          "No usarlo si la tarea es corta o se hace rápido",
          "Compartirlo entre compañeros para que alcance",
          "Elegirlo según la tarea y evitar la sobreutilización"
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
    "orden": 250,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Metodología 5S: video del curso",
        "duracion": "1:10 min",
        "texto": "Orden, limpieza, estandarización y disciplina en el lugar de trabajo.",
        "video": "metodologia-5s.mp4",
        "segundosMinimos": 63,
        "subtitulos": [
          [
            0.9,
            4.7,
            "Bienvenida al curso de metodología 5S en el lugar de trabajo."
          ],
          [
            5.6,
            10.2,
            "Un área ordenada es más segura, hay menos tropiezos, se pierde menos tiempo,"
          ],
          [
            10.5,
            14.8,
            "se cometen menos errores y se detectan a tiempo los faltantes y las caducidades."
          ],
          [
            15.7,
            24,
            "Las 5S son cinco palabras japonesas: clasificar, ordenar, limpiar, estandarizar y mantener la disciplina."
          ],
          [
            24.3,
            30,
            "Clasificar es separar lo necesario de lo que no lo es. Marca con tarjeta roja lo innecesario,"
          ],
          [
            30.2,
            34.1,
            "lo dañado o lo caducado y decide con tu jefe qué hacer con ello."
          ],
          [
            34.8,
            37.9,
            "Ordenar es tener un lugar identificado para cada cosa."
          ],
          [
            38.7,
            42.5,
            "Lo de uso diario va más cerca y lo que caduca primero va al frente."
          ],
          [
            43.3,
            45.4,
            "Limpiar también es inspeccionar."
          ],
          [
            46,
            52.3,
            "Mientras limpias, revisa fugas, cables dañados o mobiliario roto y corrige o reporta la causa."
          ],
          [
            53.3,
            58.8,
            "Estandarizar y mantener la disciplina convierte lo logrado en hábito, con fotos del área como debe estar,"
          ],
          [
            59.3,
            62,
            "listas de verificación y recorridos periódicos."
          ],
          [
            62.8,
            67.9,
            "Recuerda, clasifica, ordena, limpia, estandariza y mantén el hábito."
          ],
          [
            68.5,
            70.2,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación 5S",
            "url": "presentaciones/metodologia-5s.html"
          },
          {
            "nombre": "Guía rápida 5S (PDF)",
            "url": "materiales/metodologia-5s-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Cuál es el objetivo principal de las 5S?",
        "opciones": [
          "Mantener espacios seguros y eficientes",
          "Reducir el personal de cada área",
          "Comprar más mobiliario y anaqueles",
          "Cambiar de oficina cada año"
        ],
        "correcta": 0
      },
      {
        "pregunta": "La primera S (Seiri) significa:",
        "opciones": [
          "Limpiar",
          "Clasificar",
          "Ordenar",
          "Disciplina"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La tarjeta roja se usa para:",
        "opciones": [
          "Premiar al colaborador más ordenado del mes",
          "Señalar una ruta de evacuación temporal",
          "Marcar lo innecesario, dañado o caducado",
          "Identificar medicamentos de alto riesgo"
        ],
        "correcta": 2
      },
      {
        "pregunta": "\"Un lugar para cada cosa y cada cosa en su lugar\" corresponde a:",
        "opciones": [
          "Clasificar (Seiri)",
          "Limpiar (Seiso)",
          "Disciplina (Shitsuke)",
          "Ordenar (Seiton)"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Al ordenar, lo que se usa a diario debe estar:",
        "opciones": [
          "Más cerca del lugar de uso",
          "En la bodega, bien etiquetado",
          "En el piso, junto al escritorio",
          "Bajo llave en otra área"
        ],
        "correcta": 0
      },
      {
        "pregunta": "\"Primero en caducar, primero en salir\" ayuda a:",
        "opciones": [
          "Gastar los insumos más nuevos primero",
          "Evitar mermas por caducidad",
          "Ocultar faltantes en el inventario",
          "Ordenar los insumos alfabéticamente"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En la tercera S, limpiar también significa:",
        "opciones": [
          "Tirar todo lo que esté en el área",
          "Pintar el área cada seis meses",
          "Inspeccionar y detectar fallas",
          "Mover los muebles para barrer"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Estandarizar implica:",
        "opciones": [
          "Cambiar las reglas del área cada semana",
          "Que cada quien ordene a su manera",
          "Eliminar las listas de verificación y las fotos",
          "Establecer normas visuales y rutinas de orden"
        ],
        "correcta": 3
      },
      {
        "pregunta": "La quinta S (Shitsuke) se refiere a:",
        "opciones": [
          "Disciplina y mejora sostenida",
          "Comprar insumos de limpieza",
          "Clasificar documentos antiguos",
          "Limpiar ventanas y pisos"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Una foto del área “como debe estar” es un ejemplo de:",
        "opciones": [
          "Clasificar (Seiri)",
          "Estandarizar (Seiketsu)",
          "Limpiar (Seiso)",
          "Desechar lo innecesario"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Las cajas almacenadas en un pasillo de evacuación:",
        "opciones": [
          "Son aceptables si son pocas y pequeñas",
          "Ayudan a ahorrar espacio en la bodega",
          "Deben retirarse de inmediato",
          "Se dejan hasta el inventario de fin de mes"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Al limpiar encuentras un cable dañado. ¿Qué haces?",
        "opciones": [
          "Lo cubres con cinta aislante y sigues",
          "Lo ignoras porque no es tu área",
          "Lo desconectas y lo guardas en un cajón",
          "Lo reportas para su reparación"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal administrativo, de almacén y de servicios.",
    "nivel": "Básico",
    "objetivos": [
      "Describir las cinco etapas de la metodología.",
      "Aplicar clasificación, orden y limpieza en el área propia.",
      "Mantener lo logrado con estándares visuales y disciplina."
    ]
  },
  {
    "id": "calor",
    "titulo": "Prevención del agotamiento por calor",
    "area": "Seguridad e Higiene",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Factores de riesgo, signos de alarma y respuesta inmediata.",
    "orden": 260,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Enfermedades por calor: video del curso",
        "duracion": "1:23 min",
        "texto": "Factores de riesgo, signos de alarma y respuesta inmediata.",
        "video": "prevencion-calor.mp4",
        "segundosMinimos": 74,
        "subtitulos": [
          [
            0.8,
            4.1,
            "Bienvenida al curso de prevención de enfermedades por calor."
          ],
          [
            4.8,
            11.3,
            "En nuestras sedes el calor es un riesgo de trabajo, sobre todo para la patrulla de playa, ambulancias, seguridad,"
          ],
          [
            11.8,
            13.6,
            "mantenimiento, cocina y lavandería."
          ],
          [
            14.4,
            18.9,
            "El riesgo aumenta con el sol, la humedad, el esfuerzo y el equipo pesado."
          ],
          [
            19.4,
            22,
            "El cuerpo necesita días para adaptarse al calor."
          ],
          [
            22.9,
            29.4,
            "El personal de nuevo ingreso y quien regresa de vacaciones o incapacidad debe aumentar su exposición de forma gradual."
          ],
          [
            30,
            36.3,
            "Bebe agua antes de tener sed, alrededor de un vaso cada 15 a 20 minutos en trabajo intenso."
          ],
          [
            36.5,
            40.4,
            "Haz pausas a la sombra, usa ropa ligera y trabaja en pareja."
          ],
          [
            40.7,
            43.5,
            "Reconoce los síntomas: los calambres son leves."
          ],
          [
            43.8,
            48,
            "El agotamiento causa sudoración intensa, debilidad, mareo y náusea."
          ],
          [
            48.3,
            52.3,
            "Y el golpe de calor, con confusión o desmayo, es una emergencia."
          ],
          [
            52.6,
            55.5,
            "Ante agotamiento por calor, detén la actividad."
          ],
          [
            55.5,
            61.7,
            "Lleva a la persona a un lugar fresco, afloja su ropa y dale sorbos de agua si está alerta."
          ],
          [
            62,
            64.6,
            "Si no mejora, busca atención médica."
          ],
          [
            65.1,
            70.8,
            "Ante un golpe de calor, pide atención médica inmediata y enfría a la persona mientras llega la ayuda."
          ],
          [
            71.6,
            74.5,
            "No le des líquido si está confundida o inconsciente."
          ],
          [
            75.6,
            80.6,
            "Recuerda, hidrátate antes de tener sed, haz pausas y vigila a tus compañeros."
          ],
          [
            81.1,
            82.9,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Enfermedades por calor",
            "url": "presentaciones/prevencion-calor.html"
          },
          {
            "nombre": "Guía rápida Enfermedades por calor (PDF)",
            "url": "materiales/prevencion-calor-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "Ante signos de agotamiento por calor se debe:",
        "opciones": [
          "Trasladar a lugar fresco e hidratar",
          "Seguir trabajando, pero más despacio",
          "Dar una bebida alcohólica fría",
          "Cubrir con una cobija para que sude"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Son signos de agotamiento por calor:",
        "opciones": [
          "Piel seca y fría sin otros síntomas",
          "Sudoración intensa, mareo y debilidad",
          "Hambre, sueño y bostezos frecuentes",
          "Tos, estornudos y escurrimiento nasal"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Una medida preventiva es:",
        "opciones": [
          "Esperar a tener sed para beber agua",
          "Trabajar solo para concentrarse mejor",
          "Hidratarse seguido y hacer pausas en zonas frescas",
          "Usar ropa oscura y gruesa para cubrirse del sol"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En trabajo intenso con calor se recomienda beber:",
        "opciones": [
          "Solo al final del turno, para no interrumpir",
          "Un litro de golpe al inicio de la jornada",
          "Bebidas energéticas o refrescos de cola",
          "Un vaso de agua cada 15 a 20 minutos"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si la persona presenta confusión o pérdida del estado de alerta:",
        "opciones": [
          "Es una urgencia: activar atención médica inmediata",
          "Debe descansar a la sombra y esperar a que se le pase",
          "Se le da agua aunque le cueste trabajo tragar",
          "Se le pide que siga trabajando mientras se recupera"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Ante un golpe de calor, mientras llega la ayuda:",
        "opciones": [
          "Se abriga a la persona para evitar escalofríos",
          "Se enfría de inmediato con agua y compresas frías",
          "Se le da café o un refresco para reanimarla",
          "Se le deja sola en un cuarto para que descanse"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Dónde se colocan compresas frías o hielo para enfriar más rápido?",
        "opciones": [
          "En los pies y las pantorrillas",
          "En la espalda baja y el abdomen",
          "En cuello, axilas e ingles",
          "En las manos y los antebrazos"
        ],
        "correcta": 2
      },
      {
        "pregunta": "A una persona confundida o inconsciente por calor:",
        "opciones": [
          "Se le dan líquidos abundantes",
          "Se le da una bebida azucarada",
          "Se le obliga a caminar",
          "No se le dan líquidos por boca"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Quién es más vulnerable al calor?",
        "opciones": [
          "El personal de nuevo ingreso aún no aclimatado",
          "Quien trabaja en oficinas con aire acondicionado",
          "Quien trabaja de noche en áreas interiores",
          "Nadie en particular; el riesgo es igual para todos"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Tiene mayor riesgo el personal que:",
        "opciones": [
          "Trabaja en oficina con aire acondicionado",
          "Trabaja al exterior en las horas de más calor",
          "Trabaja en archivo clínico durante el día",
          "Trabaja en turno nocturno en interiores"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Trabajar en pareja en ambientes calurosos sirve para:",
        "opciones": [
          "Terminar la tarea más rápido y descansar antes",
          "Compartir el agua y ahorrar en hidratación",
          "Que un compañero detecte síntomas que tú no notas",
          "Evitar las pausas porque uno cubre al otro"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué norma regula las condiciones térmicas elevadas en el trabajo?",
        "opciones": [
          "NOM-087-SEMARNAT-SSA1-2002",
          "NOM-004-SSA3-2012",
          "NOM-018-STPS-2015",
          "NOM-015-STPS-2001"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal que trabaja al exterior o en áreas calurosas.",
    "nivel": "Básico",
    "objetivos": [
      "Identificar los factores de riesgo por calor en su puesto.",
      "Reconocer los signos de agotamiento y de golpe de calor.",
      "Aplicar las medidas de prevención y de respuesta inmediata."
    ]
  },
  {
    "id": "bombas",
    "titulo": "Protocolo ante amenaza de bomba",
    "area": "Seguridad e Higiene",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Recepción de la amenaza, aviso, evacuación y preservación de información.",
    "orden": 270,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Código Negro · Amenaza de bomba: video del curso",
        "duracion": "1:27 min",
        "texto": "Recepción de la amenaza, aviso, evacuación y preservación de información.",
        "video": "codigo-negro-amenaza-bomba.mp4",
        "segundosMinimos": 78,
        "subtitulos": [
          [
            0.9,
            5,
            "Bienvenida al curso del protocolo ante amenaza de bomba, el Código Negro."
          ],
          [
            5.7,
            10.9,
            "El Código Negro se activa ante una amenaza de bomba o el hallazgo de un objeto sospechoso."
          ],
          [
            11.7,
            16.8,
            "Toda amenaza se toma en serio, llegue por teléfono, por escrito, por correo o en persona."
          ],
          [
            17.6,
            20.9,
            "Si recibes la llamada, mantén la calma y no cuelgues."
          ],
          [
            21.2,
            28.5,
            "Prolonga la conversación, anota las palabras exactas, la hora y el número, y haz una seña a un compañero para que avise."
          ],
          [
            29.2,
            35.9,
            "Pregunta cuándo va a explotar, dónde está, cómo es, qué la haría explotar, por qué la colocaron y quién llama."
          ],
          [
            36.7,
            38.8,
            "Observa la voz y los ruidos de fondo."
          ],
          [
            39.5,
            44.2,
            "Ante un objeto sospechoso, no lo toques, no lo muevas y no lo cubras."
          ],
          [
            45.1,
            51.3,
            "Aléjate, impide que otros se acerquen y avisa a Seguridad desde un teléfono fijo lejano."
          ],
          [
            51.6,
            53.6,
            "Evita usar radios y celulares cerca."
          ],
          [
            53.6,
            58.5,
            "Si la amenaza llega por escrito o por correo, manipúlala lo mínimo."
          ],
          [
            58.9,
            61.5,
            "No la borres ni la reenvíes y avisa de inmediato."
          ],
          [
            62.1,
            65.3,
            "Si se ordena evacuar, sigue las instrucciones de la brigada,"
          ],
          [
            65.7,
            70.6,
            "apoya el traslado de los pacientes según el plan y no regreses hasta que la autoridad lo autorice."
          ],
          [
            71.4,
            74.1,
            "Da tu informe solo a Seguridad y a la autoridad."
          ],
          [
            74.7,
            78.2,
            "No compartas la amenaza en redes sociales ni difundas rumores."
          ],
          [
            79.2,
            84.6,
            "Recuerda, mantén la calma, registra, avisa y no toques nada sospechoso."
          ],
          [
            85.3,
            87,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Código Negro",
            "url": "presentaciones/codigo-negro-amenaza-bomba.html"
          },
          {
            "nombre": "Guía rápida Código Negro (PDF)",
            "url": "materiales/codigo-negro-amenaza-bomba-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué código institucional corresponde a una amenaza de bomba?",
        "opciones": [
          "Código Negro",
          "Código Rojo",
          "Código Verde",
          "Código Plata"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué debe hacerse primero al recibir la amenaza?",
        "opciones": [
          "Colgar y salir del edificio de inmediato",
          "Registrar datos y activar el protocolo",
          "Publicarlo en el chat del área para alertar",
          "Buscar el objeto por tu cuenta en el área"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Durante una llamada de amenaza se debe:",
        "opciones": [
          "Colgar de inmediato y salir del área",
          "Discutir con quien llama para que se identifique",
          "Mantener la calma, prolongar la llamada y anotar",
          "Transferirla a cualquier extensión disponible"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué conviene anotar de la llamada?",
        "opciones": [
          "Solo la hora en que terminó la llamada",
          "Nada; basta con recordarla y contarla después",
          "Solo si la voz era de hombre o de mujer",
          "Palabras exactas, hora, número, voz y ruidos"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Ante un objeto sospechoso:",
        "opciones": [
          "No tocarlo, alejarse y dar aviso",
          "Abrirlo con cuidado para revisarlo",
          "Moverlo a un lugar seguro y aislado",
          "Cubrirlo con una manta para contenerlo"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El uso de radios y celulares cerca de un objeto sospechoso:",
        "opciones": [
          "Es recomendable para avisar más rápido",
          "Debe evitarse",
          "No tiene importancia",
          "Solo se permite a Seguridad"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si la amenaza llega por correo electrónico:",
        "opciones": [
          "Se borra para no alarmar al personal",
          "Se reenvía a todo el personal del hospital",
          "Se conserva sin borrar ni reenviar y se avisa",
          "Se responde al remitente para pedir datos"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La evacuación se realiza:",
        "opciones": [
          "Por la salida más cercana a tu casa",
          "Cuando cada quien lo decida según su área",
          "Solo si hay humo o un ruido de explosión",
          "Por las rutas que indique la brigada"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Después de evacuar, se puede regresar al edificio:",
        "opciones": [
          "Cuando la autoridad lo autorice",
          "A los 10 minutos si no pasa nada",
          "Cuando el jefe de área lo decida",
          "En cuanto pase el susto y haya calma"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Compartir la amenaza en redes sociales:",
        "opciones": [
          "Ayuda a que todos se enteren a tiempo",
          "No debe hacerse: genera pánico y rumores",
          "Es obligatorio para avisar a la comunidad",
          "Se permite si se omite el nombre del hospital"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En San José del Cabo, la extensión general es:",
        "opciones": [
          "101",
          "106",
          "201",
          "204"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Para avisar de un objeto sospechoso conviene usar:",
        "opciones": [
          "El radio de Seguridad, junto al objeto",
          "El celular, para tomar una foto del objeto",
          "Un mensaje en el chat o en redes sociales",
          "Un teléfono fijo alejado del objeto"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Todo el personal, en especial recepción, telefonía y seguridad.",
    "nivel": "Básico",
    "objetivos": [
      "Recibir y registrar una amenaza de bomba.",
      "Actuar ante un objeto sospechoso sin poner en riesgo a nadie.",
      "Activar el Código Negro y seguir las instrucciones de evacuación."
    ]
  },
  {
    "id": "induccion-rh",
    "titulo": "Inducción institucional Saint Luke’s",
    "area": "Capital Humano",
    "horas": 2,
    "obligatorio": true,
    "descripcion": "Cultura, normativas, seguridad, prestaciones y responsabilidades.",
    "orden": 280,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Inducción institucional: video del curso",
        "duracion": "2:21 min",
        "texto": "Cultura, normativas, seguridad, prestaciones y responsabilidades.",
        "video": "induccion-institucional.mp4",
        "segundosMinimos": 127,
        "subtitulos": [
          [
            0.8,
            2.8,
            "Bienvenido a Saint Luke's Hospitals."
          ],
          [
            3.1,
            5.4,
            "Este es tu curso de inducción institucional."
          ],
          [
            5.8,
            12,
            "Tenemos más de 20 años brindando servicios médicos a la comunidad local y a turistas nacionales y extranjeros."
          ],
          [
            12.8,
            20,
            "Hoy contamos con cuatro hospitales, una clínica en Loreto, ocho walk-in, 58 ambulancias y 39 especialidades."
          ],
          [
            21.3,
            28,
            "Nuestra misión es buscar constantemente conocimientos médicos de excelencia y brindar un servicio de alto nivel ético."
          ],
          [
            28,
            31.7,
            "Nuestra visión es ser el mejor hospital con servicios médicos"
          ],
          [
            31.7,
            35.5,
            "turísticos de nivel internacional y alta responsabilidad humana."
          ],
          [
            35.7,
            41.4,
            "Tres valores guían nuestra conducta: ética profesional, responsabilidad y compasión."
          ],
          [
            42.1,
            47.5,
            "Nuestro código de ética incluye nueve compromisos, entre ellos respetar la decisión del paciente,"
          ],
          [
            48,
            51.9,
            "no realizar procedimientos innecesarios y capacitarnos de forma continua."
          ],
          [
            52.7,
            59.3,
            "Nos organizamos bajo una dirección con nueve áreas, desde Capital Humano y el área médica hasta ambulancias,"
          ],
          [
            59.5,
            60.9,
            "infraestructura y contraloría."
          ],
          [
            61.6,
            66.9,
            "Estamos en Baja California Sur y Nayarit con ambulancias también en Puerto Vallarta y Quintana Roo."
          ],
          [
            67.6,
            71,
            "Tu contrato corresponde a la razón social que te contrató."
          ],
          [
            71.6,
            77.5,
            "Desde tu primer día tienes derecho a conocer tus condiciones laborales, recibir un recorrido, gafete,"
          ],
          [
            77.9,
            83.4,
            "uniforme y locker, firmar tu perfil de puesto y contar con una persona que te acompañe."
          ],
          [
            83.6,
            85.3,
            "Además de las prestaciones de ley,"
          ],
          [
            85.8,
            93.4,
            "cuentas con consulta gratuita las 24 horas para ti y tu familia directa y un 40% de descuento en servicios médicos."
          ],
          [
            93.6,
            97.2,
            "Llega 15 minutos antes. Registra tu entrada en el checador."
          ],
          [
            97.6,
            103.1,
            "Porta tu uniforme limpio y tu gafete visible durante toda la jornada. Ahora nos representas."
          ],
          [
            103.5,
            107.6,
            "Contesta el teléfono con el nombre del hospital o del departamento y tu nombre."
          ],
          [
            108.5,
            114.6,
            "Los ajustes de sueldo y bonos se basan en tu desempeño, actitud, puntualidad y orden del área."
          ],
          [
            115.2,
            121,
            "Las vacaciones se otorgan conforme a la Ley Federal del Trabajo a partir de 12 días al cumplir un año."
          ],
          [
            121.8,
            125.5,
            "El período institucional va del 1 de junio al 30 de octubre."
          ],
          [
            125.7,
            130.6,
            "Conoce los códigos de emergencia de tu hospital, como el azul para paro cardiorrespiratorio,"
          ],
          [
            130.9,
            135.8,
            "el rojo para fuego y el verde para evacuación y las extensiones para activarlos."
          ],
          [
            136.5,
            138.5,
            "Bienvenido a la familia Saint Luke's."
          ],
          [
            139.5,
            141.3,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Inducción",
            "url": "presentaciones/induccion-institucional.html"
          },
          {
            "nombre": "Guía rápida Inducción (PDF)",
            "url": "materiales/induccion-institucional-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Cuáles son los tres valores institucionales?",
        "opciones": [
          "Ética profesional, responsabilidad y compasión",
          "Puntualidad, orden y limpieza en el área",
          "Rapidez, eficiencia y ahorro de recursos",
          "Lealtad, discreción y obediencia al jefe"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Nuestra visión es ser el mejor hospital con:",
        "opciones": [
          "Los precios más bajos de la región en todos sus servicios",
          "Servicios médicos turísticos de nivel internacional y alta responsabilidad humana",
          "Más hospitales y consultorios que cualquier otro grupo del país",
          "Atención exclusiva para pacientes extranjeros con seguro internacional"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Con cuántas ambulancias cuenta el grupo según el Manual de la Organización?",
        "opciones": [
          "8",
          "39",
          "58",
          "4"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Tu contrato y tu Reglamento Interior corresponden a:",
        "opciones": [
          "El hospital más cercano a tu casa",
          "La sede donde hiciste la entrevista",
          "Cualquier empresa del grupo",
          "La razón social que te contrató"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Con cuánto tiempo de anticipación debes llegar a tu turno?",
        "opciones": [
          "15 minutos",
          "Justo a la hora",
          "5 minutos",
          "1 hora"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El gafete institucional debe:",
        "opciones": [
          "Guardarse en el locker durante la jornada",
          "Portarse visible durante la jornada",
          "Prestarse a otros colaboradores si lo olvidan",
          "Usarse solo para entrar y salir del hospital"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cómo se contesta una llamada interna?",
        "opciones": [
          "“¿Bueno?, ¿quién habla y con quién quiere hablar?”",
          "“¿Quién habla y qué necesita del departamento?”",
          "“Departamento de (área), le atiende (nombre)”",
          "“Diga, aquí es el hospital, lo escucho”"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué prestación es superior a la ley?",
        "opciones": [
          "Aguinaldo de 15 días de salario cada diciembre",
          "Inscripción al IMSS desde el primer día de trabajo",
          "Prima vacacional del 25 % sobre los días de vacaciones",
          "Consulta gratuita 24/7 para ti y tu familia directa"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuántos días de vacaciones corresponden al cumplir un año de servicio?",
        "opciones": [
          "12",
          "6",
          "20",
          "15"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Para dudas sobre prestaciones o nómina se acude a:",
        "opciones": [
          "Seguridad",
          "Capital Humano",
          "Mantenimiento",
          "Farmacia"
        ],
        "correcta": 1
      },
      {
        "pregunta": "El Código Rojo significa:",
        "opciones": [
          "Paro cardiorrespiratorio",
          "Evacuación",
          "Alerta de fuego",
          "Amenaza de bomba"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La información de pacientes y colaboradores es:",
        "opciones": [
          "Pública, porque somos un hospital abierto",
          "Apta para compartirse en redes sociales sin nombres",
          "De libre consulta para cualquier colaborador",
          "Confidencial y de uso exclusivamente laboral"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Colaboradores de nuevo ingreso.",
    "nivel": "Básico",
    "objetivos": [
      "Conocer la misión, la visión, los valores y el código de ética.",
      "Identificar las normas de trabajo, prestaciones y derechos al ingresar.",
      "Reconocer los códigos de emergencia y a qué área acudir para cada trámite."
    ]
  },
  {
    "id": "consentimientos-sistema",
    "titulo": "Consentimientos informados en el sistema clínico",
    "area": "Área Médica",
    "horas": 0.25,
    "obligatorio": false,
    "descripcion": "Selección, personalización, explicación e impresión segura de consentimientos informados desde el expediente clínico.",
    "orden": 300,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Gestión de consentimientos informados",
        "duracion": "3:10 min",
        "texto": "Aprende a localizar el formato correspondiente, seleccionar al médico tratante, completar los datos del procedimiento y obtener la autorización del paciente.",
        "video": "consentimientos-informados-sistema-clinico.mp4",
        "segundosMinimos": 171
      },
      {
        "tipo": "video",
        "titulo": "Consentimiento informado: video del curso",
        "duracion": "1:35 min",
        "texto": "Selección, personalización, explicación e impresión segura de consentimientos informados desde el expediente clínico.",
        "video": "consentimiento-informado.mp4",
        "segundosMinimos": 85,
        "subtitulos": [
          [
            0,
            3.2,
            "Bienvenida al curso de Consentimiento Informado."
          ],
          [
            3.4,
            7.8,
            "Requisitos de la NOM-004 y su uso en el sistema clínico."
          ],
          [
            8.4,
            13.2,
            "El consentimiento informado es un proceso de información, no solo una firma."
          ],
          [
            13.4,
            18.3,
            "Con él, el paciente acepta un procedimiento después de conocer sus riesgos y beneficios."
          ],
          [
            18.8,
            24.7,
            "Se requiere como mínimo al ingreso hospitalario, en cirugía mayor, en anestesia general o regional,"
          ],
          [
            25.3,
            29.7,
            "en procedimientos de alto riesgo, en métodos definitivos de planificación,"
          ],
          [
            29.7,
            32.8,
            "en donación y trasplante y en investigación clínica."
          ],
          [
            33.6,
            40.2,
            "El documento debe incluir el establecimiento, el lugar y la fecha, el acto autorizado, los riesgos y beneficios,"
          ],
          [
            40.5,
            46.7,
            "la autorización para atender contingencias y el nombre y la firma del paciente, del médico y de dos testigos."
          ],
          [
            47.4,
            53.7,
            "En el sistema, localiza el formato en Cartas y consentimientos, selecciona al médico tratante,"
          ],
          [
            54.2,
            59.3,
            "completa los datos del procedimiento, explica, imprime y recaba las firmas."
          ],
          [
            59.5,
            63.1,
            "Si el procedimiento no aparece, usa el consentimiento general."
          ],
          [
            63.5,
            70.4,
            "Antes de la firma, explica qué se hará, los beneficios, los riesgos y las alternativas, incluida la de no hacerlo,"
          ],
          [
            70.8,
            72.6,
            "y confirma que el paciente entendió."
          ],
          [
            73.3,
            76.7,
            "Si el paciente no puede firmar, lo hace su representante."
          ],
          [
            77.4,
            85.2,
            "Si rechaza el procedimiento, documenta la explicación y su decisión."
          ],
          [
            86.8,
            92.2,
            "Recuerda, informa, confirma que entendió, completa todos los datos y recaba las firmas."
          ],
          [
            93.2,
            94.9,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Consentimiento informado",
            "url": "presentaciones/consentimiento-informado.html"
          },
          {
            "nombre": "Guía rápida Consentimiento informado (PDF)",
            "url": "materiales/consentimiento-informado-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Dónde se localizan los consentimientos dentro del expediente?",
        "opciones": [
          "En Cartas y consentimientos",
          "En Signos vitales",
          "En Facturación y cargos",
          "En Agenda de citas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Si el procedimiento no aparece en la lista, ¿qué debe utilizarse?",
        "opciones": [
          "Ningún formato",
          "El consentimiento informado general",
          "El formato de otro procedimiento parecido",
          "Una nota en la receta"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Antes de obtener la firma del paciente se debe:",
        "opciones": [
          "Entregar el formato para que lo lea solo",
          "Firmar en su nombre si tiene prisa",
          "Explicar el procedimiento, beneficios, riesgos y alternativas",
          "Esperar al alta para recabar todas las firmas juntas"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué norma establece los requisitos del consentimiento informado en el expediente?",
        "opciones": [
          "NOM-087-SEMARNAT-SSA1-2002",
          "NOM-018-STPS-2015",
          "NOM-035-STPS-2018",
          "NOM-004-SSA3-2012"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿En cuál de estos casos se requiere carta de consentimiento?",
        "opciones": [
          "Cirugía mayor",
          "Toma de temperatura",
          "Entrega de un folleto",
          "Cambio de habitación"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuántos testigos firman la carta de consentimiento?",
        "opciones": [
          "Ninguno",
          "Dos",
          "Uno",
          "Cuatro"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Quién firma como responsable de proporcionar la información?",
        "opciones": [
          "El cajero que registra el procedimiento",
          "El familiar que acompaña al paciente",
          "El médico que informa y recaba el consentimiento",
          "El personal de seguridad como testigo"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si el paciente es menor de edad, firma:",
        "opciones": [
          "El propio menor, si sabe escribir",
          "Cualquier acompañante mayor de edad",
          "El médico tratante en su representación",
          "Su padre, madre, tutor o representante legal"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si el paciente rechaza el procedimiento después de ser informado:",
        "opciones": [
          "Se documenta la explicación y su decisión",
          "Se le insiste hasta que acepte firmar",
          "Se omite del expediente para no afectarlo",
          "Se cancela su atención en el hospital"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Las alternativas que se explican al paciente incluyen:",
        "opciones": [
          "Solo la cirugía que propone el médico",
          "También la opción de no realizar el procedimiento",
          "Únicamente las opciones de mayor costo",
          "Ninguna; solo se explica el procedimiento"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En una urgencia con riesgo para la vida, sin posibilidad de obtener el consentimiento:",
        "opciones": [
          "Se espera a que llegue un familiar para firmar",
          "Se traslada a otro hospital sin atenderlo",
          "Se actúa y se deja constancia en el expediente",
          "Se pide la firma de cualquier persona presente"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La carta debe incluir, entre otros datos:",
        "opciones": [
          "El costo del procedimiento y la forma de pago",
          "La opinión del familiar sobre el tratamiento",
          "El número de habitación y la cama asignada",
          "Los riesgos y beneficios esperados del acto autorizado"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Médicos y personal que gestiona expedientes clínicos.",
    "nivel": "Básico",
    "objetivos": [
      "Identificar cuándo se requiere una carta de consentimiento informado.",
      "Generar en el sistema un consentimiento completo y correcto.",
      "Explicar el procedimiento y documentar casos especiales."
    ]
  },
  {
    "id": "aesp6",
    "titulo": "AESP 6: Evaluar y reevaluar el riesgo de caídas",
    "area": "Calidad y Seguridad",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Evaluación inicial y reevaluación del riesgo de caídas, medidas de prevención, señalización y reporte de eventos.",
    "orden": 60,
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
            127.1,
            "dependencia para moverse o necesidad de sedación para clasificar"
          ],
          [
            127.1,
            130.6,
            "al paciente como de alto riesgo y requerir traslado asistido."
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
          "Solo a enfermería, que aplica las escalas de valoración",
          "Solo al personal médico que indica la movilización",
          "Solo a camilleros y personal que traslada pacientes"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿En qué plazo se documenta la evaluación inicial del riesgo de caídas?",
        "opciones": [
          "En la primera semana de estancia",
          "Dentro de las primeras 24 horas",
          "Solo al egreso, en el resumen",
          "Cuando el paciente lo solicite"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuándo es obligatorio reevaluar el riesgo de caídas?",
        "opciones": [
          "Solo al ingreso, en la valoración inicial",
          "Una vez por semana, en la revisión del expediente",
          "En cada cambio de turno, de estado de alerta o de servicio",
          "Únicamente si el paciente se cae durante la estancia"
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
          "Sujetar a todos los pacientes durante la noche",
          "Prohibir que caminen sin autorización médica",
          "Retirar el timbre para que no se levanten"
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
          "Que camine solo varias veces para fortalecerse",
          "Dejar la cama en la posición más alta para su comodidad",
          "Apagar la luz por la noche para que descanse mejor",
          "Que permanezca acompañado por un familiar las 24 horas"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué escala se usa en pacientes pediátricos de 3 a 13 años?",
        "opciones": [
          "Humpty Dumpty",
          "Morse modificada",
          "Braden Q",
          "Glasgow pediátrica"
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
          "Solo si es mayor de 80 años o vive con alguna discapacidad",
          "Solo si ya se cayó antes en el hospital o en su casa",
          "Si tiene dispositivos, depende de otros para moverse o requiere sedación",
          "Nunca; en imagenología no se evalúa el riesgo de caídas"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué color de ficha en la puerta indica riesgo medio?",
        "opciones": [
          "Verde",
          "Rojo",
          "Azul celeste",
          "Amarillo"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si un paciente se cae, ¿a quién se avisa primero?",
        "opciones": [
          "Al jefe inmediato y al médico de guardia",
          "Solo a la familia del paciente",
          "A mantenimiento, para revisar la cama",
          "A nadie; solo se registra en el formato"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué formato se llena para registrar una caída?",
        "opciones": [
          "La hoja de cargos del paciente",
          "El anexo 4, formato de registro de caídas",
          "El consentimiento informado firmado",
          "La nota de egreso del médico tratante"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Una caída que provocó una fractura se reporta en la plataforma de calidad como:",
        "opciones": [
          "Cuasi falla",
          "Evento sin daño",
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
    "orden": 200,
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
            64.6,
            "Para que el hospital siga operando ante una emergencia,"
          ],
          [
            64.6,
            68.4,
            "es vital contar con reservas de agua, suministros médicos y alimentos."
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
            104.1,
            "No intentes reparaciones eléctricas o de gas por tu cuenta y utiliza"
          ],
          [
            104.1,
            107.7,
            "únicamente información de fuentes oficiales para evitar rumores."
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
          "Un sismo en el fondo del mar que provoca olas de gran altura en toda la costa",
          "Una lluvia ligera de temporada que dura varios días seguidos sin viento fuerte",
          "Un frente frío que baja del norte con vientos fuertes y descenso de la temperatura"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es el orden de evolución de un ciclón?",
        "opciones": [
          "Huracán, tormenta tropical, depresión tropical",
          "Depresión tropical, tormenta tropical, huracán",
          "Tormenta tropical, huracán, depresión tropical",
          "Depresión tropical, huracán, tormenta tropical"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿En qué se basa la escala Saffir-Simpson?",
        "opciones": [
          "En la cantidad de lluvia acumulada",
          "En el tamaño del ojo del huracán",
          "En la velocidad máxima del viento",
          "En la temperatura de la superficie del mar"
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
          "Un grupo de chat de vecinos de la zona",
          "Un video viral en redes sociales",
          "Los comentarios de huéspedes y turistas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Antes de la temporada, ¿qué se revisa en azoteas y exteriores?",
        "opciones": [
          "La pintura y el impermeabilizante decorativo",
          "Que desagües y canaletas estén libres y no haya objetos sueltos",
          "Las plantas de ornato y el riego del jardín de la entrada",
          "Los letreros de horario y la señalización de estacionamiento"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué suministro es indispensable para la continuidad del hospital?",
        "opciones": [
          "Papelería y material de oficina para varios meses",
          "Uniformes nuevos y blancos para todo el personal",
          "Agua potable, gases medicinales y combustible para la planta",
          "Mobiliario de oficina y equipo de cómputo de repuesto"
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
          "Ignorarlo si es pequeño o de poco peso",
          "Esperar a que pase el huracán para retirarlo",
          "Moverlo a la azotea, lejos de las personas"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Durante la contingencia observas un daño en la instalación de gas. ¿Qué haces?",
        "opciones": [
          "Lo reparo yo mismo con la herramienta del área",
          "Lo reporto al encargado y no lo manipulo",
          "Abro todas las válvulas para liberar la presión",
          "Salgo del hospital sin avisar a nadie"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Durante el fenómeno, el personal debe:",
        "opciones": [
          "Salir a revisar los daños del edificio",
          "Ir a su casa para proteger a su familia",
          "Mantener la calma y permanecer en su área asignada",
          "Cambiar de área según prefiera o le convenga"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Con quién se mantiene la comunicación durante una contingencia?",
        "opciones": [
          "Con los proveedores de insumos",
          "Con la prensa y los medios locales",
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
    "obligatorio": false,
    "descripcion": "Identificación de derrames químicos y de RPBI, kit de derrames y procedimiento de contención y limpieza.",
    "orden": 210,
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
            6.3,
            "donde aprenderemos la atención y manejo correcto ante derrames"
          ],
          [
            6.3,
            9.4,
            "de materiales peligrosos dentro de nuestro entorno hospitalario."
          ],
          [
            10.5,
            15.2,
            "Los códigos de seguridad utilizan colores para agilizar nuestra respuesta ante emergencias."
          ],
          [
            15.7,
            19.1,
            "Podrás encontrar estos protocolos al reverso de tu credencial en"
          ],
          [
            19.1,
            22.6,
            "el procedimiento 8 o consultando la página de calidad de tu sede."
          ],
          [
            24.3,
            28.4,
            "El Código Amarillo se activa ante derrames de sustancias químicas"
          ],
          [
            28.4,
            32.3,
            "como reactivos o infectantes y residuos biológico-infecciosos."
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
            47.6,
            "Los químicos se reconocen por pictogramas en forma de rombo,"
          ],
          [
            47.6,
            51,
            "mientras que los biológicos llevan el símbolo de riesgo biológico."
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
            89.7,
            "Protégete con tu equipo. Delimita la zona, absorbe con tapetes en forma de S,"
          ],
          [
            89.7,
            93.2,
            "limpia y finalmente repone el material utilizado."
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
            121.6,
            "pero es responsabilidad de todos reponer cualquier elemento utilizado"
          ],
          [
            121.6,
            124.9,
            "durante una emergencia para asegurar la preparación continua."
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
          "Incendio en cualquier área del hospital",
          "Amenaza de bomba o de objeto sospechoso",
          "Paro cardiorrespiratorio de un adulto"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Dónde puedes consultar los códigos de seguridad y sus extensiones?",
        "opciones": [
          "Solo con el director del hospital o con su asistente, por seguridad",
          "Al reverso de la credencial, en el procedimiento 8 o en la página de calidad",
          "En el periódico mural de la cafetería y en los elevadores de servicio",
          "En ningún lado; se memorizan en la inducción del primer día de trabajo"
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
          "Por el olor fuerte que despide",
          "Por el color que deja en el piso",
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
          "La bitácora de visitas del área"
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
          "Alcohol en gel al 70 %",
          "Agua caliente a presión",
          "Detergente de ropa diluido"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Con qué se hace la desinfección profunda después de un derrame de RPBI?",
        "opciones": [
          "Solo con agua limpia y un trapo",
          "Con sales cuaternarias y después agua y jabón",
          "Con aromatizante para eliminar el olor",
          "No se desinfecta si ya se recogió todo"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuál es el primer paso ante cualquier derrame?",
        "opciones": [
          "Limpiar con un trapo lo más rápido posible",
          "Esperar a que se seque para recogerlo",
          "Detectarlo y activar el código",
          "Tomar una foto para el chat del área"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Después de usar el kit de derrames, ¿qué debes hacer?",
        "opciones": [
          "Guardarlo como quedó para la siguiente vez",
          "Llevárselo a casa para tenerlo a la mano",
          "Tirarlo completo y pedir uno nuevo",
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
    "obligatorio": false,
    "descripcion": "Conceptos de peligro y riesgo, Comisión Mixta, ciclo de prevención y cómo reportar e investigar accidentes e incidentes.",
    "orden": 220,
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
            8.1,
            "reportar situaciones de riesgo y realizar investigaciones exhaustivas"
          ],
          [
            8.1,
            11.2,
            "de accidentes e incidentes en nuestro entorno de trabajo."
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
          "Un objeto o sustancia que puede causar daño",
          "La probabilidad de que un peligro cause daño",
          "Una enfermedad causada por el trabajo",
          "El formato con que se reporta un evento"
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
          "Solo directivos y jefes de área",
          "Representantes de los trabajadores y del patrón",
          "Solo personal de Protección Civil y brigadas",
          "Pacientes, familiares y personal de Calidad"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cómo verifica la Comisión Mixta el cumplimiento de las medidas?",
        "opciones": [
          "Con encuestas de satisfacción a los pacientes",
          "Revisando lo que se publica en redes sociales",
          "Con recorridos de verificación en las instalaciones",
          "No verifica; solo recibe los reportes por escrito"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuál es el orden del ciclo de prevención?",
        "opciones": [
          "Reportar, archivar el reporte y corregir cuando haya presupuesto",
          "Corregir, inspeccionar, investigar y cerrar sin seguimiento",
          "Investigar, sancionar al responsable y cerrar el caso",
          "Inspeccionar, investigar, reportar, corregir y dar seguimiento"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué dato debe incluir el formato de reporte?",
        "opciones": [
          "Descripción de los hechos, turno, lugar y actividad",
          "Solo el nombre del jefe inmediato y su firma",
          "La opinión personal de quien reporta sobre el culpable",
          "El salario y la antigüedad del trabajador lesionado"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cómo debe ser la información de una investigación?",
        "opciones": [
          "Basada en rumores y comentarios del área",
          "Objetiva, comprobable y sin suposiciones",
          "Basada en la opinión de la mayoría del grupo",
          "Recabada semanas después, cuando haya calma"
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
          "La dejas donde está para que la recoja limpieza",
          "La tiras a la basura común con cuidado",
          "Esperas a fin de mes para reportarla en la junta",
          "La desechas en su contenedor y reportas la condición"
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
    "obligatorio": false,
    "descripcion": "Ciclo PHVA, fuentes de mejora, acciones correctivas y preventivas, indicadores y responsabilidad compartida.",
    "orden": 230,
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
            "verifique su correcta implementación y, finalmente, documente todo el proceso para el cierre."
          ],
          [
            87.2,
            91.1,
            "Para medir el éxito de nuestras acciones, utilizamos indicadores clave."
          ],
          [
            91.3,
            94.5,
            "Estos van desde el número de incidentes y el avance en el cierre"
          ],
          [
            94.5,
            97.7,
            "de acciones hasta el nivel de capacitación de nuestro personal."
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
            108.2,
            "los responsables de área implementan los controles necesarios y la"
          ],
          [
            108.2,
            111.9,
            "dirección facilita los recursos para garantizar el éxito del sistema."
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
          "Un proceso permanente de identificar oportunidades, actuar y evaluar resultados",
          "Una auditoría externa que se hace una vez al año para renovar certificaciones",
          "Un trámite exclusivo del área de Seguridad e Higiene sin participación de otros",
          "Un mecanismo para sancionar a quien incumple las medidas de seguridad"
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
          "Compras de equipo y de material de protección",
          "Contrataciones de personal para cubrir vacantes",
          "Inspecciones, auditorías y análisis de indicadores",
          "Programación de las vacaciones del personal"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuál es una fuente de oportunidades de mejora?",
        "opciones": [
          "Los rumores que circulan entre el personal",
          "Las publicaciones en redes sociales",
          "El pronóstico del clima de la semana",
          "Las sugerencias del personal"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Una acción correctiva busca:",
        "opciones": [
          "Eliminar la causa raíz de una desviación para que no se repita",
          "Anticipar algo que nunca ha pasado, aunque no haya indicios",
          "Sancionar al responsable para que sirva de ejemplo al área",
          "Cerrar el hallazgo rápido, sin revisar si funcionó la medida"
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
          "Esperar un año para ver si se repite",
          "Avisar a los pacientes y a sus familiares",
          "Verificar que la acción funcionó y documentarlo",
          "Borrar el registro para no afectar los indicadores"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Ante un accidente, ¿a quién se notifica?",
        "opciones": [
          "A nadie, si la lesión es leve y no hubo incapacidad",
          "Solo a un compañero de confianza que haya visto lo ocurrido",
          "A recursos humanos de otra sede, al final de la semana",
          "Al jefe inmediato y a Seguridad e Higiene"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuál es un indicador de desempeño en seguridad?",
        "opciones": [
          "Porcentaje de acciones correctivas cerradas",
          "Número de pacientes atendidos en el mes",
          "Ventas mensuales de la farmacia externa",
          "Temperatura ambiente promedio del área"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué le corresponde a cada trabajador?",
        "opciones": [
          "Aprobar los presupuestos de seguridad",
          "Reportar riesgos y condiciones inseguras",
          "Firmar las auditorías externas del sistema",
          "Nada; es tarea exclusiva de Seguridad e Higiene"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué le corresponde a la dirección?",
        "opciones": [
          "Hacer personalmente las inspecciones diarias",
          "Llenar los formatos de cada área del hospital",
          "Facilitar los recursos necesarios",
          "Ignorar los indicadores si no hay accidentes"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Si después de aplicar una acción el problema persiste, se debe:",
        "opciones": [
          "Cerrar el hallazgo de todos modos para no atrasarse",
          "Dejar de medirlo porque ya se hizo lo posible",
          "Culpar al área responsable y escalar el caso",
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
    "orden": 310,
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
          "Material de la atención médica con microorganismos capaces de causar enfermedad",
          "Cualquier basura que se genera en el consultorio durante la jornada",
          "Solo los medicamentos caducados que se retiran de maletas y consultorios",
          "El papel y los empaques que se desechan en la recepción del consultorio"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué va en la bolsa roja?",
        "opciones": [
          "Botellas de solución vacías, con sus tapas y equipos",
          "Sangre y materiales saturados o que gotean fluidos",
          "Agujas y lancetas usadas, sin colocarles el capuchón",
          "Ámpulas de vidrio rotas o vacías de medicamentos"
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
          "Jeringas completas, gasas y algodones usados",
          "Basura del escritorio y papel contaminado",
          "Ámpulas de vidrio y frascos de medicamento",
          "Solo punzocortantes: agujas, lancetas y bisturís"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Dónde se desechan las ámpulas de vidrio no contaminadas?",
        "opciones": [
          "En el recipiente blanco para vidrio",
          "En el recipiente rígido rojo",
          "En la bolsa amarilla de patológicos",
          "En la bolsa roja de RPBI"
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
          "Sí, siempre, para ahorrar bolsas",
          "Solo al final del turno, con cuidado",
          "No; está prohibido porque se rompen y derraman",
          "Solo si están medio llenas y bien cerradas"
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
          "El nombre del último paciente atendido",
          "El costo del material desechado",
          "Nada; el recipiente ya viene rotulado"
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
          "Vaciarlo en una bolsa roja",
          "Lavarlo con cloro para reutilizarlo",
          "Tener un contenedor de reemplazo disponible",
          "Dejarlo afuera del consultorio para el recolector"
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
    "orden": 320,
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
          "Porque el paciente lo pide para su reembolso con el seguro",
          "Para tener menos material guardado en maletas y consultorios",
          "No es indispensable si el material se usó en una urgencia"
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
          "El nombre del proveedor y su número de pedido",
          "El costo unitario de cada insumo solicitado",
          "La cuenta donde se cargó y si es para maleta o consultorio",
          "El diagnóstico del paciente al que se le aplicó"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿En qué formato se envía la requisición?",
        "opciones": [
          "Foto de la hoja por WhatsApp al almacén",
          "Papel original por mensajería interna",
          "Mensaje de voz al coordinador de guardia",
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
          "Lunes antes del mediodía",
          "Viernes antes de las 9:00 a. m.",
          "Domingo antes de las 10:00 p. m.",
          "No hay límite; se envía cuando se necesite"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Al recibir material, ¿qué se coteja?",
        "opciones": [
          "Solo la factura del proveedor contra el pedido que se hizo",
          "Solo el número de cajas contra la guía de envío del almacén",
          "El material contra la hoja de traspaso, y esta contra la requisición",
          "Nada; el material se acomoda directo en el consultorio al llegar"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Un insumo se cargó pero no se surtió. ¿Qué haces?",
        "opciones": [
          "Lo compras por tu cuenta y pides reembolso",
          "Lo olvidas, porque ya quedó registrado",
          "Lo cargas otra vez en la misma cuenta",
          "Elaboras una carta de hechos solicitando el envío"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Olvidaste cargar un insumo. ¿Qué procede?",
        "opciones": [
          "Pedir autorización al Dr. Vera para cargarlo en una consulta posterior",
          "Pedirlo al almacén sin cargo, explicando que se olvidó",
          "Cargarlo a cualquier paciente del día sin pedir autorización",
          "No pedirlo nunca y trabajar con lo que quede en la maleta"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El insumo se cargó bien, pero almacén sigue mostrando existencia. ¿A quién avisas?",
        "opciones": [
          "Al paciente al que se le cargó el insumo",
          "Al Lic. Armando Hernández de Auditoría",
          "A la recepción del hotel donde está el consultorio",
          "A nadie; el sistema se corrige solo al cierre"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué material caducado debes retirar?",
        "opciones": [
          "Solo el que ya caducó hace un año o más, para no desperdiciar",
          "Ninguno; lo retira el almacén en su recorrido mensual por consultorios",
          "El que caduca en el mes en curso, e identificar el de los próximos 3 meses",
          "Solo los medicamentos controlados y los refrigerados de la maleta"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cómo se repone el material caducado?",
        "opciones": [
          "Automáticamente, porque el sistema detecta la caducidad",
          "Tirándolo a la basura y pidiendo uno nuevo al almacén",
          "Pidiéndolo como material nuevo sin avisar de la caducidad",
          "Enviándolo al almacén, rotulado, con su carta de hechos"
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
    "orden": 330,
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
          "Porque así se ve más ordenado el expediente del paciente",
          "Porque el paciente lo pide para su aseguradora",
          "No los necesitan; se usa un solo juego para ambos"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Dónde se escribe el método de pago?",
        "opciones": [
          "Al reverso del FRAP, con letra pequeña",
          "Como título del documento",
          "En una nota aparte engrapada",
          "No se escribe; se informa por radio"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Quién puede autorizar un cobro?",
        "opciones": [
          "Cualquier paramédico que atienda el servicio",
          "El paciente o su acompañante",
          "El coordinador, el gerente o el director",
          "El operador de la ambulancia"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuál de estas identificaciones NO es válida para una cuenta por cobrar internacional?",
        "opciones": [
          "Pasaporte vigente",
          "Licencia de conducir extranjera",
          "Credencial para votar (INE)",
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
          "Solo el nombre de la calle o del hotel",
          "Solo el número económico de la ambulancia",
          "Nada, si el servicio fue en carretera",
          "La dirección y la ciudad específica"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si una sección del FRAP no aplica al caso, se debe:",
        "opciones": [
          "Dejar en blanco, sin tachar ni subrayar",
          "Tachar la sección con una línea diagonal",
          "Escribir “N/A” en grande sobre la sección",
          "Llenarla con datos aproximados del caso"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Por qué se registran las pertenencias del paciente?",
        "opciones": [
          "Para el inventario de la ambulancia",
          "Para proteger al personal ante reclamos",
          "Para cobrarlas como parte del servicio",
          "No se registran; son del paciente"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué datos de contacto son obligatorios en la carátula de una cuenta internacional?",
        "opciones": [
          "Dirección y teléfono del hotel",
          "Número de habitación y de reservación",
          "Celular y correo electrónico del paciente",
          "Nombre y teléfono del agente de viajes"
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
          "Siempre se cobra depósito antes de trasladarlo al hospital",
          "Se usa el formato Medicare, igual que con pacientes de EE. UU.",
          "No se necesita número de caso; basta con la póliza"
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
          "Cualquier acompañante mayor de edad",
          "El paramédico en nombre del paciente",
          "Solo el paciente o su representante legal",
          "El operador, como testigo del servicio"
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
    "orden": 340,
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
            28.7,
            "Para mejorar la calidad de nuestras notas,"
          ],
          [
            28.7,
            33.5,
            "debemos abandonar prácticas como el copiar y pegar, o el uso de machotes genéricos."
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
          "Solo administrativo, para el cobro",
          "Opcional en consultas breves",
          "Solo para el trámite del seguro"
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
          "Una por día, aunque haya varias atenciones",
          "Solo en casos graves que se trasladan",
          "Una por semana por cada paciente",
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
          "Solo que el paciente la pida y la pague",
          "Valoración previa, nota médica y receta",
          "Nada, porque es un procedimiento simple",
          "Únicamente la firma del paciente en la hoja"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si el paciente rechaza el manejo propuesto, ¿qué se hace?",
        "opciones": [
          "No se registra, porque no se le dio ningún tratamiento al paciente",
          "Se insiste hasta que el paciente acepte el manejo y se anota que aceptó",
          "Se deja constancia en el consentimiento y se anotan las recomendaciones",
          "Se cancela la nota y se da de baja la consulta en el sistema"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En un paciente que regresa a consulta, la nota debe:",
        "opciones": [
          "Repetir la nota anterior para ahorrar tiempo",
          "Omitir el tratamiento previo para no confundir",
          "Ser más corta que la nota inicial",
          "Detallar su evolución y estado actual"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué dato es indispensable documentar en un riesgo de trabajo?",
        "opciones": [
          "El mecanismo de lesión y la ubicación exacta",
          "El salario y el puesto del colaborador",
          "La opinión del jefe sobre lo ocurrido",
          "La marca del calzado y del uniforme"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Un colaborador con una lesión que requiere estudios de imagen se:",
        "opciones": [
          "Envía a su casa con analgésico",
          "Refiere al IMSS con la hoja de traslado",
          "Atiende sin nota, por ser colaborador",
          "Cita la próxima semana para revalorar"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué debe incluir una nota de traslado?",
        "opciones": [
          "Solo el nombre del hospital destino y la hora de salida",
          "Solo la firma del médico que refiere y su cédula",
          "Diagnóstico, resumen clínico, tratamiento, condición y transporte",
          "El costo del traslado y la forma de pago del paciente"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En la nota de un huésped del hotel, debes:",
        "opciones": [
          "Explicar qué parte del hotel causó el accidente",
          "Opinar sobre el mantenimiento de las instalaciones",
          "Omitir la exploración si el huésped tiene prisa",
          "Describir objetivamente síntomas y lesiones"
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
    "orden": 170,
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
          "Vende medicamentos al público en general con receta o sin ella",
          "Debe estar ubicada fuera del hospital por seguridad sanitaria",
          "No requiere licencia sanitaria porque es de uso interno"
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
          "Receta ordinaria con firma del médico",
          "Ninguna, si el paciente está hospitalizado",
          "Receta simple sin firma, solo con sello"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cómo se resguardan los medicamentos controlados?",
        "opciones": [
          "En el anaquel general, en orden alfabético con los demás medicamentos",
          "Bajo llave, con libro de control firmado por el responsable sanitario",
          "En la central de enfermería, a la mano del turno para urgencias",
          "En el carro de paro, sin registro adicional porque ya está inventariado"
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
          "Los de primera línea para infecciones comunes",
          "Los de venta libre en farmacias externas",
          "Los de uso exclusivamente veterinario",
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
          "1 mes, como mínimo",
          "3 meses, como mínimo",
          "6 meses, como mínimo",
          "Más de 12 meses, salvo excepciones"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué documento exiges cuando el proveedor se equivoca en la entrega?",
        "opciones": [
          "Una carta de cambio",
          "Una receta médica",
          "Un pagaré firmado",
          "Ninguno, se acepta"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿En qué momentos se realiza la conciliación de medicamentos?",
        "opciones": [
          "Solo al egreso, al elaborar la receta final",
          "Al ingreso, al cambiar de médico o área y al egreso",
          "Una vez por semana durante la estancia",
          "Solo si el paciente o su familiar lo pide"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si al validar una prescripción detectas un problema, debes:",
        "opciones": [
          "Sellarla de todos modos y avisar después al médico",
          "Cambiar la dosis por tu cuenta y surtirla de inmediato",
          "Avisar al médico tratante y no sellar hasta resolverlo",
          "Ignorarlo si el médico que la firmó tiene experiencia"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué norma hace obligatoria la farmacovigilancia?",
        "opciones": [
          "NOM-087-SEMARNAT-SSA1-2002",
          "NOM-017-STPS-2008",
          "NOM-004-SSA3-2012",
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
  },
  {
    "id": "aesp4",
    "titulo": "AESP 4: Seguridad en los procedimientos",
    "area": "Calidad y Seguridad",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Marcado del sitio quirúrgico, lista de verificación de la seguridad de la cirugía y tiempo fuera en procedimientos dentro y fuera del quirófano.",
    "orden": 40,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "AESP 4 · Seguridad en los procedimientos: video del curso",
        "duracion": "1:50 min",
        "texto": "Marcado del sitio quirúrgico, lista de verificación de la seguridad de la cirugía y tiempo fuera en procedimientos dentro y fuera del quirófano.",
        "video": "aesp4-seguridad-procedimientos.mp4",
        "segundosMinimos": 98,
        "subtitulos": [
          [
            0,
            6.8,
            "Bienvenida al curso de la Acción Esencial para la Seguridad del Paciente número 4: seguridad en los procedimientos."
          ],
          [
            7.7,
            12.3,
            "El objetivo es garantizar el paciente, el procedimiento y el sitio correctos."
          ],
          [
            12.6,
            19.1,
            "Operar en el sitio equivocado es un evento centinela prevenible y tres barreras lo evitan: el marcado del sitio,"
          ],
          [
            19.5,
            21.8,
            "la lista de verificación y el tiempo fuera."
          ],
          [
            22.5,
            27.8,
            "El cirujano responsable marca el sitio antes de entrar a quirófano, en órganos bilaterales,"
          ],
          [
            28.2,
            32.4,
            "estructuras múltiples o niveles, con la participación del paciente o de un familiar."
          ],
          [
            33.2,
            36.8,
            "Usa una diana con sus iniciales resistente a la antisepsia."
          ],
          [
            37.4,
            42.1,
            "La primera fase de la lista, la entrada, se realiza antes de la inducción anestésica."
          ],
          [
            42.9,
            50.2,
            "El equipo confirma identidad, sitio, procedimiento y consentimiento, y anestesiología revisa equipo, alergias,"
          ],
          [
            50.5,
            52.3,
            "vía aérea y riesgo de sangrado."
          ],
          [
            53,
            55.8,
            "La pausa quirúrgica se hace justo antes de la incisión."
          ],
          [
            56.3,
            63,
            "Todos se presentan, confirman paciente, procedimiento, sitio y posición, y anticipan los pasos críticos,"
          ],
          [
            63.2,
            65.1,
            "la duración y el sangrado esperado."
          ],
          [
            65.8,
            69,
            "La salida se realiza antes de que el paciente deje la sala."
          ],
          [
            69.5,
            74.3,
            "Se confirma el procedimiento realizado, el recuento completo de instrumental,"
          ],
          [
            74.3,
            77.3,
            "gasas y agujas, y el etiquetado de las muestras."
          ],
          [
            77.6,
            78.7,
            "Todos firman la lista."
          ],
          [
            79.6,
            86.1,
            "El tiempo fuera también se realiza fuera del quirófano, justo antes de transfusiones, hemodiálisis, biopsias,"
          ],
          [
            86.5,
            91,
            "estudios con contraste, colocación de catéteres y otros procedimientos invasivos."
          ],
          [
            91.5,
            96.2,
            "Cualquier integrante del equipo puede detener el procedimiento si algo no coincide."
          ],
          [
            96.8,
            100.8,
            "La lista se verifica en voz alta y en el momento, nunca de memoria al final."
          ],
          [
            101.7,
            107,
            "Recuerda, marca, verifica en tres fases y haz el tiempo fuera, siempre en voz alta."
          ],
          [
            107.9,
            109.6,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación AESP 4",
            "url": "presentaciones/aesp4-seguridad-procedimientos.html"
          },
          {
            "nombre": "Guía rápida AESP 4 (PDF)",
            "url": "materiales/aesp4-seguridad-procedimientos-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Quién marca el sitio quirúrgico?",
        "opciones": [
          "El cirujano responsable del procedimiento",
          "La enfermera circulante de la sala",
          "El camillero que traslada al paciente",
          "El paciente por su cuenta, en su cuarto"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuándo se marca el sitio quirúrgico?",
        "opciones": [
          "Después de la incisión, ya con campos colocados",
          "Antes de que el paciente entre a quirófano",
          "Durante la inducción de la anestesia",
          "Al terminar la cirugía, para el registro"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿En qué casos se marca el sitio?",
        "opciones": [
          "En todas las cirugías sin ninguna excepción",
          "Solo en cirugía estética o reconstructiva",
          "En órganos bilaterales, estructuras múltiples o niveles",
          "Solo en pacientes pediátricos que no cooperan"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En cirugía oftalmológica la marca se coloca:",
        "opciones": [
          "Sobre el párpado cerrado del ojo que se opera",
          "En la frente, al centro, sobre la línea media",
          "En la mano del lado correcto, en el dorso",
          "Como un punto sobre la ceja del lado correcto"
        ],
        "correcta": 3
      },
      {
        "pregunta": "La fase de Entrada de la lista de verificación se realiza:",
        "opciones": [
          "Antes de la inducción anestésica",
          "Después de la incisión de la piel",
          "En recuperación, con el paciente despierto",
          "Al día siguiente, en la visita médica"
        ],
        "correcta": 0
      },
      {
        "pregunta": "La pausa quirúrgica o tiempo fuera se realiza:",
        "opciones": [
          "Antes de la inducción anestésica",
          "Inmediatamente antes de la incisión",
          "Al cerrar la herida quirúrgica",
          "En el pasillo, antes de entrar a la sala"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En la pausa quirúrgica, cada integrante del equipo:",
        "opciones": [
          "Firma la lista sin hablar para no perder tiempo",
          "Sale de la sala mientras habla el cirujano",
          "Se presenta por su nombre y función",
          "Revisa su celular por si hay urgencias"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Qué se confirma en la fase de Salida?",
        "opciones": [
          "El costo de la cirugía y los insumos usados",
          "La dieta del paciente para el resto del día",
          "El turno siguiente y quién recibe al paciente",
          "El recuento completo de instrumental, gasas y agujas"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué riesgo de sangrado en adultos exige preparar accesos y hemoderivados?",
        "opciones": [
          "Más de 500 mL",
          "Más de 50 mL",
          "Más de 5 litros",
          "No se valora"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál de estos procedimientos fuera del quirófano requiere tiempo fuera?",
        "opciones": [
          "Toma de signos vitales",
          "Transfusión de sangre",
          "Cambio de sábanas",
          "Entrega de dieta"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si durante la pausa el lado del consentimiento no coincide con el marcado:",
        "opciones": [
          "Se continúa y se aclara después",
          "Se corrige el consentimiento a mano sin decir nada",
          "Se detiene el procedimiento y se aclara",
          "Decide el más antiguo del equipo"
        ],
        "correcta": 2
      },
      {
        "pregunta": "La lista de verificación debe:",
        "opciones": [
          "Llenarse al final de la cirugía, de memoria, cuando el paciente ya salió de la sala",
          "Llenarla solo el cirujano, cuando tenga tiempo, sin necesidad de leerla en voz alta",
          "Guardarse en el quirófano para futuras auditorías, sin integrarla al expediente",
          "Verificarse en voz alta en el momento, firmarse e integrarse al expediente"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Personal de quirófano, hemodinamia, endoscopia, imagenología, hemodiálisis, urgencias y médicos que realizan procedimientos.",
    "nivel": "Intermedio",
    "objetivos": [
      "Aplicar el marcado del sitio quirúrgico conforme a la AESP 4.",
      "Completar las tres fases de la lista de verificación en el momento correcto.",
      "Realizar el tiempo fuera en procedimientos fuera del quirófano."
    ]
  },
  {
    "id": "aesp7",
    "titulo": "AESP 7: Registro y análisis de eventos centinela, adversos y cuasi fallas",
    "area": "Calidad y Seguridad",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Clasificación, reporte inmediato y análisis de cuasi fallas, eventos adversos y eventos centinela, con enfoque no punitivo.",
    "orden": 70,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "AESP 7 · Registro de eventos adversos: video del curso",
        "duracion": "1:30 min",
        "texto": "Clasificación, reporte inmediato y análisis de cuasi fallas, eventos adversos y eventos centinela, con enfoque no punitivo.",
        "video": "aesp7-registro-eventos.mp4",
        "segundosMinimos": 81,
        "subtitulos": [
          [
            0,
            7.7,
            "Bienvenida al curso de la Acción Esencial para la Seguridad del Paciente número 7: registro y análisis de eventos adversos."
          ],
          [
            8,
            13.8,
            "Registramos lo que falló o estuvo a punto de fallar para aprender y corregir los procesos."
          ],
          [
            14.1,
            17.5,
            "Reportar no busca culpables, busca que no vuelva a ocurrir."
          ],
          [
            18.1,
            24.4,
            "Hay tres tipos de evento. La cuasi falla no llegó al paciente gracias a una intervención oportuna."
          ],
          [
            24.7,
            27.4,
            "El evento adverso causa un daño leve o moderado."
          ],
          [
            27.4,
            34.3,
            "Y el evento centinela causa la muerte, la pérdida permanente de una función o una lesión psicológica grave."
          ],
          [
            35.2,
            39.5,
            "Algunos eventos siempre se registran y se analizan, como la muerte imprevista,"
          ],
          [
            39.9,
            45.5,
            "la cirugía en el sitio o el paciente incorrecto, la muerte materna o la entrega de un menor equivocado."
          ],
          [
            46.2,
            49.9,
            "Ante un evento, primero atiende y protege al paciente."
          ],
          [
            50.4,
            52.4,
            "Después avisa a tu jefe y al médico,"
          ],
          [
            52.9,
            58,
            "conserva el medicamento o el equipo involucrado y reporta de inmediato en la plataforma de Calidad."
          ],
          [
            58.6,
            64.3,
            "Describe los hechos, qué pasó, cuándo, dónde, cómo se detectó y qué se hizo."
          ],
          [
            65.1,
            70.6,
            "Evita juicios, suposiciones y señalar culpables. El registro es anónimo."
          ],
          [
            71,
            73.4,
            "Calidad recibe y clasifica tu reporte."
          ],
          [
            73.7,
            80.2,
            "Todo evento centinela se analiza para encontrar su causa raíz y el Comité de Calidad y Seguridad del Paciente define las"
          ],
          [
            80.2,
            87.8,
            "mejoras. Recuerda, atiende, avisa, conserva y reporta de inmediato sin buscar culpables."
          ],
          [
            88.5,
            90.3,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación AESP 7",
            "url": "presentaciones/aesp7-registro-eventos.html"
          },
          {
            "nombre": "Guía rápida AESP 7 (PDF)",
            "url": "materiales/aesp7-registro-eventos-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Cuál es el propósito de reportar un evento?",
        "opciones": [
          "Aprender y evitar que vuelva a ocurrir",
          "Encontrar al culpable del error",
          "Cumplir un requisito administrativo",
          "Sancionar al área donde ocurrió"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Un error de medicación detectado antes de administrarse es:",
        "opciones": [
          "Un evento centinela",
          "Una cuasi falla",
          "Un evento adverso grave",
          "No es un evento"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Un hecho ajeno a la enfermedad que causa daño leve o moderado por la atención es:",
        "opciones": [
          "Una cuasi falla",
          "Una complicación esperada",
          "Un evento adverso",
          "Un evento centinela"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Un evento que causa la muerte o la pérdida permanente de una función es:",
        "opciones": [
          "Una cuasi falla",
          "Un incidente menor",
          "Un evento adverso leve",
          "Un evento centinela"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Ante un evento, lo primero es:",
        "opciones": [
          "Atender y proteger al paciente",
          "Llenar el reporte en la plataforma",
          "Buscar al responsable del error",
          "Tomar fotos con el celular como evidencia"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuándo se reporta un evento?",
        "opciones": [
          "Al final del mes, en el informe del área",
          "De inmediato, en cuanto se identifica",
          "Solo si el paciente o su familia se queja",
          "Solo si hubo un daño grave o la muerte"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Qué se hace con el medicamento o equipo involucrado?",
        "opciones": [
          "Se desecha para evitar más errores",
          "Se devuelve al almacén o a farmacia",
          "Se conserva para el análisis",
          "Se usa con otro paciente si está bien"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuál es una descripción adecuada en un reporte?",
        "opciones": [
          "“La compañera de la tarde siempre se equivoca con los medicamentos del área, como hoy”",
          "“Creo que fue por flojera del turno anterior, que no revisó nada de lo que preparó”",
          "“No sé exactamente qué pasó, pero seguro fue culpa del otro turno o de farmacia”",
          "“A las 14:10 se preparó el medicamento equivocado y se detectó en la doble verificación”"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué análisis se realiza en todo evento centinela?",
        "opciones": [
          "Análisis causa raíz",
          "Encuesta de satisfacción",
          "Auditoría financiera",
          "Ninguno"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Quién define las mejoras a partir de los eventos analizados?",
        "opciones": [
          "Cada trabajador por su cuenta, en su área",
          "El Comité de Calidad y Seguridad del Paciente",
          "El área de compras, según el presupuesto",
          "El paciente afectado y su familia"
        ],
        "correcta": 1
      },
      {
        "pregunta": "¿Cuál es un ejemplo de evento centinela?",
        "opciones": [
          "Un retraso de 10 minutos en la entrega de la dieta",
          "Un cambio de habitación por mantenimiento",
          "Cirugía en el sitio o en el paciente incorrecto",
          "Una cuasi falla detectada a tiempo en farmacia"
        ],
        "correcta": 2
      },
      {
        "pregunta": "El registro de eventos es:",
        "opciones": [
          "Público con nombre del responsable",
          "Una sanción automática",
          "Opcional",
          "Anónimo y no punitivo"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Todo el personal, clínico y no clínico.",
    "nivel": "Básico",
    "objetivos": [
      "Distinguir cuasi falla, evento adverso y evento centinela.",
      "Actuar y reportar de inmediato ante un evento.",
      "Describir los hechos de forma objetiva y no punitiva."
    ]
  },
  {
    "id": "aesp8",
    "titulo": "AESP 8: Cultura de seguridad del paciente",
    "area": "Calidad y Seguridad",
    "horas": 1,
    "obligatorio": false,
    "descripcion": "Qué es la cultura de seguridad, cómo se mide cada año y qué hace cada colaborador para fortalecerla.",
    "orden": 80,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "AESP 8 · Cultura de seguridad: video del curso",
        "duracion": "1:20 min",
        "texto": "Qué es la cultura de seguridad, cómo se mide cada año y qué hace cada colaborador para fortalecerla.",
        "video": "aesp8-cultura-seguridad.mp4",
        "segundosMinimos": 72,
        "subtitulos": [
          [
            0,
            6.8,
            "Bienvenida al curso de la Acción Esencial para la Seguridad del Paciente número 8: cultura de seguridad del paciente."
          ],
          [
            7.3,
            14,
            "La cultura de seguridad es el resultado de los valores, actitudes y conductas de las personas y los equipos."
          ],
          [
            14.8,
            19.8,
            "Las otras siete acciones funcionan solo si el equipo cree en ellas y se siente seguro para hablar."
          ],
          [
            20.5,
            25.8,
            "Una organización segura reconoce que la atención es de alto riesgo, no culpa a quien reporta,"
          ],
          [
            25.8,
            29.8,
            "colabora entre áreas y niveles e invierte para corregir lo que falla."
          ],
          [
            30.2,
            34.5,
            "La cultura de seguridad se mide una vez al año, de forma anónima,"
          ],
          [
            34.9,
            40.9,
            "con el cuestionario de la Dirección General de Calidad, entre médicos y enfermería de todos los turnos."
          ],
          [
            41.2,
            46.9,
            "El cuestionario evalúa 12 dimensiones, como el trabajo en equipo, las acciones del jefe,"
          ],
          [
            47.2,
            51.8,
            "la comunicación sobre errores, los cambios de turno y la respuesta no punitiva."
          ],
          [
            51.8,
            59,
            "Si ves un riesgo, dilo. Habla con respeto y con datos, sin importar el puesto de quien escucha."
          ],
          [
            59.4,
            62,
            "El silencio ante un riesgo también es una decisión."
          ],
          [
            62.4,
            66.1,
            "Tu papel es reportar sin miedo, hacer entregas de turno completas,"
          ],
          [
            66.6,
            70.9,
            "aprender de los resultados y participar con honestidad en la medición anual."
          ],
          [
            71.7,
            77.7,
            "Recuerda, una cultura segura reconoce el riesgo, no culpa, colabora y mejora."
          ],
          [
            78.3,
            79.9,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación AESP 8",
            "url": "presentaciones/aesp8-cultura-seguridad.html"
          },
          {
            "nombre": "Guía rápida AESP 8 (PDF)",
            "url": "materiales/aesp8-cultura-seguridad-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "La cultura de seguridad es:",
        "opciones": [
          "El resultado de valores, actitudes y conductas que determinan el compromiso con la seguridad",
          "Un manual de procedimientos que se guarda en el área de Calidad para las auditorías",
          "Un trámite anual que se cumple al responder la encuesta de la Secretaría de Salud",
          "La lista de sanciones que el hospital aplica a quien comete errores con pacientes"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Con qué frecuencia se mide la cultura de seguridad?",
        "opciones": [
          "Cada cinco años",
          "Una vez al año",
          "Solo cuando hay un evento centinela",
          "Nunca"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La encuesta de cultura de seguridad es:",
        "opciones": [
          "Con nombre y número de empleado",
          "Obligatoria solo para jefes",
          "Anónima",
          "Pública"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cuántas dimensiones evalúa el cuestionario?",
        "opciones": [
          "3",
          "5",
          "20",
          "12"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Una organización con cultura de seguridad ante quien reporta un error:",
        "opciones": [
          "No lo castiga por reportar",
          "Lo sanciona de inmediato",
          "Lo cambia de área sin explicación",
          "Ignora el reporte para no alarmar"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Es una dimensión de la cultura de seguridad:",
        "opciones": [
          "Ventas del mes",
          "Cambios de turno y transiciones",
          "Número de camas",
          "Precio de los servicios del hospital"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Si notas un riesgo en la indicación de un médico, debes:",
        "opciones": [
          "Callar, porque tiene más jerarquía y experiencia",
          "Comentarlo después con un compañero en el pasillo",
          "Decirlo con respeto y con datos antes de continuar",
          "Esperar al siguiente turno para que otro lo revise"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Quiénes participan en la medición anual?",
        "opciones": [
          "Solo directivos y jefes de servicio del hospital, en una junta",
          "Solo pacientes y familiares que fueron atendidos durante el año",
          "Solo el personal del área de Calidad y Seguridad del Paciente",
          "Médicos y enfermería de todos los turnos con contacto con pacientes"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Para qué sirven los resultados de la medición?",
        "opciones": [
          "Para orientar acciones de mejora",
          "Para despedir personal",
          "Para calcular bonos individuales",
          "No se usan"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué conducta fortalece la cultura de seguridad?",
        "opciones": [
          "Ocultar las cuasi fallas para no afectar los indicadores",
          "Reportar sin miedo y comunicar en la entrega de turno",
          "Trabajar sin coordinarse con otras áreas para avanzar más rápido",
          "Evitar preguntar para no parecer inexperto frente al equipo"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Las otras siete Acciones Esenciales:",
        "opciones": [
          "No dependen de la cultura; funcionan con solo seguir los protocolos",
          "Solo aplican en quirófano y en las áreas de cuidados críticos",
          "Funcionan mejor cuando el equipo se siente seguro para hablar",
          "Sustituyen a la cultura de seguridad si se cumplen al cien por ciento"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Responder la encuesta con honestidad:",
        "opciones": [
          "Puede perjudicarte en tu evaluación de desempeño",
          "Es opcional y los resultados no se usan para nada",
          "Debe hacerse en grupo para dar una sola respuesta",
          "Ayuda a mejorar porque es anónima y no evalúa personas"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Todo el personal, clínico y no clínico.",
    "nivel": "Básico",
    "objetivos": [
      "Explicar qué es la cultura de seguridad del paciente.",
      "Conocer cómo y cada cuánto se mide.",
      "Practicar conductas que fortalecen la cultura de seguridad."
    ]
  },
  {
    "id": "nom035",
    "titulo": "NOM-035-STPS-2018: factores de riesgo psicosocial",
    "area": "Capital Humano",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Factores de riesgo psicosocial, entorno organizacional favorable, acontecimientos traumáticos severos y violencia laboral.",
    "orden": 290,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "NOM-035 · Riesgo psicosocial: video del curso",
        "duracion": "1:41 min",
        "texto": "Factores de riesgo psicosocial, entorno organizacional favorable, acontecimientos traumáticos severos y violencia laboral.",
        "video": "nom035-riesgo-psicosocial.mp4",
        "segundosMinimos": 90,
        "subtitulos": [
          [
            0,
            5.8,
            "Bienvenida al curso de la NOM-035, factores de riesgo psicosocial en el trabajo."
          ],
          [
            6.6,
            12.5,
            "Esta norma busca prevenir los factores de riesgo psicosocial y la violencia laboral y promover un entorno"
          ],
          [
            12.5,
            19.7,
            "organizacional favorable. En un hospital, la carga emocional y los turnos hacen que este tema sea especialmente importante."
          ],
          [
            20.5,
            26.6,
            "Los factores de riesgo psicosocial incluyen condiciones inseguras, cargas excesivas, falta de control,"
          ],
          [
            27,
            32.3,
            "jornadas largas, interferencia con la familia, liderazgo negativo y violencia laboral."
          ],
          [
            32.4,
            39.7,
            "Un entorno favorable promueve el sentido de pertenencia, la capacitación, responsabilidades claras, la comunicación,"
          ],
          [
            40,
            42.7,
            "cargas justas y el reconocimiento del desempeño."
          ],
          [
            43.2,
            49.5,
            "Si viviste un acontecimiento traumático severo en el trabajo, como una agresión violenta o un accidente grave,"
          ],
          [
            50.1,
            53.7,
            "repórtalo por escrito a Capital Humano para que se te canalice a atención."
          ],
          [
            54.6,
            57.3,
            "El centro de trabajo tiene una política de prevención,"
          ],
          [
            57.8,
            62.7,
            "identifica los riesgos al menos cada dos años y ofrece mecanismos de queja confidenciales."
          ],
          [
            63.2,
            67,
            "Tú cumples las medidas, respondes los cuestionarios y reportas."
          ],
          [
            67.6,
            71,
            "La Guía I identifica a quienes vivieron un evento traumático."
          ],
          [
            71.9,
            75.2,
            "Las Guías II o III evalúan los factores de riesgo."
          ],
          [
            75.5,
            77.8,
            "Responder con honestidad ayuda a mejorar."
          ],
          [
            78.5,
            84.3,
            "Los gritos, Las humillaciones, las amenazas o el aislamiento son violencia laboral."
          ],
          [
            84.8,
            91.6,
            "Repórtala por el canal de Capital Humano o a la Comisión de Seguridad e Higiene, de forma confidencial y sin represalias."
          ],
          [
            92.3,
            95.2,
            "Recuerda, un entorno sano se construye entre todos."
          ],
          [
            96.1,
            98.6,
            "Participa, respeta y reporta."
          ],
          [
            99.1,
            100.8,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación NOM-035",
            "url": "presentaciones/nom035-riesgo-psicosocial.html"
          },
          {
            "nombre": "Guía rápida NOM-035 (PDF)",
            "url": "materiales/nom035-riesgo-psicosocial-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué regula la NOM-035-STPS-2018?",
        "opciones": [
          "Los factores de riesgo psicosocial en el trabajo",
          "El manejo de residuos biológico-infecciosos",
          "Los extintores y la prevención de incendios",
          "El contenido del expediente clínico"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cuál es un factor de riesgo psicosocial?",
        "opciones": [
          "Tener vacaciones",
          "Cargas de trabajo excesivas",
          "Recibir capacitación",
          "Tener responsabilidades claras"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Es una característica del entorno organizacional favorable:",
        "opciones": [
          "Jornadas sin límite cuando hay mucho trabajo",
          "Liderazgo autoritario para mantener la disciplina",
          "Sentido de pertenencia y reconocimiento del desempeño",
          "Aislamiento de los trabajadores para evitar distracciones"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Un acontecimiento traumático severo es, por ejemplo:",
        "opciones": [
          "Un cambio de turno sin previo aviso",
          "Una junta larga al final de la jornada",
          "Una evaluación de desempeño desfavorable",
          "Una agresión violenta durante el trabajo"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si viviste un acontecimiento traumático severo en el trabajo debes:",
        "opciones": [
          "Informarlo por escrito a Capital Humano",
          "Guardarlo para ti para no causar problemas",
          "Comentarlo solo en tus redes sociales",
          "Renunciar sin informar lo que ocurrió"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Cada cuánto debe identificarse y analizarse el riesgo psicosocial, como mínimo?",
        "opciones": [
          "Cada 10 años",
          "Cada 2 años",
          "Solo una vez",
          "Cada mes"
        ],
        "correcta": 1
      },
      {
        "pregunta": "La Guía de referencia I sirve para:",
        "opciones": [
          "Evaluar el clima laboral de una sola área del centro de trabajo",
          "Calcular el salario y las prestaciones de cada trabajador",
          "Identificar a quienes vivieron un acontecimiento traumático severo",
          "Medir la productividad de cada trabajador durante el año"
        ],
        "correcta": 2
      },
      {
        "pregunta": "En centros de trabajo de más de 50 trabajadores se aplica, además de la Guía I:",
        "opciones": [
          "Ninguna otra guía ni cuestionario",
          "La Guía II solamente, sin entorno organizacional",
          "Un examen médico general a cada trabajador",
          "La Guía III, que incluye el entorno organizacional"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Cuál de estas conductas es violencia laboral?",
        "opciones": [
          "Humillar o amenazar a un compañero",
          "Dar retroalimentación respetuosa y clara",
          "Asignar tareas de acuerdo con el puesto",
          "Pedir puntualidad y registro de asistencia"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Los mecanismos para presentar quejas deben ser:",
        "opciones": [
          "Públicos con nombre",
          "Seguros y confidenciales",
          "Solo verbales con el jefe",
          "Inexistentes"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Es una obligación del trabajador:",
        "opciones": [
          "Diseñar la política de prevención del centro de trabajo",
          "Aplicar los cuestionarios a sus compañeros de área",
          "Responder los cuestionarios y reportar violencia",
          "Sancionar a los compañeros que incumplan la política"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Reportar una situación de violencia laboral:",
        "opciones": [
          "Debe evitarse para no causar problemas en el área",
          "Solo se permite a jefes y supervisores",
          "Genera represalias automáticas contra quien reporta",
          "Es confidencial y no debe generar represalias"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Todo el personal.",
    "nivel": "Básico",
    "objetivos": [
      "Identificar los factores de riesgo psicosocial y la violencia laboral.",
      "Conocer las obligaciones del centro de trabajo y de los trabajadores.",
      "Saber cómo reportar violencia laboral y acontecimientos traumáticos severos."
    ]
  },
  {
    "id": "incendios",
    "titulo": "Prevención y combate de incendios (NOM-002)",
    "area": "Seguridad e Higiene",
    "horas": 1,
    "obligatorio": true,
    "descripcion": "Clases de fuego, uso del extintor, Código Rojo, evacuación y requisitos de la NOM-002-STPS-2010.",
    "orden": 190,
    "lecciones": [
      {
        "tipo": "video",
        "titulo": "Código Rojo · Incendios: video del curso",
        "duracion": "1:36 min",
        "texto": "Clases de fuego, uso del extintor, Código Rojo, evacuación y requisitos de la NOM-002-STPS-2010.",
        "video": "prevencion-incendios.mp4",
        "segundosMinimos": 86,
        "subtitulos": [
          [
            0.8,
            4.2,
            "Bienvenida al curso de prevención y combate de incendios."
          ],
          [
            4.9,
            8.3,
            "El Código Rojo es la alerta de fuego en nuestros hospitales."
          ],
          [
            8.7,
            13.5,
            "El fuego necesita combustible, oxígeno, calor y una reacción en cadena."
          ],
          [
            14.2,
            20.9,
            "Si quitas uno, se apaga. En el hospital, el oxígeno medicinal hace que el fuego crezca más rápido."
          ],
          [
            21.7,
            28.2,
            "Hay cinco clases de fuego, A para sólidos, B para líquidos y gases inflamables, C para equipos eléctricos,"
          ],
          [
            28.5,
            31.2,
            "D para metales y K para aceites de cocina."
          ],
          [
            31.7,
            36.1,
            "El extintor de polvo químico seco sirve para fuegos A, B y C."
          ],
          [
            36.8,
            40.6,
            "El de dióxido de carbono es ideal en equipos eléctricos."
          ],
          [
            40.8,
            43.2,
            "El agua solo sirve en fuegos de clase A."
          ],
          [
            43.6,
            50.2,
            "Si descubres un fuego, sigue la regla RACE: rescata a quien esté en peligro, Alerta con el Código Rojo."
          ],
          [
            50.6,
            54.2,
            "Contén cerrando puertas y extingue solo si es pequeño y seguro."
          ],
          [
            54.6,
            58.8,
            "Para usar el extintor, jala el seguro, apunta a la base del fuego,"
          ],
          [
            59.4,
            63,
            "aprieta la palanca y barre de lado a lado con la salida a tu espalda."
          ],
          [
            63.5,
            65.3,
            "Al evacuar, sigue a la brigada."
          ],
          [
            65.7,
            70,
            "No uses elevadores. Agáchate bajo el humo y repórtate en el punto de reunión."
          ],
          [
            70.8,
            74.4,
            "Los pacientes se trasladan primero a una zona segura del mismo piso."
          ],
          [
            74.4,
            83.9,
            "La NOM-002 pide extintores visibles, señalizados y sin obstáculos, revisión mensual, mantenimiento anual y simulacros."
          ],
          [
            84.5,
            87.3,
            "Reporta cualquier extintor descargado u obstruido."
          ],
          [
            88,
            93.3,
            "Recuerda, rescata, alerta con el Código Rojo, contén y solo extingue si es seguro."
          ],
          [
            94.2,
            95.9,
            "Continúa con la evaluación del curso."
          ]
        ],
        "materiales": [
          {
            "nombre": "Presentación Incendios",
            "url": "presentaciones/prevencion-incendios.html"
          },
          {
            "nombre": "Guía rápida Incendios (PDF)",
            "url": "materiales/prevencion-incendios-guia-rapida.pdf"
          }
        ]
      }
    ],
    "evaluacion": [
      {
        "pregunta": "¿Qué código institucional corresponde a una alerta de fuego?",
        "opciones": [
          "Código Rojo",
          "Código Azul",
          "Código Negro",
          "Código Ámbar"
        ],
        "correcta": 0
      },
      {
        "pregunta": "¿Qué elementos forman el fuego?",
        "opciones": [
          "Agua, aire, tierra y luz solar",
          "Combustible, oxígeno, calor y reacción en cadena",
          "Solo calor, una chispa y material seco",
          "Humo, luz, gases calientes y ceniza"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Un fuego en un equipo eléctrico energizado es de clase:",
        "opciones": [
          "A",
          "B",
          "C",
          "K"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Un fuego de alcohol o solventes es de clase:",
        "opciones": [
          "A",
          "D",
          "K",
          "B"
        ],
        "correcta": 3
      },
      {
        "pregunta": "¿Qué extintor NO debe usarse en un fuego eléctrico?",
        "opciones": [
          "De agua",
          "De CO₂",
          "De polvo químico seco ABC",
          "Ninguno"
        ],
        "correcta": 0
      },
      {
        "pregunta": "El extintor de polvo químico seco ABC sirve para fuegos:",
        "opciones": [
          "Solo de cocina",
          "Clase A, B y C",
          "Solo de metales",
          "Solo de papel"
        ],
        "correcta": 1
      },
      {
        "pregunta": "En la secuencia RACE, la “A” significa:",
        "opciones": [
          "Apagar primero el fuego con lo que tengas a la mano",
          "Abrir ventanas para ventilar el humo del área",
          "Alertar: activar el Código Rojo y la alarma",
          "Abandonar el área sin avisar para ponerte a salvo"
        ],
        "correcta": 2
      },
      {
        "pregunta": "Al usar el extintor, el chorro se dirige a:",
        "opciones": [
          "La parte alta de las llamas",
          "El humo",
          "El techo",
          "La base del fuego"
        ],
        "correcta": 3
      },
      {
        "pregunta": "Si el fuego crece o hay humo denso:",
        "opciones": [
          "Sales y cierras la puerta",
          "Sigues intentando apagarlo",
          "Abres las ventanas",
          "Usas el elevador"
        ],
        "correcta": 0
      },
      {
        "pregunta": "Durante un incendio, los elevadores:",
        "opciones": [
          "Son la vía más rápida",
          "No deben usarse",
          "Solo los usan los pacientes",
          "Se usan si hay poco humo"
        ],
        "correcta": 1
      },
      {
        "pregunta": "Según la NOM-002, los extintores se colocan a una altura máxima de:",
        "opciones": [
          "2.50 m",
          "1 m",
          "1.50 m",
          "3 m"
        ],
        "correcta": 2
      },
      {
        "pregunta": "¿Cada cuánto se revisan los extintores según la NOM-002?",
        "opciones": [
          "Cada 5 años",
          "Solo después de usarlos",
          "Nunca",
          "Cada mes"
        ],
        "correcta": 3
      }
    ],
    "dirigido": "Todo el personal.",
    "nivel": "Básico",
    "objetivos": [
      "Reconocer las clases de fuego y el extintor adecuado para cada una.",
      "Actuar ante un fuego con la secuencia RACE y usar el extintor correctamente.",
      "Evacuar de forma segura y conocer los requisitos de la NOM-002."
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
      "aesp6",
      "aesp7",
      "aesp8",
      "precauciones-estandar",
      "trato-digno",
      "nom035"
    ],
    "orden": 1
  },
  {
    "id": "enfermeria-hospitalaria",
    "titulo": "Enfermería hospitalaria",
    "descripcion": "Procedimientos y controles que el personal de enfermería aplica en el día a día.",
    "cursos": [
      "aesp3",
      "aesp4",
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
      "incendios",
      "accidentes-incidentes",
      "mejora-continua-sst",
      "codigo-amarillo",
      "huracanes",
      "calor",
      "bombas",
      "5s",
      "nom035"
    ],
    "orden": 4
  },
  {
    "id": "atencion-prehospitalaria",
    "titulo": "Atención prehospitalaria",
    "descripcion": "Seguridad del paciente, papelería y cobranza, notas médicas, insumos y residuos para el personal de ambulancias y consultorios prehospitalarios.",
    "cursos": [
      "aesp1",
      "aesp5",
      "precauciones-estandar",
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
