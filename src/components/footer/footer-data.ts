import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";

export type Item = {
  key: number;
  name: string;
};

export type Social = {
  key: number;
  image: string;
};

export const appFeatures: Item[] = [
  {
    key: 1,
    name: "Paymyrent Account",
  },
  {
    key: 2,
    name: "Spend",
  },
  {
    key: 3,
    name: "Save",
  },
  {
    key: 4,
    name: "Plans",
  },
  {
    key: 5,
    name: "Loan",
  },
  {
    key: 6,
    name: "Wallet",
  },
  {
    key: 7,
    name: "Paybills",
  },
];

export const company: Item[] = [
  {
    key: 1,
    name: "Blog",
  },
  {
    key: 2,
    name: "Press",
  },
  {
    key: 3,
    name: "Join our team",
  },
  {
    key: 4,
    name: "About Us",
  },
];

export const help: Item[] = [
  {
    key: 1,
    name: "Get Help",
  },
  {
    key: 2,
    name: "FAQs",
  },
  {
    key: 3,
    name: "Contact Us",
  },
];

export const transparency: Item[] = [
  {
    key: 1,
    name: "Terms of Use",
  },
  {
    key: 2,
    name: "Private Policy",
  },
  {
    key: 3,
    name: "Cookie Policy",
  },
];

export const socials: Social[] = [
  {
    key: 1,
    image: Twitter,
  },
  {
    key: 2,
    image: Facebook,
  },
  {
    key: 3,
    image: Instagram,
  },
  {
    key: 4,
    image: LinkedIn,
  },
];
