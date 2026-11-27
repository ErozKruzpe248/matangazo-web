# Matangazo — web de servicios

Web independiente de WordPress, centrada en servicios y cotización. Incluye portada, seis páginas de servicios y consulta por WhatsApp. No contiene directorio ni conexión con la instalación de matangazo.mx.

## GitHub Pages

Repositorio en https://github.com/ErozKruzpe248/matangazo-web y web en https://erozkruzpe248.github.io/matangazo-web/.

Cada envío a `main` ejecuta `.github/workflows/pages.yml`, genera las siete páginas, verifica enlaces y recursos, y publica `dist` en GitHub Pages. El flujo obtiene `BASE_PATH` y `SITE_URL` del alojamiento para resolver imágenes, navegación, contacto y metadatos. También se puede iniciar desde Actions.

El repositorio conserva el historial de la web y los ajustes de animaciones, numeración y asteriscos.

## Cambios de esta versión

Los seis servicios de la portada tienen tarjetas del mismo nivel visual y demostraciones propias. Identidad de marca muestra una composición de aplicaciones reales de Matangazo; SEO representa una búsqueda ilustrativa; Google Ads presenta un anuncio de ejemplo; automatización muestra un flujo de contacto, organización y seguimiento.

Los ejemplos no representan posiciones reales en buscadores, campañas publicitarias activas ni un flujo conectado a herramientas externas. Cada tarjeta enlaza a su servicio. Las animaciones se repiten al volver a pasar el cursor, al enfocar la muestra con teclado o al tocarla en celular.

Se conservan el recorrido web, las publicaciones por capas, el comparador de identidad y las demás piezas de la versión anterior. Las animaciones se activan al entrar en pantalla, se pausan fuera de vista y respetan movimiento reducido. No se añadieron videos, fuentes externas ni bibliotecas.

La paleta permanece en azul #1427DF y rojo #E20613, blanco como base y amarillo #EABE12 como acento. Las reglas están en `AGENTS.md`.

El selector orienta a diseño web, Google Ads o identidad de marca. El enlace del servicio conserva esa selección al abrir la cotización. En contacto, el botón flotante se oculta para no tapar el formulario en móvil.

## Abrir y editar

Requiere Node.js. No necesita instalar paquetes.

1. Ejecutar `npm run build` y después `npm run dev` desde esta carpeta.
2. Abrir `http://127.0.0.1:4173/`.
3. Editar contenido general en `scripts/generate.mjs`, portada y selector en `scripts/hero.mjs`, demostraciones en `scripts/motion.mjs`, tarjetas 3 a 6 en `scripts/service-cards.mjs`, estilos base en `dist/styles.css`, dirección editorial en `dist/direction.css`, demostraciones en `dist/motion.css`, tarjetas 3 a 6 en `dist/service-cards.css` y comportamiento en `dist/app.js`.
4. Después de cambiar contenido, ejecutar `node scripts/generate.mjs`.
5. Ejecutar `npm run check` y `node --check dist/app.js`.

La carpeta `dist` contiene el sitio estático. El servidor local muestra la dirección correspondiente a la compilación. `BASE_PATH` permite publicar en una subcarpeta, y `SITE_URL` define la dirección usada en los metadatos. El flujo de GitHub Pages configura ambos valores automáticamente.

## Contacto

El formulario valida nombre, negocio y servicio. Prepara un mensaje para revisión y después permite abrir WhatsApp. No guarda contactos ni envía mensajes por sí mismo. El número se tomó de la web existente: +52 81 1596 3472.

## Base del contenido y diseño

- Sitio actual: https://matangazo.mx/
- Diseño web: https://matangazo.mx/diseno-de-pagina-web-de-ventas-en-monterrey/
- Redes sociales: https://matangazo.mx/diseno-de-redes-sociales-en-monterrey/
- Identidad y aplicaciones: presentación y logos proporcionados por el usuario.
- Los proyectos FiscalNet, Mr Ruta y Fleteando México están identificados en la página actual. Se muestran descripciones breves sin inventar testimonios, métricas, capturas o resultados.
- El alcance de Community Manager conserva los seis puntos de la página anterior de Redes Sociales. Los alcances de los demás servicios siguen disponibles para revisión comercial.

## Pendientes para el lanzamiento comercial

- Revisar alcances y prioridades de los seis servicios.
- Los precios aprobados el 27 de noviembre de 2026 están centralizados en `scripts/commercial.mjs`. Las condiciones de autorización están en `AGENTS.md` y se verifican con `npm run check`.
- Elegir el dominio definitivo y cambiar metadatos de URL al conectarlo.
- Revisar el aviso de privacidad para el nuevo dominio. Por ahora los enlaces llevan al aviso existente de Matangazo.
- Validar los proyectos que se desean destacar y añadir material de portafolio autorizado.
- Activar medición de conversiones si se requiere. Esta versión no incorpora analítica.
- La versión de revisión tiene `robots.txt` que solicita no rastrear el contenido. Cambiarlo y añadir sitemap al preparar el lanzamiento público.

El alojamiento de revisión de Sites es privado. No se cambiaron el dominio, DNS ni el WordPress actuales.

## Verificación de rendimiento

El criterio acordado es al menos 90 en rendimiento móvil y escritorio. La revisión privada impide que Google PageSpeed evalúe el contenido sin autenticación. Por ello se audita el contenido real en el servidor local con Lighthouse y sus perfiles estándar, sin saltarse la autenticación ni abrir el sitio al público.

Los resultados locales no incluyen latencia ni procesamiento del alojamiento de producción. La prueba pública de PageSpeed debe realizarse al disponer de una dirección pública autorizada. No se debe presentar una auditoría de la pantalla de acceso como si fuera la auditoría del sitio.

La exclusión de rastreo en `robots.txt` reduce intencionalmente la categoría SEO del informe de revisión. Debe revisarse junto con el dominio, sitemap y condiciones del lanzamiento público; no se retiró para subir artificialmente una puntuación.

## Fuentes del material visual de la versión 5

- Presentación original de Matangazo: página 2 para la evolución de identidad y página 9 para el vehículo, termo y aplicaciones de marca. Se conservaron los diseños originales; se optimizaron archivos para su uso web.
- Los logotipos de FiscalNet, Mr Ruta y Fleteando México proceden de las imágenes que acompañan esos proyectos en la portada de matangazo.mx. Se muestran como identificación de esos negocios, no como capturas de una web o aplicación desarrollada.
- https://matangazo.mx/wp-content/uploads/2026/08/matangazo-marketing-web-fiscalnet.webp
- https://matangazo.mx/wp-content/uploads/2026/08/mr-ruta-marketing-digital-matangazo.webp
- https://matangazo.mx/wp-content/uploads/2026/08/cliente-ejemplo-fleteando-mexico.webp
- Las pantallas y publicaciones de demostración están identificadas como muestras de Matangazo. No contienen precios, resultados ni testimonios nuevos.
