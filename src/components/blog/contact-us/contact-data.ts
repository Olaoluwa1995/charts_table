import AddressImage from "../../../assets/address.png";
import PhoneImage from "../../../assets/phone.png";
import EmailImage from "../../../assets/mail.png";

export type Contact = {
  key: number;
  title: string;
  text: string;
  image: string;
  delay: string;
};

export const contacts: Contact[] = [
  {
    key: 1,
    image: AddressImage,
    delay: "0",
    title: "Address",
    text: "Paymyrent HQ 37, \n Akin Oshiyemi Street, \n Allen, Ikeja",
  },
  {
    key: 2,
    image: PhoneImage,
    delay: "200",
    title: "Phone Number",
    text: "09034800393 or \n08060051069",
  },
  {
    key: 3,
    image: EmailImage,
    delay: "400",
    title: "Email",
    text: "support@paymyrent.ng",
  },
];
