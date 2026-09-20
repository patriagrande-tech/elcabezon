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

GitHub Pages desde la rama `main`. Para publicar cambios: commit + push.
