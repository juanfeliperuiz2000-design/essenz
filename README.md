# Rediseño web Essenz

Sitio estático y responsive en HTML, CSS y JavaScript vanilla. El rediseño vive en `site/`; las páginas y los archivos originales del repositorio permanecen en la raíz para que este trabajo pueda revisarse en una rama y un pull request antes de cualquier reemplazo.

## Estructura

```text
site/
├── index.html          Inicio
├── productos.html      Colección y filtros por material
├── galeria.html        Ambientes y visor de imágenes
├── empresa.html        Esencia de marca
├── contacto.html       Canales y consulta por correo
├── pagos.html          Cómo comprar (ruta heredada, sin pagos)
├── robots.txt
└── assets/
    ├── brand/           Logotipo y favicon
    ├── css/styles.css   Sistema visual responsive
    ├── js/main.js       Menú, filtros, galería y consulta
    └── images/          Fotografías de productos y ambientes
netlify.toml            Publica únicamente site/
preview/
├── desktop.png         Captura de la portada a 1440 px
└── mobile.png          Captura de la portada a 390 px
```

## Vista local

Abre `site/index.html` o sirve la carpeta `site/` con un servidor estático. No hay compilación ni dependencias JavaScript. Las fuentes se cargan de Google Fonts; si no están disponibles, se usan fuentes del sistema.

Las capturas de `preview/` permiten revisar la portada sin iniciar el servidor. El diseño editable está en [Figma](https://www.figma.com/design/k6DB5bsBMbKd4JUasTwJvW/Essenz-Redise%C3%B1o-web-2026).

## Contenido y fuentes

- Modelos, materiales y formato de cada pieza: `Catalogo-Essenz-Coleccion-2026.pdf`, entregado previamente por el proyecto.
- Fotografías: carpetas `essenz-productos-mejorados/` y `essenz-productos-en-salas/` del mismo trabajo de catálogo.
- Identidad: `essenz-identidad-renovada/01-web/` y `essenz-identidad-renovada/02-redes/`.
- Dirección visual: propuesta editorial creada con 12ui-design y trasladada a mockups editables de Figma.
- El correo, teléfono y ciudad de contacto provienen de `contacto.html` del repositorio original. **Confirmar que siguen vigentes antes de publicar.**

El sitio no muestra precios ni acepta pagos. La página heredada `pagos.html` explica el proceso de consulta. El formulario abre la aplicación de correo del visitante con el mensaje preparado; no envía información a un servidor.

## SEO y publicación

Cada página incluye título, descripción, encabezados semánticos, texto alternativo e interconexión interna. Cuando se defina el dominio definitivo, añadir URL canónica, metadatos sociales con URL absoluta y un sitemap con ese dominio. `netlify.toml` apunta a `site/`; no se ha creado ni publicado un sitio de producción en Netlify.
