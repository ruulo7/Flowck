const STATUS_LABELS = {
  solicitada: 'Solicitada',
  produccion: 'En producción',
  revision:   'En revisión',
  aprobada:   'Aprobada',
  publicada:  'Publicada',
};

const STATUS_ORDER = ['solicitada','produccion','revision','aprobada','publicada'];

const STATUS_DOTS = {
  solicitada: '#7C3AED',
  produccion: '#EA580C',
  revision:   '#CA8A04',
  aprobada:   '#16A34A',
  publicada:  '#4338CA',
};

const CHANNEL_LABELS = {
  instagram: 'Instagram',
  linkedin:  'LinkedIn',
  facebook:  'Facebook',
  tiktok:    'TikTok',
  x:         'X',
  email:     'Email',
  youtube:   'YouTube',
  otro:      'Otro',
};

const TEAM_MEMBERS = ['Julia B.', 'Carlos R.', 'María G.', 'Ana R.', 'David M.'];

const USERS = [
  { name: 'María G.',  color: '#3A7BD5', role: 'manager' },
  { name: 'Carlos R.', color: '#059669', role: 'produccion' },
  { name: 'Julia B.',  color: '#7C3AED', role: 'produccion' },
  { name: 'Ana R.',    color: '#BE185D', role: 'produccion' },
  { name: 'Cliente',   color: '#6B6B6B', role: 'cliente'  },
];

const ROLE_LABELS = {
  manager:    'Manager',
  produccion: 'Producción',
  content:    'Producción',
  diseño:     'Producción',
  cliente:    'Cliente',
};

const AVATAR_PALETTE = ['#0891B2','#B45309','#6D28D9','#0F766E','#BE123C','#1D4ED8','#854D0E','#065F46'];

/* Normaliza valores legacy de pendienteDe almacenados en localStorage */
const PENDIENTE_NORMALIZE = { 'Julia': 'Julia B.', 'Carlos': 'Carlos R.', 'María': 'María G.' };

const WORKSPACE_DEFAULT = { name: 'Pulse Agency', color: '#F59E0B' };

function getWorkspace() {
  const stored = localStorage.getItem('flowck_workspace');
  if (!stored) return { ...WORKSPACE_DEFAULT };
  return { ...WORKSPACE_DEFAULT, ...JSON.parse(stored) };
}

function saveWorkspace(ws) {
  localStorage.setItem('flowck_workspace', JSON.stringify(ws));
}

function getExtraUsers() {
  const stored = localStorage.getItem('flowck_extra_users');
  return stored ? JSON.parse(stored) : [];
}

function saveExtraUsers(users) {
  localStorage.setItem('flowck_extra_users', JSON.stringify(users));
}

function getUsers() {
  const extra = getExtraUsers();
  const defaultNames = new Set(USERS.map(u => u.name));
  return [...USERS, ...extra.filter(u => !defaultNames.has(u.name))];
}

function getTeamMembers() {
  return getUsers().filter(u => u.role !== 'cliente').map(u => u.name);
}

function getAuthorColor(name) {
  const user = getUsers().find(u => u.name === (name || '').trim());
  return user ? user.color : '#6B6B6B';
}

function _d(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

const PIECES = [
  {
    id: 1,
    name: 'Cartel Summer Drop — colección de accesorios',
    channel: 'instagram',
    campaign: 'Verano 2025',
    cliente: 'Lumina Sport',
    status: 'revision',
    pendienteDe: 'Cliente',
    diseñador: 'Ana R.',
    deadline: _d(3),
    brief: 'Banner para el lanzamiento de la colección de verano Q1. Debe transmitir energía, color y exclusividad. Formato cuadrado para feed de Instagram. CTA claro hacia la landing de producto. Tono: aspiracional pero cercano.',
    thumbnail: 'assets/images/imagen-1.png',
    image: 'assets/images/imagen-1.png',
    blocked: true,
    blockedSince: _d(-3),
    blockLabel: 'Esperando cliente',
    blockReason: 'Se necesita feedback del cliente para que la pieza avance.',
    copy: 'El verano que esperabas, con los accesorios que necesitas. Tote bag, bucket hat y botella para vivir cada momento sin límites. Nueva colección Q1 de Lumina Sport — ya disponible.',
    fileFormat: 'JPG',
    fileVersion: 'v2',
    fileName: 'banner_q1_v2.jpg',
    comments: [
      { id: 1, author: 'María G.',  role: 'manager', time: 'Hace 2d', text: 'Necesitamos que el cliente apruebe los textos antes del viernes. Ya les he enviado el brief pero siguen sin responder.', color: '#3A7BD5' },
      { id: 2, author: 'Carlos R.', role: 'produccion', time: 'Hace 1d', text: 'He actualizado el copy destacando los tres productos del visual. Quedo pendiente de validación por su parte.', color: '#059669' },
      { id: 3, author: 'Cliente',   role: 'cliente', time: 'Hace 6h', text: 'El texto encaja bien con la imagen. Acortad un poco la primera frase y enviadme la versión definitiva para dar el ok.', color: '#6B6B6B' },
    ],
  },
  {
    id: 2,
    name: '',
    channel: 'facebook',
    campaign: 'Onboarding',
    cliente: 'Telecom Plus',
    status: 'produccion',
    pendienteDe: 'Julia B.',
    diseñador: 'Julia B.',
    deadline: _d(2),
    brief: 'Pieza de bienvenida para nuevos usuarios que acaban de activar su cuenta. Debe ser cálida, clara y funcional. Incluir el logo de la app en primer plano y un mensaje de activación. Formato horizontal para Facebook feed.',
    thumbnail: 'assets/images/imagen-3.png',
    image: 'assets/images/imagen-3.png',
    blocked: false,
    blockReason: '',
    copy: 'La puerta está abierta. Bienvenido a nuestra comunidad — conoce al equipo, descubre el espacio y empieza a hacer cosas increíbles desde el primer día. Everyone welcome.',
    fileFormat: 'PNG',
    fileVersion: 'v1',
    fileName: 'bienvenida_v1.png',
    comments: [
      { id: 1, author: 'María G.', role: 'manager', time: 'Hace 3 h', text: 'El tono es perfecto, muy acogedor. Solo revisaría el tamaño del logo en la parte superior — ahora queda un poco pequeño.', color: '#3A7BD5' },
    ],
  },
  {
    id: 3,
    name: 'Reel de lanzamiento smartband — producto estrella',
    channel: 'instagram',
    campaign: 'Lanzamiento',
    cliente: 'Verdana Beauty',
    status: 'revision',
    pendienteDe: 'María G.',
    diseñador: 'Julia B.',
    deadline: _d(5),
    thumbnail: 'assets/images/imagen-7.png',
    image: 'assets/images/imagen-7.png',
    blocked: false,
    blockReason: '',
    copy: 'El wearable que lo cambia todo. Monitoriza tu progreso, mantente conectado y supérate cada día. Disponible ahora. 🚀',
    fileFormat: 'MP4',
    fileVersion: 'v2',
    fileName: 'reel_presentacion_v2.mp4',
    comments: [
      { id: 1, author: 'Julia B.', role: 'produccion', time: 'Hace 5 h', text: 'Versión v2 subida con las transiciones corregidas. El reveal del producto en el segundo 4 ahora es mucho más limpio.', color: '#7C3AED' },
      { id: 2, author: 'Ana R.',   role: 'produccion',  time: 'Hace 3 h', text: 'He ajustado el glow de la esfera de cristal en la transición central. Creo que el efecto queda más premium ahora.', color: '#BE185D' },
      { id: 3, author: 'Cliente',  role: 'cliente', time: 'Hace 2 h', text: 'Mucho mejor que la v1. Solo revisar el audio en los últimos 3 segundos, se corta un poco.', color: '#6B6B6B' },
    ],
  },
  {
    id: 4,
    name: 'Post LinkedIn — Growth Webinar y expansión europea',
    channel: 'linkedin',
    campaign: 'Lanzamiento',
    cliente: 'Verdana Beauty',
    status: 'publicada',
    pendienteDe: '—',
    diseñador: 'Carlos R.',
    deadline: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    thumbnail: 'assets/images/imagen-4.png',
    image: 'assets/images/imagen-4.png',
    blocked: false,
    blockReason: '',
    copy: 'Hoy es un día especial: anunciamos nuestra expansión a tres nuevos mercados europeos. Y para celebrarlo, nuestro primer Growth Webinar — estrategias prácticas para escalar con resultados. Gracias a todo el equipo. 🌍',
    fileFormat: 'JPG',
    fileVersion: 'v3',
    fileName: 'post_expansion_v3.jpg',
    comments: [
      { id: 1, author: 'María G.', role: 'manager', time: 'Ayer', text: 'Publicada el lunes a las 9h. Muy buen engagement en las primeras horas, especialmente en comentarios.', color: '#3A7BD5' },
      { id: 2, author: 'Cliente', role: 'cliente', time: 'Hace 11 días', text: 'El copy transmite muy bien la expansión y la energía del webinar. Publicadlo, está perfecto.', color: '#6B6B6B' },
    ],
  },
  {
    id: 5,
    name: 'Story Trend Drop — cuenta atrás colección verano',
    channel: 'tiktok',
    campaign: 'Verano 2025',
    cliente: 'Lumina Sport',
    status: 'revision',
    pendienteDe: 'Cliente',
    diseñador: 'Ana R.',
    deadline: _d(10),
    thumbnail: 'assets/images/imagen-2.png',
    image: 'assets/images/imagen-2.png',
    blocked: true,
    blockedSince: _d(-7),
    blockLabel: 'Sin respuesta del cliente',
    blockReason: 'Se necesita feedback del cliente para que la pieza avance.',
    copy: 'El trend drop del verano está a punto de caer ⚡ 5 días. ¿Estás listo? #trenddrop #verano2025 #lumina',
    fileFormat: 'MP4',
    fileVersion: 'v1',
    fileName: 'story_cuenta_atras_v1.mp4',
    comments: [
      { id: 1, author: 'Carlos R.', role: 'produccion', time: 'Hace 4 días', text: 'Enviada para revisión del cliente. El estilo TikTok encaja muy bien con su tono de marca. Pendiente de respuesta.', color: '#059669' },
      { id: 2, author: 'Cliente', role: 'cliente', time: 'Hace 2h', text: 'El hashtag #verano2025 está bien, añadid también #luminasport. El copy y el ritmo del vídeo son buenos, podéis seguir con la producción.', color: '#6B6B6B' },
    ],
  },
  {
    id: 6,
    name: 'Cabecera newsletter — línea de productos eco julio',
    channel: 'facebook',
    campaign: 'Comunicado 1',
    cliente: 'Banco XYZ',
    status: 'aprobada',
    pendienteDe: 'Julia B.',
    diseñador: 'Julia B.',
    deadline: _d(21),
    thumbnail: 'assets/images/imagen-10.png',
    image: 'assets/images/imagen-10.png',
    blocked: false,
    blockReason: '',
    copy: 'Julio llega con propósito. Este mes te presentamos nuestra línea eco: tote bag, termo y accesorios sostenibles pensados para el planeta. 🌿 Todo en tu bandeja el 1 de julio.',
    fileFormat: 'HTML',
    fileVersion: 'v2',
    fileName: 'newsletter_julio_v2.html',
    comments: [
      { id: 1, author: 'María G.', role: 'manager', time: 'Ayer', text: 'Aprobada. La línea eco encaja perfectamente con los valores de la marca este trimestre. Julia puede proceder con el envío el 1 de julio.', color: '#3A7BD5' },
      { id: 2, author: 'Julia B.', role: 'produccion', time: 'Ayer', text: 'Perfecto, lo programo para el 1 de julio a las 8:00h.', color: '#7C3AED' },
      { id: 3, author: 'Cliente', role: 'cliente', time: 'Hace 2 días', text: 'El diseño comunica muy bien la propuesta eco. La estructura es clara y el tono encaja con lo que queremos proyectar este mes. Aprobado.', color: '#6B6B6B' },
    ],
  },
  {
    id: 7,
    name: '',
    channel: 'instagram',
    campaign: 'Onboarding',
    cliente: 'Telecom Plus',
    status: 'produccion',
    pendienteDe: 'Ana R.',
    diseñador: 'Ana R.',
    deadline: _d(7),
    brief: 'Carrusel de Instagram para presentar las 5 novedades de la última actualización de la app. Cada slide debe cubrir una funcionalidad clave con un visual limpio y un copy conciso. Tono técnico pero accesible. Formato cuadrado. Objetivo: aumentar el conocimiento del producto entre usuarios actuales de Telecom Plus.',
    thumbnail: 'assets/images/imagen-5.png',
    image: 'assets/images/imagen-5.png',
    blocked: false,
    blockReason: '',
    copy: 'Nueva actualización disponible. ⚡ Descubre las 5 funciones que tu equipo necesita conocer ahora mismo. Más velocidad, más control, misma simplicidad.',
    fileFormat: 'PNG',
    fileVersion: 'v1',
    fileName: 'carrusel_tips_v1.png',
    comments: [
      { id: 1, author: 'Ana R.', role: 'produccion', time: 'Hace 1 d', text: 'Empezando con los diseños. Voy a proponer 3 variantes de layout para el carrusel — una más minimalista y dos con más carga visual.', color: '#BE185D' },
    ],
  },
  {
    id: 8,
    name: '',
    channel: 'linkedin',
    campaign: 'Verano 2025',
    cliente: 'Lumina Sport',
    status: 'solicitada',
    pendienteDe: 'Sin asignar',
    diseñador: '',
    deadline: _d(4),
    brief: 'Banner para LinkedIn con oferta flash de calzado y accesorios de verano de Lumina Sport. Urgencia visual clara — destacar el descuento y la duración limitada de la promoción. Formato horizontal adaptado a LinkedIn feed. Incluir CTA directo a la tienda online. Tono: dinámico, directo y con energía de temporada.',
    thumbnail: 'assets/images/imagen-8.png',
    image: 'assets/images/imagen-8.png',
    blocked: false,
    blockReason: '',
    copy: 'Tiempo limitado. ⚡ Zapatillas, auriculares y accesorios de verano con descuento flash. No lo dejes para mañana.',
    fileFormat: 'JPG',
    fileVersion: 'v1',
    fileName: 'banner_retargeting_v1.jpg',
    comments: [],
  },
  {
    id: 9,
    name: 'Reel rooftop Ohana — celebración primer aniversario',
    channel: 'tiktok',
    campaign: 'Ohana',
    cliente: 'Nordika Home',
    status: 'revision',
    pendienteDe: 'María G.',
    diseñador: 'Carlos R.',
    deadline: _d(25),
    thumbnail: 'assets/images/imagen-11.png',
    image: 'assets/images/imagen-11.png',
    blocked: true,
    blockedSince: _d(-5),
    blockLabel: 'Producción retrasada',
    blockReason: 'Se necesita feedback de María para que la pieza avance.',
    copy: '"La mejor noche del año." Así lo vivieron los asistentes al evento Ohana. Rooftop, buenas conversaciones y mucha energía — mira el resumen. 🌆',
    fileFormat: 'MP4',
    fileVersion: 'v2',
    fileName: 'video_testimonial_v2.mp4',
    comments: [
      { id: 1, author: 'María G.', role: 'manager', time: 'Hace 1 día', text: 'Los subtítulos del rooftop tienen errores ortográficos en varios momentos. Necesita corrección antes de aprobar.', color: '#3A7BD5' },
      { id: 2, author: 'Carlos R.', role: 'produccion', time: 'Hace 22 h', text: 'Correcciones enviadas al equipo de producción. Pendiente la nueva versión con los subtítulos revisados.', color: '#059669' },
      { id: 3, author: 'Cliente', role: 'cliente', time: 'Hace 18h', text: 'El montaje del evento está muy bien logrado. Revisad los subtítulos del tramo 0:45–1:10, hay errores tipográficos. En cuanto estén corregidos, aprobamos.', color: '#6B6B6B' },
    ],
  },
  {
    id: 10,
    name: '',
    channel: 'facebook',
    campaign: 'Lanzamiento',
    cliente: 'Verdana Beauty',
    status: 'produccion',
    pendienteDe: 'Julia B.',
    diseñador: 'Julia B.',
    deadline: _d(12),
    brief: 'Post de Facebook para anunciar la apertura de Verdana Beauty en una nueva ciudad. Combinar imagen urbana con el branding de la marca. El mensaje debe transmitir expansión y cercanía al nuevo mercado local. Incluir CTA hacia la página de detalles del evento de apertura. Tono: optimista, cercano y aspiracional.',
    thumbnail: 'assets/images/imagen-6.png',
    image: 'assets/images/imagen-6.png',
    blocked: false,
    blockReason: '',
    copy: 'Un nuevo capítulo comienza. Llegamos a una nueva ciudad, a un nuevo mercado. Más presencia, más cerca de ti. 🏙️ Próximamente todos los detalles.',
    fileFormat: 'JPG',
    fileVersion: 'v1',
    fileName: 'post_apertura_v1.jpg',
    comments: [],
  },
  {
    id: 11,
    name: 'Banner digital strategy — campaña Telecom Plus',
    channel: 'x',
    campaign: 'Ohana',
    cliente: 'Nordika Home',
    status: 'aprobada',
    pendienteDe: 'Carlos R.',
    diseñador: 'Carlos R.',
    deadline: _d(18),
    thumbnail: 'assets/images/imagen-14.png',
    image: 'assets/images/imagen-14.png',
    blocked: false,
    blockReason: '',
    copy: 'Datos, estrategia y resultados. Descubre cómo Telecom Plus transforma la analítica de tu negocio — insights en tiempo real, decisiones más inteligentes. Pruébalo gratis.',
    fileFormat: 'PNG',
    fileVersion: 'v1',
    fileName: 'ads_google_v1.png',
    comments: [
      { id: 1, author: 'María G.', role: 'manager', time: 'Hace 2 días', text: 'Aprobados. El visual de analytics encaja perfecto con el mensaje de Telecom Plus. Activar campañas el lunes 30 a primera hora.', color: '#3A7BD5' },
      { id: 2, author: 'Cliente', role: 'cliente', time: 'Hace 3 días', text: 'El visual transmite exactamente lo que buscábamos: datos claros y mensaje de confianza. Perfecto para activar.', color: '#6B6B6B' },
    ],
  },
  {
    id: 12,
    name: '',
    channel: 'instagram',
    campaign: 'Verano 2025',
    cliente: 'Lumina Sport',
    status: 'solicitada',
    pendienteDe: 'Sin asignar',
    diseñador: '',
    deadline: _d(2),
    brief: 'Story de Instagram para el sorteo del pack Weekend Escape. Mecánica del sorteo en pantalla: seguir la cuenta, etiquetar a dos amigos y compartir en stories. Visual con los productos del pack — maleta, auriculares de Lumina Sport y accesorios de verano. Formato vertical 9:16. Tono: festivo, desenfadado y aspiracional.',
    thumbnail: 'assets/images/imagen-13.png',
    image: 'assets/images/imagen-13.png',
    blocked: false,
    blockReason: '',
    copy: '¿Quieres escaparte este verano? 🧳 Sorteamos un weekend escape completo — maleta, auriculares, cámara y mucho más. Sigue las instrucciones en bio para participar. #sorteo #weekendescape #verano',
    fileFormat: 'PNG',
    fileVersion: 'v1',
    fileName: 'story_sorteo_v1.png',
    comments: [
      { id: 1, author: 'Carlos R.', role: 'produccion', time: 'Hace 2 h', text: 'Solicitud recibida. Voy a preparar la mecánica del sorteo con el pack de viaje como premio y las instrucciones para bio antes de arrancar con el diseño.', color: '#059669' },
    ],
  },
  {
    id: 13,
    name: 'Infografía onboarding — proceso de trabajo en equipo',
    channel: 'linkedin',
    campaign: 'Onboarding',
    cliente: 'Telecom Plus',
    status: 'revision',
    pendienteDe: 'María G.',
    diseñador: 'Carlos R.',
    deadline: _d(28),
    thumbnail: 'assets/images/imagen-9.png',
    image: 'assets/images/imagen-9.png',
    blocked: true,
    blockedSince: _d(-9),
    blockLabel: 'Cambios pendientes',
    blockReason: 'Se necesita feedback de María para que la pieza avance.',
    copy: 'Así trabajamos: en equipo, en remoto, con resultados. Nuestro proceso de onboarding en 4 pasos — desde el primer contacto hasta tu primer proyecto entregado. 📋',
    fileFormat: 'PDF',
    fileVersion: 'v2',
    fileName: 'infografia_onboarding_v2.pdf',
    comments: [
      { id: 1, author: 'María G.', role: 'manager', time: 'Hace 3 días', text: 'El paso 3 no refleja bien cómo funciona la sesión de trabajo colaborativo. Hay que revisar el flujo con el equipo de producto.', color: '#3A7BD5' },
      { id: 2, author: 'Carlos R.', role: 'produccion', time: 'Hace 2 días', text: 'Solicitado al equipo de producto. Esperando confirmación del flujo correcto para actualizar la infografía.', color: '#059669' },
      { id: 3, author: 'Cliente', role: 'cliente', time: 'Hace 4 días', text: 'Los pasos 1, 2 y 4 están perfectos. El paso 3 no refleja bien cómo funciona la sesión colaborativa — necesita revisión antes de que podamos publicarlo.', color: '#6B6B6B' },
    ],
  },
  {
    id: 14,
    name: 'Banner lifestyle — lanzamiento nueva web',
    channel: 'x',
    campaign: 'Lanzamiento',
    cliente: 'Verdana Beauty',
    status: 'publicada',
    pendienteDe: '—',
    diseñador: 'Ana R.',
    deadline: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    thumbnail: 'assets/images/imagen-12.png',
    image: 'assets/images/imagen-12.png',
    blocked: false,
    blockReason: '',
    copy: 'Empieza el día con lo mejor. Nueva web, nueva energía — más fresca, más nuestra. El rediseño que estabas esperando ya está aquí. ☕ Visítala ahora.',
    fileFormat: 'JPG',
    fileVersion: 'v1',
    fileName: 'banner_nueva_web_v1.jpg',
    comments: [
      { id: 1, author: 'Cliente', role: 'cliente', time: 'Hace 8 días', text: 'El estilo lifestyle encaja a la perfección con el relanzamiento. La imagen y el copy transmiten exactamente la energía que queríamos. Podéis publicarlo.', color: '#6B6B6B' },
    ],
  },
  {
    id: 15,
    name: '',
    channel: 'facebook',
    campaign: 'Ohana',
    cliente: 'Nordika Home',
    status: 'produccion',
    pendienteDe: 'Ana R.',
    diseñador: 'Ana R.',
    deadline: _d(14),
    brief: 'Vídeo resumen del evento Ohana para Facebook. Duración estimada 60–90 segundos. Incluir momentos clave: llegada al rooftop, actividades de equipo, cena y despedida. Subtítulos en español obligatorios. Tono: cálido, auténtico y corporativo sin resultar formal. Publicación programada para el jueves a las 9h.',
    thumbnail: 'assets/images/imagen-15.png',
    image: 'assets/images/imagen-15.png',
    blocked: false,
    blockReason: '',
    copy: 'Una escapada para recordar. El evento Ohana fue mucho más que una reunión de equipo — fue una experiencia. 🧳 Desconexión, nuevas ideas y equipo unido. Vídeo resumen próximamente.',
    fileFormat: 'MP4',
    fileVersion: 'v1',
    fileName: 'video_evento_v1.mp4',
    comments: [
      { id: 1, author: 'Ana R.', role: 'produccion', time: 'Hace 3 h', text: 'Tengo el material del evento. Propongo publicarlo el jueves por la mañana para aprovechar el horario de mayor alcance en Facebook.', color: '#BE185D' },
    ],
  },
];

function getPieces() {
  const stored = localStorage.getItem('flowck_pieces');
  const raw = stored ? JSON.parse(stored).map(p => {
    const defaults = PIECES.find(d => d.id === p.id);
    if (!defaults) return p;
    const merged = { ...p };
    for (const key of Object.keys(defaults)) {
      if (merged[key] === undefined) merged[key] = defaults[key];
    }
    return merged;
  }) : PIECES;
  return raw.map(p => ({
    ...p,
    pendienteDe: PENDIENTE_NORMALIZE[p.pendienteDe] || p.pendienteDe,
  }));
}

function savePieces(pieces) {
  localStorage.setItem('flowck_pieces', JSON.stringify(pieces));
}

function getPieceById(id) {
  return getPieces().find(p => p.id === parseInt(id));
}

function getBlockedPieces() {
  return getPieces().filter(p => p.blocked);
}

function getActivePieces() {
  return getPieces().filter(p => p.status !== 'publicada');
}
