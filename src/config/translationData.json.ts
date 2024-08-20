/**
 * * Configuration of the i18n system data files and text translations
 * Example translations below are for English and French, with textTranslations used in src/layouts/BlogLayoutCenter.astro and src/components/Hero/[hero].astro
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import siteDataEn from "./en/siteData.json";
import siteDataNb from "./nb/siteData.json";
import navDataEn from "./en/navData.json";
import navDataNb from "./nb/navData.json";
import faqDataEn from "./en/faqData.json";
import faqDataNb from "./nb/faqData.json";
import teamDataEn from "./en/teamData.json";
import teamDataNb from "./nb/teamData.json";
import testimonialDataEn from "./en/testimonialData.json";
import testimonialDataNb from "./nb/testimonialData.json";

export const dataTranslations = {
  en: {
    siteData: siteDataEn,
    navData: navDataEn,
    faqData: faqDataEn,
    teamData: teamDataEn,
    testimonialData: testimonialDataEn,
  },
  nb: {
    siteData: siteDataNb,
    navData: navDataNb,
    faqData: faqDataNb,
    teamData: teamDataNb,
    testimonialData: testimonialDataNb,
  },
} as const;

/**
 * * Text translations are used with the `useTranslation` function from src/js/i18nUtils.ts to translate various strings on your site.
 *
 * ## Example
 *
 * ```ts
 * import { getLocaleFromUrl } from "@js/localeUtils";
 * import { useTranslations } from "@js/translationUtils";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const t = useTranslations(currLocale);
 * t("back_to_all_posts"); // this would be "Retour à tous les articles" if the current locale is "fr"
 * ```
 * or
 * ```ts
 * import { useTranslations } from "@js/translationUtils";
 * const t = useTranslations("fr");
 * t("back_to_all_posts"); // this would be "Retour à tous les articles"
 * ```
 */
export const textTranslations = {
  en: {
    hero_description:
      "Welcome to Nøyd – efficient management for satisfied residents. We provide tools for board members and an intuitive portal for residents, from task management to EV charging stats. Enhance your living experience with Nøyd.",
    hero_description_sub: "Enhance your living experience with Nøyd.",
    back_to_all_posts: "Back to all posts",
    updated: "Updated",
    hero_contact: "Get a FREE quote",

    // services

    services_title: "Check out what we can do for you",
    services_1_title: "Lorem ipsum",
    services_1_details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt quia quibusdam, 
      voluptatem aliquid autem, magnam, doloremque voluptatibus odio esse pariatur harum 
      odit neque qui earum nam praesentium sint ullam!`,
    services_2_title: "Lorem ipsum",
    services_2_details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt quia quibusdam, voluptatem 
      aliquid autem, magnam, doloremque voluptatibus odio esse pariatur harum odit neque qui earum 
      nam praesentium sint ullam!`,
    services_3_title: "Lorem ipsum",
    services_3_details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt quia quibusdam, 
      voluptatem aliquid autem, magnam, doloremque voluptatibus odio esse pariatur harum odit neque 
      qui earum nam praesentium sint ullam!`,

    // non functional promises - lorem ipsum
    func_1_title: "Lorem ipsum",
    func_1_text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt quia quibusdam`,
    func_2_title: "Lorem ipsum",
    func_2_text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt quia quibusdam`,
    func_3_title: "Lorem ipsum",
    func_3_text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt quia quibusdam`,
    func_4_title: "Lorem ipsum",
    func_4_text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt quia quibusdam`,
    func_5_title: "Lorem ipsum",
    func_5_text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt quia quibusdam`,
    func_6_title: "Lorem ipsum",
    func_6_text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt quia quibusdam`,
    location_text: `Location & Contact`,
  },
  nb: {
    hero_description:
      "Velkommen til Nøyd! Vi tilbyr verktøy for styremedlemmer og en brukervennlig portal for beboere, alt fra oppgavehåndtering til elbil-ladestatistikk. Skap en bedre boligopplevelse med Nøyd.",
    hero_description_sub: "Skap en bedre boligopplevelse med Nøyd.",
    back_to_all_posts: "Tilbake til alle artikler",
    updated: "Oppdatert",
    hero_contact: "Få et uforpliktende tilbud",
    // services
    services_title: "Se hva vi kan gjøre for deg",
    services_1_title: "Effektiv håndtering av styrearbeid",
    services_1_details: `Nøyd gir styremedlemmer et kraftig sett med verktøy som forenkler og organiserer deres arbeidsoppgaver. Med vår løsning kan styret opprette og tildele oppgaver, følge med på fremdrift og sikre at ingenting blir oversett. Kalenderfunksjonen gir en samlet oversikt over møter, frister og andre viktige datoer, slik at alle er på samme side. Gjøremålslistene hjelper styremedlemmer med å prioritere oppgaver og holde seg på sporet, noe som sikrer at styrearbeidet utføres effektivt og innenfor tidsrammene.`,

    services_2_title: "Selvbetjeningsportal for beboere",
    services_2_details: `Den intuitive selvbetjeningsportalen gir beboerne enkel tilgang til verktøyene de trenger for å håndtere sin egen informasjon og holde seg informert. Beboerne kan oppdatere kontaktinformasjonen sin direkte, slik at de alltid er sikre på at de får viktig kommunikasjon fra styret. De som eier elbiler, kan også følge med på deres ladestatistikk, noe som gir dem innsikt i forbruket sitt. I tillegg gir portalen tilgang til nyheter og oppdateringer fra styret, slik at beboerne alltid er oppdatert på hva som skjer i deres boligfellesskap.`,

    services_3_title: "Enkel og effektiv kommunikasjon",
    services_3_details:
      "Effektiv kommunikasjon er nøkkelen til et velfungerende styre, og Nøyd tilbyr verktøy som sikrer god dialog mellom styremedlemmer og beboere. Integrerte meldingssystemer gjør det enkelt å kommunisere internt og eksternt via meldinger, e-post eller varsler, slik at alle holdes informert om oppgaver, møter eller endringer. Dokumentdelingsfunksjonen gjør det trygt og enkelt å dele viktige dokumenter som møtereferater og regnskapsrapporter, slik at alle relevante parter har tilgang til nødvendig informasjon.",

    // non functional promises
    /*
    	1.	Enkel Brukeropplevelse
Vi lover å levere en plattform som er intuitiv og lett å bruke, uansett teknisk ferdighetsnivå. Vi tror på enkelhet og tilgjengelighet for alle.
	2.	Kundestøtte Når Du Trenger Det
Vårt dedikerte supportteam står alltid klare til å hjelpe deg med spørsmål eller utfordringer, slik at du aldri føler deg alene når du bruker våre verktøy.
	3.	Kontinuerlig Forbedring
Vi forplikter oss til kontinuerlig å oppdatere og forbedre vår plattform, basert på tilbakemeldinger fra våre brukere, slik at du alltid har de beste verktøyene tilgjengelig.
	4.	Sikkerhet i Førersetet
Din data er trygg hos oss. Vi lover å beskytte din informasjon med topp moderne sikkerhetstiltak, slik at du kan ha full tillit til vår plattform.
	5.	Skreddersydd for Dine Behov
Vi forstår at ingen boligfellesskap er like. Derfor lover vi at våre løsninger kan tilpasses dine spesifikke behov, slik at de fungerer best mulig for deg.
	6.	Bærekraft i Fokus
Vi bryr oss om miljøet. Vår plattform er designet med bærekraft i tankene, og vi jobber kontinuerlig med å redusere vårt karbonavtrykk, samtidig som vi hjelper deg å gjøre det samme.
    */
    func_1_title: "Enkel brukeropplevelse",
    func_1_text: `Vi lover å levere en plattform som er intuitiv og lett å bruke, uansett teknisk ferdighetsnivå. Vi tror på enkelhet og tilgjengelighet for alle.`,
    func_2_title: "Kundestøtte når du trenger det",
    func_2_text: `Vårt dedikerte supportteam står alltid klare til å hjelpe deg med spørsmål eller utfordringer, slik at du aldri føler deg alene når du bruker våre verktøy.`,
    func_3_title: "Kontinuerlig forbedring",
    func_3_text: `Vi forplikter oss til kontinuerlig å oppdatere og forbedre vår plattform, basert på tilbakemeldinger fra våre brukere, slik at du alltid har de beste verktøyene tilgjengelig.`,
    func_4_title: "Sikkerhet i førersetet",
    func_4_text: `Din data er trygg hos oss. Vi lover å beskytte din informasjon med topp moderne sikkerhetstiltak, slik at du kan ha full tillit til vår plattform.`,
    func_5_title: "Skreddersydd for dine behov",
    func_5_text: `Vi forstår at ingen boligfellesskap er like. Derfor lover vi at våre løsninger kan tilpasses dine spesifikke behov, slik at de fungerer best mulig for deg.`,
    func_6_title: "Bærekraft i fokus",
    func_6_text: `Vi bryr oss om miljøet. Vår plattform er designet med bærekraft i tankene, og vi jobber kontinuerlig med å redusere vårt karbonavtrykk, samtidig som vi hjelper deg å gjøre det samme.`,
    location_text: `Kontaktinformasjon`,
  },
} as const;

/**
 * * Route translations are used to translate route names for the language switcher component
 * This can be useful for SEO reasons. The key does not matter, it just needs to match between languages
 *
 * ## Examples
 *
 * These routes must be everything after the base domain. So if this is "site.com/blog", the route would be "blog"
 * Or if this is "ste.com/blog/my-post", the route would be "blog/my-post"
 */
export const routeTranslations = {
  en: {
    aboutKey: "about",
  },
  nb: {
    aboutKey: "a-propos",
  },
} as const;
