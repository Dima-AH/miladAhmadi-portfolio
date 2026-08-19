import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"]
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "Milad Ahmadi | Creative Frontend Developer",
  description: "Building modern, scalable, and interactive web applications with React, Next.js, Angular, and Vue.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}