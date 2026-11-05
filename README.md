# Matangazo — versión comercial 2

Web independiente de WordPress, centrada en servicios y cotización. Incluye portada, seis páginas de servicios y consulta por WhatsApp. No contiene directorio ni conexión con la instalación de matangazo.mx.

## Cambios de esta versión

Portada con fondos claros y azul y rojo como acentos; combinación de superficies lavanda, coral y verde; tarjetas de servicios y proyectos con más variedad. Se añadieron un selector de necesidades, respuestas visuales a botones y enlaces, movimiento leve de una etiqueta y entradas discretas de secciones al recorrer la página.

Las interacciones usan JavaScript y CSS nativos. No se añadieron bibliotecas de animación, video automático, fuentes externas ni escenas 3D. El contenido y el contacto se muestran desde el inicio. Se respeta la preferencia de movimiento reducido.

El selector orienta a diseño web, Google Ads o identidad de marca. El enlace del servicio conserva esa selección al abrir la cotización. En contacto, el botón flotante se oculta para no tapar el formulario en móvil.

## Abrir y editar

Requiere Node.js. No necesita instalar paquetes.

1. Ejecutar `npm run dev` desde esta carpeta.
2. Abrir `http://127.0.0.1:4173/`.
3. Editar contenido general en `scripts/generate.mjs`, portada y selector en `scripts/hero.mjs`, estilos en `dist/styles.css` y comportamiento en `dist/app.js`.
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
