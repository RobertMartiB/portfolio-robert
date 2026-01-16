# Portfolio Robert Martí

Este repositorio contiene el código fuente del portafolio personal de **Robert Martí**. Es una aplicación web moderna, optimizada y diseñada para mostrar experiencia profesional, proyectos y habilidades técnicas.

![Robert Martí Portfolio](public/og-image.jpg) 
<!-- Nota: Si tienes una imagen de vista previa, colócala en public/ y actualiza la ruta, o usa una URL externa -->

## 🚀 Tecnologías

El proyecto está construido con las tecnologías más recientes del ecosistema web:

*   **[Next.js 16](https://nextjs.org/)** (App Router & Turbopack) - Framework de React para producción.
*   **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuario.
*   **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para un código robusto.
*   **[Tailwind CSS](https://tailwindcss.com/)** - Framework de utilidades para el diseño.
*   **[Framer Motion](https://www.framer.com/motion/)** - Animaciones fluidas.
*   **[Simple Icons](https://simpleicons.org/)** - Iconos de marcas y tecnologías.

## ✨ Características Principales

*   **🎨 Diseño Glassmorphism**: Estética moderna con efectos de desenfoque y transparencias (ver `app/components/Contact.tsx`).
*   **📱 Diseño Responsivo**: Adaptado perfectamente a móviles, tablets y escritorio.
*   **🔍 SEO Optimizado**:
    *   Metadatos completos (OpenGraph, Twitter Cards).
    *   Datos estructurados JSON-LD (`Person` Schema).
    *   Mapa del sitio (`sitemap.xml`) y `robots.txt` generados automáticamente.
*   **⚡ Static Export**: Configurado para exportación estática (`output: 'export'`), ideal para alojar en cualquier servidor estático o CDN.
*   **✉️ Formulario de Contacto Funcional**: Integrado con endpoint personalizado para recepción de mensajes.

## 🛠️ Instalación y Uso

Asegúrate de tener [Node.js](https://nodejs.org/) instalado.

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/CrushedDEV/portfolio-robert.git
    cd portfolio-robert
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    # o
    pnpm install
    ```

3.  **Iniciar servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Construcción para Producción

Este proyecto está configurado para generar una **exportación estática**.

```bash
npm run build
```

Esto generará una carpeta `out/` con los archivos HTML/CSS/JS listos para desplegar.

> **Nota sobre Imágenes**: Al usar `output: 'export'`, el componente `<Image>` de Next.js está configurado como `unoptimized: true` en `next.config.ts` a menos que se configure un cargador externo.

## 📂 Personalización

Todo el contenido del portafolio se gestiona centralizadamente. Para actualizar tu información, edita el siguiente archivo:

📄 **`app/data/portfolio.ts`**

Aquí puedes modificar:
*   Información personal (Nombre, rol, descripción).
*   Experiencia laboral.
*   Proyectos.
*   Tecnologías y sus iconos.
*   Enlaces a redes sociales.

### Iconos
Para añadir nuevos iconos de tecnologías, busca el "slug" correcto en [Simple Icons](https://simpleicons.org/) y añádelo a la lista en `portfolio.ts`.

## 📄 Licencia

Este proyecto es de uso personal para el portafolio de Robert Martí.
