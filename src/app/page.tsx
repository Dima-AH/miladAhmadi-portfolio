// src/app/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const cookieStore = await cookies();
  const savedLocale = cookieStore.get("MY_APP_LANG")?.value;

  const targetLocale =
    savedLocale && ["en", "fa"].includes(savedLocale) ? savedLocale : "en";

  redirect(`/${targetLocale}`);
}
