"use client";

import { motion } from "framer-motion";
import { Phone, Send, Link2Icon, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-deepGreen text-white relative overflow-hidden">
      {/* افکت‌های پس‌زمینه خلاقانه */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-deepGreen-light/40 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="max-w-4xl"
        >
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8">
            Let's build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">
              something exceptional.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 font-light">
            Have a project in mind or want to discuss modern web architecture? I'm always open to new opportunities and creative challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Phone, label: "Phone", value: "+98 998 250 7377", href: "tel:+989982507377" },
            { icon: Mail, label: "Email", value: "Contact via Telegram", href: "https://t.me/dima-devs" },
            { icon: Send, label: "Telegram", value: "@dima-devs", href: "https://t.me/dima-devs" },
            { icon: Link2Icon, label: "LinkedIn", value: "mr-ahmadi7377", href: "https://linkedin.com/in/mr-ahmadi7377" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-accent/50 transition-all duration-300"
            >
              <item.icon className="text-accent group-hover:scale-110 transition-transform" size={28} />
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-1">{item.label}</p>
                <p className="text-lg font-medium group-hover:text-accent transition-colors">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center md:justify-start">
            <a href="https://github.com/Dima-AH" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors">
                <Link2Icon size={24} />
                <span className="font-medium">Check out my code on GitHub</span>
            </a>
        </div>
      </div>
    </section>
  );
}