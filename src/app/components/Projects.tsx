"use client";

import { useLayoutEffect, useRef } from "react";

import { ArrowUpRight, ExternalLink, Lock } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  name: string;
  tech: string;
  company: string;
  year: string;
  type: string;
  role: string;
  desc: string;
  link?: string;
  image?: string;
};

export default function Projects() {
  const t = useTranslations("projects");

  const params = useParams();

  const locale = (params?.locale as string) || "en";

  const projects = t.raw("items") as Project[];

  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    // Respect reduced-motion accessibility preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const articles = gsap.utils.toArray<HTMLElement>("[data-project]");

      articles.forEach((article) => {
        const visual = article.querySelector<HTMLElement>(
          "[data-project-visual]",
        );

        if (!visual) return;

        // Only animate the visual panel.
        // All project information remains visible immediately.
        gsap.fromTo(
          visual,
          {
            autoAlpha: 0,
            y: 16,
            scale: 0.985,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: article,
              start: "top 92%",
              once: true,
            },
          },
        );
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [projects.length]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-luxury-bg px-6 py-32 dark:bg-luxury-darkBg md:px-12 md:py-48"
    >
      <div className="pointer-events-none absolute start-0 top-1/4 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[150px] dark:bg-emerald/10" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div data-projects-header className="mb-20 flex items-center gap-6">
          <span
            className={`text-xs font-medium uppercase tracking-[0.4em] text-brand dark:text-gold ${
              locale === "fa" ? "font-peyda" : ""
            }`}
          >
            {t("label")}
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-brand/30 to-transparent dark:from-gold/30" />
        </div>

        <div
          data-projects-header
          className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="lg:max-w-2xl">
            <h2
              className={`font-display text-5xl font-light leading-[1.05] text-luxury-text md:text-7xl lg:text-8xl dark:text-luxury-darkText ${
                locale === "fa" ? "font-peyda font-black" : ""
              }`}
            >
              {t.rich("title", {
                em: (chunks) => (
                  <span className="text-brand dark:text-gold">{chunks}</span>
                ),
              })}
            </h2>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, i) => (
            <article key={i} data-project className="group relative">
              <div
                className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-16 ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Panel */}
                <div className="w-full lg:w-7/12">
                  <div
                    data-project-visual
                    className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-brand glow-emerald [perspective:1200px] dark:bg-brand"
                  >
                    {/* Background Pattern */}
                    <div
                      data-project-pattern
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "linear-gradient(45deg, transparent 48%, #C8A96B 49%, #C8A96B 51%, transparent 52%)",
                        backgroundSize: "30px 30px",
                      }}
                    />

                    {/* Media */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <div
                        data-project-media
                        className="relative z-[1] flex h-full w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      >
                        {project.image ? (
                          <Image
                            width={900}
                            height={600}
                            alt={project.name}
                            src={project.image}
                            sizes="(max-width: 1024px) 100vw, 58vw"
                            loading="lazy"
                            quality={80}
                            className="project-image h-auto max-h-[82%] w-auto max-w-[88%] object-contain"
                          />
                        ) : (
                          <span
                            className="select-none font-display text-[20rem] font-light text-ivory/10 transition-transform duration-1000 ease-luxury md:text-[24rem]"
                            aria-hidden="true"
                          >
                            {project.name.charAt(0)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Noise */}
                    <div className="noise-overlay absolute inset-0 z-[2] opacity-30 mix-blend-overlay" />

                    {/* Hover Gradient */}
                    <div
                      data-project-glow
                      className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-tr from-black/20 via-transparent to-gold/10 opacity-0 transition-all duration-700"
                    />

                    {/* Private */}
                    {["Private Project", "پروژه خصوصی"].includes(
                      project.type,
                    ) && (
                      <div
                        data-project-private
                        className={`absolute start-6 top-6 z-[4] flex items-center gap-2 rounded-full border border-gold/30 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur-md ${
                          locale === "fa" ? "font-peyda" : ""
                        }`}
                      >
                        <Lock size={12} />
                        {project.type}
                      </div>
                    )}
                    {/* Year */}
                    <div
                      data-project-year
                      className={`absolute bottom-6 end-6 z-[4] text-xs uppercase tracking-[0.3em] text-ivory/60 ${
                        locale === "fa" ? "font-peyda" : ""
                      }`}
                    >
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div data-project-content className="w-full lg:w-5/12">
                  {/* Meta */}
                  <div
                    data-project-meta
                    className="mb-6 flex flex-wrap items-center gap-3"
                  >
                    <span
                      className={`rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand dark:border-gold/20 dark:bg-gold/10 dark:text-gold ${
                        locale === "fa" ? "font-peyda" : ""
                      }`}
                    >
                      {project.tech}
                    </span>

                    {project.company && (
                      <span
                        className={`text-xs uppercase tracking-[0.2em] text-luxury-muted dark:text-luxury-darkMuted ${
                          locale === "fa" ? "font-peyda" : ""
                        }`}
                      >
                        @ {project.company}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    data-project-title
                    className={`mb-6 font-display text-5xl font-light text-luxury-text transition-colors duration-500 group-hover:text-brand md:text-6xl dark:text-luxury-darkText dark:group-hover:text-gold ${
                      locale === "fa" ? "font-peyda font-bold" : ""
                    }`}
                  >
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p
                    data-project-desc
                    className={`mb-8 text-lg leading-relaxed text-luxury-muted dark:text-luxury-darkMuted ${
                      locale === "fa" ? "font-peyda" : ""
                    }`}
                  >
                    {project.desc}
                  </p>

                  {/* Footer */}
                  <div
                    data-project-footer
                    className="flex flex-wrap items-center justify-between gap-4 border-t border-luxury pt-6"
                  >
                    <div>
                      <div
                        className={`mb-1 text-[10px] uppercase tracking-[0.3em] text-luxury-muted dark:text-luxury-darkMuted ${
                          locale === "fa" ? "font-peyda" : ""
                        }`}
                      >
                        {t("roleLabel")}
                      </div>

                      <div
                        className={`text-sm text-luxury-text dark:text-luxury-darkText ${
                          locale === "fa" ? "font-peyda font-medium" : ""
                        }`}
                      >
                        {project.role}
                      </div>
                    </div>

                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-ivory transition-all duration-500 hover:glow-emerald dark:bg-gold dark:text-brand dark:hover:glow-gold"
                      >
                        <span
                          className={`text-xs uppercase tracking-[0.2em] ${
                            locale === "fa" ? "font-peyda" : ""
                          }`}
                        >
                          {t("visitLabel")}
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-500 rtl:-rotate-45 rtl:group-hover/btn:rotate-0"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
