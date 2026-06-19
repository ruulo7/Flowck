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
  { name: 'Carlos R.', color: '#059669', role: 'content' },
  { name: 'Julia B.',  color: '#7C3AED', role: 'content' },
  { name: 'Ana R.',    color: '#BE185D', role: 'diseño'   },
  { name: 'David M.',  color: '#EA580C', role: 'social'   },
  { name: 'Cliente',   color: '#6B6B6B', role: 'cliente'  },
];

const ROLE_LABELS = {
  manager: 'Manager',
  content: 'Content',
  diseño:  'Diseño',
  social:  'Social Media',
  cliente: 'Cliente',
};

const AVATAR_PALETTE = ['#0891B2','#B45309','#6D28D9','#0F766E','#BE123C','#1D4ED8','#854D0E','#065F46'];

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

const PIECES = [
  {
    id: 1,
    name: 'Banner principal Q1',
    channel: 'instagram',
    campaign: 'Verano 2025',
    cliente: 'Nike',
    status: 'solicitada',
    pendienteDe: 'Julia',
    diseñador: 'Carlos R.',
    deadline: '2026-06-12',
    brief: 'Banner para el lanzamiento de la colección de verano Q1. Debe transmitir energía, color y exclusividad. Formato cuadrado para feed de Instagram. CTA claro hacia la landing de producto. Tono: aspiracional pero cercano.',
    thumbnail: 'https://picsum.photos/seed/flowck1/64/64',
    image: 'https://picsum.photos/seed/flowck1/900/560',
    blocked: true,
    blockedSince: '2026-06-05',
    blockLabel: 'Esperando cliente',
    blockReason: 'Pendiente de aprobación del cliente para los copies finales antes de pasar a producción.',
    copy: 'El verano que esperabas ya está aquí. Descubre la nueva colección Q1 y encuentra tu estilo para la temporada. Diseñado para vivir cada momento al máximo.',
    fileFormat: 'JPG',
    fileVersion: 'v2',
    fileName: 'banner_q1_v2.jpg',
    comments: [
      { id: 1, author: 'María G.',  role: 'manager', time: 'Hace 2d', text: 'Necesitamos que el cliente apruebe los textos antes del viernes. Ya les he enviado el brief pero siguen sin responder.', color: '#3A7BD5' },
      { id: 2, author: 'Carlos R.', role: 'content', time: 'Hace 1d', text: 'He actualizado el copy con tono más veraniego y el CTA al final como pediste. Quedo pendiente de validación.', color: '#059669' },
      { id: 3, author: 'Cliente',   role: 'cliente', time: 'Hace 6h', text: 'El texto me convence más. Podríais acortar un poco la primera frase y enviarme la versión definitiva para dar el ok.', color: '#6B6B6B' },
    ],
  },
  {
    id: 2,
    name: 'Bienvenida para nuevos usuarios de la app',
    channel: 'facebook',
    campaign: 'Onboarding',
    status: 'produccion',
    pendienteDe: 'Carlos',
    diseñador: 'María G.',
    deadline: '2026-06-15',
    brief: 'Pieza de bienvenida para nuevos usuarios que acaban de activar su cuenta. Debe ser cálida, clara y funcional. Incluir el logo de la app en primer plano y un mensaje de activación. Formato horizontal para Facebook feed.',
    thumbnail: 'https://picsum.photos/seed/flowck2/64/64',
    image: 'https://picsum.photos/seed/flowck2/900/560',
    blocked: false,
    blockReason: '',
    copy: 'Bienvenido a bordo 🎉 Empieza a sacar el máximo partido a tu nueva herramienta desde el primer día.',
    fileFormat: 'PNG',
    fileVersion: 'v1',
    fileName: 'bienvenida_v1.png',
    comments: [
      { id: 1, author: 'María G.', role: 'manager', time: 'Hace 3 h', text: 'El diseño está muy bien. Solo ajustar el tamaño del logo a la parte superior.', color: '#3A7BD5' },
    ],
  },
  {
    id: 3,
    name: 'Reel de presentación del producto más destacado',
    channel: 'instagram',
    campaign: 'Lanzamiento',
    status: 'revision',
    pendienteDe: 'Julia',
    deadline: '2026-06-19',
    thumbnail: 'https://picsum.photos/seed/flowck3/64/64',
    image: 'https://picsum.photos/seed/flowck3/900/560',
    blocked: false,
    blockReason: '',
    copy: 'Te presentamos nuestro producto más esperado. Diseñado para quienes no se conforman con lo ordinario. 🚀',
    fileFormat: 'MP4',
    fileVersion: 'v2',
    comments: [
      { id: 1, author: 'Julia B.', role: 'content', time: 'Hace 5 h', text: 'Versión v2 subida con las transiciones corregidas. Pendiente revisión final.', color: '#7C3AED' },
      { id: 2, author: 'Ana R.',   role: 'diseño',  time: 'Hace 3 h', text: 'He ajustado el motion en la transición central y equilibrado los colores del fondo. Creo que encaja mejor con el brief.', color: '#BE185D' },
      { id: 3, author: 'Cliente',  role: 'cliente', time: 'Hace 2 h', text: 'Mucho mejor que la v1. Solo revisar el audio en los últimos 3 segundos.', color: '#6B6B6B' },
    ],
  },
  {
    id: 4,
    name: 'Post de anuncio de expansión en LinkedIn',
    channel: 'linkedin',
    campaign: 'Lanzamiento',
    status: 'publicada',
    pendienteDe: '—',
    deadline: '2026-06-10',
    thumbnail: 'https://picsum.photos/seed/flowck4/64/64',
    image: 'https://picsum.photos/seed/flowck4/900/560',
    blocked: false,
    blockReason: '',
    copy: 'Hoy es un día especial: anunciamos nuestra expansión a tres nuevos mercados europeos. Gracias a todo el equipo. 🌍',
    fileFormat: 'JPG',
    fileVersion: 'v3',
    comments: [
      { id: 1, author: 'María G.', role: 'manager', time: 'Ayer', text: 'Publicada el lunes a las 9h. Buen engagement en las primeras horas.', color: '#3A7BD5' },
    ],
  },
  {
    id: 5,
    name: 'Story cuenta atrás',
    channel: 'tiktok',
    campaign: 'Verano 2025',
    status: 'revision',
    pendienteDe: 'Cliente',
    deadline: '2026-06-23',
    thumbnail: 'https://picsum.photos/seed/flowck5/64/64',
    image: 'https://picsum.photos/seed/flowck5/900/560',
    blocked: true,
    blockedSince: '2026-06-07',
    blockLabel: 'Sin respuesta del cliente',
    blockReason: 'El cliente no ha dado feedback desde hace 4 días.',
    copy: '5 días para el gran lanzamiento ⏳ ¿Estás listo? #cuentaatrás #verano',
    fileFormat: 'MP4',
    fileVersion: 'v1',
    comments: [
      { id: 1, author: 'Carlos R.', role: 'content', time: 'Hace 4 días', text: 'Enviada para revisión del cliente. Pendiente de respuesta.', color: '#059669' },
    ],
  },
  {
    id: 6,
    name: 'Newsletter mensual de julio con novedades',
    channel: 'facebook',
    campaign: 'Comunicación',
    status: 'aprobada',
    pendienteDe: 'Julia',
    deadline: '2026-06-23',
    thumbnail: 'https://picsum.photos/seed/flowck6/64/64',
    image: 'https://picsum.photos/seed/flowck6/900/560',
    blocked: false,
    blockReason: '',
    copy: 'Julio llega cargado de novedades. Descubre todo lo que hemos preparado para ti este mes. 📬',
    fileFormat: 'HTML',
    fileVersion: 'v2',
    comments: [
      { id: 1, author: 'María G.', role: 'manager', time: 'Ayer', text: 'Aprobada. Julia puede proceder con el envío el día 1 de julio.', color: '#3A7BD5' },
      { id: 2, author: 'Julia B.', role: 'content', time: 'Ayer', text: 'Perfecto, lo programo para el 1 de julio a las 8:00h.', color: '#7C3AED' },
    ],
  },
  {
    id: 7,
    name: 'Carrusel de tips para sacar el máximo partido',
    channel: 'instagram',
    campaign: 'Onboarding',
    cliente: 'Banco XYZ',
    status: 'produccion',
    pendienteDe: 'Ana R.',
    deadline: '2026-06-25',
    thumbnail: 'https://picsum.photos/seed/flowck7/64/64',
    image: 'https://picsum.photos/seed/flowck7/900/560',
    blocked: false,
    blockReason: '',
    copy: '¿Sabías que puedes hacer todo esto con nuestra app? Te contamos los 5 trucos que cambiarán tu forma de trabajar. 💡',
    fileFormat: 'PNG',
    fileVersion: 'v1',
    comments: [
      { id: 1, author: 'Ana R.', role: 'diseño', time: 'Hace 1 d', text: 'Empezando con los diseños del carrusel. Voy a proponer 3 variantes de layout antes de decidir la dirección visual.', color: '#BE185D' },
    ],
  },
  {
    id: 8,
    name: 'Banner retargeting',
    channel: 'linkedin',
    campaign: 'Verano 2025',
    status: 'solicitada',
    pendienteDe: 'Julia',
    deadline: '2026-06-27',
    thumbnail: 'https://picsum.photos/seed/flowck8/64/64',
    image: 'https://picsum.photos/seed/flowck8/900/560',
    blocked: false,
    blockReason: '',
    copy: 'Aún estás a tiempo. Aprovecha las ofertas de verano antes de que se acaben. ⏰',
    fileFormat: 'JPG',
    fileVersion: 'v1',
    comments: [],
  },
  {
    id: 9,
    name: 'Vídeo testimonial cliente',
    channel: 'tiktok',
    campaign: 'Ohana',
    status: 'revision',
    pendienteDe: 'Cliente',
    deadline: '2026-06-28',
    thumbnail: 'https://picsum.photos/seed/flowck9/64/64',
    image: 'https://picsum.photos/seed/flowck9/900/560',
    blocked: true,
    blockedSince: '2026-06-03',
    blockLabel: 'Producción retrasada',
    blockReason: 'Esperando versión final del vídeo con subtítulos correctos.',
    copy: '"Desde que usamos este producto, nuestra productividad aumentó un 40%." — Sara M., directora de marketing',
    fileFormat: 'MP4',
    fileVersion: 'v2',
    comments: [
      { id: 1, author: 'María G.', role: 'manager', time: 'Hace 1 día', text: 'Los subtítulos tienen errores ortográficos. Necesita corrección antes de aprobar.', color: '#3A7BD5' },
      { id: 2, author: 'Carlos R.', role: 'content', time: 'Hace 22 h', text: 'Correcciones enviadas al equipo de producción. Pendiente nueva versión.', color: '#059669' },
    ],
  },
  {
    id: 10,
    name: 'Post de apertura de nuevo mercado europeo',
    channel: 'facebook',
    campaign: 'Lanzamiento',
    status: 'produccion',
    pendienteDe: 'Julia',
    deadline: '2026-06-29',
    thumbnail: 'https://picsum.photos/seed/flowck10/64/64',
    image: 'https://picsum.photos/seed/flowck10/900/560',
    blocked: false,
    blockReason: '',
    copy: 'Un nuevo capítulo comienza. Expandimos nuestro horizonte hacia Europa. 🌍 Próximamente más noticias.',
    fileFormat: 'JPG',
    fileVersion: 'v1',
    comments: [],
  },
  {
    id: 11,
    name: 'Ads Google',
    channel: 'x',
    campaign: 'Ohana',
    cliente: 'Telecom Plus',
    status: 'aprobada',
    pendienteDe: 'Carlos',
    deadline: '2026-06-30',
    thumbnail: 'https://picsum.photos/seed/flowck11/64/64',
    image: 'https://picsum.photos/seed/flowck11/900/560',
    blocked: false,
    blockReason: '',
    copy: 'Encuentra lo que buscas. La solución que tu equipo necesitaba. Pruébalo gratis.',
    fileFormat: 'PNG',
    fileVersion: 'v1',
    comments: [
      { id: 1, author: 'María G.', role: 'manager', time: 'Hace 2 días', text: 'Aprobados. Activar campañas el lunes 30.', color: '#3A7BD5' },
    ],
  },
  {
    id: 12,
    name: 'Story sorteo verano',
    channel: 'instagram',
    campaign: 'Sorteo 1 verano',
    status: 'solicitada',
    pendienteDe: 'David M.',
    deadline: '2026-07-02',
    thumbnail: 'https://picsum.photos/seed/flowck12/64/64',
    image: 'https://picsum.photos/seed/flowck12/900/560',
    blocked: false,
    blockReason: '',
    copy: '¡Participa en nuestro sorteo de verano! 🎁 Sigue las instrucciones en bio. Suerte a todos. #sorteo #verano',
    fileFormat: 'PNG',
    fileVersion: 'v1',
    comments: [
      { id: 1, author: 'David M.', role: 'social', time: 'Hace 2 h', text: 'Solicitud recibida. Voy a preparar la mecánica del sorteo y las instrucciones para bio antes de arrancar con el diseño.', color: '#EA580C' },
    ],
  },
  {
    id: 13,
    name: 'Infografía explicativa del proceso de onboarding',
    channel: 'linkedin',
    campaign: 'Onboarding',
    status: 'revision',
    pendienteDe: 'María',
    deadline: '2026-07-05',
    thumbnail: 'https://picsum.photos/seed/flowck13/64/64',
    image: 'https://picsum.photos/seed/flowck13/900/560',
    blocked: true,
    blockedSince: '2026-06-08',
    blockLabel: 'Cambios pendientes',
    blockReason: 'Cambios solicitados en el paso 3 del flujo aún sin incorporar.',
    copy: 'Así de sencillo es empezar con nosotros. 4 pasos, 10 minutos, todo listo. 📋',
    fileFormat: 'PDF',
    fileVersion: 'v2',
    comments: [
      { id: 1, author: 'María G.', role: 'manager', time: 'Hace 3 días', text: 'El paso 3 está mal representado. Revisar el flujo con el equipo de producto.', color: '#3A7BD5' },
      { id: 2, author: 'Carlos R.', role: 'content', time: 'Hace 2 días', text: 'Solicitado al equipo de producto. Esperando confirmación del flujo correcto.', color: '#059669' },
    ],
  },
  {
    id: 14,
    name: 'Banner nueva web',
    channel: 'x',
    campaign: 'Rebranding',
    status: 'publicada',
    pendienteDe: '—',
    deadline: '2026-06-08',
    thumbnail: 'https://picsum.photos/seed/flowck14/64/64',
    image: 'https://picsum.photos/seed/flowck14/900/560',
    blocked: false,
    blockReason: '',
    copy: 'Nueva web, mismo compromiso. Más rápida, más clara, más nuestra. Visítala ahora. 🌐',
    fileFormat: 'JPG',
    fileVersion: 'v1',
    comments: [],
  },
  {
    id: 15,
    name: 'Vídeo resumen evento corporativo',
    channel: 'facebook',
    campaign: 'Ohana',
    status: 'produccion',
    pendienteDe: 'Julia',
    deadline: '2026-07-08',
    thumbnail: 'https://picsum.photos/seed/flowck15/64/64',
    image: 'https://picsum.photos/seed/flowck15/900/560',
    blocked: false,
    blockReason: '',
    copy: 'Un evento para recordar. Gracias a todos los que formaron parte de este día tan especial. 🎥',
    fileFormat: 'MP4',
    fileVersion: 'v1',
    comments: [
      { id: 1, author: 'David M.', role: 'social', time: 'Hace 3 h', text: 'Tengo el material del evento. Propongo publicarlo el jueves por la mañana para aprovechar el horario de mayor alcance en Facebook.', color: '#EA580C' },
    ],
  },
];

function getPieces() {
  const stored = localStorage.getItem('flowck_pieces');
  if (!stored) return PIECES;
  const pieces = JSON.parse(stored);
  return pieces.map(p => {
    const defaults = PIECES.find(d => d.id === p.id);
    if (!defaults) return p;
    const merged = { ...p };
    for (const key of Object.keys(defaults)) {
      if (merged[key] === undefined) merged[key] = defaults[key];
    }
    return merged;
  });
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
