/* ── Channel SVG icons ──────────────────────────── */
/* Simple Icons paths (viewBox 0 0 24 24). LinkedIn omitted — not in Simple Icons (ToS). */
const _SI = {
  instagram: { hex: 'FF0069', path: 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077' },
  facebook:  { hex: '0866FF', path: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z' },
  tiktok:    { hex: '000000', path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
  x:         { hex: '000000', path: 'M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z' },
  youtube:   { hex: 'FF0000', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
};

function channelIcon(channel, dark) {
  // Light context: use branded SVG files for the main social networks
  if (!dark) {
    const BRANDED = { instagram: 'Instagram', facebook: 'Facebook', linkedin: 'LinkedIn', tiktok: 'TikTok', x: 'X' };
    if (BRANDED[channel]) {
      return `<span class="ch-icon" title="${BRANDED[channel]}"><img src="assets/icons/${channel}.svg" alt="${BRANDED[channel]}"></span>`;
    }
  }

  // Dark context: white Simple Icons on dark bg
  if (_SI[channel]) {
    const fill = dark ? '#FFFFFF' : '#' + _SI[channel].hex;
    const label = { instagram:'Instagram', facebook:'Facebook', tiktok:'TikTok', x:'X', youtube:'YouTube' }[channel] || channel;
    return `<span class="ch-icon" title="${label}"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="${_SI[channel].path}" fill="${fill}"/></svg></span>`;
  }

  /* LinkedIn dark context — white rounded rect with "in" calado (evenodd cutout) */
  if (channel === 'linkedin') {
    return `<span class="ch-icon" title="LinkedIn"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.4491 20.4495H16.8931V14.8804C16.8931 13.5525 16.8694 11.8429 15.0436 11.8429C13.1915 11.8429 12.9081 13.2899 12.9081 14.7838V20.4491H9.35213V8.99697H12.7658V10.562H12.8137C13.1553 9.97787 13.649 9.49732 14.2421 9.17154C14.8353 8.84577 15.5057 8.68697 16.1819 8.71206C19.7861 8.71206 20.4506 11.0828 20.4506 14.167L20.4491 20.4495ZM5.33963 7.43162C4.19991 7.43181 3.27581 6.508 3.27562 5.36828C3.27544 4.22856 4.19916 3.30447 5.33887 3.30428C6.47859 3.304 7.40269 4.22781 7.40287 5.36753C7.40297 5.91484 7.18566 6.43978 6.79872 6.82687C6.41179 7.21396 5.88694 7.4315 5.33963 7.43162ZM7.11769 20.4496H3.55791V8.99697H7.11759V20.4495L7.11769 20.4496ZM22.2219 0.00174674H1.77103C0.804469-0.00912826 0.0118125 0.765153 0 1.73172V22.2679C0.0114375 23.235 0.804 24.01 1.77094 23.9999H22.2219C23.1909 24.0119 23.9866 23.2368 24 22.2679V1.73012C23.9862 0.761684 23.1905-0.0125033 22.2219 0.00015299" fill="#FFFFFF"/></svg></span>`;
  }

  /* Email — unchanged */
  if (channel === 'email') {
    return `<span class="ch-icon" title="Email" style="background:#4F46E5;overflow:hidden"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="#4F46E5"/><rect x="3" y="6" width="18" height="13" rx="2" stroke="white" stroke-width="1.5" fill="none"/><path d="M3 9L12 14L21 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></span>`;
  }

  /* Otro — unchanged */
  if (channel === 'otro') {
    return `<span class="ch-icon" title="Otro" style="background:#6B6B6B;overflow:hidden"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="#6B6B6B"/><circle cx="12" cy="12" r="8" stroke="white" stroke-width="1.5" fill="none"/><path d="M12 4C12 4 9 7.5 9 12C9 16.5 12 20 12 20" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M12 4C12 4 15 7.5 15 12C15 16.5 12 20 12 20" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M4 12H20" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></span>`;
  }

  return `<span class="ch-icon" style="background:#999"></span>`;
}

/* ── Status badge HTML ──────────────────────────── */
function statusBadge(status) {
  return `<span class="badge ${status}">${STATUS_LABELS[status] || status}</span>`;
}

/* ── Block badge HTML ───────────────────────────── */
function blockBadge(pieceId) {
  return `<button class="badge-block" onclick="showBlockPopover(event, ${pieceId})" title="Bloqueada">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
      <path d="M12 9v4"/>
      <path d="M12 17h.01"/>
    </svg>
  </button>`;
}

/* ── Format deadline ────────────────────────────── */
function formatDeadline(dateStr, status) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  const now = new Date();
  now.setHours(0,0,0,0);
  const diff = Math.round((d - now) / 86400000);
  const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  const label = `${d.getDate()} ${months[d.getMonth()]}`;
  const urgent = status !== 'publicada' && diff <= 3;
  return `<span class="cell-deadline${urgent ? ' urgent' : ''}">${label}</span>`;
}

/* ── Sidebar HTML ───────────────────────────────── */
function renderSidebar(active) {
  const blockedCount = getBlockedPieces().length;
  const ws = getWorkspace();
  const words = (ws.name || '').trim().split(/\s+/);
  const initials = words.length >= 2
    ? (words[0][0] + words[1][0]).toUpperCase()
    : (ws.name || 'W').slice(0, 2).toUpperCase();
  return `
  <aside class="sidebar">
    <div class="sidebar-brand">Flowck</div>
    <div class="sidebar-workspace">
      <div class="sidebar-workspace-logo" style="background:${ws.color || '#F59E0B'}">${initials}</div>
      <span class="sidebar-workspace-name">${ws.name || 'Workspace'}</span>
    </div>
    <nav class="sidebar-nav">
      <a href="index.html" class="nav-item ${active==='piezas'?'active':''}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/>
          <rect x="14" y="14" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/>
        </svg>
        Piezas
      </a>
      <a href="bloqueos.html" class="nav-item ${active==='bloqueos'?'active':''}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
          <path d="M12 9v4"/>
          <path d="M12 17h.01"/>
        </svg>
        Bloqueos
        ${blockedCount > 0 ? `<span class="nav-badge">${blockedCount}</span>` : ''}
      </a>
    </nav>
    <div class="sidebar-bottom">
      <a href="ajustes.html" class="nav-item ${active==='ajustes'?'active':''}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
        </svg>
        Ajustes
      </a>
    </div>
  </aside>`;
}

/* ── Page topbar HTML ───────────────────────────── */
const PROFILE_FULL_NAME = 'María García';

function renderTopbar() {
  const unread = getNotifications().filter(n => !n.read).length;
  const me = USERS[0];
  const initials = me.name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const roleLabel = ROLE_LABELS[me.role] || me.role;
  return `
  <header class="page-topbar">
    <button class="topbar-bell-btn" id="notifBellBtn" title="Notificaciones">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
      </svg>
      <span class="topbar-notif-badge" id="notifBadge" style="display:${unread > 0 ? 'flex' : 'none'}">${unread}</span>
    </button>
    <div class="profile-avatar-wrap" id="profileAvatarWrap">
      <button class="topbar-avatar" id="profileAvatarBtn" style="background:${me.color}" title="Perfil">${initials}</button>
      <div class="profile-dropdown" id="profileDropdown">
        <div class="profile-dropdown-header">
          <div class="profile-dropdown-avatar" style="background:${me.color}">${initials}</div>
          <div class="profile-dropdown-info">
            <span class="profile-dropdown-name">${PROFILE_FULL_NAME}</span>
            <span class="member-role">${roleLabel}</span>
          </div>
        </div>
        <div class="dropdown-sep"></div>
        <div class="dropdown-item danger" id="profileSignOutBtn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Cerrar sesión
        </div>
      </div>
    </div>
  </header>
  <div class="notif-panel" id="notifPanel">
    <div class="notif-panel-header">
      <span class="notif-panel-title">Notificaciones</span>
      <button class="btn btn-primary btn-sm" id="notifMarkAllBtn">Marcar todas como leídas</button>
      <button class="notif-close-btn" id="notifCloseBtn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="notif-list" id="notifList"></div>
  </div>`;
}

/* ── Notifications data & helpers ───────────────── */
const NOTIF_DEFAULTS = [
  { id:'n1', pieceId:3,  text:'Julia B. comentó en "Reel de presentación del producto más destacado"',         date:'2026-06-18T09:00:00', read:false },
  { id:'n2', pieceId:13, text:'La pieza "Infografía explicativa del proceso de onboarding" ha sido bloqueada', date:'2026-06-18T07:00:00', read:false },
  { id:'n3', pieceId:9,  text:'Carlos R. comentó en "Vídeo testimonial cliente"',                              date:'2026-06-17T16:00:00', read:false },
  { id:'n4', pieceId:3,  text:'Ana R. comentó en "Reel de presentación del producto más destacado"',           date:'2026-06-17T11:00:00', read:false },
  { id:'n5', pieceId:3,  text:'El estado de "Reel de presentación del producto" cambió a "En revisión"',       date:'2026-06-16T10:00:00', read:false },
  { id:'n6', pieceId:13, text:'Carlos R. comentó en "Infografía explicativa del proceso de onboarding"',       date:'2026-06-15T14:00:00', read:false },
  { id:'n7', pieceId:9,  text:'La pieza "Vídeo testimonial cliente" ha sido bloqueada',                        date:'2026-06-12T11:00:00', read:true  },
  { id:'n8', pieceId:9,  text:'El estado de "Vídeo testimonial cliente" cambió a "En revisión"',               date:'2026-06-10T09:00:00', read:true  },
];

function getNotifications() {
  const stored = localStorage.getItem('flowck_notifications');
  if (!stored) { const d = NOTIF_DEFAULTS.map(n => ({...n})); saveNotifications(d); return d; }
  return JSON.parse(stored);
}

function saveNotifications(notifs) {
  localStorage.setItem('flowck_notifications', JSON.stringify(notifs));
}

function formatNotifTime(dateStr) {
  const d = new Date(dateStr);
  const diffH = Math.floor((Date.now() - d) / 3600000);
  const diffD = Math.floor((Date.now() - d) / 86400000);
  if (diffH < 1) return 'Ahora';
  if (diffH < 24) return `Hace ${diffH}h`;
  if (diffD < 7) return `Hace ${diffD}d`;
  const m = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  return `${d.getDate()} ${m[d.getMonth()]}`;
}

function updateNotifBadge() {
  const badge = document.getElementById('notifBadge');
  if (!badge) return;
  const count = getNotifications().filter(n => !n.read).length;
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function renderNotifList() {
  const list = document.getElementById('notifList');
  if (!list) return;
  const notifs = getNotifications();
  const unreadCount = notifs.filter(n => !n.read).length;
  if (notifs.length === 0) {
    list.innerHTML = `<div class="notif-empty">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
      </svg>
      <span>No tienes notificaciones</span>
    </div>`;
  } else {
    list.innerHTML = notifs.map(n => `<div class="notif-item${n.read ? ' notif-read' : ''}" data-id="${n.id}" data-piece="${n.pieceId}">
      <span class="notif-dot${n.read ? ' read' : ''}"></span>
      <div class="notif-content">
        <p class="notif-text">${n.text}</p>
        <span class="notif-time">${formatNotifTime(n.date)}</span>
      </div>
    </div>`).join('');
  }
  const markAllBtn = document.getElementById('notifMarkAllBtn');
  if (markAllBtn) markAllBtn.disabled = unreadCount === 0;
  updateNotifBadge();
}

function openNotifPanel() {
  document.getElementById('notifPanel')?.classList.add('open');
  renderNotifList();
}

function closeNotifPanel() {
  document.getElementById('notifPanel')?.classList.remove('open');
}

/* ── Navigation helper ──────────────────────────── */
function goToDetail(id) {
  window.location.href = 'detalle.html#' + id;
}

/* ── Default "Pendiente de" por estado ─────────────── */
function getDefaultPendiente(p) {
  const manager = (USERS.find(u => u.role === 'manager') || {}).name || 'María G.';
  if (p.status === 'publicada' || p.status === 'solicitada') return '—';
  if (p.status === 'revision') return p.cliente ? 'Cliente' : manager;
  /* produccion, aprobada → el asignado */
  return (p.diseñador && p.diseñador !== 'Sin asignar') ? p.diseñador : '—';
}

/* ── Close all open dropdowns/popovers ──────────── */
function closeAll() {
  document.querySelectorAll('.dropdown-menu.open, .status-dropdown-menu.open, .filter-dropdown-menu.open').forEach(el => el.classList.remove('open'));
  const pop = document.getElementById('blockPopover');
  if (pop) pop.classList.remove('open');
}

/* Los menús ···/filtro se posicionan con position:fixed calculado al abrirse;
   si el contenedor hace scroll, esa posición queda obsoleta. Los cerramos. */
document.addEventListener('DOMContentLoaded', function() {
  const scrollable = document.querySelector('.content');
  if (scrollable) scrollable.addEventListener('scroll', closeAll, { passive: true });

  /* Bell button */
  const bellBtn = document.getElementById('notifBellBtn');
  if (bellBtn) bellBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const panel = document.getElementById('notifPanel');
    if (panel?.classList.contains('open')) closeNotifPanel();
    else openNotifPanel();
  });

  /* Close button */
  const closeBtn = document.getElementById('notifCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    closeNotifPanel();
  });

  /* Mark all as read */
  const markAllBtn = document.getElementById('notifMarkAllBtn');
  if (markAllBtn) markAllBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const notifs = getNotifications().map(n => ({ ...n, read: true }));
    saveNotifications(notifs);
    renderNotifList();
  });

  /* Click on notification item */
  const notifList = document.getElementById('notifList');
  if (notifList) notifList.addEventListener('click', function(e) {
    const item = e.target.closest('.notif-item');
    if (!item) return;
    const id = item.dataset.id;
    const pieceId = parseInt(item.dataset.piece, 10);
    const notifs = getNotifications().map(n => n.id === id ? { ...n, read: true } : n);
    saveNotifications(notifs);
    closeNotifPanel();
    window.location.href = 'detalle.html#' + pieceId;
  });

  updateNotifBadge();

  /* Profile avatar dropdown */
  const avatarBtn = document.getElementById('profileAvatarBtn');
  if (avatarBtn) avatarBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    closeNotifPanel();
    document.getElementById('profileDropdown')?.classList.toggle('open');
  });

  const signOutBtn = document.getElementById('profileSignOutBtn');
  if (signOutBtn) signOutBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('profileDropdown')?.classList.remove('open');
    showToast('Sesión cerrada');
  });
});

function showToast(text) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.classList.add('visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('visible'), 2400);
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown') &&
      !e.target.closest('.status-dropdown') &&
      !e.target.closest('.badge-block') &&
      !e.target.closest('#blockPopover') &&
      !e.target.closest('#filterDropdown') &&
      !e.target.closest('.col-filterable')) {
    closeAll();
  }
  /* Close notif panel on outside click */
  if (!e.target.closest('#notifPanel') && !e.target.closest('#notifBellBtn')) {
    closeNotifPanel();
  }
  /* Close profile dropdown on outside click */
  if (!e.target.closest('#profileAvatarWrap')) {
    document.getElementById('profileDropdown')?.classList.remove('open');
  }
});

/* ── Block popover ──────────────────────────────── */
function showBlockPopover(e, pieceId) {
  e.stopPropagation();
  const piece = getPieceById(pieceId);
  if (!piece || !piece.blocked) return;

  const pop = document.getElementById('blockPopover');
  if (!pop) return;

  if (pop.classList.contains('open')) { pop.classList.remove('open'); return; }

  document.getElementById('popViewLink').href = `bloqueos.html#h${pieceId}`;

  closeAll();

  const rect = e.target.getBoundingClientRect();
  const left = Math.min(rect.left, window.innerWidth - 310);
  pop.style.left = Math.max(left, 10) + 'px';

  pop.style.visibility = 'hidden';
  pop.classList.add('open');
  const popH = pop.offsetHeight;
  pop.style.visibility = '';

  const spaceBelow = window.innerHeight - rect.bottom;
  pop.style.top = (spaceBelow < popH + 8 ? rect.top - popH - 8 : rect.bottom + 8) + 'px';
}

function formatDeadlinePlain(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  return `${d.getDate()} ${months[d.getMonth()]}`;
}


/* ── Mini Calendar ──────────────────────────────── */
class MiniCalendar {
  static _getPopover() {
    if (!MiniCalendar._pop) {
      const el = document.createElement('div');
      el.className = 'cal-popover';
      document.body.appendChild(el);
      MiniCalendar._pop = el;
      document.addEventListener('click', () => MiniCalendar._close());
    }
    return MiniCalendar._pop;
  }

  static _close() {
    if (MiniCalendar._pop) MiniCalendar._pop.classList.remove('open');
    MiniCalendar._inst = null;
  }

  constructor(btnEl, onChange) {
    this._btn      = btnEl;
    this._lbl      = btnEl.querySelector('.cal-btn-text');
    this._onChange = onChange;
    this._selected = null;
    const now = new Date();
    this._y = now.getFullYear();
    this._m = now.getMonth();

    btnEl.addEventListener('click', e => {
      e.stopPropagation();
      const pop = MiniCalendar._getPopover();
      if (MiniCalendar._inst === this && pop.classList.contains('open')) {
        MiniCalendar._close(); return;
      }
      MiniCalendar._inst = this;
      this._render(pop);
      const r = btnEl.getBoundingClientRect();
      pop.style.top   = (r.bottom + 4) + 'px';
      pop.style.left  = r.left + 'px';
      pop.style.width = Math.max(r.width, 240) + 'px';
      pop.classList.add('open');
    });
  }

  _render(pop) {
    const MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const DAYS   = ['Lu','Ma','Mi','Ju','Vi','Sa','Do'];
    const first  = new Date(this._y, this._m, 1);
    const last   = new Date(this._y, this._m + 1, 0).getDate();
    const prevM  = new Date(this._y, this._m, 0).getDate();
    let dow = first.getDay(); dow = dow === 0 ? 6 : dow - 1;
    const today = new Date(); today.setHours(0, 0, 0, 0);

    let cells = DAYS.map(d => `<div class="cal-dn">${d}</div>`).join('');
    for (let i = dow - 1; i >= 0; i--)
      cells += `<div class="cal-d other">${prevM - i}</div>`;
    for (let d = 1; d <= last; d++) {
      const dt     = new Date(this._y, this._m, d);
      const sel    = this._selected;
      const isSel  = sel && sel.getFullYear()===this._y && sel.getMonth()===this._m && sel.getDate()===d;
      const isTdy  = dt.getTime() === today.getTime();
      const v = `${this._y}-${String(this._m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      cells += `<div class="cal-d${isSel?' sel':''}${isTdy?' today':''}" data-v="${v}">${d}</div>`;
    }
    const total = dow + last, rem = total % 7 ? 7 - (total % 7) : 0;
    for (let d = 1; d <= rem; d++) cells += `<div class="cal-d other">${d}</div>`;

    pop.innerHTML = `
      <div class="cal-hd">
        <button class="cal-nav" data-n="-1">&#8249;</button>
        <span class="cal-lbl">${MONTHS[this._m]} ${this._y}</span>
        <button class="cal-nav" data-n="1">&#8250;</button>
      </div>
      <div class="cal-grid">${cells}</div>`;

    pop.querySelectorAll('[data-n]').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      this._m += +b.dataset.n;
      if (this._m > 11) { this._m = 0; this._y++; }
      if (this._m <  0) { this._m = 11; this._y--; }
      this._render(pop);
    }));
    pop.querySelectorAll('[data-v]').forEach(cell => cell.addEventListener('click', e => {
      e.stopPropagation();
      const v = cell.dataset.v;
      this._selected = new Date(v + 'T00:00:00');
      const s  = this._selected;
      const MN = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
      this._lbl.textContent = `${s.getDate()} ${MN[s.getMonth()]} ${s.getFullYear()}`;
      this._btn.classList.remove('empty');
      MiniCalendar._close();
      if (this._onChange) this._onChange(v);
    }));
  }

  reset() {
    this._selected = null;
    const n = new Date();
    this._y = n.getFullYear();
    this._m = n.getMonth();
    this._lbl.textContent = 'Selecciona una fecha';
    this._btn.classList.add('empty');
    MiniCalendar._close();
  }

  setValue(dateStr) {
    if (!dateStr) { this.reset(); return; }
    this._selected = new Date(dateStr + 'T00:00:00');
    this._y = this._selected.getFullYear();
    this._m = this._selected.getMonth();
    const MN = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    this._lbl.textContent = `${this._selected.getDate()} ${MN[this._selected.getMonth()]} ${this._selected.getFullYear()}`;
    this._btn.classList.remove('empty');
  }

  getValue() {
    if (!this._selected) return '';
    const d = this._selected;
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }
}
MiniCalendar._pop  = null;
MiniCalendar._inst = null;

/* ── Icon Select (dropdown puro icono+texto) ──────── */
class IconSelect {
  static _getPopover() {
    if (!IconSelect._pop) {
      const el = document.createElement('div');
      el.className = 'select-popover';
      document.body.appendChild(el);
      IconSelect._pop = el;
      document.addEventListener('click', () => IconSelect._close());
    }
    return IconSelect._pop;
  }

  static _close() {
    if (IconSelect._pop) IconSelect._pop.classList.remove('open');
    IconSelect._inst = null;
  }

  constructor(btnEl, options, onChange) {
    this._btn      = btnEl;
    this._content  = btnEl.querySelector('.select-btn-content');
    this._options  = options; // [{ value, label, iconHtml }]
    this._onChange = onChange;
    this._value    = null;
    this._placeholder = this._content.textContent;

    btnEl.addEventListener('click', e => {
      e.stopPropagation();
      const pop = IconSelect._getPopover();
      if (IconSelect._inst === this && pop.classList.contains('open')) {
        IconSelect._close(); return;
      }
      IconSelect._inst = this;
      this._render(pop);
      const r = btnEl.getBoundingClientRect();
      pop.style.top   = (r.bottom + 4) + 'px';
      pop.style.left  = r.left + 'px';
      pop.style.width = Math.max(r.width, 180) + 'px';
      pop.classList.add('open');
    });
  }

  _render(pop) {
    pop.innerHTML = this._options.map(o => `
      <div class="select-option-row${this._value===o.value?' sel':''}" data-v="${o.value}">
        ${o.iconHtml || ''}<span>${o.label}</span>
      </div>`).join('');
    pop.querySelectorAll('[data-v]').forEach(row => row.addEventListener('click', e => {
      e.stopPropagation();
      this.setValue(row.dataset.v, true);
      IconSelect._close();
    }));
  }

  setValue(v, fireChange) {
    const opt = this._options.find(o => o.value === v);
    this._value = opt ? v : null;
    if (opt) {
      this._content.innerHTML = `${opt.iconHtml || ''}<span>${opt.label}</span>`;
      this._btn.classList.remove('empty');
    } else {
      this._content.textContent = this._placeholder;
      this._btn.classList.add('empty');
    }
    if (fireChange && this._onChange) this._onChange(this._value);
  }

  reset() {
    this._value = null;
    this._content.textContent = this._placeholder;
    this._btn.classList.add('empty');
  }

  getValue() { return this._value; }
}
IconSelect._pop  = null;
IconSelect._inst = null;
