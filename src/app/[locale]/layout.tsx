import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const peyda = localFont({
  src: [
    {
      path: "../../../public/fonts/Peyda-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-peyda",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milad Ahmadi — Frontend Developer | Crafting Digital Excellence",
  description:
    "Elite frontend developer specializing in React, Next.js, Angular, and Vue.js. Building exceptional web experiences with meticulous craftsmanship.",
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

  return (
    <html lang={locale} dir={isFa ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className={`
          ${isFa ? peyda.variable : inter.variable} 
          ${isFa ? "font-peyda" : "font-body"} 
          bg-white dark:bg-black text-black dark:text-white antialiased
        `}
      >
        <Analytics />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
