import { translations } from "./translations";

export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  en: { short: "EN", name: "English" },
  de: { short: "DE", name: "Deutsch" },
};

export function useTranslations(locale: Locale) {
  return translations[locale];
}
