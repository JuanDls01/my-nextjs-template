import { Language } from "@/i18n-config";
import "server-only";

// Enumerate all dictionaries here for better linting and typescript support
// Get the default import for cleaner types
const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  es: () => import("./es.json").then((module) => module.default),
};

export const getDictionary = async (lang: Language) =>
  dictionaries[lang]?.() ?? dictionaries.en();

export type DictionaryType = Awaited<ReturnType<typeof getDictionary>>;
