# Portfolio de Robert Martí

**🌐 Web:** [robertmartib.github.io/portfolio-robert](https://robertmartib.github.io/portfolio-robert/)

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=githubpages&logoColor=white)

Mi web personal como **técnico de sistemas**: experiencia, proyectos (como [linux-admin-toolkit](https://github.com/RobertMartiB/linux-admin-toolkit) y Fast Fuel), tecnologías, un pequeño blog técnico y un formulario de contacto.

## Tecnologías

- **Next.js 16** (App Router) con exportación estática.
- **React 19** y **TypeScript**.
- **Tailwind CSS** para el diseño y **Framer Motion** para las animaciones.
- Iconos de tecnologías desde [Simple Icons](https://simpleicons.org/).

## Despliegue automático

Cada `push` a `main` lanza un flujo de **GitHub Actions** (`.github/workflows/deploy.yml`) que construye la web y la publica en **GitHub Pages**. No hay servidor que mantener.

## Estructura

| Ruta | Qué contiene |
| --- | --- |
| `app/data/portfolio.ts` | Todo el contenido: presentación, experiencia, proyectos, tecnologías y contacto |
| `app/components/` | Secciones de la web (Hero, Experiencia, Proyectos, Tecnologías, Contacto…) |
| `content/blog/` | Entradas del blog en Markdown |
| `public/` | Imágenes |

## Ejecutar en local

```bash
git clone https://github.com/RobertMartiB/portfolio-robert.git
cd portfolio-robert
npm install
npm run dev
```

La web queda en http://localhost:3000/portfolio-robert

## Contacto

[LinkedIn](https://www.linkedin.com/in/robert-marti-badia-119710235/) · [GitHub](https://github.com/RobertMartiB) · martibadiarobert@gmail.com
