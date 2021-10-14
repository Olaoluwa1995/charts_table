import { BsBook } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";

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
    as: AiOutlineHome,
  },
  {
    key: 2,
    title: "FAQ",
    url: "/faq",
    as: GiTeacher,
  },
  {
    key: 3,
    title: "Blog",
    url: "/blog",
    as: BsBook,
  },
];
