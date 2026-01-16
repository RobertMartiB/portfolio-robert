# Portfolio Robert Martí

Este repositorio contiene el código fuente del portafolio personal de **Robert Martí**. Es una aplicación web moderna diseñada para mostrar experiencia profesional, proyectos y habilidades técnicas.

## Tecnologías

El proyecto está construido con las siguientes tecnologías:

*   **Next.js 16** (App Router & Turbopack): Framework principal.
*   **React 19**: Biblioteca de interfaz de usuario.
*   **TypeScript**: Lenguaje de programación.
*   **Tailwind CSS**: Estilizado y diseño responsivo.
*   **Framer Motion**: Animaciones.

## Instalación y Ejecución

Para ejecutar el proyecto en su entorno local, siga estos pasos:

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/CrushedDEV/portfolio-robert.git
    cd portfolio-robert
    ```

2.  **Instalar dependencias**:
    Utilice npm o pnpm para instalar las librerías necesarias.
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:3000`.

## Guía de Configuración y Personalización

Toda la información del portafolio está centralizada para facilitar su edición. A continuación se detalla cómo modificar cada sección.

### 1. Información Personal, Experiencia y Proyectos

El archivo principal de configuración es:
**`app/data/portfolio.ts`**

En este archivo encontrará un objeto constante llamado `portfolioData`. Modifique los valores dentro de este objeto para actualizar el contenido de la web.

*   **Perfil (hero)**: Secciones `name`, `role`, `description`.
*   **Experiencia**: Array `experience`. Cada objeto representa un puesto laboral.
*   **Proyectos**: Array `projects`. Incluye título, descripción, tecnologías usadas y enlaces (GitHub/Demo).
*   **Redes Sociales**: Array `socials`. Define los enlaces a LinkedIn, GitHub, Email, etc.

### 2. Tecnologías e Iconos

Para modificar la sección de "Tecnologías" en `app/data/portfolio.ts`:

Las tecnologías se definen en el array `technologies` dentro del mismo archivo. Cada item tiene un campo `icon`.

*   **Iconos Externos**: El proyecto utiliza **Simple Icons**. Para añadir un nuevo icono, busque el "slug" (identificador) correcto en [Simple Icons](https://simpleicons.org/) y asígnelo al campo `icon`.

### 3. Formulario de Contacto

El formulario de contacto se encuentra en:
**`app/components/Contact.tsx`**

Este formulario utiliza un servicio externo. Para configurar su propio destino:

1.  Abra el archivo `app/components/Contact.tsx`.
2.  Busque la etiqueta `<form>` y modifique el atributo `action` con la URL de su servicio (ej. Formspree, SimpleForms).

### 4. SEO y Metadatos

*   **Metadatos Globales**: Edite `app/layout.tsx` (título, descripción).
*   **Datos Estructurados**: Edite `app/page.tsx` (JSON-LD Schema).
*   **Sitemap/Robots**: Edite `app/sitemap.ts` y `app/robots.ts`.

### 5. Gestión del Blog

El blog funciona mediante archivos **Markdown**.

Para añadir una nueva entrada:
1.  Cree un archivo `.md` en la carpeta **`content/blog/`**.
2.  El nombre del archivo será la URL del post (ej. `mi-primer-post.md` -> `/blog/mi-primer-post`).
3.  Incluya el siguiente formato (frontmatter) al inicio del archivo:

```markdown
---
title: "Título de la Entrada"
date: "2024-03-20"
excerpt: "Breve descripción que aparecerá en la lista del blog."
---

Aquí empieza el contenido de tu post en Markdown...
Puedes usar **negritas**, listas, etc.
```

## Despliegue Automático (GitHub Pages)

Este proyecto cuenta con un flujo de trabajo automatizado para desplegarse en **GitHub Pages**.

**Pasos para desplegar:**

1.  **Subir cambios**: Simplemente haga un `commit` y un `push` a la rama `main` de su repositorio.
    ```bash
    git add .
    git commit -m "Actualizar portafolio"
    git push origin main
    ```

2.  **Proceso Automático**: GitHub Actions detectará el cambio, construirá el proyecto y lo desplegará automáticamente.

3.  **Configuración Inicial (Solo una vez)**:
    *   Vaya a la pestaña **Settings** de su repositorio en GitHub.
    *   Entre en la sección **Pages** (menú lateral izquierdo).
    *   En "Build and deployment", asegúrese de que **Source** esté en **GitHub Actions**.

No es necesario configurar nada más. El archivo `.github/workflows/nextjs.yml` se encarga de todo.
