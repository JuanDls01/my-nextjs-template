import {
  ACCEPTED_LANGUAGES,
  DEFAULT_LANGUAGE,
} from "./packages/constants/locale";

export const i18n = {
  defaultLang: DEFAULT_LANGUAGE,
  languages: ACCEPTED_LANGUAGES,
} as const;

export type Language = (typeof i18n)["languages"][number];
