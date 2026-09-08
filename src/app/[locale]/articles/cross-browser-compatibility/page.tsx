"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function CrossBrowserArticlePage() {
  const t = useTranslations("articles");
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isFa = locale === "fa";

  return (
    <article className="relative min-h-screen py-32 md:py-48 px-6 md:px-12 bg-brand dark:bg-surface-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 noise-overlay opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald/20 rounded-full blur-[150px] animate-pulse-glow" />

      <div className="max-w-4xl mx-auto relative">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: isFa ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href={`/${locale}/articles`}
            className={`inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 ${
              isFa ? "font-peyda" : ""
            }`}
          >
            <ArrowLeft size={18} className={isFa ? "rotate-180" : ""} />
            {t("backToArticles")}
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Tag size={16} className="text-gold" />
            <span
              className={`text-xs uppercase tracking-[0.3em] text-gold ${
                isFa ? "font-peyda" : ""
              }`}
            >
              {t("categories.architecture")}
            </span>
          </div>

          <h1
            className={`font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-ivory mb-8 ${
              isFa ? "font-peyda font-black" : ""
            }`}
          >
            {isFa
              ? "مترجم‌های سرکش وب: هنر تضمین تجربه کاربری یکپارچه در دنیای مرورگرها"
              : "The Rogue Translators of the Web: Mastering Cross-Browser Compatibility"}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-ivory/10">
            <div className="flex items-center gap-3 text-ivory/60">
              <Calendar size={16} />
              <span className={`text-sm ${isFa ? "font-peyda" : ""}`}>
                {isFa ? "۱۷ شهریور ۱۴۰۵" : "Sep 08, 2026"}
              </span>
            </div>
            <div className="flex items-center gap-3 text-ivory/60">
              <Clock size={16} />
              <span className="text-sm">4 {t("readTime")}</span>
            </div>
          </div>
        </motion.header>

        {/* Featured Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-black/30 border border-ivory/10 mb-16"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[15rem] md:text-[25rem] font-light text-ivory/5 select-none">
              {isFa ? "م" : "T"}
            </span>
          </div>
          <div className="absolute inset-0 noise-overlay opacity-20 mix-blend-overlay" />
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`prose prose-lg dark:prose-invert max-w-none ${
            isFa ? "font-peyda" : ""
          }`}
        >
          <div
            className={`
              text-ivory leading-loose text-lg
              [&>p]:mb-6 
              [&>h2]:font-display [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-gold [&>h2]:mt-12 [&>h2]:mb-6
              [&>h3]:font-display [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-ivory [&>h3]:mt-8 [&>h3]:mb-4
              [&>blockquote]:my-8 [&>blockquote]:p-6 [&>blockquote]:border-gold [&>blockquote]:bg-gold/5 [&>blockquote]:rounded-lg [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:text-ivory
              [&>ul]:list-disc [&>ul]:ps-6 [&>ul]:mb-6
              [&>ol]:list-decimal [&>ol]:ps-6 [&>ol]:mb-6
              [&>li]:mb-2
              [&>code]:bg-black/30 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-gold
              [&>pre]:bg-black/30 [&>pre]:p-6 [&>pre]:rounded-lg [&>pre]:mb-6 [&>pre]:overflow-x-auto
              ${
                isFa
                  ? "[&>blockquote]:border-r-4 [&>blockquote]:border-l-0"
                  : "[&>blockquote]:border-l-4 [&>blockquote]:border-r-0"
              }
            `}
            dangerouslySetInnerHTML={{
              __html: isFa
                ? `<p>ساعت‌ها وقت می‌گذارید تا یک چیدمان را به کمال برسانید. همه چیز در مانیتور شما بی‌نقص به نظر می‌رسد. سپس، مشتری سایت را در مرورگر سافاری باز می‌کند و کل ساختار به هم می‌ریزد. چرا این اتفاق هنوز هم در وب مدرن رخ می‌دهد؟</p><p>زیرا وب، یک بوم نقاشی واحد و یکپارچه نیست. وب اکوسیستمی تکه‌تکه شده از موتورهای رندرینگ مختلف است که هرکدام قوانین و تفسیرهای خاص خود را دارند.</p><h2> تشبیه: یک شعر واحد، مترجم‌های متفاوت</h2><p>تصور کنید شما یک شعر زیبا و پیچیده نوشته‌اید (کد شما). این شعر را به سه مترجم مختلف (کروم، سافاری و فایرفاکس) می‌دهید. آن‌ها همگی <strong>دقیقاً یک شعر</strong> را می‌خوانند، اما یکی آن را تحت‌اللفظی ترجمه می‌کند، دیگری با چاشنی سلیقه شخصی تغییرش می‌دهد و سومی اصلاً متوجه ظرافت‌های مدرن آن نمی‌شود. نتیجه؟ سه تجربه متفاوت از یک منبع واحد. این دقیقاً مفهوم ناسازگاری مرورگرهاست.</p><h2> سه چالش خاموش</h2><ul><li><strong>رندرینگ CSS:</strong> یک گرادینت مدرن یا ترفند Flexbox ممکن است در کروم عالی باشد، اما در نسخه‌های قدیمی‌تر سافاری شبیه به وب‌سایت‌های دهه ۹ میلادی نمایش داده شود. </li><li><strong>واسط‌های برنامه‌نویسی جاوااسکریپت:</strong> یک کتابخانه انیمیشن جذاب ممکن است به یک API جدید متکی باشد که مرورگرهای موبایل هنوز از آن پشتیبانی نمی‌کنند و باعث خطاهای خاموش و پیچیده می‌شود. </li><li><strong>غیرقابل پیش‌بینی بودن موبایل:</strong> رویدادهای لمسی، تراکم‌های مختلف پیکسلی و مدیریت تهاجمی حافظه در iOS و اندروید، لایه جدیدی از پیچیدگی را به این معادله اضافه می‌کنند. </li></ul><h2> جعبه ابزار ما: مهندسی تاب‌آوری</h2><p>ما به عنوان توسعه‌دهندگان فرانت‌اند، فقط کد نمی‌نویسیم؛ ما <strong>تاب‌آوری</strong> مهندسی می‌کنیم. ما با این پراکندگی با یک جعبه ابزار دقیق مبارزه می‌کنیم:</p><ul><li><strong>Can I Use:</strong> قطب‌نمای ما برای بررسی پشتیبانی یک ویژگی در تمام نسخه‌های مرورگر، حتی قبل از شروع کدنویسی.</li><li><strong>Autoprefixer و Babel:</strong> مترجم‌های نامرئی که به صورت خودکار CSS و جاوااسکریپت مدرن ما را به زبانی جهانی بازنویسی می‌کنند که مرورگرهای قدیمی‌تر هم بتوانند آن را درک کنند.</li><li><strong>تشخیص ویژگی (Feature Detection):</strong> به جای اینکه بپرسیم <em>\"این چه مرورگری است؟\"</em>، می‌پرسیم <em>\"آیا این مرورگر می‌تواند این کار خاص را انجام دهد؟\"</em>. این هسته اصلی مفهوم \"بهبود تدریجی\" (Progressive Enhancement) است.</li></ul><blockquote>\"تسلط واقعی بر فرانت‌اند، نوشتن کدی نیست که فقط در جایی کار کند؛ بلکه هنر خلق تجربه‌های تاب‌آوری است که <strong>همه جا</strong> کار می‌کنند. سازگاری با مرورگرها، یک باگ برای رفع کردن نیست؛ بلکه استانداردی از کیفیت است که باید حفظ شود.\"</blockquote><p>با در آغوش گرفتن این ابزارها و طرز تفکر، ما اطمینان حاصل می‌کنیم که ظرافت و کیفیت کار دیجیتال ما، فارغ از اینکه کاربر از کدام پنجره به آن نگاه می‌کند، دست‌نخورده و بی‌نقص باقی می‌ماند.</p>`
                : `<p>You spend hours perfecting a layout. It looks absolutely flawless on your screen. Then, a client opens it on Safari, and the entire structure collapses. Why does this still happen in the modern web?</p><p>Because the web is not a single, unified canvas. It is a fragmented ecosystem of different engines, each with its own rules and interpretations.</p><h2> The Metaphor: The Same Poem, Different Translators</h2><p>Imagine you wrote a beautiful, complex poem (your code). You hand it to three different translators: Chrome, Safari, and Firefox. They are all reading the <strong>exact same poem</strong>, but one translates it literally, one adds poetic flair, and one completely misses a modern nuance. They deliver three different experiences from a single source. That is cross-browser compatibility.</p><h2> The Three Silent Challenges</h2><ul><li><strong>CSS Rendering:</strong> A modern gradient or flexbox trick might render perfectly in Chromium, but look like a 90s website in an older version of Safari. </li><li><strong>JavaScript APIs:</strong> A sleek animation library might rely on a new browser API that mobile browsers haven't adopted yet, causing silent, hard-to-trace failures. </li><li><strong>Mobile Unpredictability:</strong> Touch events, varying screen densities, and aggressive memory management on iOS/Android add a whole new layer of chaos to the equation. </li></ul><h2> Our Toolbox: Engineering Resilience</h2><p>As frontend developers, we don't just write code; we engineer resilience. We fight this fragmentation with a precise toolkit:</p><ul><li><strong>Can I Use:</strong> Our compass to verify feature support across all browser versions before we even start coding.</li><li><strong>Autoprefixer & Babel:</strong> The invisible translators that automatically rewrite our modern CSS and JavaScript into a universal language that older browsers can understand.</li><li><strong>Feature Detection:</strong> Instead of asking <em>\"What browser is this?\"</em>, we ask <em>\"Can this browser do this specific task?\"</em> This is the core of Progressive Enhancement.</li></ul><blockquote>\"True frontend mastery isn't about writing code that works somewhere; it's about crafting resilient experiences that work everywhere. Compatibility isn't a bug to fix; it's a standard of quality to uphold.\"</blockquote><p>By embracing these tools and mindsets, we ensure that our digital craftsmanship remains intact, no matter which window the user chooses to look through.</p>`,
            }}
          />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-12 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <Link
            href={`/${locale}/articles`}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full border border-ivory/20 text-ivory hover:bg-gold hover:text-brand hover:border-gold transition-all duration-500 ${
              isFa ? "font-peyda" : ""
            }`}
          >
            <ArrowLeft size={18} className={isFa ? "rotate-180" : ""} />
            {t("backToArticles")}
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
