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
  bio: 'Soy estudiante de Ingeniería en Desarrollo de Software Multiplataforma en Puebla, México. En mis proyectos he trabajado en interfaces web, aplicaciones de gestión, lógica de servidor y bases de datos.',
}

const skillLevelPending = 'Avanzado'
const skillLevelIntermediate = 'Intermedio'
const skillLevelBeginner = 'Básico'

export const skillAreas = [
  {
    title: 'Frontend',
    icon: 'code',
    items: [
      { name: 'HTML', level: skillLevelPending, project: 'Gym Buddy + Fit Partner; Zapatería' },
      { name: 'CSS', level: skillLevelPending, project: 'Gym Buddy + Fit Partner; Zapatería' },
      { name: 'JavaScript', level: skillLevelPending, project: 'Gym Buddy + Fit Partner; Zapatería' },
      { name: 'React', level: skillLevelIntermediate, project: 'NOVA-SHOP; Zapatería' },
      { name: 'Bootstrap', level: skillLevelIntermediate, project: 'Gym Buddy + Fit Partner; NOVA-SHOP; Zapatería' },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: [
      { name: 'Node.js y Express', level: skillLevelBeginner, project: 'NOVA-SHOP; Zapatería' },
      { name: 'PHP y Laravel', level: skillLevelIntermediate, project: 'Gym Buddy + Fit Partner' },
      { name: 'Python', level: skillLevelIntermediate, project: 'Math-Climber GAME' },
      { name: 'APIs REST', level: skillLevelBeginner, project: 'NOVA-SHOP; Zapatería' },
    ],
  },
  {
    title: 'Bases de datos',
    icon: 'database',
    items: [
      { name: 'MySQL', level: skillLevelPending, project: 'Zapatería; Gym Buddy + Fit Partner' },
      { name: 'PostgreSQL', level: skillLevelPending, project: 'NOVA-SHOP' },
      { name: 'MongoDB', level: skillLevelIntermediate, project: 'Pruebas Personales' },
      { name: 'SQLite', level: skillLevelPending, project: 'Math-Climber GAME' },
    ],
  },
  {
    title: 'Herramientas de proyecto',
    icon: 'layers',
    items: [
      { name: 'Pygame', level: skillLevelPending, project: 'Math-Climber GAME' },
      { name: 'Tkinter', level: skillLevelPending, project: 'Math-Climber GAME' },
      { name: 'JWT', level: skillLevelIntermediate, project: 'Zapatería' },
    ],
  },
]

export const projects = [
  {
    title: 'Math-Climber GAME',
    eyebrow: 'Operaciones · Aprendizaje',
    description: 'Un juego interactivo que ayuda a los niños a practicar operaciones matemáticas básicas de manera divertida y educativa.',
    contribution: 'Creación de la lógica del juego, integración de la interfaz con Tkinter y almacenamiento de datos en SQLite.',
    teamContribution: 'Individual: desarrollo completo del juego, desde la lógica hasta la interfaz y la base de datos.',
    stack: ['Python', 'Pygame', 'SQLite', 'Tkinter'],
    architecture: 'Interfaz Tkinter → lógica del juego en Pygame → almacenamiento local con SQLite.',
    decisions: 'Se eligió Python por su simplicidad y facilidad para crear juegos educativos. Pygame se utilizó para la lógica del juego y Tkinter para la interfaz, mientras que SQLite permitió un almacenamiento ligero y eficiente de los datos de progreso.',
    theme: 'game',
    screenshots: [mathGameImage1, mathGameImage2, mathGameImage3],
    images: ['Vista general del panel', 'Videojuego en acción', 'Victoria y estadísticas de progreso'],
    repository: 'https://github.com/ISRA-VR/Math-Climber-GAME',
  },
  {
    title: 'NOVA-SHOP',
    eyebrow: 'Tienda en línea · Comercial',
    description: 'Proyecto de tienda en línea con interfaz React, API en Node.js y Express, y base de datos PostgreSQL.',
    contribution: 'Creación de la interfaz de usuario con React, desarrollo de la API REST con Node.js y Express, y diseño de la base de datos en PostgreSQL.',
    teamContribution: 'Individual: desarrollo completo del proyecto, desde la interfaz hasta la base de datos.',
    stack: ['React', 'Bootstrap', 'Node.js', 'Express', 'PostgreSQL', 'APIs REST'],
    architecture: 'Frontend React → API REST con Node.js y Express → PostgreSQL.',
    decisions: 'Proyecto personal que se convirtio en un proyecto de portafolio para demostrar habilidades en desarrollo web full-stack. Se eligió React por su eficiencia en la creación de interfaces dinámicas, Node.js y Express para la API, y PostgreSQL por su robustez como sistema de gestión de bases de datos.',
    theme: 'commerce',
    screenshots: [tienda1, tienda2, tienda3, tienda4],
    images: ['Landing page', 'Vista desde el administrador', 'Producto', 'Vista desde el usuario'],
    repository: 'https://github.com/ISRA-VR/NOVA-shop',
  },
  {
    title: 'Inventario y punto de venta — Zapatería',
    eyebrow: 'Administración de inventario · Ventas y stock',
    description: 'Sistema de gestión de inventario para una zapatería, con administración de productos, variantes, tallas y usuarios.',
    contribution: 'Diseñe el diseño de las interfaces, la implementacion del frontend con React y Bootstrap, y la creación de la API REST con Node.js y Express para la gestión de inventario y ventas, concluida con el despliegue en Vercel.',
    teamContribution: 'M.A.Y.I.E',
    stack: ['React', 'Bootstrap', 'Node.js', 'Express', 'MySQL', 'JWT'],
    architecture: 'Frontend React → API REST con Node.js y Express → MySQL.',
    decisions: 'React y Bootstrap se eligieron para crear una interfaz de usuario moderna y responsiva, mientras que Node.js y Express proporcionaron un backend eficiente para manejar las operaciones de inventario y ventas. MySQL se utilizó como base de datos relacional para almacenar la información de productos, usuarios y transacciones.',
    theme: 'admin',
    screenshots: [zapateria1, zapateria2, zapateria3, zapateria4],
    images: ['Inventario', 'Inicio de sesión', 'Gestión de productos', 'Vista del sistema'],
    demo: 'https://inventario-zapateria-virid.vercel.app/admin/punto-venta',
    repository: 'https://github.com/ISRA-VR/Inventario-ZAPATERIA',
  },
  {
    title: 'Gym Buddy + Fit Partner',
    eyebrow: 'Aplicación web · Seguimiento de entrenamiento',
    description: 'Aplicación web de seguimiento de entrenamiento construida con HTML, CSS, JavaScript y PHP.',
    contribution: 'Desarrollo completo de la aplicación, incluyendo la interfaz de usuario, la lógica de seguimiento de entrenamiento y la integración con la base de datos MySQL.',
    teamContribution: 'Tilines-Insanos',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Laravel', 'Bootstrap'],
    architecture: 'Frontend HTML, CSS y JavaScript → backend PHP con Laravel → MySQL.',
    decisions: 'HTML, CSS y JavaScript se utilizaron para crear la interfaz de usuario, mientras que PHP con Laravel se utilizó para el backend. MySQL fue elegido como base de datos para almacenar la información de los usuarios y sus entrenamientos.',
    theme: 'fitness',
    screenshots: [gym1, gym2, gym3],
    images: ['Vista de entrenamiento', 'Seguimiento del progreso', 'Vista de la aplicación'],
    repository: 'https://github.com/ISRA-VR/Login-Fit-Partner',
  },
]

export const socialLinks = [
  { label: 'LinkedIn', handle: '/in/isra-valerdi-08a1033ab', href: 'https://www.linkedin.com/in/isra-valerdi-08a1033ab', icon: 'linkedin' },
  { label: 'Instagram', handle: '@isra_v01', href: 'https://www.instagram.com/isra_v01/', icon: 'instagram' },
  { label: 'WhatsApp', handle: '@dev_isra404', href: 'https://wa.me/522492144669', icon: 'whatsapp' },
  { label: 'Gmail', handle: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'GitHub', handle: 'github.com/ISRA-VR', href: 'https://github.com/ISRA-VR', icon: 'github' },
]
