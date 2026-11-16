import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://milad-ahmadi.dev";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Milad Ahmadi — Frontend Developer",
    short_name: "Milad Ahmadi",
    description:
      "Elite frontend developer specializing in React, Next.js, Angular, and Vue.js. Building exceptional web experiences with meticulous craftsmanship, performance and elegant UX.",
    start_url: "/en",
    display: "standalone",
    orientation: "portrait",
    background_color: "#050505",
    theme_color: "#023020",
    dir: "ltr",
    lang: "en",
    categories: ["technology", "portfolio", "web-development"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/site-icon.svg",
        sizes: "32x32",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/og-image.png",
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
        label: "Milad Ahmadi — Frontend Developer Portfolio",
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
