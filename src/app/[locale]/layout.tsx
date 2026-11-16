import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

const peyda = localFont({
  src: [
    {
      path: "../../../public/fonts/peyda-extralight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/peyda-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-peyda",
  display: "swap",
  preload: true,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://milad-ahmadi.dev";
const SITE_NAME = "Milad Ahmadi";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFa = locale === "fa";

  const title = isFa
    ? "میلاد احمدی — توسعه‌دهنده فرانت‌اند | ساخت تجربه‌های وب ممتاز"
    : "Milad Ahmadi — Frontend Developer | Crafting Digital Excellence";
  const description = isFa
    ? "توسعه‌دهنده فرانت‌اند متخصص React، Next.js، Angular و Vue.js. ساخت تجربه‌های وب استثنایی با دقت وسواس‌گونه در جزئیات و عملکرد."
    : "Elite frontend developer specializing in React, Next.js, Angular, and Vue.js. Building exceptional web experiences with meticulous craftsmanship, performance and elegant UX.";

  const url = `${SITE_URL}/${locale}`;
  const faUrl = `${SITE_URL}/fa`;
  const enUrl = `${SITE_URL}/en`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    alternates: {
      canonical: url,
      languages: {
        en: enUrl,
        fa: faUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: isFa ? "fa_IR" : "en_US",
      alternateLocale: isFa ? "en_US" : "fa_IR",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: SITE_NAME,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
      creator: "@Dima_devs",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "technology",
    icons: {
      icon: [
        { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
        { url: "/site-icon.svg", sizes: "32x32", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" }],
      other: [
        {
          rel: "shortcut icon",
          url: "/favicon.svg",
          sizes: "any",
          type: "image/svg+xml",
        },
        {
          rel: "mask-icon",
          url: "/favicon.svg",
          color: "#023020",
        },
      ],
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
    },
    other: {
      "theme-color": ["#023020", "#050505"],
      "msapplication-TileColor": "#023020",
      "msapplication-TileImage": "/apple-touch-icon.svg",
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#023020" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  // maximum-scale حذف شد تا زوم کاربر محدود نشد (دسترسی‌پذیری بهتر)
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const isFa = locale === "fa";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Milad Ahmadi",
    alternateName: "میلاد احمدی",
    jobTitle: "Frontend Developer",
    url: `${SITE_URL}/${locale}`,
    image: `${SITE_URL}/og-image.png`,
    sameAs: [
      "https://github.com/Dima-AH",
      "https://linkedin.com/in/mr-ahmadi7377",
      "https://t.me/Dima_devs",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "TypeScript",
      "Frontend Development",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yazd",
      addressCountry: "IR",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: locale === "fa" ? "fa-IR" : "en-US",
    author: {
      "@type": "Person",
      name: SITE_NAME,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    sameAs: [
      "https://github.com/Dima-AH",
      "https://linkedin.com/in/mr-ahmadi7377",
      "https://t.me/Dima_devs",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yazd",
      addressCountry: "IR",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+989982507377",
        contactType: "customer service",
        availableLanguage: ["Persian", "English"],
      },
    ],
  };

  return (
    <html lang={locale} dir={isFa ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        {/* Preconnect به دامنه‌های خارجی برای بهبود LCP و سرعت بارگذاری */}
        <link rel="preconnect" href="https://github.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://linkedin.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://t.me" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://t.me" />
      </head>
      <body
        className={`
          ${isFa ? peyda.variable : inter.variable} 
          ${isFa ? "font-peyda" : "font-body"} 
          bg-white dark:bg-black text-black dark:text-white antialiased
        `}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:start-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-md"
        >
          {isFa ? "پرش به محتوا" : "Skip to content"}
        </a>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Analytics />
        <SpeedInsights />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            <main id="main-content">{children}</main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
