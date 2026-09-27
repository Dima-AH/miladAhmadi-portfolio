"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = (params?.locale as string) || "en";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mounted guard for hydration mismatch with next-intl
    setMounted(true);
  }, []);

  const switchLanguage = (newLocale: string) => {
    document.cookie = `MY_APP_LANG=${newLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
    // Force refresh to ensure server components pick up new locale cookie + messages
    router.refresh();
  };

  if (!mounted) return null;

  const targetLocale = currentLocale === "en" ? "fa" : "en";
  const ariaLabel =
    currentLocale === "en" ? "Switch to Persian" : "تغییر به انگلیسی";

  return (
    <button
      onClick={() => switchLanguage(targetLocale)}
      className="relative w-10 h-10 cursor-pointer rounded-full border border-luxury dark:border-gold/20 flex items-center justify-center hover:border-gold dark:hover:border-gold hover:glow-gold transition-all duration-500 text-brand dark:text-gold"
      aria-label={ariaLabel}
      dir="ltr"
      type="button"
    >
      <Globe size={16} aria-hidden="true" />
      <span
        className="absolute -bottom-1 -right-1 text-[9px] font-bold bg-gold text-brand rounded-full w-4 h-4 flex items-center justify-center shadow-sm"
        aria-hidden="true"
      >
        {targetLocale.toUpperCase()}
      </span>
    </button>
  );
}
