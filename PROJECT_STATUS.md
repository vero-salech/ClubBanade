# Proyecto: Club Banade Landing Page Institucional

## Estado Acumulado del Proyecto
**Última actualización:** 21/02/2026 02:25 hs  
**Branch de trabajo:** `verify_Module_01`  
**Deploy:** Vercel desde `main` (sincronizado)

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
- **Header** (`src/components/Header.tsx`): Navbar sticky con logo + "CLUB BA.NA.DE." + navegación + dropdown de Deportes.
- **Hero** (`src/components/Hero.tsx`): Imagen de fondo con overlay, título "Club Banco Nacional de Desarrollo", badge "Institucional", botones compactos.
- **Sports** (`src/components/Sports.tsx`): Grid 2x2 con tarjetas de deportes (Federativos, Escuelitas, Instalaciones, Tercerizadas).
- **Spaces** (`src/components/Spaces.tsx`): Tarjetas de espacios sociales (Buffet, Quinchos, Salón de Eventos) con fotos locales.
- **Footer** (`src/components/Footer.tsx`): Pie de página institucional.
- **SportCard** (`src/components/ui/SportCard.tsx`): Componente reutilizable con prop `link` opcional. Muestra "Ver más →" al hacer hover.

### Fase 2 — Páginas de Deportes (NUEVA)

#### `/deportes/federativos` — Deportes Federativos (`src/pages/FederativeSports.tsx`)
- **Hero** con fondo oscuro, barra tricolor y badge "Competitivo".
- **3 tarjetas de disciplinas** (Hockey, Vóley, Básquet), cada una con:
  - Descripción
  - Horarios
  - Coordinador con teléfono clickeable
- **Coordinadores reales:**
  - Hockey → Virginia Morelli (Sec. Administrativa) — 11-6602-3750
  - Vóley → Walter Franco — 11-3061-1374
  - Básquet → Gustavo Moyano — 11-4195-0309
- **Sección Instalaciones** con fotos reales:
  - Cancha de Hockey → `CanchaHockey3.png`
  - Canchas de Básquet → `CanchaBasquet2.png`
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

### Navegación entre páginas
- **Dropdown en navbar:** "Deportes" despliega menú con "Deportes Federativos" y "Escuelitas Deportivas".
- **Tarjetas clickeables en Home:** Las tarjetas "Federativos" y "Escuelitas" de la sección Sports son links a sus respectivas páginas.
- **Rutas en App.tsx:** `/deportes/federativos` y `/deportes/escuelitas`.

### Texto de inscripción (unificado en ambas páginas)
> "En todos los casos, contactá primero al coordinador de la disciplina que te interese, para confirmar horarios y disponibilidad de vacantes. Luego de las clases de prueba, si decidís continuar, podrás formalizar la inscripción y realizar el pago de la cuota y arancel deportivo correspondiente en la administración del Club."

---

## 📁 Estructura de Archivos Clave

```
src/
├── assets/
│   ├── ImagenHero.png          # Foto del Hero principal
│   ├── Buffet.png              # Espacio social
│   ├── MesasArboles.png        # Quinchos
│   ├── SalonEventos.jpg        # Salón de eventos
│   ├── CanchaHockey3.png       # Instalaciones - Hockey
│   ├── CanchaBasquet2.png      # Instalaciones - Básquet
│   ├── Voley.png               # Instalaciones - Vóley
│   ├── Pileta.png, Plaza.png, Arboles.png  # Fotos extra disponibles
│   └── LogoHockey.png, LogoVoley.png       # Logos deportivos
├── components/
│   ├── Header.tsx              # Navbar con dropdown Deportes
│   ├── Hero.tsx                # Banner principal
│   ├── Sports.tsx              # Sección deportes (Home)
│   ├── Spaces.tsx              # Espacios sociales (Home)
│   ├── Footer.tsx              # Pie de página
│   ├── Layout.tsx              # Layout con Outlet
│   └── ui/SportCard.tsx        # Tarjeta deportiva reutilizable
├── constants/
│   └── data.ts                 # Datos centralizados (deportes, espacios, nav links)
├── pages/
│   ├── Home.tsx                # Página principal
│   ├── About.tsx               # El Club
│   ├── Sports.tsx              # Deportes (general)
│   ├── FederativeSports.tsx    # Deportes Federativos
│   ├── SportsSchools.tsx       # Escuelitas Deportivas
│   ├── Activities.tsx          # Actividades
│   ├── SocialSpaces.tsx        # Espacios Sociales
│   └── Contact.tsx             # Contacto
└── App.tsx                     # Router principal
```

---

## 🎯 Roadmap — Próximos Pasos (Pendiente)

### Prioridad Alta
- [ ] **Menú móvil:** El menú hamburguesa del Header necesita completarse para celulares.
- [ ] **Contenido real de otras páginas:** About, Activities, SocialSpaces y Contact tienen contenido placeholder.

### Prioridad Media
- [ ] **Fotos de instalaciones:** Las fotos actuales de canchas podrían mejorarse con fotos más grandes/profesionales.
- [ ] **Responsive:** Verificar y pulir el comportamiento en mobile de las nuevas páginas de deportes.
- [ ] **Animaciones de scroll:** Implementar fade-in-up cuando el usuario scrollea.

### Prioridad Baja
- [ ] **SEO:** Meta tags específicas por página.
- [ ] **Performance:** Optimizar imágenes (lazy loading, formatos WebP).
- [ ] **Redes sociales:** Links a Instagram, Facebook, etc. en el Footer.

---
*Para el Asistente IA del futuro:* Lee este archivo para entender el estado exacto del proyecto. La branch de trabajo es `verify_Module_01`. Vercel deploya automáticamente desde `main`.
