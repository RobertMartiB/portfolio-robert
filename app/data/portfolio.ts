export const portfolioData = {
    // =========================================================================================
    //  INFORMACIÓN PERSONAL
    // =========================================================================================
    personal: {
        name: "Robert",
        surname: "Martí",
        title: "Hola, mi nombre es",
        location: "Granollers, Catalunya",
        // Tu biografía corta
        bio: "Técnico de sistemas. Técnico Superior en ASIX y estudiante de Ingeniería Informática en la UOC. Linux, Windows Server, Proxmox, Bash y redes. Busco mi primer puesto como técnico de sistemas o de CPD."
    },

    // =========================================================================================
    //  REDES SOCIALES
    // =========================================================================================

    socials: [
        {
            label: 'GitHub',
            href: 'https://github.com/RobertMartiB',
            icon: 'Github'
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/robert-marti-badia-119710235/',
            icon: 'Linkedin'
        },
        {
            label: 'Email',
            href: 'mailto:martibadiarobert@gmail.com',
            icon: 'Mail'
        },
    ],

    // =========================================================================================
    //  EXPERIENCIA
    // =========================================================================================

  experience: [
    {
        title: 'Desarrollador web',
        role: 'Desarrollador web',
        company: 'Techpole Solutions',
        location: 'Les Franqueses del Vallès, España (Híbrido) · Jornada parcial',
        period: 'ene. 2025 – sep. 2025',
        description: [
            'Mantenimiento de la tienda online PrestaShop: actualizaciones de la plataforma y sus módulos, y corrección de errores.',
            'Copias de seguridad y pruebas antes de publicar cambios.',
            'Alta y actualización del catálogo de productos.'
        ],
        tags: ['PrestaShop', 'Mantenimiento', 'Copias de seguridad'],
        links: { github: '#', demo: '#' },
        image: './tu-imagen-techpole.webp',
        featured: true
    },
    {
        title: 'Técnico de sistemas y web en prácticas (FCT)',
        role: 'Técnico de sistemas y web en prácticas (FCT)',
        company: 'Asialink',
        location: 'Barcelona, España (Presencial)',
        period: 'oct. 2024 – mar. 2025',
        description: [
            'Soporte técnico a compañeros con incidencias en sus equipos.',
            'Copias de seguridad periódicas.',
            'Despliegue inicial de la web corporativa en AWS antes de pasar a la solución final con WordPress.',
            'Supervisión continua de la web para detectar y corregir errores.',
            'Sustitución de la web corporativa por una nueva hecha con WordPress.'
        ],
        tags: ['WordPress', 'AWS', 'Copias de seguridad', 'Soporte técnico'],
        links: { github: '#', demo: '#' },
        image: './tu-imagen-asialink.webp',
        featured: false
    },
],

    // =========================================================================================
    //  PROYECTOS
    // =========================================================================================

    projects: [

        {
            title: 'linux-admin-toolkit',
            description: 'Herramienta en Bash con menús en terminal (whiptail) para administrar servidores Linux: alta y baja de usuarios, listados y bloqueo temporal o permanente de cuentas con temporizadores de systemd. En desarrollo: grupos, sudoers, firewall UFW, red, servicios, monitorización y copias de seguridad.',
            tags: ['Bash', 'Linux', 'systemd', 'whiptail'],
            links: {
                github: 'https://github.com/RobertMartiB/linux-admin-toolkit', demo: '#'
            },
            image: './Adobe Express - file.webp',
            featured: true
        },

        {
            title: 'Fast Fuel',
            description: 'Proyecto final en equipo del CFGS ASIX (nov. 2024 – may. 2025). Sistema de pedidos y control de stock para una estación de servicio con zona de comida rápida, con pagos en tiempo real y un dispensador real con Arduino que simula el repostaje.',
            tags: ['Proxmox', 'NGINX', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Arduino'],
            links: {
                github: 'https://publuu.com/flip-book/1048400/2324769/page/2', demo: '#'
            },
            image: './22579.webp',
            featured: true
        },
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
                { name: "Windows Server", icon: "" },
                { name: "Ubuntu", icon: "ubuntu" },
                { name: "Debian", icon: "debian" },]
        },
        {
            category: "Virtualización & Cloud",
            items: [
                { name: "Proxmox", icon: "proxmox" },
                { name: "VMware", icon: "vmware" },
                { name: "Docker", icon: "docker" },
                { name: "AWS", icon: "" },
                { name: "Azure", icon: "" },
            ]
        },
        {
            category: "Redes",
            items: [
                { name: "Cisco", icon: "cisco" },
            ]
        },
        {
            category: "Scripting & Tools",
            items: [
                { name: "Bash", icon: "gnubash" },
                { name: "Python", icon: "python" },
                { name: "SQL", icon: "mysql" },
                { name: "PowerShell", icon: "" },
                { name: "Git", icon: "git" },
            ]
        },
        {
            category: "Web",
            items: [
                { name: "PrestaShop", icon: "prestashop" },
                { name: "WordPress", icon: "wordpress" },
            ]
        }
    ],

    // =========================================================================================
    //  CONTACTO
    // =========================================================================================
    contact: {
        heading: "Trabajemos juntos.",
        description: "Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré todo lo posible para responderte!",
        email: "martibadiarobert@gmail.com",
        cta: "Saludar"
    },

    // =========================================================================================
    //  BLOG / GUÍAS
    // =========================================================================================

}
