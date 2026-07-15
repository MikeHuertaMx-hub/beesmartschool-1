# Beesmart Study Center — Sitio en Next.js

Sitio moderno construido en Next.js 14 (App Router) + Tailwind CSS, basado en el contenido y las
imágenes del tema de WordPress "Beesmart Study Center".

## Requisitos

- Node.js 18.18 o superior
- npm (incluido con Node)

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Abre http://localhost:3000

## Producción

```bash
npm run build
npm start
```

## Desplegar (recomendado: Vercel)

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a https://vercel.com, importa el repositorio.
3. Vercel detecta Next.js automáticamente — no necesitas configurar nada más.
4. Cada `git push` despliega una nueva versión.

También puedes desplegarlo en Netlify, Railway o cualquier hosting compatible con Node.js.

## Estructura

```
app/
  layout.js         Layout raíz (fuentes, navbar, footer)
  page.js            Inicio
  nosotros/          Página "Nosotros"
  programas/         Página "Programas"
  precios/           Página "Precios"
  testimonios/       Página "Testimonios"
  faq/               Preguntas frecuentes (acordeón)
  contacto/          Formulario de contacto
  blog/              Blog
components/
  Navbar.jsx
  Footer.jsx
  WhatsAppButton.jsx
  Honeycomb.jsx      Elemento de firma: panal que se "llena" (metáfora de progreso)
public/images/       Imágenes extraídas del tema original de WordPress
```

## Conectar el formulario de contacto

El formulario en `app/contacto/page.js` actualmente solo muestra una confirmación visual.
Para que envíe correos de verdad, conecta un proveedor como:

- Formspree (https://formspree.io) — el más rápido de integrar, sin backend propio
- Resend (https://resend.com) — si quieres controlar el envío desde un API route de Next.js
- Tu propio backend / CRM

## Personalización de marca

Los colores y tipografías de marca están centralizados en `tailwind.config.js`:

- `navy` (#1B3F7A) y `navy-deep` (#0F2850): azul institucional
- `honey` (#F5C800): acento "abeja"
- Tipografías: Poppins (títulos) e Inter (texto), cargadas vía `next/font/google`
  (requiere conexión a internet durante `npm run build`).
# beesmartschool
