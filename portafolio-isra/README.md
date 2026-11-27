# Portafolio de Israel Valerdi

Portafolio personal construido con React y Vite. Los perfiles sociales, habilidades y fichas de proyectos se editan en `src/data/portfolioData.js`.

Los textos que requieren confirmación personal están marcados como `[PENDIENTE: ...]`; complétalos en `src/AppNew.jsx` y `src/data/portfolioData.js`. El CV se mantiene en `src/assets/` y se importa como recurso estático de Vite para descargarlo como `CV_Israel_Valerdi.pdf`. El formulario de contacto envía los mensajes mediante FormSubmit a la dirección definida en `profile.email`; hay que confirmar el primer correo de activación que envíe FormSubmit.

## Desarrollo local

```bash
npm install
npm run dev
```

Para validar la versión de producción:

```bash
npm run lint
npm run build
npm run preview
```

## Despliegue en Vercel

Importa el repositorio de GitHub en Vercel y configura:

- Root Directory: `portafolio-isra`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Asocia `isra-vr.dev` al proyecto desde **Settings → Domains** en Vercel y configura los registros DNS indicados por Vercel. El dominio canónico ya está establecido en `index.html`.
