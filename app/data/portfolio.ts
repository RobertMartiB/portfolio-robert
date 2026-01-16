

/**
 * =========================================================================================
 *  ARCHIVO DE CONFIGURACIÓN DEL PORTAFOLIO
 * =========================================================================================
 * 
 *  Este archivo contiene todo el texto y la información editable de tu portafolio.
 *  Puedes cambiar el texto entre comillas para actualizar tu sitio web.
 *  
 *  EJEMPLO:
 *  name: "Juan", -> name: "Pedro",
 * 
 *  ¡No necesitas tocar el código de los otros archivos!
 */

export const portfolioData = {
    // =========================================================================================
    //  INFORMACIÓN PERSONAL
    // =========================================================================================
    personal: {
        name: "Robert",           // Tu nombre
        surname: "Martí",      // Tu apellido
        title: "Hola, soy",         // Texto pequeño encima del nombre
        location: "Granollers,España", // Tu ubicación
        // Tu biografía corta
        bio: "Técnico en ASIR y desarrollador de Granollers, España. Me gusta crear y gestionar proyectos en internet, desde webs hasta aplicaciones y servicios."
    },

    // =========================================================================================
    //  REDES SOCIALES
    // =========================================================================================
    /*
     *  Lista de tus redes sociales que aparecen abajo a la derecha.
     *  
     *  OPCIONES DE ICONOS DISPONIBLES (Copia y pega el nombre exacto en 'icon'):
     *  - Github
     *  - Linkedin
     *  - Twitter
     *  - Mail      (Email)
     *  - Instagram
     *  - Facebook
     *  - Youtube
     *  - Twitch
     *  - Dribbble
     *  - Globe     (Para sitio web personal)
     *  - FileText  (Para CV o Resume)
     */
    socials: [
        {
            label: 'Instagram',
            href: 'https://github.com',
            icon: 'Instagram'
        },
        {
            label: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: 'Linkedin'
        },
        {
            label: 'Twitter',
            href: 'https://twitter.com',
            icon: 'Twitter'
        },
        {
            label: 'Email',
            href: 'mailto:contacto@ejemplo.com',
            icon: 'Mail'
        },
    ],

    // =========================================================================================
    //  EXPERIENCIA
    // =========================================================================================
    /*
     *  Tu historial laboral. Añade bloques nuevos copiando y pegando desde '{' hasta '},'.
     */
    experience: [
        {
            company: '[Empresa Actual]',
            role: 'Desarrollador de Software',
            period: 'Jun 2021 - Presente',
            location: '[Ubicación]',
            description: [
                'Desarrollo de pantallas y componentes de UI para la aplicación web usando React y Tailwind.',
                'Corrección de problemas de UI e integración de APIs backend.'
            ]
        },
        {
            company: '[Empresa Anterior]',
            role: 'Desarrollador Frontend',
            period: 'Ene 2020 - May 2021',
            location: 'Remoto',
            description: [
                'Construcción de interfaces web responsivas.',
                'Colaboración con el equipo de diseño para implementar UIs pixel-perfect.'
            ]
        },
    ],

    // =========================================================================================
    //  PROYECTOS
    // =========================================================================================
    /*
     *  Tus proyectos destacados. 
     *  'tags' son las etiquetas pequeñas (ej. React, Tailwind).
     *  'links' son los enlaces a GitHub o a la Demo.
     */
    projects: [
        {
            title: 'Configuración de Firewall',
            description: 'Una solución moderna de comercio electrónico construida con Next.js e integración con Stripe.',
            tags: ['Next.js', 'Stripe', 'Tailwind'],
            links: {
                // [NUEVO] Puedes añadir un enlace al post del blog así:
                caseStudy: '/blog/configuracion-firewall-linux'
            },
            image: 'https://placehold.co/600x400/1a1a1a/white.png?text=Firewall', // [NUEVO] Imagen de portada (800x400 aprox)
            featured: true
        },
        {
            title: 'App de Gestión de Tareas',
            description: 'Herramienta de productividad para equipos con actualizaciones en tiempo real.',
            tags: ['React', 'Firebase', 'Redux'],
            links: { github: '#', demo: '#' },
            image: 'https://placehold.co/600x400/1a1a1a/white.png?text=Task+App',
            featured: true
        },
        {
            title: 'Portfolio V1',
            description: 'Iteración anterior de mi portafolio personal.',
            tags: ['HTML', 'SCSS', 'JS'],
            links: { github: '#', demo: '#' },
            image: 'https://placehold.co/600x400/1a1a1a/white.png?text=Portfolio+V1',
            featured: true
        },
                {
            title: 'Portfolio V1',
            description: 'Iteración anterior de mi portafolio personal.',
            tags: ['HTML', 'SCSS', 'JS'],
            links: { github: '#', demo: '#' },
            image: 'https://placehold.co/600x400/1a1a1a/white.png?text=Portfolio+V1',
            featured: false
        }
    ],

    // =========================================================================================
    //  TECNOLOGÍAS
    // =========================================================================================
    /*
     *  Las tecnologías que usas.
     */
    technologies: [
        {
            category: "Sistemas",
            items: [
                { name: "Linux", icon: "linux" },
                { name: "Windows Server", icon: "windows" },
                { name: "Ubuntu", icon: "ubuntu" },
                { name: "Debian", icon: "debian" }
            ]
        },
        {
            category: "Redes & Cloud",
            items: [
                { name: "Cisco", icon: "cisco" },
                { name: "AWS", icon: "amazonaws" },
                { name: "Azure", icon: "microsoftazure" },
                { name: "VMware", icon: "vmware" },
                { name: "Docker", icon: "docker" }
            ]
        },
        {
            category: "Scripting & Tools",
            items: [
                { name: "Python", icon: "python" },
                { name: "Bash", icon: "gnubash" },
                { name: "PowerShell", icon: "powershell" },
                { name: "Git", icon: "git" },
                { name: "Ansible", icon: "ansible" }
            ]
        }
    ],

    // =========================================================================================
    //  CONTACTO
    // =========================================================================================
    contact: {
        heading: "Trabajemos juntos.",
        description: "Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré todo lo posible para responderte!",
        email: "hola@ejemplo.com", // Tu email para el botón
        cta: "Saludar" // Texto del botón
    },

    // =========================================================================================
    //  BLOG / GUÍAS
    // =========================================================================================
    /*
     *  ¡IMPORTANTE!
     *  Las entradas del blog se gestionan mediante archivos MARKDOWN (.md).
     *  
     *  Para añadir una nueva entrada:
     *  1. Ve a la carpeta 'content/blog' en este proyecto.
     *  2. Crea un nuevo archivo con el nombre que quieras para la URL (ej: 'mi-post.md').
     *  3. Sigue el formato de ejemplo que hay en esa carpeta.
     */
}
