"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Link2Icon, Send } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${
        isScrolled ? "bg-luxury-bg/80 dark:bg-luxury-darkBg/80 backdrop-blur-md border-b border-luxury" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl font-semibold tracking-tight text-deepGreen dark:text-white">
            M. Ahmadi
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-luxury-muted dark:text-luxury-darkMuted hover:text-deepGreen dark:hover:text-white transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            {/* <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-luxury-text dark:text-luxury-darkText"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button> */}
          </nav>

          <button
            className="md:hidden p-2 text-luxury-text dark:text-luxury-darkText"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-luxury-bg dark:bg-luxury-darkBg flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-luxury">
              <span className="font-serif text-xl font-semibold text-luxury-text dark:text-luxury-darkText">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="text-luxury-text dark:text-luxury-darkText">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-6 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-4xl text-luxury-text dark:text-luxury-darkText hover:text-deepGreen dark:hover:text-deepGreen-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="p-6 border-t border-luxury flex gap-6 justify-center">
              <a href="https://github.com/Dima-AH" target="_blank" rel="noopener noreferrer" className="text-luxury-muted dark:text-luxury-darkMuted hover:text-deepGreen dark:hover:text-deepGreen-light transition-colors"><Link2Icon size={20} /></a>
              <a href="https://linkedin.com/in/mr-ahmadi7377" target="_blank" rel="noopener noreferrer" className="text-luxury-muted dark:text-luxury-darkMuted hover:text-deepGreen dark:hover:text-deepGreen-light transition-colors"><Link2Icon size={20} /></a>
              <a href="https://t.me/dima-devs" target="_blank" rel="noopener noreferrer" className="text-luxury-muted dark:text-luxury-darkMuted hover:text-deepGreen dark:hover:text-deepGreen-light transition-colors"><Send size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}