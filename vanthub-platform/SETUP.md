# Vant Hub Platform — Setup Guide

## Stack
- React 19 + Vite 6
- React Router v6 (rutas reales)
- Tailwind CSS v3
- Deploy en Netlify (gratis)

## Estructura de archivos
```
vanthub-platform/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml                ← Redirects SPA + security headers
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx                 ← Router + rutas
    ├── index.css               ← CSS global + design tokens
    ├── components/
    │   ├── Layout.jsx
    │   ├── Nav.jsx
    │   └── Footer.jsx
    ├── hooks/
    │   └── useScrollReveal.js
    └── pages/
        ├── Home.jsx            ✅ Completa
        ├── Contacto.jsx        ✅ Completa
        ├── NotFound.jsx        ✅ 404
        ├── stubs.jsx           ← Páginas temporales
        ├── Servicios.jsx       🔧 Stub
        ├── Agentes.jsx         🔧 Stub
        ├── Proceso.jsx         🔧 Stub
        ├── Partners.jsx        🔧 Stub
        └── Status.jsx          🔧 Stub
```

## Setup local

```bash
cd vanthub-platform
npm install
npm run dev
# → http://localhost:5173
```

## Deploy en Netlify (conectado a GitHub)
1. Push todos los archivos al repo `Agencia-IA` en carpeta `vanthub-platform/`
2. Netlify → Add new site → Import from Git
3. Base directory: `vanthub-platform`
4. Build command: `npm run build`
5. Publish directory: `vanthub-platform/dist`
6. Deploy ✅

## Próximos pasos — páginas a construir
1. /servicios
2. /proceso
3. /agentes
4. /status
5. /partners
