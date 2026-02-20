# Proyecto: Club Banade Landing Page Institucional

## Estado Acumulado del Proyecto (MVP Finalizado)

Este documento sirve como "memoria" para futuras sesiones con Antigravity. Resume exactamente dónde estamos y qué falta por hacer.

### 📅 Lo que ya construimos (Completado)
1. **Configuración de Servidores:** Enlazamos Antigravity con el servidor MCP de Stitch y extrajimos tu diseño original.
2. **Inicialización React:** El proyecto es ahora una aplicación profesional en **Vite + React + TypeScript**.
3. **Migración de Componentes:** 
   - Tradujimos el código plano gigante a componentes modulares: `Header`, `Hero`, `About`, `Sports`, `Spaces` y `Footer`.
   - Implementamos Tailwind CSS v4 para estilos usando la guía de colores oficial (Primario: `#CE1126`, Acento: `#FFCC00`).
4. **Logotipo:** El Header fue configurado para leer `/logo.png` automáticamente.
5. **Control de Versiones:** El proyecto está subido a GitHub en la rama `verify_Module_01` y `main` del repositorio remoto.

### 🎯 Roadmap y Siguientes Pasos (Pendiente)
De acuerdo a la auditoría de Diseño (UX/UI), estas son las próximas tareas a ejecutar cuando reabras el proyecto:

* **[Fase 1] Lógica del Menú Móvil (Prioridad Alta):** El menú hamburguesa del `Header.tsx` debe completarse con estado en React (`useState`) para desplegar un cajón de navegación para celulares.
* **[Fase 2] Interfaces Dinámicas (Prioridad Media):** Las secciones `Sports.tsx` y `Spaces.tsx` repiten mucho código HTML. Se deben refactorizar creando micro-componentes tipo `<SportCard />` y usando un archivo `mockData.ts` para inyectar la información.
* **[Fase 3] Sombras y Animaciones (Prioridad Media):** Cambiar las sombras planas actuales por sombras amplias y sutiles (Diseño moderno). Implementar animaciones CSS de *fade-in up* cuando el usuario hace scroll hacia las tarjetas.
* **[Fase 4] Mejoras Visuales (Prioridad Baja):** Reemplazar la capa negra plana del Hero por un degradado y añadir *Smooth Scrolling* funcional hacia los anclajes de la página.

---
*Para el Asistente IA del futuro:* Lee este archivo para entender el estado exacto del proyecto y comienza atacando el Roadmap de la Fase 1 a la 4.
