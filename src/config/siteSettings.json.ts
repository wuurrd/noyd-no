/**
 * Global site settings
 */

import { type SiteSettingsProps } from "./types/configDataTypes";

// The below locales need to match what you've put in your `astro.config.mjs` file
export const locales = ["nb"] as const;
export const defaultLocale = "nb" as const;

// localeMap is used to map languages to their respective locales - used for formatDate function
export const localeMap = {
  en: "en-US",
  nb: "nb-NO",
} as const;

// text to show in the language switcher for each locale
export const languageSwitcherMap = {
  en: "English",
  nb: "🇳🇴 Norsk",
  // en: "English",
  // fr: "Français",
} as const;

// site settings that don't change between languages
export const siteSettings: SiteSettingsProps = {
  useViewTransitions: true,
  useAnimations: true,
};

export default siteSettings;
