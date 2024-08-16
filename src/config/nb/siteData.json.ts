import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Nøyd",
  // Your website's title and description (meta fields)
  title: "Nøyd - Effektiv styring, fornøyde beboere",
  description:
    "Nøyd hjelper styremedlemmer og forvaltere av bygårder og borettslag med å utføre sitt arbeid mer effektivt. Vi tilbyr verktøy for styrearbeid som oppgaver, kalender og gjøremålslister, samt en selvbetjeningsportal for beboerne. Gjennom vår plattform kan beboerne oppdatere kontaktinformasjon, se statistikk over elbillading, lese nyheter og mer. Med NØYD blir styringen enklere og beboerne mer fornøyde.",

  // used on contact page and footer
  contact: {
    address1: "Nedre Huseby 7b",
    address2: "1482 Nittedal",
    phone: "Org.nr. 932 366 770",
    email: "hei@noyd.no",
  },

  // Your information for blog post purposes
  author: {
    name: "Nøyd",
    email: "hei@noyd.no",
    twitter: "",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/cosmic-themes-logo.jpg",
    alt: "Nøyd logo",
  },
};

export default siteData;
