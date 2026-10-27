# Montec – Montajes & Tecnologías Montec SAS

Sitio en Next.js 15 (App Router, TypeScript) listo para AWS Amplify.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Despliegue en AWS Amplify

1. Sube el repo a GitHub/GitLab/CodeCommit.
2. En Amplify Hosting → *Host web app* → conecta el repositorio y la rama.
3. Amplify detecta Next.js y usa `amplify.yml` (Node 18+; si hace falta, define `NODE_VERSION=22` en variables de entorno).

## Estructura

- `src/app/page.tsx` – Home
- `src/app/servicios/page.tsx` – Servicios, estadísticas y FAQ
- `src/app/proyectos/page.tsx` – Proyectos (galería)
- `src/lib/site.ts` – datos de contacto, servicios, estadísticas, proyectos y clientes (editar aquí)
- `src/components/` – Header, Footer, CtaBanner, Stats, ServiceGrid, ClientLogos, ProjectGallery (con lightbox), Faq, PageHero, WhatsAppButton
- `public/img/` – logo, fotos e íconos (`clientes/` tiene un logo por empresa)
- `docs/` – capturas de referencia del sitio original
