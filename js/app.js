/* ── Channel SVG icons ──────────────────────────── */
let _iconSeq = 0;
function channelIcon(channel) {
  const s = ++_iconSeq;
  const icons = {
    instagram: `<span class="ch-icon" title="Instagram" style="border-radius:6px;overflow:hidden">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="ig_g0_${s}" cx="0" cy="1" r="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#FFD600"/>
            <stop offset="0.5" stop-color="#FF0100"/>
            <stop offset="1" stop-color="#D800B9"/>
          </radialGradient>
          <radialGradient id="ig_g1_${s}" cx="0.5" cy="1" r="0.7" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#FF6400"/>
            <stop offset="0.5" stop-color="#FF0100" stop-opacity="0"/>
            <stop offset="1" stop-color="#FF0100" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="ig_g2_${s}" cx="0.5" cy="0" r="1.2" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#8D00B3"/>
            <stop offset="1" stop-color="#8D00B3" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="ig_g3_${s}" cx="0.3" cy="0" r="1.5" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#FF6400"/>
            <stop offset="0.5" stop-color="#FF0100" stop-opacity="0"/>
            <stop offset="1" stop-color="#FF0100" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="5" fill="url(#ig_g0_${s})"/>
        <rect width="24" height="24" rx="5" fill="url(#ig_g1_${s})"/>
        <rect width="24" height="24" rx="5" fill="url(#ig_g2_${s})"/>
        <rect width="24" height="24" rx="5" fill="url(#ig_g3_${s})"/>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="white" stroke-width="1.5" fill="none"/>
        <circle cx="12" cy="12" r="4" stroke="white" stroke-width="1.5" fill="none"/>
        <circle cx="17" cy="7" r="1.2" fill="white"/>
      </svg></span>`,
    facebook: `<span class="ch-icon" title="Facebook" style="border-radius:50%;overflow:hidden">
      <svg width="24" height="24" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 13.5496C27 6.06638 20.9558 1.90735e-06 13.5 1.90735e-06C6.04417 1.90735e-06 0 6.06638 0 13.5496C0 19.9041 4.35861 25.236 10.2387 26.7002V17.6902H7.45492V13.5496H10.2387V11.7655C10.2387 7.1536 12.3182 5.01602 16.8293 5.01602C17.6846 5.01602 19.1603 5.1843 19.7641 5.35264V9.1061C19.4454 9.07245 18.892 9.05559 18.2044 9.05559C15.9908 9.05559 15.1355 9.89718 15.1355 12.0853V13.5496H19.5451L18.7876 17.6902H15.1355V27C21.8199 26.1897 27 20.4772 27 13.5496Z" fill="#0866FF"/>
      </svg></span>`,
    x: `<span class="ch-icon" title="X" style="background:#000;border-radius:6px;overflow:hidden">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.2833 10.1571L23.2178 0H21.1006L13.3427 8.81931L7.14656 0H0L9.36984 13.3364L0 23.9877H2.11732L10.3098 14.6742L16.8534 23.9877H24L14.2827 10.1571H14.2833ZM11.3833 13.4538L10.4339 12.1258L2.88022 1.55881H6.1323L12.2282 10.0867L13.1776 11.4147L21.1016 22.4998H17.8495L11.3833 13.4544V13.4538Z" fill="white"/>
      </svg></span>`,
    linkedin: `<span class="ch-icon" title="LinkedIn" style="border-radius:6px;overflow:hidden">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.4491 20.4495H16.8931V14.8804C16.8931 13.5525 16.8694 11.8429 15.0436 11.8429C13.1915 11.8429 12.9081 13.2899 12.9081 14.7838V20.4491H9.35213V8.99697H12.7658V10.562H12.8137C13.1553 9.97787 13.649 9.49732 14.2421 9.17154C14.8353 8.84577 15.5057 8.68697 16.1819 8.71206C19.7861 8.71206 20.4506 11.0828 20.4506 14.167L20.4491 20.4495ZM5.33963 7.43162C4.19991 7.43181 3.27581 6.508 3.27562 5.36828C3.27544 4.22856 4.19916 3.30447 5.33887 3.30428C6.47859 3.304 7.40269 4.22781 7.40287 5.36753C7.40297 5.91484 7.18566 6.43978 6.79872 6.82687C6.41179 7.21396 5.88694 7.4315 5.33963 7.43162ZM7.11769 20.4496H3.55791V8.99697H7.11759V20.4495L7.11769 20.4496ZM22.2219 0.00174674H1.77103C0.804469 -0.00912826 0.0118125 0.765153 0 1.73172V22.2679C0.0114375 23.235 0.804 24.01 1.77094 23.9999H22.2219C23.1909 24.0119 23.9866 23.2368 24 22.2679V1.73012C23.9862 0.761684 23.1905 -0.0125033 22.2219 0.00015299" fill="#0A66C2"/>
      </svg></span>`,
    tiktok: `<span class="ch-icon" title="TikTok" style="background:#000;border-radius:6px;overflow:hidden">
      <svg width="24" height="24" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.34533 10.6315V9.57769C8.98152 9.52825 8.61226 9.49777 8.2355 9.49777C3.69467 9.49777 0 13.1705 0 17.6851C0 20.455 1.39189 22.906 3.51617 24.3878C2.1454 22.925 1.30468 20.9657 1.30468 18.8134C1.30468 14.3638 4.89443 10.7351 9.34601 10.6315H9.34533Z" fill="#25F4EE"/>
        <path d="M9.53952 22.5525C11.5657 22.5525 13.2185 20.9501 13.2935 18.9542L13.301 1.12898H16.5766C16.5085 0.762586 16.471 0.386034 16.471 0H11.997L11.9895 17.8253C11.9145 19.8211 10.2617 21.4235 8.23552 21.4235C7.606 21.4235 7.0126 21.2671 6.49072 20.9941C7.17406 21.9362 8.28457 22.5525 9.53952 22.5525ZM22.696 7.17887V6.18805C21.4465 6.18805 20.2822 5.81895 19.3059 5.18572C20.1752 6.17789 21.3559 6.89375 22.696 7.17887Z" fill="#25F4EE"/>
        <path d="M19.3066 5.18571C18.3542 4.09872 17.7757 2.67988 17.7757 1.1283H16.5773C16.8928 2.82278 17.9045 4.27684 19.3066 5.18571ZM8.23555 13.946C6.16169 13.946 4.47412 15.6235 4.47412 17.6851C4.47412 19.1208 5.29372 20.3683 6.49076 20.9941C6.04451 20.3792 5.7788 19.6274 5.7788 18.8134C5.7788 16.7518 7.46637 15.0743 9.54024 15.0743C9.92721 15.0743 10.2985 15.1379 10.6501 15.247V10.706C10.2863 10.6566 9.91699 10.6261 9.54024 10.6261C9.47483 10.6261 9.41079 10.6295 9.34607 10.6308V14.118C8.99452 14.0089 8.62321 13.9453 8.23624 13.9453L8.23555 13.946Z" fill="#FE2C55"/>
        <path d="M22.6959 7.17886V10.6356C20.3761 10.6356 18.2259 9.89803 16.4709 8.64579V17.6851C16.4709 22.1996 12.7762 25.8717 8.2354 25.8717C6.48038 25.8717 4.85345 25.3218 3.51538 24.3878C5.01968 25.9936 7.16304 27 9.5394 27C14.0809 27 17.7749 23.3273 17.7749 18.8134V9.77477C19.5299 11.027 21.6801 11.7645 23.9999 11.7645V7.31635C23.5523 7.31635 23.1163 7.26826 22.6959 7.17886Z" fill="#FE2C55"/>
        <path d="M16.471 17.6851V8.64579C18.226 9.89803 20.3761 10.6356 22.696 10.6356V7.17886C21.3558 6.89374 20.1752 6.17856 19.3058 5.18571C17.9037 4.27684 16.892 2.82346 16.5766 1.1283H13.3009L13.2934 18.9536C13.2185 20.9494 11.5656 22.5518 9.53946 22.5518C8.28451 22.5518 7.174 21.9355 6.49066 20.9934C5.29362 20.367 4.47402 19.1195 4.47402 17.6844C4.47402 15.6228 6.16159 13.9453 8.23546 13.9453C8.62243 13.9453 8.99374 14.0089 9.34529 14.118V10.6308C4.8937 10.7344 1.30396 14.3632 1.30396 18.8127C1.30396 20.965 2.14467 22.9243 3.51544 24.3872C4.85282 25.3204 6.48044 25.871 8.23546 25.871C12.7763 25.871 16.471 22.1983 16.471 17.6844V17.6851Z" fill="black"/>
      </svg></span>`,
    youtube: `<span class="ch-icon" title="YouTube" style="background:#FF0000;border-radius:6px;overflow:hidden">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="#FF0000"/>
        <path d="M21.8 7.2C21.6 6.4 20.9 5.8 20.1 5.6C18.6 5.2 12 5.2 12 5.2C12 5.2 5.4 5.2 3.9 5.6C3.1 5.8 2.4 6.4 2.2 7.2C1.8 8.7 1.8 12 1.8 12C1.8 12 1.8 15.3 2.2 16.8C2.4 17.6 3.1 18.2 3.9 18.4C5.4 18.8 12 18.8 12 18.8C12 18.8 18.6 18.8 20.1 18.4C20.9 18.2 21.6 17.6 21.8 16.8C22.2 15.3 22.2 12 22.2 12C22.2 12 22.2 8.7 21.8 7.2Z" fill="white"/>
        <path d="M10 15.5V8.5L16 12L10 15.5Z" fill="#FF0000"/>
      </svg></span>`,
    email: `<span class="ch-icon" title="Email" style="background:#4F46E5;border-radius:6px;overflow:hidden">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="#4F46E5"/>
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="white" stroke-width="1.5" fill="none"/>
        <path d="M3 9L12 14L21 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      </svg></span>`,
    otro: `<span class="ch-icon" title="Otro" style="background:#6B6B6B;border-radius:6px;overflow:hidden">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="#6B6B6B"/>
        <circle cx="12" cy="12" r="8" stroke="white" stroke-width="1.5" fill="none"/>
        <path d="M12 4C12 4 9 7.5 9 12C9 16.5 12 20 12 20" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M12 4C12 4 15 7.5 15 12C15 16.5 12 20 12 20" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M4 12H20" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      </svg></span>`,
  };
  return icons[channel] || `<span class="ch-icon" style="background:#999;border-radius:6px"></span>`;
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
function formatDeadline(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  const now = new Date();
  now.setHours(0,0,0,0);
  const diff = Math.round((d - now) / 86400000);
  const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  const label = `${d.getDate()} ${months[d.getMonth()]}`;
  const urgent = diff <= 3;
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
  { id:'n1', pieceId:1,  text:'La pieza "Banner principal Q1" ha sido bloqueada',                              date:'2026-06-18T08:00:00', read:false },
  { id:'n2', pieceId:5,  text:'El bloqueo de "Story cuenta atrás" ha sido resuelto',                          date:'2026-06-18T05:00:00', read:false },
  { id:'n3', pieceId:4,  text:'El estado de "Newsletter mensual de julio" cambió a "En revisión"',             date:'2026-06-17T15:00:00', read:false },
  { id:'n4', pieceId:3,  text:'Carlos R. comentó en "Reel de presentación del producto"',                     date:'2026-06-16T10:00:00', read:false },
  { id:'n5', pieceId:10, text:'Has sido asignada a "Ads Google"',                                             date:'2026-06-15T09:00:00', read:false },
  { id:'n6', pieceId:6,  text:'Figuras como Pendiente de en "Carrusel de tips para sacar el máximo partido"', date:'2026-06-14T14:00:00', read:false },
  { id:'n7', pieceId:9,  text:'La pieza "Vídeo testimonial cliente" ha sido editada',                         date:'2026-06-12T11:00:00', read:true  },
  { id:'n8', pieceId:11, text:'Se ha subido un nuevo archivo a "Post de apertura de nuevo mercado europeo"',  date:'2026-06-10T09:00:00', read:true  },
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

  document.getElementById('popPieceName').textContent = piece.name;
  document.getElementById('popReason').textContent = piece.blockReason;
  document.getElementById('popPending').textContent = piece.pendienteDe;
  document.getElementById('popDeadline').textContent = formatDeadlinePlain(piece.deadline);
  document.getElementById('popViewLink').href = `bloqueos.html#h${pieceId}`;

  const rect = e.target.getBoundingClientRect();
  pop.style.top = (rect.bottom + 8) + 'px';
  const left = Math.min(rect.left, window.innerWidth - 310);
  pop.style.left = Math.max(left, 10) + 'px';

  if (pop.classList.contains('open')) { pop.classList.remove('open'); return; }
  closeAll();
  pop.classList.add('open');
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
