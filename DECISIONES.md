# DECISIONES — Flowck
Referencia técnica de implementación. Lee este archivo junto al PRD antes de tocar código.

---

## Stack y estructura de archivos

- HTML + CSS + JS vanilla. Sin frameworks.
- `index.html` — Piezas
- `bloqueos.html` — Bloqueos
- `detalle.html` — Detalle de pieza
- `ajustes.html` — Ajustes
- `css/styles.css` — todos los estilos
- `js/data.js` — datos, usuarios, configuración
- `js/app.js` — lógica compartida (renderSidebar, renderTopbar, helpers)
- Desplegado en Vercel: `flowck.vercel.app` · Repositorio en GitHub

---

## Equipo de demo

| Nombre | Rol | Color avatar |
|---|---|---|
| María G. | Manager | #3A7BD5 |
| Carlos R. | Content | #059669 |
| Julia B. | Content | #7C3AED |
| Ana R. | Diseño | #BE185D |
| David M. | Social Media | #EA580C |
| Cliente | Cliente | #6B6B6B |

**Workspace:** Pulse Agency · Logo PA · Color #F59E0B

---

## Paleta exacta

| Token | Valor |
|---|---|
| Fondo general | #F5F5F3 |
| Superficies | #FFFFFF |
| Sidebar y topbar | #1C1C1E |
| Separadores sidebar | #2C2C2E |
| Texto principal | #1C1C1E |
| Texto secundario | #6B6B6B |
| Texto muted | #9B9B97 |
| Texto sobre fondo oscuro | #F0F0F0 |
| Bordes | #E5E5E3 |

**Badges de estado:**
| Estado | Fondo | Texto |
|---|---|---|
| Solicitada | #EDE9FE | #5B21B6 |
| En producción | #FFEDD5 | #9A3412 |
| En revisión | #FEF9C3 | #854D0E |
| Aprobada | #DCFCE7 | #166534 |
| Publicada | #EDE9FE | #3730A3 |

**Badge bloqueo:** fondo #FEE2E2 · icono y texto #DC2626
**Botón Marcar como resuelto:** fondo #F87171 · texto blanco
**Botón Eliminar:** fondo #DC2626 · texto blanco

---

## Lógica de estados

**Asignación automática al crear pieza:**
- Sin archivo + con responsable → **En producción**
- Sin archivo + sin responsable → **Solicitada**
- Con archivo → **En revisión**
- Al subir archivo desde detalle (pieza en Solicitada/En producción) → **En revisión**

**Transiciones:** solo hacia adelante. El desplegable muestra todos los estados futuros disponibles (no solo el siguiente). No muestra el estado actual.

**Quién cambia cada estado:**
- Solicitada, En producción, En revisión → cualquier usuario (control social)
- Aprobada → el manager la cambia a Publicada
- Publicada → estado final, sin más transiciones

**Menú ··· según estado:**
| Estado | Opciones disponibles |
|---|---|
| Solicitada, En producción, En revisión | Cambiar estado + Editar + Eliminar |
| Aprobada | Cambiar estado + Eliminar |
| Publicada | Solo Eliminar |

---

## Pantalla Piezas (index.html)

**Columnas de la tabla:**
Miniatura · Nombre · Canal (solo icono) · Campaña · Cliente (condicional) · Estado + badge bloqueo · Pendiente de · Deadline · Acciones (···)

**Columna Cliente:** condicional — solo se renderiza si al menos una pieza tiene cliente asignado.

**Tabs:** Activas (excluye Publicadas) / Mi trabajo / Todas

**Ordenación:** automática por deadline más próximo en todos los tabs.

**Filtros por columna:**
- Canal, Estado, Pendiente de → desplegable con checkboxes, sin buscador interno
- Campaña, Cliente → desplegable con checkboxes + buscador interno
- Badge numérico en header cuando hay filtros activos: fondo #1C1C1E, texto blanco

**Búsqueda:** solo en la search bar superior, no en columna Nombre.

**Modal Nueva pieza (inteligente):**
- Sin archivo: muestra Asignado a + Brief, oculta Copy. Botón: "Crear solicitud"
- Con archivo: oculta Asignado a + Brief, muestra Copy. Botón: "Añadir pieza"
- Canal: desplegable puro con icono + texto. Opciones: Instagram, LinkedIn, Facebook, TikTok, X, Email, YouTube, Otro (icono globo #6B6B6B)
- Asignado a: desplegable con miembros del equipo + "Sin asignar". Sin Cliente.
- Orden campos: Nombre → Canal+Campaña → Cliente+Deadline → Asignado a/Brief → separador → Archivo → Copy
- "Sin asignar" se muestra en #C0C0BC en la tabla

**Modal Editar pieza:**
- Mismo modal pre-rellenado
- Solo disponible si estado es Solicitada, En producción o En revisión
- Archivo: nombre actual + texto clicable "Reemplazar archivo" + X para eliminar

**Popup eliminar:** modal propio (no window.confirm). Botón "Eliminar" en #DC2626.

**Dropdown ··· en últimas filas:** se abre hacia arriba si no hay espacio debajo.

---

## Pantalla Bloqueos (bloqueos.html)

- Grid 2 columnas, ordenadas por deadline más próximo
- Cada card: thumbnail izquierda (1/3 ancho), contenido derecha
- Badge deadline arriba derecha formato "Vence 12 jun", color rojo
- Motivo bloqueo en área con fondo #FFF5F5
- Footer: Pendiente de + badge estado
- Botón "Marcar como resuelto": fondo #F87171, texto blanco, ancho completo
- Al resolver: modal de confirmación con nota opcional
- Sin borde lateral de color en las cards

---

## Pantalla Detalle (detalle.html)

**Topbar:** botón volver · nombre pieza centrado · badge estado (desplegable) · badge bloqueo si aplica

**Sidebar izquierda (oscura):**
1. Brief — solo si existe, solo lectura
2. Datos generales: Pendiente de, Subido por (solo si hay archivo), Deadline, Canal, Campaña
3. Bloqueo — solo si existe: motivo + botón resolver #F87171
4. Archivo: formato, versión incremental, nombre + descarga, "Subir nueva versión"

**Columna central:**
- Imagen: width 100%, height 460px, object-fit contain, fondo #F5F5F3
- Estado vacío: "Arrastra o haz clic para subir" + icono upload
- Copy: altura fija con scroll interno, editable directamente
- Autoguardado: indicador "Guardado ✓" en #9B9B97, aparece y desaparece

**Sidebar derecha (oscura):**
- Comentarios con avatar de color por usuario
- Badge de rol: fondo rgba(255,255,255,0.08), texto #C7C7CC
- Campo comentario + botón Enviar

---

## Pantalla Ajustes (ajustes.html)

- Sección Workspace: logo PA #F59E0B (40×40px, border-radius 8px en pantalla, 28×28px en sidebar) + nombre editable + Guardar
- Sección Equipo: lista con avatar+nombre+rol, Añadir miembro (modal: nombre + rol desplegable), eliminar con confirmación
- Cambios en equipo → se reflejan en desplegables "Asignado a" de toda la app
- Sidebar muestra workspace arriba: logo 28×28px + nombre blanco 13px medium

---

## Pendiente de construir

- **Notificaciones:** panel lateral desde icono campana. Lista de eventos recientes. Marcar como leídas. Badge rojo desaparece al leer.
- **Perfil:** panel lateral desde avatar. Nombre + rol. Opción cerrar sesión (visual, sin auth real).

---

## Notas importantes

- **Control social, no RBAC:** no hay restricciones técnicas por rol. Cualquier usuario puede cambiar cualquier estado.
- **localStorage:** los datos de demo se guardan en localStorage. Si hay datos corruptos o usuarios incorrectos ejecutar `localStorage.removeItem('flowck_pieces')` en consola y recargar.
- **Icono warning bloqueo:** triángulo con punto inferior, consistente en todas las pantallas.
- **Avatares:** color fijo por usuario definido en USERS array de data.js. Iniciales en blanco sobre fondo de color.
