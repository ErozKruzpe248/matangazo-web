# Matangazo — versión comercial 5

Web independiente de WordPress, centrada en servicios y cotización. Incluye portada, seis páginas de servicios y consulta por WhatsApp. No contiene directorio ni conexión con la instalación de matangazo.mx.

## Cambios de esta versión

Se mantiene la paleta original de Matangazo y se incorporan demostraciones de diseño: un recorrido de web en una pantalla y un teléfono, una composición de publicaciones por capas, más aplicaciones de marca y los logotipos reales de los tres proyectos ya mencionados.

El comparador muestra la evolución real de la identidad de Matangazo entre 2017 y 2026. Usa la lámina original de la presentación y recortes de visualización en SVG, con control deslizante, teclado y botones para cada versión. No representa un caso de cliente.

Las animaciones nuevas se reproducen una sola vez al entrar en pantalla y duran como máximo 4.2 segundos. Se pausan fuera de vista y pueden repetirse con un botón. La muestra principal conserva su pausa y controles manuales. Se respeta movimiento reducido. No se añadieron videos, bibliotecas de animación ni fuentes externas.

Las reglas permanentes de marca están documentadas en `AGENTS.md`: azul #1427DF, rojo #E20613, base blanca y amarillo cálido #EABE12 como acento minoritario.

El selector orienta a diseño web, Google Ads o identidad de marca. El enlace del servicio conserva esa selección al abrir la cotización. En contacto, el botón flotante se oculta para no tapar el formulario en móvil.

## Abrir y editar

Requiere Node.js. No necesita instalar paquetes.

1. Ejecutar `npm run dev` desde esta carpeta.
2. Abrir `http://127.0.0.1:4173/`.
3. Editar contenido general en `scripts/generate.mjs`, portada y selector en `scripts/hero.mjs`, demostraciones en `scripts/motion.mjs`, estilos base en `dist/styles.css`, dirección editorial en `dist/direction.css`, demostraciones en `dist/motion.css` y comportamiento en `dist/app.js`.
4. Después de cambiar contenido, ejecutar `node scripts/generate.mjs`.
5. Ejecutar `npm run check` y `node --check dist/app.js`.

La carpeta `dist` es el sitio listo para un servidor estático. Sus rutas requieren servir esa carpeta como raíz, no abrir directamente el HTML desde el explorador de archivos.

## Contacto

El formulario valida nombre, negocio y servicio. Prepara un mensaje para revisión y después permite abrir WhatsApp. No guarda contactos ni envía mensajes por sí mismo. El número se tomó de la web existente: +52 81 1596 3472.

## Base del contenido y diseño

- Sitio actual: https://matangazo.mx/
- Diseño web: https://matangazo.mx/diseno-de-pagina-web-de-ventas-en-monterrey/
- Redes sociales: https://matangazo.mx/diseno-de-redes-sociales-en-monterrey/
- Identidad y aplicaciones: presentación y logos proporcionados por el usuario.
- Los proyectos FiscalNet, Mr Ruta y Fleteando México están identificados en la página actual. Se muestran descripciones breves sin inventar testimonios, métricas, capturas o resultados.
- Los alcances propuestos de servicios son una base editorial para revisar, especialmente SEO, Google Ads y automatización, que tienen menos detalle en la web de origen.

## Pendientes para el lanzamiento comercial

- Revisar alcances y prioridades de los seis servicios.
- Definir precios y periodicidad. El sitio actual muestra $3,500 anuales en el inicio y como pago único en la página de diseño web; por eso esta versión usa cotización.
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
