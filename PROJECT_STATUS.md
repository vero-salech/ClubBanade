# Proyecto: Club Banade Landing Page Institucional

## Estado Acumulado del Proyecto
**Última actualización:** 22/04/2026 17:15 hs  
**Branch de trabajo:** `verify_Module_01`  
**Deploy:** Hostinger via GitHub Actions FTP (desde `main`) + Vercel (backup)  
**Dominio:** `clubbanade.com` — ✅ Transferencia completada, dominio en Hostinger  
**Estado del sitio:** 🔴 OFFLINE — Archivos en `public_html_backup`, carpeta `public_html` vacía

Este documento sirve como "memoria" para futuras sesiones con Antigravity. Resume exactamente dónde estamos y qué falta por hacer.

---

## ✅ Lo que ya construimos (Completado)

### Fase 0 — Configuración Inicial
1. **Stitch + MCP:** Enlazamos Antigravity con el servidor MCP de Stitch y extrajimos el diseño original.
2. **Inicialización React:** Proyecto profesional en **Vite + React + TypeScript + Tailwind CSS v4**.
3. **Colores oficiales:** Primario `#CE1126` (rojo), Acento `#FFCC00` (amarillo).
4. **Logotipo:** El Header lee `/logo.png` automáticamente.
5. **Control de Versiones:** GitHub → `verify_Module_01` (trabajo) y `main` (deploy Vercel).

### Fase 1 — Componentes de la Home
- **Header** (`src/components/Header.tsx`): Navbar fija con efecto **hide on scroll down / show on scroll up** (estilo Instagram). Logo + "CLUB BA.NA.DE." + navegación desktop con dropdowns + **botón "Sede Digital"** destacado en amarillo. Menú móvil con fondo sólido blanco, submenús expandibles (acordeón) para Deportes y Actividades. El menú se renderiza **fuera** del `<header>` para evitar el bug de `backdrop-blur` + `position: fixed`.
- **Hero** (`src/components/Hero.tsx`): Imagen de fondo con overlay, título "Club Banco Nacional de Desarrollo", badge "Institucional", botones compactos.
- **Sports** (`src/components/Sports.tsx`): Grid 2x2 con tarjetas de deportes (Federativos, Escuelitas, Instalaciones, Otras Actividades).
- **Spaces** (`src/components/Spaces.tsx`): Tarjetas de espacios sociales (Buffet, Quinchos, Salón de Eventos) con fotos locales.
- **About** (`src/components/About.tsx`): Sección "Nuestra Historia y Valores" con foto real de la entrada del club (`Entrada1.jpeg`), datos de Comunidad y Trayectoria (80+ años). Botón "Conocer más →" que lleva a `/el-club`.
- **Footer** (`src/components/Footer.tsx`): Pie de página institucional con contacto, horarios, mapa de ubicación.
- **SportCard** (`src/components/ui/SportCard.tsx`): Componente reutilizable con prop `link` opcional. Muestra "Ver más →" al hacer hover.

### Fase 2 — Páginas de Deportes

#### `/deportes/federativos` — Deportes Federativos (`src/pages/FederativeSports.tsx`)
- **Hero** con fondo oscuro, barra tricolor y badge "Competitivo".
- **3 tarjetas de disciplinas** (Hockey, Vóley, Básquet), cada una con:
  - Descripción
  - Horarios
  - Coordinador con teléfono clickeable
  - Instagram del deporte
- **Coordinadores reales:**
  - Hockey → Virginia Morelli (Sec. Administrativa) — 11-6602-3750 — @hockeybanadeoficial
  - Vóley → Walter Franco — 11-3061-1374 — @banadevoley
  - Básquet → Gustavo Moyano — 11-4195-0309 — @banadebasquet
- **Sección Instalaciones** con fotos reales:
  - Cancha de Hockey → `CanchaHockey3.png`
  - Canchas de Básquet → `CanchaBasquet.png`
  - Canchas de Vóley → `Voley.png`
- **CTA final** "¿Querés sumarte a nuestros equipos?" con texto de inscripción.

#### `/deportes/escuelitas` — Escuelitas Deportivas (`src/pages/SportsSchools.tsx`)
- **Hero** con badge "Formativas" y barra tricolor.
- **5 tarjetas de disciplinas** en grid 2x2 + 1:
  1. Hockey Infantil (7-10 años) — Martes y Viernes 17 hs — Virginia Morelli
  2. Vóley Infantil (6-17 años) — Lunes a Viernes 17:30 hs — Walter Franco
  3. Básquet Pre-Federados (5-13 años) — Lunes y Miércoles 17 hs — Gustavo Moyano
  4. Básquet Recreativo y Femenino (11-15+ años) — Martes y Jueves 17:45 hs — Pedro Andrés (11-5875-0471)
  5. Fútbol Infantil (5-20 años) — Martes a Viernes 17 hs — Alan Pickering (11-6555-9054)
- **Tarjeta "¿Cómo inscribirse?"** como 6ta tarjeta (borde rojo) al lado de Fútbol.
- Cada tarjeta tiene 2 sub-tarjetas: HORARIOS (días en un renglón, hora en otro) y COORDINADOR.
- **Sección "¿Por qué elegirnos?"** (profesores, instalaciones, valores).
- **CTA final** "Inscribí a tu hijo/a".

### Fase 3 — Páginas de Actividades

#### `/actividades/tercerizadas` — Actividades Tercerizadas (`src/pages/Activities.tsx`)
- **Hero** con badge "Actividades" y barra tricolor.
- **4 tarjetas de disciplinas** (Tenis, Gimnasia Artística, Squash, Pádel), cada una con:
  - Descripción, horarios, profesor con teléfono e Instagram (si tiene)
- **Profesores reales:**
  - Tenis → Silvina / Claudia — @banadetenis
  - Gimnasia Artística → Angy Sabone — 11-4161-9704 — @educgym_escuelagym
  - Squash → Adrián Sidero
  - Pádel → Oscar Soria
- **Sin tarjeta de inscripción** (eliminada — cada profesor gestiona su inscripción).
- **CTA final** "¿Querés sumarte a nuestras actividades?"

#### `/actividades/otras` — Otras Actividades / Instalaciones (`src/pages/OtherActivities.tsx`)
- **Hero** con badge "Actividades" y barra tricolor.
- **2 tarjetas:** Pileta y Gimnasio.
  - Pileta: descubierta, temporada octubre a marzo, con foto real (`Pileta.png`).
  - Gimnasio: Lunes a Sábados de 14 a 20 hs — Instagram **@banadegym** — con foto real (`pesas.png`).
- **Sección "Temporada de Pileta":**
  - Tabla de precios (quincenal, diario socio, invitados, jubilados) por grupo etario.
  - Nota de precios de martes a viernes.
  - Tarjetas de beneficios: Apto médico en el club (miércoles 13-18, sáb/dom 10-18), Casilleros disponibles, Envío a hospital cercano.
  - Requisitos: Socio al día, Apto médico vigente, Gorro de natación.
  - Horarios de pileta (periodo y general).
- **CTA final** "¿Querés disfrutar de nuestras instalaciones?"

### Fase 4 — Espacios Sociales

#### `/espacios` — Espacios Sociales (`src/pages/SocialSpaces.tsx`)
- **Hero** con badge "Espacios" y barra tricolor.
- **Buffet:** Foto real (`Buffet.png`, ajustada `object-[center_35%]`), descripción, horarios Lunes a Viernes 10 a 20 hs, Sábados y Domingos 9 a 20 hs.
- **Salón de Eventos:** Foto real (`SalonEventos.jpg`), descripción, Instagram @salon_banade.
- **Quinchos y Parrillas:** 6 tarjetas (Quincho 1-5 + Mesa/Banco con Parrilla):
  - Cada una con: foto, badge de capacidad, precios (socio/no socio, "Sin cargo" destacado), lista de comodidades.
  - Fotos reales: `Quincho1.png` a `Quincho5.png`, `MesasParrillas.png`.
- **Nota de reservas:** Anticipación 48hs, seña 50%, lista de invitados, estacionamiento, regla 60% socios para tarifa socio, contacto telefónico.
- **CTA final.**

### Fase 5 — El Club (About)

#### `/el-club` — El Club (`src/pages/About.tsx`)
- **Hero** con foto de la entrada del club (`Entrada1.jpeg`) como fondo, badge "Institucional".
- **Línea de tiempo "Nuestra Historia"** con 5 hitos y fotos históricas:
  - **1945** — Fundación del Club (foto `Inauguracion1.png` — fachada C.A.B.I.R.A.).
  - **1966** — Inauguración sede Martínez (foto `Fundacion1.png` — Presidente Illia).
  - **1971** — Nace BANADE (foto `Banco.png` — edificio del Banco).
  - **1994** — Liquidación del Banco y Ley 25.056.
  - **Hoy** — Un club en plena expansión.
  - Foto panorámica de cierre (`Arboles.png`).
- **Misión y Visión:** Dos tarjetas destacadas (fondo rojo suave / amarillo suave).
- **6 Valores:** Trabajo en equipo, Respeto, Compromiso, Inclusión, Excelencia y calidad, Humildad. Cada uno con ícono y descripción.
- **Comisión Directiva:** Tabla ejecutiva limpia (header oscuro, filas alternadas, presidenta destacada con borde dorado):
  - Presidenta: Sra. González Mónica
  - Vice Presidente, Secretario General, Pro-Secretario, Tesorero, Pro Tesorero, Secretaria de Actas, 4 Vocales Titulares, 3 Vocales Suplentes.
- **Comisión Fiscalizadora:** Lista simple (3 miembros).
- **Tribunal de Disciplina:** Tabla con cargo (Presidente + 3 Vocales).
- **Imagen de cierre:** Letras BANADE con flores (`FloresBanade.jpeg`).
- **CTA final** "Sumate a nuestra comunidad".

### Fase 6 — Contacto

#### `/contacto` — Contacto (`src/pages/Contact.tsx`)
- **Hero** con foto del club (`Entrada2.jpeg`) como fondo.
- **Formulario de contacto** (lado izquierdo, 60%):
  - Campos: Nombre completo*, Email*, Teléfono, Asunto* (selector con opciones: Quiero ser socio, Deportes y escuelitas, Actividades, Reserva de quinchos, Salón de eventos, Administración, Otro), Mensaje*.
  - Botón "Enviar consulta" en rojo con ícono send.
  - Estado de éxito con check verde y opción "Enviar otra consulta".
  - **⚠️ Sin servicio de email integrado aún** — el formulario simula el envío. Pendiente integrar Formspree, EmailJS o similar.
- **Sidebar de información** (lado derecho, 40%):
  - **Contacto:** Dirección (clickeable → Google Maps), Teléfono (clickeable → marca), Email (clickeable → abre mail).
  - **Horarios:** Club (todos los días 09-23), Administración (L-V 12-19, Sáb 10-15).
  - **Nota informativa:** Para consultas sobre deportes federativos o escuelitas, contactar coordinadores o redes sociales.
- **Mapa de Google Maps** embebido — muestra Hipólito Yrigoyen 1290, Martínez.

### Navegación entre páginas
- **Desktop:** Dropdowns hover para "Deportes" (Federativos + Escuelitas) y "Otras Actividades" (Pileta y Gimnasio + Tercerizadas). Links directos para El Club, Espacios Sociales, Contacto.
- **Mobile:** Menú hamburguesa con submenús expandibles (acordeón). Fondo blanco sólido. Cierra al navegar.
- **Botón "Mi Banade"** en navbar: Botón destacado en amarillo con ícono de usuario. Lleva a `/mi-banade/login`.
- **Tarjetas clickeables en Home:** Deportes (Federativos, Escuelitas → páginas). Espacios (Buffet, Quinchos, Salón → `/espacios`). About ("Conocer más →" → `/el-club`).
- **Navbar inteligente:** Se oculta al scrollear hacia abajo y reaparece al scrollear hacia arriba. Siempre visible cuando el menú móvil está abierto o cerca del top.
- **Rutas en App.tsx:** `/deportes/federativos`, `/deportes/escuelitas`, `/actividades/otras`, `/actividades/tercerizadas`, `/espacios`, `/el-club`, `/contacto`, `/mi-banade/*`.

### Texto de inscripción (usado en Federativos y Escuelitas)
> "En todos los casos, contactá primero al coordinador de la disciplina que te interese, para confirmar horarios y disponibilidad de vacantes. Luego de las clases de prueba, si decidís continuar, podrás formalizar la inscripción y realizar el pago de la cuota y arancel deportivo correspondiente en la administración del Club."

### Fase 7 — Portal de Socios "Mi Banade"

#### Arquitectura del portal
- **Fondo diferenciado:** `#EDE8D0` (crema cálido) para distinguir visualmente del sitio público (blanco).
- **Autenticación mock:** Login por DNI + contraseña con datos simulados. Contexto `MemberAuthContext` con estado del socio.
- **Layout propio:** `MemberLayout.tsx` con sidebar de navegación, header con nombre del socio y botón de cerrar sesión.
- **Rutas protegidas:** Todas bajo `/mi-banade/*`, redirigen a login si no hay sesión.

#### `/mi-banade/login` — Login de Socios (`src/pages/member/MemberLogin.tsx`)
- Formulario con campos DNI y contraseña, ícono de mostrar/ocultar password.
- Logo del club centrado, título "Mi Banade — Portal exclusivo para socios".
- Link "Volver al sitio" para regresar a la web pública.

#### `/mi-banade/inicio` — Dashboard (`src/pages/member/MemberDashboard.tsx`)
- **Bienvenida personalizada:** "¡Bienvenido, [nombre]!"
- **Banner de anuncios:** Torneo de Verano mock con fecha.
- **5 tarjetas de acciones:**
  - Mis Solicitudes (activo) → `/mi-banade/solicitudes`
  - Reservar Quincho (activo) → `/mi-banade/quinchos`
  - Mi Estado de Cuenta (Próximamente)
  - Mi Carnet Digital (Próximamente)
  - Pagar Online (Próximamente)
- **WhatsApp exclusivo socios:** Card verde con ícono WhatsApp → `wa.me/5491123984714`.
- **Info rápida:** 3 tarjetas con Nº de socio, Estado (Activo) y DNI.

#### `/mi-banade/solicitudes` — Mis Solicitudes (`src/pages/member/MemberSolicitudes.tsx`)
- Lista de solicitudes previas (mock) con estados (Pendiente, Aprobada, Rechazada).
- Botón "Nueva solicitud" → `/mi-banade/solicitudes/nueva`.

#### `/mi-banade/solicitudes/nueva` — Nueva Solicitud (`src/pages/member/NuevaSolicitud.tsx`)
- **4 tipos:** Licencia, Licencia deportiva (con certificado médico), Baja deportiva, Baja.
- **Campos dinámicos** según tipo: mes de inicio, duración, deporte, certificado médico (upload), descripción de lesión, motivo.
- **Envío de email vía EmailJS** a `administracion@clubbanade.com` con todos los detalles.
- Pantalla de confirmación con badge "Pendiente de revisión".

#### `/mi-banade/quinchos` — Mis Reservas de Quincho (`src/pages/member/MemberQuinchos.tsx`)
- Lista de reservas previas (mock) con estados.
- Botón "Nueva reserva" → `/mi-banade/quinchos/nueva`.

#### `/mi-banade/quinchos/nueva` — Nueva Reserva (`src/pages/member/NuevaReservaQuincho.tsx`)
- **Selector de espacio:** 7 opciones (Quincho 1-5, Mesas al aire libre, Parrillas) con capacidad.
- **Calendario visual:** Navegación por mes, días ocupados tachados en rojo, selección en rojo primario.
- **Campos de asistentes:** Socios (mín 1) y No socios (mín 0) con cálculo automático del total.
- **Observaciones** opcionales.
- **Envío de email vía EmailJS** a `administracion@clubbanade.com` con espacio, fecha, asistentes.
- Pantalla de confirmación con badge "Pendiente de confirmación".

#### Infraestructura del portal
- **`src/utils/memberEmail.ts`:** Helper reutilizable para envío de emails vía EmailJS. Usa el mismo servicio/template que la página de Contacto (`service_2nogh82`, `template_d5ud8qo`).
- **`src/contexts/MemberAuthContext.tsx`:** Contexto React con login/logout mock, datos del socio (nombre, DNI, nroSocio, categoría).
- **`src/components/member/MemberLayout.tsx`:** Layout con sidebar, fondo crema, navegación interna.
- **`src/components/SEO.tsx`:** Componente SEO reutilizable para meta tags por página.

---

## 📁 Estructura de Archivos Clave

```
src/
├── assets/                      # Imágenes del sitio público
│   ├── ImagenHero.png, Buffet.png, MesasArboles.png, SalonEventos.jpg
│   ├── CanchaHockey3.png, CanchaBasquet.png, Voley.png
│   ├── Pileta.png, pesas.png, Quincho1-5.png, MesasParrillas.png
│   ├── Entrada1.jpeg, Entrada2.jpeg, Fundacion1.png, Inauguracion1.png
│   ├── Banco.png, FloresBanade.jpeg, Arboles.png, Plaza.png
│   └── LogoHockey.png, LogoVoley.png
├── components/
│   ├── Header.tsx              # Navbar con dropdowns + Mi Banade
│   ├── Hero.tsx                # Banner principal
│   ├── About.tsx               # Sección historia (Home)
│   ├── Sports.tsx, Spaces.tsx  # Secciones Home
│   ├── Footer.tsx, Layout.tsx, ScrollToTop.tsx
│   ├── SEO.tsx                 # Meta tags por página
│   ├── member/
│   │   └── MemberLayout.tsx    # Layout del portal de socios ✅
│   └── ui/SportCard.tsx
├── contexts/
│   └── MemberAuthContext.tsx   # Auth mock para socios ✅
├── utils/
│   └── memberEmail.ts          # Helper EmailJS para notificaciones ✅
├── constants/
│   └── data.ts                 # Datos centralizados
├── pages/
│   ├── Home.tsx, About.tsx, Contact.tsx
│   ├── FederativeSports.tsx, SportsSchools.tsx
│   ├── Activities.tsx, OtherActivities.tsx, SocialSpaces.tsx
│   └── member/                 # Portal de socios ✅
│       ├── MemberLogin.tsx
│       ├── MemberDashboard.tsx
│       ├── MemberSolicitudes.tsx
│       ├── NuevaSolicitud.tsx
│       ├── MemberQuinchos.tsx
│       ├── NuevaReservaQuincho.tsx
│       └── MemberComingSoon.tsx
└── App.tsx                     # Router principal (público + /mi-banade/*)
```

---

## 🎯 Roadmap — Próximos Pasos (Pendiente)

### Prioridad Alta
- [ ] **Deploy a Hostinger:** Commitear cambios, merge a `main`, y GitHub Actions deploya automáticamente via FTP.
- [ ] **Formulario de contacto real:** El formulario de `/contacto` simula el envío. Integrar EmailJS (ya está configurado para el portal).
- [ ] **Backend real para Mi Banade:** Reemplazar datos mock con autenticación y datos reales (Supabase, API, etc.).

### Prioridad Media
- [ ] **Responsive general:** Verificar mobile en todas las páginas.
- [ ] **Animaciones de scroll:** Fade-in-up al scrollear.
- [ ] **Fotos de instalaciones:** Mejorar calidad donde sea necesario.

### Prioridad Baja
- [ ] **SEO avanzado:** Meta tags dinámicas por página (componente SEO ya existe).
- [ ] **Performance:** Lazy loading, WebP.
- [ ] **Redes sociales:** Links reales en Footer.

### ✅ Completado en sesión 21/02 tarde
- [x] **Menú móvil:** Submenús expandibles (acordeón), fondo sólido blanco, fix del bug `backdrop-blur`.
- [x] **Navbar inteligente:** Hide on scroll down, show on scroll up (estilo Instagram).
- [x] **About page completa:** Timeline con fotos históricas, misión/visión/valores, Comisión Directiva en tabla ejecutiva.
- [x] **Contact page completa:** Formulario con selector de asunto, sidebar con info + horarios, mapa Google Maps.
- [x] **Links desde Home:** Tarjetas de espacios → `/espacios`, About → `/el-club`.
- [x] **CD responsive:** Cargo arriba del nombre en mobile.
- [x] **Foto entrada en Home:** Sección "Nuestra Historia y Valores" con `Entrada1.jpeg`.

### ✅ Completado en sesión 15/04 — Migración a Hostinger
- [x] **Transferencia de dominio:** `clubbanade.com` de Don Web → Hostinger.
- [x] **Build de producción + deploy manual + `.htaccess` para SPA.**
- [x] **GitHub Actions CI/CD:** Workflow `deploy-hostinger.yml` — push a `main` → build → FTP deploy.
- [x] **GitHub Secrets configurados:** `FTP_HOST` (212.85.6.10), `FTP_USERNAME` (u806894223), `FTP_PASSWORD`, `FTP_PORT` (21).
- [x] **Auditoría de seguridad del repo:** Sin secrets, sin `.env`, repo público seguro.

### ✅ Completado en sesión 22/04 — Transferencia de dominio + Offline
- [x] **Transferencia de dominio completada:** `clubbanade.com` 100% en Hostinger.
- [x] **Sitio puesto Offline intencionalmente:** `public_html` → `public_html_backup`.

### ✅ Completado en sesión 27/06 — Portal "Mi Banade"
- [x] **Portal completo de socios** con login, dashboard, solicitudes y reservas de quinchos.
- [x] **Botón "Mi Banade" en navbar** (antes era "Sede Digital") — lleva a `/mi-banade/login`.
- [x] **Fondo crema diferenciado** `#EDE8D0` para el portal de socios.
- [x] **Formularios de solicitudes** con 4 tipos, campos dinámicos y validación.
- [x] **Reserva de quinchos** con calendario visual, selector de espacio y campos de asistentes (socios/no socios).
- [x] **EmailJS integrado** en solicitudes y quinchos — envía notificación a `administracion@clubbanade.com`.
- [x] **WhatsApp exclusivo socios** en dashboard → `wa.me/5491123984714`.
- [x] **Componente SEO** reutilizable con meta tags por página.
- [x] **Animaciones de scroll** (fade-in-up) implementadas.

### 📋 Procedimiento para deployar a Hostinger
1. **Commitear cambios:** `git add . && git commit -m "feat: portal Mi Banade"`
2. **Merge a main:** `git checkout main && git merge verify_Module_01 && git push origin main`
3. **GitHub Actions deploya automáticamente** via FTP a `public_html/`.
4. Si `public_html` estaba vacía (sitio offline), los archivos se subirán ahí y el sitio quedará **online**.
5. Si se quiere mantener offline, mover los archivos de `public_html` a `public_html_backup` después del deploy.

### ⏳ Pendiente antes de publicar
- [ ] **Configurar SSL (HTTPS):** Activar certificado SSL gratuito en Hostinger.
- [ ] **Revisión final del contenido:** Confirmar que toda la info sea correcta y actualizada.
- [ ] **Formulario de contacto real:** Integrar EmailJS en `/contacto`.
- [ ] **Desconectar Vercel (opcional):** Evaluar si mantener como preview/backup.

---
*Para el Asistente IA del futuro:* Lee este archivo para entender el estado exacto del proyecto. La branch de trabajo es `verify_Module_01`. **Deploy principal:** GitHub Actions deploya automáticamente a Hostinger (FTP) en cada push a `main`. Vercel sigue activo como backup en `club-banade.vercel.app`. **DOMINIO:** `clubbanade.com` ya está en Hostinger (transferencia completada 22/04/2026). **ESTADO actual:** El sitio está OFFLINE — `public_html` está vacía (archivos previos en `public_html_backup`). Al hacer push a `main`, GitHub Actions subirá los archivos nuevos a `public_html` y el sitio volverá a estar online. **PORTAL MI BANADE:** Funciona con datos mock — pendiente backend real. EmailJS ya configurado para notificaciones.
