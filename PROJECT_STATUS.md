# Proyecto: Club Banade Landing Page Institucional

## Estado Acumulado del Proyecto
**Última actualización:** 21/02/2026 16:42 hs  
**Branch de trabajo:** `verify_Module_01`  
**Deploy:** Vercel desde `main` (pendiente merge)

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
- **Header** (`src/components/Header.tsx`): Navbar sticky con logo + "CLUB BA.NA.DE." + navegación + dropdown de Deportes + dropdown Otras Actividades + **botón "Sede Digital"** destacado en amarillo con ícono de candado (abre en nueva pestaña, exclusivo socios).
- **Hero** (`src/components/Hero.tsx`): Imagen de fondo con overlay, título "Club Banco Nacional de Desarrollo", badge "Institucional", botones compactos.
- **Sports** (`src/components/Sports.tsx`): Grid 2x2 con tarjetas de deportes (Federativos, Escuelitas, Instalaciones, Otras Actividades).
- **Spaces** (`src/components/Spaces.tsx`): Tarjetas de espacios sociales (Buffet, Quinchos, Salón de Eventos) con fotos locales.
- **About** (`src/components/About.tsx`): Sección "Nuestra Historia y Valores" con foto real de la entrada del club (`Entrada1.jpeg`), datos de Comunidad y Trayectoria (80+ años).
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
- **Dropdown "Deportes" en navbar:** Despliega "Deportes Federativos" y "Escuelitas Deportivas".
- **Dropdown "Otras Actividades" en navbar:** Despliega "Otras Actividades" y "Actividades Tercerizadas".
- **Botón "Sede Digital"** en navbar: Botón destacado en amarillo con ícono de candado. Abre en nueva pestaña. Exclusivo para socios (href `#` por ahora, pendiente URL real).
- **Tarjetas clickeables en Home:** Las tarjetas "Federativos" y "Escuelitas" de la sección Sports son links a sus respectivas páginas.
- **Links directos en navbar:** "El Club" → `/el-club`, "Espacios Sociales" → `/espacios`, "Contacto" → `/contacto`.
- **Rutas en App.tsx:** `/deportes/federativos`, `/deportes/escuelitas`, `/actividades/otras`, `/actividades/tercerizadas`, `/espacios`, `/el-club`, `/contacto`.

### Texto de inscripción (usado en Federativos y Escuelitas)
> "En todos los casos, contactá primero al coordinador de la disciplina que te interese, para confirmar horarios y disponibilidad de vacantes. Luego de las clases de prueba, si decidís continuar, podrás formalizar la inscripción y realizar el pago de la cuota y arancel deportivo correspondiente en la administración del Club."

---

## 📁 Estructura de Archivos Clave

```
src/
├── assets/
│   ├── ImagenHero.png          # Foto del Hero principal
│   ├── Buffet.png              # Espacio social - Buffet
│   ├── MesasArboles.png        # Quinchos panorámica
│   ├── SalonEventos.jpg        # Salón de eventos
│   ├── CanchaHockey3.png       # Instalaciones - Hockey
│   ├── CanchaBasquet.png       # Instalaciones - Básquet
│   ├── CanchaBasquet2.png      # Foto alternativa de básquet
│   ├── Voley.png               # Instalaciones - Vóley
│   ├── Pileta.png              # Pileta (Otras Actividades)
│   ├── pesas.png               # Gimnasio (Otras Actividades)
│   ├── Quincho1-5.png          # Fotos de quinchos individuales
│   ├── MesasParrillas.png      # Mesa y banco con parrilla
│   ├── Entrada1.jpeg           # Entrada del club (Home About + About hero)
│   ├── Entrada2.jpeg           # Entrada lateral (Contact hero)
│   ├── Fundacion1.png          # Foto histórica inauguración Illia 1966
│   ├── Inauguracion1.png       # Fachada original C.A.B.I.R.A.
│   ├── Banco.png               # Edificio Banco Nacional de Desarrollo
│   ├── FloresBanade.jpeg       # Letras BANADE con flores (cierre About)
│   ├── Jardin1.jpeg            # Jardín del club (disponible, sin usar)
│   ├── Jardin2.jpeg            # Jardín del club (disponible, sin usar)
│   ├── Arboles.png, Plaza.png  # Fotos panorámicas del predio
│   └── LogoHockey.png, LogoVoley.png  # Logos deportivos
├── components/
│   ├── Header.tsx              # Navbar con dropdowns + Sede Digital
│   ├── Hero.tsx                # Banner principal
│   ├── About.tsx               # Sección "Nuestra Historia y Valores" (Home)
│   ├── Sports.tsx              # Sección deportes (Home)
│   ├── Spaces.tsx              # Espacios sociales (Home)
│   ├── Footer.tsx              # Pie de página
│   ├── Layout.tsx              # Layout con Outlet
│   ├── ScrollToTop.tsx         # Scroll al top en cambio de ruta
│   └── ui/SportCard.tsx        # Tarjeta deportiva reutilizable
├── constants/
│   └── data.ts                 # Datos centralizados (deportes, espacios, nav links)
├── pages/
│   ├── Home.tsx                # Página principal
│   ├── About.tsx               # El Club — historia, valores, CD ✅
│   ├── Sports.tsx              # Deportes (general, placeholder)
│   ├── FederativeSports.tsx    # Deportes Federativos ✅
│   ├── SportsSchools.tsx       # Escuelitas Deportivas ✅
│   ├── Activities.tsx          # Actividades Tercerizadas ✅
│   ├── OtherActivities.tsx     # Otras Actividades (Pileta + Gimnasio) ✅
│   ├── SocialSpaces.tsx        # Espacios Sociales ✅
│   └── Contact.tsx             # Contacto con formulario ✅
└── App.tsx                     # Router principal
```

---

## 🎯 Roadmap — Próximos Pasos (Pendiente)

### Prioridad Alta
- [ ] **Sede Digital:** Definir URL real y funcionalidad de acceso exclusivo para socios (el botón en navbar ya está listo, falta el destino).
  - **WhatsApp flotante:** Botón de contacto directo con la secretaría administrativa. Va **dentro de la Sede Digital** (no en la web pública) para que solo lo usen socios y evitar consultas externas no deseadas. El número es distinto al de los coordinadores deportivos (pendiente de confirmar).
- [ ] **Menú móvil:** El menú hamburguesa del Header tiene los links pero necesita submenús desplegables para Deportes y Actividades.
- [ ] **Servicio de email para formulario de contacto:** Integrar Formspree, EmailJS o backend para que el formulario de `/contacto` envíe mails realmente.

### Prioridad Media
- [ ] **Responsive:** Verificar y pulir el comportamiento en mobile de todas las páginas.
- [ ] **Animaciones de scroll:** Implementar fade-in-up cuando el usuario scrollea.
- [ ] **Fotos de instalaciones:** Mejorar con fotos más grandes/profesionales donde sea necesario.

### Prioridad Baja
- [ ] **SEO:** Meta tags específicas por página.
- [ ] **Performance:** Optimizar imágenes (lazy loading, formatos WebP).
- [ ] **Redes sociales:** Links reales a Instagram, Facebook, etc. en el Footer.

---
*Para el Asistente IA del futuro:* Lee este archivo para entender el estado exacto del proyecto. La branch de trabajo es `verify_Module_01`. Vercel deploya automáticamente desde `main`.
