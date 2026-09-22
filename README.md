# El Cabezón — sitio web

Sitio de **El Cabezón**, el transporte del tío de Federico (familia materna).
El nombre homenajea a un tío fallecido. Proyecto hermano de El Lucero del Sur,
con la misma arquitectura de diseño pero identidad propia: los colores rojo, blanco y verde del auto con el que los tíos corrían en el TC.

**Estado: prototipo** publicado en GitHub Pages para revisarlo en familia.
Cuando se apruebe, se define dominio y hosting (¿Ferozo, como Lucero?) y ahí
se puede sumar formulario de presupuesto en PHP como el de Lucero.

## Servicios que muestra

1. **Escenario rodante** sobre semirremolque, en alquiler para eventos.
2. **Camiones trompo** para traslado de hormigón elaborado.
3. **Semirremolques** para carga general.

## Pendientes (preguntar al tío)

- [x] WhatsApp/teléfono: +54 9 11 5838-2354 (cargado con enlace directo y botón flotante).
- [x] Zona: llegamos a todo el país (cargado).
- [x] Mail: jdromero78@hotmail.com (cargado). Redes: pendiente.
- [ ] Nombre formal de la empresa (¿"El Cabezón" a secas? ¿S.A./S.R.L.?).
- [ ] La historia del Cabezón para la sección "quiénes somos" (si quiere).
- [ ] Datos duros: años de trayectoria, cantidad de unidades (hoy no se
      afirma ninguno para no inventar).
- [ ] Más fotos: del escenario armándose, de los semis de carga general.
- [ ] Logo (hoy la marca es tipográfica).

## Estructura

- `index.html` — one-page con anclas: #escenario, #hormigon, #cargas, #contacto.
- `css/estilos.css` — sistema de diseño (base Lucero, paleta TC: rojo/blanco/verde sobre carbón).
- `js/sitio.js` — menú móvil, cabecera sólida, aparición al scrollear.
- `imag/` — fotos procesadas: recortadas y con patentes pixeladas (Pillow).
  Las originales están en `Desktop\Fede\Cabezón`.

## Publicación

### Landing del escenario

`alquiler-escenario.html` es la página específica para campañas y consultas de
alquiler. Está enlazada desde la portada, el menú y la sección del escenario.
Comparte `css/estilos.css` y agrega `css/escenario.css` y `js/escenario.js`.
El formulario prepara un mensaje de WhatsApp; el visitante revisa y envía.

Condiciones informadas por Federico el 21/09/2026:

- Cobertura nacional con camiones; viaje a cotizar según destino.
- Ejemplo CABA: $1.000.000 total si el servicio termina en el día.
- Si el camión queda después de las 00:00 se suma estadía, en promedio
  $800.000 por día. Ejemplo CABA + un día de estadía: $1.800.000.
- Los valores se presentan como orientativos en pesos argentinos;
  disponibilidad, importe final y condiciones se confirman al cotizar.

Datos adicionales confirmados por Federico:

- El alquiler incluye únicamente el escenario; no incluye sonido ni iluminación.
- Montaje aproximado de dos horas mediante el sistema hidráulico del camión.
- Los 14 metros mencionados son una referencia del semirremolque, no una medida
  confirmada de la superficie útil. No publicarlos como dimensiones del escenario.

Pendientes para completar la ficha comercial: frente y profundidad útil del
escenario desplegado, altura libre bajo techo, requisitos de acceso, impuestos y
condiciones de reserva. No se afirman prestaciones ni medidas sin confirmar.

Vista previa local: `python -m http.server 8765 --bind 127.0.0.1` desde este
directorio y abrir `http://127.0.0.1:8765/alquiler-escenario.html`.

GitHub Pages desde la rama `main`. Para publicar cambios: commit + push.
