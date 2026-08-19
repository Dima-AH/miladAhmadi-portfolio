"use client";
import { ArrowUp, Link, Send } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-1">
              Milad Ahmadi
            </h3>
            <p className="text-sm text-text-muted mb-4">Frontend Developer</p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://github.com/Dima-AH"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-white hover:bg-white/5 rounded-full transition-all"
                aria-label="GitHub"
              >
                <Send size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mr-ahmadi7377"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-white hover:bg-white/5 rounded-full transition-all"
                aria-label="LinkedIn"
              >
                <Link size={20} />
              </a>
              <a
                href="https://t.me/dima-devs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-white hover:bg-white/5 rounded-full transition-all"
                aria-label="Telegram"
              >
                <Send size={20} />
              </a>
              <a
                href="tel:+989982507377"
                className="p-2 text-text-muted hover:text-white hover:bg-white/5 rounded-full transition-all"
                aria-label="Phone"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} Milad Ahmadi. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-white rounded-full hover:bg-accent transition-colors duration-300"
              aria-label="Back to top"
            >
              Back to top <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
