# CCE 2.0 · Guía de instalación

La plataforma tiene dos partes:

| Parte | Dónde vive | Qué hace |
|---|---|---|
| `index.html` + `assets/` | GitHub Pages (capacitacion.rhinobuild.org) | Solo muestra información. No guarda respuestas, calificaciones ni firmas. |
| `apps-script/` | Google Apps Script + Google Sheets | Valida el acceso, guarda el avance, califica, emite y verifica constancias. |

## 1. Backend (Apps Script)

1. Abre el proyecto de Apps Script que hoy responde a la URL de la plataforma.
2. Reemplaza el contenido de `Code.gs` por el de `apps-script/Code.gs`.
3. Crea un archivo nuevo llamado `Catalogo.gs` y pega `apps-script/Catalogo.gs`.
4. En **Configuración del proyecto**, activa "Mostrar el archivo de manifiesto appsscript.json" y reemplázalo por `apps-script/appsscript.json`.
5. En el editor, elige la función `setup` y presiona **Ejecutar**. Autoriza los permisos.
   - Si el script está vinculado a una hoja, agrega ahí las pestañas y columnas que falten (no borra datos).
   - Si el script es independiente, crea una hoja nueva "CCE 2.0 · Base de datos"; el enlace aparece en el registro de ejecución.
6. Publica una nueva versión **sin cambiar la URL**: Implementar → Gestionar implementaciones → editar (lápiz) → Versión: *Nueva versión* → Implementar.
   - Ejecutar como: **Yo**. Quién tiene acceso: **Cualquier usuario**.
   - Si creas una implementación nueva, cambia `API_URL` al inicio del script en `index.html`.

## 2. Firmas de la constancia

Las firmas ya no están en el repositorio público. Se leen desde Google Drive solo cuando se entrega una constancia válida.

1. Sube los dos PNG de firma (carpeta `para-drive/` del paquete) a una carpeta privada de Drive de la misma cuenta que publica el script.
2. Copia el ID de cada archivo (la parte de la URL entre `/d/` y `/view`).
3. Pégalos en la hoja **CONFIGURACION**: `FIRMANTE_1_FIRMA_ID` y `FIRMANTE_2_FIRMA_ID`.

Importante: las firmas siguen existiendo en el historial de Git del repositorio público. Si eso es un riesgo, conviene publicar el sitio desde un repositorio nuevo sin ese historial.

## 3. Colaboradores (hoja USUARIOS)

| Columna | Uso |
|---|---|
| NUMERO_EMPLEADO | Obligatorio, único. |
| NOMBRE, EMPRESA, AREA, PUESTO | Datos que aparecen en el expediente y la constancia. AREA define cursos asignados por área. |
| ROL | `COLABORADOR` o `ADMIN`. |
| ACTIVO | `SI` / `NO`. |
| PIN_INICIAL | PIN temporal para el primer ingreso. Se borra solo cuando el colaborador crea su PIN personal. |
| PIN_HASH, PIN_SALT, DEBE_CAMBIAR_PIN | Los llena el sistema. No editar. |

Para un PIN olvidado: Administración → Personal → colaborador → **Generar PIN temporal**, o en la hoja el menú **CCE 2.0 → Generar PIN temporal**.

## 4. Cursos y asignaciones

- **CURSOS**: un curso por fila. `LECCIONES_JSON` y `EVALUACION_JSON` guardan el contenido; las respuestas correctas nunca salen al navegador. `EMPRESAS` (opcional, separadas por coma) limita el curso a ciertas empresas; vacío = todas.
- Se asignan solos: los cursos con `OBLIGATORIO = SI` y los del área del colaborador (`ASIGNAR_POR_AREA`).
- **ASIGNACIONES**: asignaciones adicionales con fecha límite, también desde Administración → Asignar curso. `TIPO` puede ser `EMPLEADO`, `AREA`, `PUESTO`, `EMPRESA` o `TODOS`.
- Para cargar contenido nuevo desde `Catalogo.gs` sin perder avances: menú **CCE 2.0 → Actualizar catálogo**.

## 5. Configuración (hoja CONFIGURACION)

`CALIFICACION_MINIMA` (80), `INTENTOS_EVALUACION_DIA` (3), `INTENTOS_LOGIN` (5), `BLOQUEO_MINUTOS` (15), `SESION_HORAS` (6), `VIGENCIA_MESES_CONSTANCIA` (12, 0 = sin vencimiento), nombres y cargos de los firmantes y `URL_PLATAFORMA` para el QR.

## 6. Prueba rápida después de instalar

1. Da de alta tu número con `ROL = ADMIN` y un `PIN_INICIAL`.
2. Ingresa: te pedirá crear tu PIN personal.
3. Completa un curso, aprueba la evaluación y abre la constancia.
4. Escanea el QR con el teléfono: debe mostrar "Constancia válida".
5. En Administración revisa que aparezcas en Personal y que el reporte se descargue.
