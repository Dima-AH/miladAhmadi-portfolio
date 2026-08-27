import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const locales = ["en", "fa"];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale) {
    const cookieStore = await cookies();
    locale = cookieStore.get("MY_APP_LANG")?.value;
  }
  if (!locale || !locales.includes(locale)) {
    locale = "en";
  }
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
