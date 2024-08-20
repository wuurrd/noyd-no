import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Noyd",
  // Your website's title and description (meta fields)
  title: "Noyd - Efficient management, satisfied residents",
  description:
    "Noyd helps board members and managers of buildings and homeowner associations perform their tasks more efficiently. We provide tools for board work such as tasks, calendar, and to-do lists, along with a self-service portal for residents. Through our platform, residents can update their contact information, view electric vehicle charging stats, read news, and more. With Nøyd, management becomes easier and residents more satisfied.",

  // used on contact page and footer
  contact: {
    address1: "Nedre Huseby 7b",
    address2: "1482 Nittedal",
    orgNo: "932 366 770",
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
    alt: "Cosmic Themes logo",
  },
};

export default siteData;
