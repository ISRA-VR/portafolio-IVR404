import profilePhoto from '../assets/im2.jpeg'
import mathGameImage1 from '../assets/juego1.png'
import mathGameImage2 from '../assets/juego2.png'
import mathGameImage3 from '../assets/juego3.png'
import tienda1 from '../assets/tienda1.png'
import tienda2 from '../assets/tienda2.png'
import tienda3 from '../assets/tienda3.png'
import tienda4 from '../assets/tienda4.png'
import zapateria1 from '../assets/inventario1.png'
import zapateria2 from '../assets/inventario2.png'
import zapateria3 from '../assets/inventario3.png'
import zapateria4 from '../assets/inventario4.png'
import gym1 from '../assets/gym1.png'
import gym2 from '../assets/gym2.png'
import gym3 from '../assets/gym3.png'

export const profile = {
  name: 'Israel Valerdi',
  username: 'ISRA-VR',
  email: 'isratics01@gmail.com',
  photoUrl: profilePhoto,
  bio: 'Construyo sitios web enfocados en la experiencia del usuario, tiendas en línea y sistemas administrativos a la medida, combinando desarrollo Full-Stack (frontend, backend, APIs, bases de datos y nube) con SEO, herramientas de Google, automatización e inteligencia artificial. Me adapto rápido a cada requerimiento para entregar soluciones prácticas que optimicen procesos y conecten mejor con los usuarios.',
}

export const skillAreas = [
  { title: 'Frontend', icon: 'code', items: ['HTML', 'CSS', 'JavaScript', 'React', 'VueJS', 'Bootstrap'] },
  { title: 'Backend', icon: 'server', items: ['Node.js', 'FastAPI', 'Python', 'APIs REST', 'PHP', 'Java'] },
  { title: 'Database', icon: 'database', items: ['MySQL', 'PostgreSQL', 'Modelado relacional', 'CRUD'] },
  { title: 'APIs', icon: 'workflow', items: ['Consumo', 'Integración', 'Diseño de endpoints'] },
  { title: 'Seguridad', icon: 'shield', items: ['Autenticación', 'Validaciones', 'JWT'] },
  { title: 'Deployment', icon: 'cloud', items: ['Vercel', 'Railway', 'Entornos de desarrollo'] },
  { title: 'Arquitectura', icon: 'layers', items: ['Frontend / Backend / Database', 'MVC'] },
  { title: 'Diseño', icon: 'pen-tool', items: ['Figma', 'Stitch UI', 'CANVA', 'MIRO', 'Adaptabilidad Híbrida'] },
  { title: 'Web', icon: 'globe', items: ['WordPress', 'Google Analytics', 'Tag Manager', 'Migración'] },
  { title: 'IA', icon: 'sparkles', items: ['Exploración e integración de IA en Páginas y Sitios'] },
]

export const projects = [
  {
    title: 'Math-Climber GAME',
    eyebrow: 'Operaciones · Aprendizaje',
    description: 'Un juego interactivo que ayuda a los niños a practicar operaciones matemáticas básicas de manera divertida y educativa.',
    role: 'Desarrollo de juego, interfaz y base de datos local',
    stack: ['Python', 'Pygame', 'SQLite', 'Tkinter'],
    architecture: 'Interfaz de usuario → lógica del juego → base de datos local para seguimiento de progreso.',
    decisions: 'Enfoque en la experiencia del usuario, retroalimentación inmediata y niveles de dificultad ajustables para mantener el interés.',
    status: 'Caso conceptual',
    theme: 'game',
    screenshots: [mathGameImage1, mathGameImage2, mathGameImage3],
    images: ['Vista general del panel', 'Videojuego en acción', 'Victoria y estadísticas de progreso'],
    demo: '',
    repository: 'https://github.com/ISRA-VR/Math-Climber-GAME',
  },
  {
    title: 'NOVA-SHOP',
    eyebrow: 'Tienda en línea · Comercial',
    description: 'Una tienda en línea conceptual que permite a los usuarios explorar productos, ver detalles y realizar compras de manera intuitiva.',
    role: 'Frontend, integración de API y modelo de datos',
    stack: ['VueJS', 'APIs REST', 'PostgreSQL', 'Vercel'],
    architecture: 'Aplicación Vue → endpoints REST → servicios de catálogo y pedidos → base de datos relacional.',
    decisions: 'Interfaz mobile-first, catálogo separado de las operaciones de compra y estados de carga y error explícitos.',
    status: 'Caso conceptual',
    theme: 'commerce',
    screenshots: [tienda1, tienda2, tienda3, tienda4],
    images: ['Landing page', 'Vista desde el administrador', 'Producto', 'Vista desde el usuario'],
    demo: '',
    repository: 'https://github.com/ISRA-VR/NOVA-shop',
  },
  {
    title: 'Inventory + POS - ZAPATERIA',
    eyebrow: 'Administracion con agente de IA · Ventas y stock',
    description: 'Un sistema administrativo conceptual para una zapatería que permite gestionar inventario, ventas y generar reportes, con integración de un agente de IA para asistencia en tareas repetitivas.',
    role: 'Desarrollo de backend, integración de IA y diseño de arquitectura',
    stack: ['FastAPI', 'Python', 'TiDB Cloud', 'IA Conversacional'],
    architecture: 'Backend FastAPI → endpoints REST → base de datos relacional → agente de IA para consultas y automatización de tareas.',
    decisions: 'Diseño modular, enfoque en la seguridad de datos y facilidad de uso para el personal de la zapatería, con un agente de IA que aprende de las interacciones para mejorar la eficiencia.',
    status: 'Caso conceptual',
    theme: 'admin',
    screenshots: [zapateria1, zapateria2, zapateria3, zapateria4],
    images: ['.', 'Login', '.', '.'],
    demo: 'https://inventario-zapateria-virid.vercel.app/admin/punto-venta',
    repository: 'https://github.com/ISRA-VR/Inventario-ZAPATERIA',
  },
  {
    title: 'Gym Buddy + Fit Partner',
    eyebrow: 'Aplicación web · Seguimiento de entrenamiento',
    description: 'Una aplicación web conceptual que permite a los usuarios registrar y seguir su progreso en el gimnasio, con funciones de planificación de entrenamientos y análisis de rendimiento.',
    role: 'Desarrollo de frontend, integración de API y diseño de experiencia de usuario',
    stack: ['HTML + CSS', 'JavaScript + PHP', 'mySQL', 'Laravel', 'Bootstrap'],
    architecture: 'Frontend React → API Node.js → base de datos PostgreSQL, con rutas protegidas y autenticación de usuarios.',
    decisions: 'Enfoque en la experiencia del usuario, diseño responsive y visualización clara del progreso, con funcionalidades de planificación y seguimiento de entrenamientos.',
    status: 'Caso conceptual',
    theme: 'fitness',
    screenshots: [gym1, gym2, gym3],
    images: ['.', '.', '.'],
    demo: '',
    repository: 'https://github.com/ISRA-VR/Login-Fit-Partner',
  },
]

export const socialLinks = [
  { label: 'LinkedIn', handle: '/in/israel-valerdi', href: 'https://www.linkedin.com/in/isra-valerdi-08a1033ab', icon: 'linkedin' },
  { label: 'Instagram', handle: '@isra_v01', href: 'https://www.instagram.com/isra_v01/', icon: 'instagram' },
  { label: 'WhatsApp', handle: '@dev_isra404', href: 'https://wa.me/522492144669', icon: 'whatsapp' },
  { label: 'Gmail', handle: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'GitHub', handle: 'github.com/ISRA-VR', href: 'https://github.com/ISRA-VR', icon: 'github' },
]
