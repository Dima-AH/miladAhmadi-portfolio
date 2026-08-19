"use client";

import { motion } from "framer-motion";
import { ArrowDown, Link2Icon, Send } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm md:text-base uppercase tracking-[0.2em] text-deepGreen dark:text-deepGreen-light mb-4 font-medium">
              Frontend Developer &middot; Yazd, Iran
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tight text-luxury-text dark:text-luxury-darkText">
              Milad <br />
              <span className="italic text-deepGreen dark:text-deepGreen-light">
                Ahmadi
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-luxury-muted dark:text-luxury-darkMuted max-w-2xl leading-relaxed font-light"
          >
            Crafting modern, scalable, and high-quality web applications with
            meticulous attention to detail, performance, and elegant user
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              href="#projects"
              className="px-8 py-4 bg-deepGreen text-white text-sm uppercase tracking-widest hover:bg-deepGreen-light transition-colors duration-300"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border border-luxury-text/20 dark:border-luxury-darkText/20 text-luxury-text dark:text-luxury-darkText text-sm uppercase tracking-widest hover:bg-luxury-text/5 dark:hover:bg-luxury-darkText/5 transition-colors duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex lg:col-span-4 flex-col gap-6 items-start"
        >
          <div className="w-full h-px bg-luxury-text/10 dark:bg-luxury-darkText/10" />
          <div className="flex gap-6">
            <a
              href="https://github.com/Dima-AH"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-luxury-muted dark:text-luxury-darkMuted hover:text-deepGreen dark:hover:text-deepGreen-light transition-colors"
            >
              <Link2Icon size={20} />
              <span className="text-sm uppercase tracking-wider">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/mr-ahmadi7377"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-luxury-muted dark:text-luxury-darkMuted hover:text-deepGreen dark:hover:text-deepGreen-light transition-colors"
            >
              <Link2Icon size={20} />
              <span className="text-sm uppercase tracking-wider">LinkedIn</span>
            </a>
            <a
              href="https://t.me/dima-devs"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-luxury-muted dark:text-luxury-darkMuted hover:text-deepGreen dark:hover:text-deepGreen-light transition-colors"
            >
              <Send size={20} />
              <span className="text-sm uppercase tracking-wider">Telegram</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-luxury-muted dark:text-luxury-darkMuted"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
