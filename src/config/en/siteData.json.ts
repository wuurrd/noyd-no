import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Noyd",
  // Your website's title and description (meta fields)
  title: "Noyd - Efficient management, satisfied residents",
  description:
    "Noyd helps board members and managers of buildings and homeowner associations perform their tasks more efficiently. We provide tools for board work such as tasks, calendar, and to-do lists, along with a self-service portal for residents. Through our platform, residents can update their contact information, view electric vehicle charging stats, read news, and more. With NØYD, management becomes easier and residents more satisfied.",

  // used on contact page and footer
  contact: {
    address1: "1234 Main Street",
    address2: "New York, NY 10001",
    phone: "(123) 456-7890",
    email: "creator@cosmicthemes.com",
  },

  // Your information for blog post purposes
  author: {
    name: "Cosmic Themes",
    email: "creator@cosmicthemes.com",
    twitter: "Cosmic_Themes",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/cosmic-themes-logo.jpg",
    alt: "Cosmic Themes logo",
  },
};

export default siteData;
