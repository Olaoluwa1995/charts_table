import { FaHome } from "react-icons/fa";
import { MdContactPhone, MdQuestionAnswer } from "react-icons/md";

type LinkProps = {
  key: number;
  title: string;
  url: string;
  as?: any;
};

export const headerLinksData: LinkProps[] = [
  {
    key: 1,
    title: "Home",
    url: "/",
    as: FaHome,
  },
  {
    key: 2,
    title: "FAQ",
    url: "/faq",
    as: MdQuestionAnswer,
  },
  {
    key: 3,
    title: "Contact Us",
    url: "/contact-us",
    as: MdContactPhone,
  },
];
