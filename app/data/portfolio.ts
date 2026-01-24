export const portfolioData = {
    // =========================================================================================
    //  INFORMACIÓN PERSONAL
    // =========================================================================================
    personal: {
        name: "Robert",
        surname: "Martí",
        title: "Hola, mi nombre és",
        location: "Granollers,Catalunya",
        // Tu biografía corta
        bio: ""
    },

    // =========================================================================================
    //  REDES SOCIALES
    // =========================================================================================

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

    experience: [
        {
            title: 'Administrador de Sistemas en Techpole Solutions',
            description: 'Responsable de la infraestructura crítica y continuidad operativa. Mis funciones incluyen:\n' +
                '- Administración de servidores Windows/Linux y entornos virtualizados (VMware, Hyper-V).\n' +
                '- Implementación de políticas de Backup, recuperación ante desastres y gestión de firewalls.\n' +
                '- Configuración y monitoreo de redes LAN/WAN, VPNs y servicios esenciales (DNS, DHCP, Active Directory).\n' +
                '- Resolución de incidencias críticas (Soporte Nivel 2/3) y consultoría técnica interna.',
            tags: ['Windows Server', 'Linux', 'VMware', 'Cybersecurity', 'Active Directory'],
            links: {
                github: '#',
                demo: '#'
            },
            image: './tu-imagen-techpole.webp',
            featured: true
        },
        {
            title: 'Infraestructura Web & Backend en Asialink',
            description: 'Gestión integral del entorno web corporativo con enfoque en disponibilidad y rendimiento:\n' +
                '- Administración y despliegue del servidor web y bases de datos (Backend).\n' +
                '- Mantenimiento técnico, securización y optimización de arquitectura CMS (WordPress).\n' +
                '- Implementación de SEO técnico y análisis de datos de tráfico para optimización de recursos.\n' +
                '- Gestión de actualizaciones críticas, parches de seguridad y estructura de datos.',
            tags: ['Backend', 'SQL', 'WordPress', 'SEO Técnico', 'Web Infrastructure'],
            links: {
                github: '#',
                demo: '#'
            },
            image: './tu-imagen-asialink.webp',
            featured: false
        },
    ],

    // =========================================================================================
    //  PROYECTOS
    // =========================================================================================

    projects: [

        {
            title: 'SysAdmin Tools con Bash',
            description: 'Un script en Bash que permite gestionar usuarios en sistemas Linux de manera sencilla y eficiente, facilitando tareas administrativas comunes.',
            tags: ['Bash', 'Linux', 'Shell', 'scripting'],
            links: {
                github: 'https://github.com/RobertMartiB/sysadmin-tools-bash', demo: '#'
            },
            image: './Adobe Express - file.webp',
            featured: true
        },

        {
            title: 'Fast Fuel ',
            description: 'Este es el proyecto de mi equipo para el proyecto final del ciclo de administración de sistemas. Consiste en una página web para realizar los pedido y pagos en tiempo real a demas implementamos circuito para simualñr el sistema de repostaje de una gasoliuenra normal i corinete',
            tags: ['Windows Server', 'Linux', 'Scripting', 'Arduino', 'HTML', 'CSS', 'SQL'],
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
                { name: "Windows Server", icon: "windows" },
                { name: "Ubuntu", icon: "ubuntu" },]
        },
        {
            category: "Redes & Cloud",
            items: [
                { name: "Cisco", icon: "cisco" },
                { name: "AWS", icon: "amazonaws" },
                { name: "Azure", icon: "microsoftazure" },
                { name: "VMware", icon: "vmware" },
            ]
        },
        {
            category: "Scripting & Tools",
            items: [
                { name: "Bash", icon: "gnubash" },
                { name: "PowerShell", icon: "powershell" },
                { name: "Git", icon: "git" },
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
