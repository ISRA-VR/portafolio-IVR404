# Portafolio de Israel Valerdi

Portafolio personal construido con React y Vite. Los perfiles sociales, habilidades y fichas de proyectos se editan en `src/data/portfolioData.js`.

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
