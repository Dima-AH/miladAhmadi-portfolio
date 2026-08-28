# Milad Ahmadi | Professional Frontend Developer Portfolio

A modern, high-performance, and fully responsive personal portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Designed with a focus on digital craftsmanship, featuring seamless bilingual support, elegant animations, and a robust custom design system.

**Live Demo:** [miladahmadi.vercel.app](https://miladahmadi.vercel.app/en)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.x-ff0055?style=for-the-badge&logo=framer)

---

## Key Features

- **Advanced Bilingual Support (i18n):** Custom implementation using `next-intl` with cookie-based language persistence (`MY_APP_LANG`), ensuring seamless URL routing and instant language switching without page reloads.
- **Flawless RTL/LTR Adaptability:** Fully responsive layouts that automatically and perfectly adapt to both English (LTR) and Persian (RTL) reading directions.
- **Dynamic Typography:** Instant, zero-layout-shift (CLS) font switching between **Inter** (English) and **Peyda** (Persian) using `next/font` for optimal performance and readability.
- **Luxury Design System:** Custom Tailwind configuration featuring a premium Emerald/Gold color palette, glassmorphism effects, noise textures, and signature "glow" animations.
- **Smooth Animations:** High-performance, scroll-triggered, and entrance animations powered by **Framer Motion**.
- **Mobile-First Responsive:** Adaptive design ensuring a perfect, touch-friendly experience across all device sizes.

---

## Tech Stack

| Category       | Technologies                       |
| -------------- | ---------------------------------- |
| **Framework**  | Next.js 16                         |
| **Language**   | TypeScript                         |
| **Styling**    | Tailwind CSS, Custom CSS Variables |
| **Animation**  | Framer Motion                      |
| **i18n**       | next-intl                          |
| **Icons**      | Lucide React                       |
| **Deployment** | Vercel                             |

---

## Project Structure

```text
├── src/
│   ├── app/
│   │   ├── [locale]/          # Dynamic locale routing (en/fa)
│   │   │   ├── layout.tsx     # Root layout with i18n & font providers
│   │   │   └── page.tsx       # Main portfolio page
│   │   └── components/        # Reusable UI components (Navbar, Hero, About, etc.)
│   ├── configs/               # Configuration files (e.g., Navbar items)
│   ├── features/              # Feature-specific components (e.g., LanguageSwitcher)
│   └── messages/              # JSON translation files (en.json, fa.json)
├── public/
│   └── fonts/                 # Local font files (e.g., Peyda-Regular.ttf)
├── middleware.ts              # Next.js middleware for i18n routing
└── next.config.ts             # Next.js configuration with next-intl plugin
```
