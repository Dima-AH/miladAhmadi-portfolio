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

    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      const articles =
        section.querySelectorAll<HTMLElement>("[data-project]");

      articles.forEach((article, index) => {
        const visual =
          article.querySelector<HTMLElement>("[data-project-visual]");

        const content =
          article.querySelector<HTMLElement>("[data-project-content]");

        const meta =
          article.querySelector<HTMLElement>("[data-project-meta]");

        const title =
          article.querySelector<HTMLElement>("[data-project-title]");

        const description =
          article.querySelector<HTMLElement>("[data-project-desc]");

        const footer =
          article.querySelector<HTMLElement>("[data-project-footer]");

        const year =
          article.querySelector<HTMLElement>("[data-project-year]");

        const badge =
          article.querySelector<HTMLElement>("[data-project-private]");

        const media =
          article.querySelector<HTMLElement>("[data-project-media]");

        const pattern =
          article.querySelector<HTMLElement>("[data-project-pattern]");

        const glow =
          article.querySelector<HTMLElement>("[data-project-glow]");

        if (!visual || !content) {
          return;
        }

        const isReversed = index % 2 !== 0;

        const animationDirection = isReversed ? -1 : 1;

        /*
         * Initial states
         */
        gsap.set(visual, {
          clipPath: isReversed
            ? "inset(0 0 0 100%)"
            : "inset(0 100% 0 0)",
          x: animationDirection * 40,
          scale: 1.04,
        });

        gsap.set(media, {
          opacity: 0,
          y: 60,
          scale: 0.82,
          rotate: isReversed ? -5 : 5,
        });

        gsap.set(pattern, {
          opacity: 0,
          scale: 1.2,
          rotate: isReversed ? -8 : 8,
        });

        gsap.set(glow, {
          opacity: 0,
        });

        gsap.set(content, {
          opacity: 1,
        });

        if (meta) {
          gsap.set(meta, {
            opacity: 0,
            y: 25,
          });
        }

        if (title) {
          gsap.set(title, {
            opacity: 0,
            y: 55,
            rotateX: -25,
            transformPerspective: 1000,
            transformOrigin: "50% 100%",
          });
        }

        if (description) {
          gsap.set(description, {
            opacity: 0,
            y: 30,
          });
        }

        if (footer) {
          gsap.set(footer, {
            opacity: 0,
            y: 20,
          });
        }

        if (year) {
          gsap.set(year, {
            opacity: 0,
            y: 15,
          });
        }

        if (badge) {
          gsap.set(badge, {
            opacity: 0,
            scale: 0.8,
            y: -10,
          });
        }

        /*
         * Main entrance animation
         */
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: article,
            start: "top 78%",
            once: true,
          },
        });

        timeline
          .to(visual, {
            clipPath: "inset(0% 0% 0% 0%)",
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: "expo.out",
          })
          .to(
            pattern,
            {
              opacity: 0.2,
              scale: 1,
              rotate: 0,
              duration: 1.4,
              ease: "power3.out",
            },
            "-=1",
          )
          .to(
            media,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: 0,
              duration: 1.1,
              ease: "back.out(1.35)",
            },
            "-=0.9",
          )
          .to(
            glow,
            {
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            },
            "-=0.9",
          );

        if (meta) {
          timeline.to(
            meta,
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
            },
            "-=0.45",
          );
        }

        if (title) {
          timeline.to(
            title,
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.9,
              ease: "power4.out",
            },
            "-=0.35",
          );
        }

        if (description) {
          timeline.to(
            description,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.5",
          );
        }

        if (year) {
          timeline.to(
            year,
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.35",
          );
        }

        if (badge) {
          timeline.to(
            badge,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              ease: "back.out(1.7)",
            },
            "-=0.4",
          );
        }

        if (footer) {
          timeline.to(
            footer,
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
            },
            "-=0.35",
          );
        }

        /*
         * Parallax media
         */
        if (media) {
          gsap.to(media, {
            yPercent: -12,
            ease: "none",
            scrollTrigger: {
              trigger: visual,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        /*
         * Subtle visual parallax
         */
        gsap.to(pattern, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: visual,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        /*
         * Desktop 3D hover
         */
        const mediaQuery = window.matchMedia("(pointer: fine)");

        if (mediaQuery.matches) {
          const quickRotateX = gsap.quickTo(visual, "rotateX", {
            duration: 0.5,
            ease: "power3.out",
          });

          const quickRotateY = gsap.quickTo(visual, "rotateY", {
            duration: 0.5,
            ease: "power3.out",
          });

          const quickScale = gsap.quickTo(visual, "scale", {
            duration: 0.5,
            ease: "power3.out",
          });

          const quickMediaX = gsap.quickTo(media, "x", {
            duration: 0.6,
            ease: "power3.out",
          });

          const quickMediaY = gsap.quickTo(media, "y", {
            duration: 0.6,
            ease: "power3.out",
          });

          const handlePointerMove = (event: PointerEvent) => {
            const rect = visual.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const percentX = x / rect.width - 0.5;
            const percentY = y / rect.height - 0.5;

            quickRotateX(percentY * -5);
            quickRotateY(percentX * 5);
            quickScale(1.018);

            quickMediaX(percentX * 12);
            quickMediaY(percentY * 8);
          };

          const handlePointerLeave = () => {
            quickRotateX(0);
            quickRotateY(0);
            quickScale(1);

            quickMediaX(0);
            quickMediaY(0);
          };

          visual.addEventListener(
            "pointermove",
            handlePointerMove,
          );

          visual.addEventListener(
            "pointerleave",
            handlePointerLeave,
          );

          return () => {
            visual.removeEventListener(
              "pointermove",
              handlePointerMove,
            );

            visual.removeEventListener(
              "pointerleave",
              handlePointerLeave,
            );
          };
        }
      });

      /*
       * Small global section reveal
       */
      const sectionElements =
        section.querySelectorAll<HTMLElement>(
          "[data-projects-header]",
        );

      sectionElements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          },
        );
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [locale, projects.length]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-luxury-bg px-6 py-32 dark:bg-luxury-darkBg md:px-12 md:py-48"
    >
      <div className="pointer-events-none absolute start-0 top-1/4 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[150px] dark:bg-emerald/10" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div
          data-projects-header
          className="mb-20 flex items-center gap-6"
        >
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
                  <span className="text-brand dark:text-gold">
                    {chunks}
                  </span>
                ),
              })}
            </h2>
          </div>

          <div className="lg:text-end">
            <Link
              href="https://geotajak.ir/products"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 border-b border-current pb-1 text-sm uppercase tracking-[0.2em] text-luxury-muted transition-colors hover:text-brand dark:text-luxury-darkMuted dark:hover:text-gold ${
                locale === "fa" ? "font-peyda" : ""
              }`}
            >
              {t("saafaaLink")}

              <ExternalLink size={14} />
            </Link>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, i) => (
            <article
              key={i}
              data-project
              className="group relative"
            >
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
                        className="relative z-[1] flex h-full w-full items-center justify-center will-change-transform"
                      >
                        {project.image ? (
                          <Image
                            width={900}
                            height={600}
                            alt={project.name}
                            src={project.image}
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
                    {project.type === "Private Project" && (
                      <div
                        ref={undefined}
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
                <div
                  data-project-content
                  className="w-full lg:w-5/12"
                >
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
                      locale === "fa"
                        ? "font-peyda font-bold"
                        : ""
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
                          locale === "fa"
                            ? "font-peyda"
                            : ""
                        }`}
                      >
                        {t("roleLabel")}
                      </div>

                      <div
                        className={`text-sm text-luxury-text dark:text-luxury-darkText ${
                          locale === "fa"
                            ? "font-peyda font-medium"
                            : ""
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
                            locale === "fa"
                              ? "font-peyda"
                              : ""
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