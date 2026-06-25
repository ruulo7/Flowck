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

| Nombre completo | Nombre corto | Rol | Color avatar |
|---|---|---|---|
| María García | María G. | Manager | #3A7BD5 |
| Carlos Rodríguez | Carlos R. | Producción | #059669 |
| Julia Benítez | Julia B. | Producción | #7C3AED |
| Ana Ruiz | Ana R. | Producción | #BE185D |

- "Cliente" no es un miembro del workspace — es una entidad externa asociada a piezas concretas. No aparece en desplegables de "Asignado a" ni en el modal de "Añadir miembro".
- Nombre completo se usa en: lista de Equipo en ajustes.html, placeholder del campo "Nombre completo" en modal Añadir miembro.
- Formato "Nombre + Inicial." (ej. "María G.") se usa en el resto de la app.

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

**Badges de rol:**
- Mismo border-radius en todos los contextos (el definido en detalle.html)
- Texto en minúsculas en todos los contextos (ej. "Manager", "Producción", "Cliente")
- En fondo oscuro (detalle.html): fondo rgba(255,255,255,0.08), texto #C7C7CC
- En fondo claro (ajustes.html, dropdown perfil): fondo #F5F5F3, borde #E5E5E3, texto #6B6B6B

---

## Lógica de estados

**Estado inicial al crear pieza:**
- Sin archivo + con responsable → **En producción**
- Sin archivo + sin responsable → **Solicitada**
- Con archivo → **En revisión**
- Al subir archivo desde detalle (pieza en Solicitada/En producción) → **En revisión**

**Transiciones manuales:** el desplegable muestra todos los estados excepto el estado actual — tanto hacia adelante como hacia atrás. Cualquier usuario puede cambiar el estado en cualquier dirección (control social). No hay automatismos de cambio de estado por cambios en otros campos.

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

**Headers de tabla:** en minúsculas (nombre, canal, campaña, cliente, estado, pendiente de, deadline).

**Tabs:** Activas (excluye Publicadas) / Mi trabajo (filtra por "Pendiente de: María G.") / Todas

**Ordenación:** automática por deadline más próximo en todos los tabs.

**Filtros por columna:**
- Canal, Estado, Pendiente de → desplegable con checkboxes, sin buscador interno
- Campaña, Cliente → desplegable con checkboxes + buscador interno
- Badge numérico en header cuando hay filtros activos: fondo #1C1C1E, texto blanco

**Búsqueda:** solo en la search bar superior, no en columna Nombre.

**Modal Nueva pieza (inteligente):**
- Sin archivo: muestra Asignado a + Brief, oculta Copy. Botón: "Crear solicitud"
- Con archivo: oculta Asignado a + Brief, muestra Copy. Botón: "Añadir pieza"
- Canal: desplegable con iconos de Simple Icons. Opciones: Instagram, LinkedIn, Facebook, TikTok, X, Email, YouTube, Otro (icono globo #6B6B6B)
- Asignado a: desplegable con miembros del equipo + "Sin asignar". Sin Cliente.
- Orden campos: Nombre → Canal+Campaña → Cliente+Deadline → Asignado a/Brief → separador → Archivo → Copy
- Labels de campos en minúsculas
- "Sin asignar" se muestra en #C0C0BC en la tabla

**Modal Editar pieza:**
- Mismo modal pre-rellenado
- Solo disponible si estado es Solicitada, En producción o En revisión
- Archivo: nombre actual + texto clicable "Reemplazar archivo" + X para eliminar

**Popup eliminar:** modal propio (no window.confirm). Botón "Eliminar" en #DC2626.

**Dropdown ··· en últimas filas:** se abre hacia arriba si no hay espacio debajo.

**Iconos de canal:** librería Simple Icons (npm). Color de marca sobre fondo claro; fill #FFFFFF sobre fondo oscuro.

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
- Las cards de bloqueos corresponden a piezas reales de data.js que tienen bloqueo activo — al hacer clic conducen al detalle de esa pieza

---

## Pantalla Detalle (detalle.html)

**Topbar:** botón volver · nombre pieza centrado · badge estado (desplegable) · badge bloqueo si aplica
- Icono campana y dropdown de perfil NO están en esta topbar.

**Sidebar izquierda (oscura):**
1. Brief — solo si existe, solo lectura
2. Datos generales: Pendiente de (editable), Asignado a (editable), Deadline, Canal, Campaña, Cliente (solo si tiene cliente asignado)
3. Bloqueo — solo si existe: motivo + botón resolver #F87171
4. Archivo — solo si hay archivo: formato, versión incremental, nombre del archivo + icono papelera para eliminar, "Subir nueva versión"

**Campos editables desde el Detalle:**
- "Pendiente de": desplegable con miembros del equipo, editable por cualquier usuario
- "Asignado a": desplegable con miembros del equipo + "Sin asignar", editable por cualquier usuario
- Ambos campos solo editables desde el Detalle, no desde la tabla de Piezas
- Cambiar estos campos no dispara automatismos de estado

**Eliminar archivo desde el Detalle:**
- Icono papelera junto al nombre del archivo: color #6B6B6B en reposo, #DC2626 en hover
- Modal de confirmación antes de eliminar
- Al eliminar: bloque ARCHIVO desaparece, columna central vuelve a estado vacío
- No dispara cambio automático de estado

**Columna central:**
- Imagen: width 100%, height 460px, object-fit contain, fondo #F5F5F3
- Estado vacío: "Arrastra o haz clic para subir" + icono upload
- Copy: altura fija con scroll interno, editable directamente
- Autoguardado: indicador "Guardado ✓" en #9B9B97, aparece y desaparece

**Sidebar derecha (oscura):**
- Comentarios con avatar de color por usuario
- Badge de rol en minúsculas: fondo rgba(255,255,255,0.08), texto #C7C7CC
- "(Tú)" en #9B9B97 después del badge de rol en comentarios de María G.
- Campo comentario + botón Enviar
- Comentarios no son editables ni eliminables

---

## Pantalla Ajustes (ajustes.html)

- Ajustes es una pantalla propia, no un modal
- Títulos de sección ("Workspace", "Equipo") fuera de los contenedores blancos, como etiquetas independientes
- Ambos contenedores con max-width alineado a la izquierda
- Sección Workspace: logo PA #F59E0B (48×48px, border-radius 10px en pantalla, 28×28px en sidebar) + input nombre (flex:1) + botón "Guardar" inline. Feedback "Guardado ✓" en #9B9B97 aparece encima del botón al guardar y desaparece tras 2-3s.
- Sección Equipo: título + botón "Añadir miembro" en la misma línea (gap: 16px, juntos a la izquierda). Lista de miembros con avatar + nombre completo + badge de rol. Icono papelera visible en hover (#6B6B6B → #DC2626), con modal de confirmación.
- "(Tú)" en #9B9B97 después del badge de rol en la fila de María García
- Modal Añadir miembro: nombre + rol desplegable (Manager, Producción, + opción "Otro" que revela campo de texto libre). Campo rol obligatorio. Sin opción "Cliente".
- Cambios en equipo → se reflejan en desplegables "Asignado a" de toda la app
- Sidebar muestra workspace arriba: logo 28×28px + nombre blanco 13px medium

---

## Notificaciones

- Panel lateral deslizable desde la derecha, sin overlay oscuro
- Accesible desde icono campana en topbar general (Piezas, Bloqueos, Ajustes). NO en Detalle.
- Header: título "Notificaciones" + botón "Marcar todas como leídas" (estilo secundario), con justify-content: space-between
- Lista cronológica, más reciente arriba
- Cada notificación: punto rojo (#DC2626, ~8px) de no-leído + texto descriptivo + tiempo relativo ("Hace 2h") o fecha exacta (>7 días, formato "12 jun")
- Clic en notificación → marca como leída + navega al Detalle de la pieza
- Diferenciación visual leída/no leída: no leídas con fondo tintado suave y texto en color principal; leídas con fondo blanco y texto en gris secundario
- Badge numérico rojo (#DC2626) en icono campana con número de no leídas
- Estado vacío: "No tienes notificaciones" + icono campana atenuado
- Las notificaciones son datos de demo en data.js — no hay lógica de generación automática de notificaciones

---

## Dropdown de perfil

- Accesible desde avatar en topbar general (Piezas, Bloqueos, Ajustes). NO en Detalle.
- Dropdown compacto bajo el avatar, alineado a la derecha
- Contenido: avatar (~40px) + nombre completo + badge de rol (centrado bajo el nombre)
- Separador sutil
- Opción "Cerrar sesión" (texto + icono, no botón sólido)
- Al cerrar sesión: toast "Sesión cerrada" en esquina inferior, desaparece tras 2-3s
- Padding horizontal simétrico

---

## Usuario logueado (demo)

La app se experimenta siempre desde la perspectiva de María G. (Manager):
- Tab "Mi trabajo" filtra por Pendiente de: María G.
- Notificaciones son las de María G.
- Comentarios nuevos se publican como María G.
- "(Tú)" aparece tras su badge de rol en Ajustes y en sus comentarios en Detalle

---

## Notas importantes

- **Control social, no RBAC:** no hay restricciones técnicas por rol. Cualquier usuario puede cambiar cualquier estado, en cualquier dirección.
- **Sin automatismos de estado:** los campos "Asignado a", "Pendiente de" y el archivo no disparan cambios automáticos de estado. Todo es manual.
- **Clientes son actores externos:** no son miembros del workspace. Aparecen como dato asociado a una pieza pero no en desplegables de asignación ni en modal de Añadir miembro.
- **localStorage:** los datos de demo se guardan en localStorage. Si hay datos corruptos ejecutar `localStorage.removeItem('flowck_pieces')` en consola y recargar.
- **Icono warning bloqueo:** triángulo con punto inferior, consistente en todas las pantallas.
- **Avatares:** color fijo por usuario definido en USERS array de data.js. Iniciales en blanco sobre fondo de color.
- **Cliente de demo:** "Lumina Sport" (no usar marcas reconocidas reales).
- **Imágenes de piezas:** en `assets/images/`, rutas relativas en data.js.
