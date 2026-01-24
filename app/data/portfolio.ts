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
        title: 'Senior System Administrator',
        role: 'Senior System Administrator',
        company: 'Techpole Solutions',
        location: 'Barcelona, España (Híbrido)',
        period: 'Actualidad',
        description: [
            'Administración avanzada de infraestructura crítica basada en Windows Server y distribuciones Linux (Debian/Ubuntu).',
            'Gestión de entornos de virtualización empresarial con VMware vSphere y Microsoft Hyper-V.',
            'Implementación y despliegue de infraestructura en la nube utilizando AWS (EC2, S3, VPC, IAM).',
            'Configuración de seguridad perimetral, túneles VPN IPsec y gestión de firewalls empresariales.',
            'Automatización de tareas administrativas mediante scripting avanzado y monitorización de servicios esenciales.'
        ],
        tags: ['AWS', 'Windows Server', 'Linux', 'VMware', 'Cybersecurity', 'VPN'],
        links: { github: '#', demo: '#' },
        image: './tu-imagen-techpole.webp',
        featured: true
    },
    {
        title: 'SysAdmin & Web Infrastructure Specialist',
        role: 'SysAdmin & Web Infrastructure Specialist',
        company: 'Asialink',
        location: 'Barcelona, España (Presencial)',
        period: 'Anterior',
        description: [
            'Administración de servidores web (Apache/Nginx) y optimización de bases de datos SQL para entornos de alta disponibilidad.',
            'Gestión de infraestructura Backend y despliegue de servicios en contenedores para optimizar recursos.',
            'Implementación de políticas de backup, recuperación ante desastres y securización de arquitecturas CMS.',
            'Mantenimiento de redes locales, gestión de DNS, certificados SSL y conectividad de la sede central.',
            'Auditoría técnica de sistemas para la mejora del rendimiento y la escalabilidad de la arquitectura web.'
        ],
        tags: ['Nginx', 'SQL', 'Backend Infra', 'Cloud Services', 'Networking'],
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
