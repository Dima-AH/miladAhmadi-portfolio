import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Milad Ahmadi — Frontend Developer",
    short_name: "Milad Ahmadi",
    description:
      "Elite frontend developer specializing in React, Next.js, Angular, and Vue.js.",
    start_url: "/en",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#023020",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
