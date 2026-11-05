# Matangazo — primera versión comercial

Web independiente de WordPress, centrada en servicios y cotización. Incluye portada, seis páginas de servicios y consulta por WhatsApp. No contiene directorio ni conexión con la instalación de matangazo.mx.

## Abrir y editar

Requiere Node.js. No necesita instalar paquetes.

1. Ejecutar `npm run dev` desde esta carpeta.
2. Abrir `http://127.0.0.1:4173/`.
3. Editar contenido en `scripts/generate.mjs`, estilos en `dist/styles.css` y comportamiento en `dist/app.js`.
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
