"use client";

import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Globe } from "lucide-react"; // آیکون کره زمین

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();

  const currentLocale = (params?.locale as string) || "en";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchLanguage = (newLocale: string) => {
    document.cookie = `MY_APP_LANG=${newLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;

    // ۲. تغییر مسیر برای اعمال تغییرات
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  if (!mounted) return null;

  const targetLocale = currentLocale === "en" ? "fa" : "en";

  return (
    <button
      onClick={() => switchLanguage(targetLocale)}
      className="relative w-10 h-10 cursor-pointer rounded-full border border-luxury dark:border-gold/20 flex items-center justify-center hover:border-gold dark:hover:border-gold hover:glow-gold transition-all duration-500 text-brand dark:text-gold"
      aria-label="Switch Language"
      dir="ltr"
    >
      <Globe size={16} />
      <span className="absolute  -bottom-1 -right-1 text-[9px] font-bold bg-gold text-brand rounded-full w-4 h-4 flex items-center justify-center shadow-sm">
        {targetLocale.toUpperCase()}
      </span>
    </button>
  );
}
