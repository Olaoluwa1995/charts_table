import BBCImage from "../../assets/bbc.png";
import BellaImage from "../../assets/bella.png";
import BusinessImage from "../../assets/business.png";
import DisruptImage from "../../assets/disrupt.png";
import GuardianImage from "../../assets/guardian.png";
import LindaImage from "../../assets/linda.png";
import PunchImage from "../../assets/punch.png";
import TechpointImage from "../../assets/techpoint.png";

export type FeaturedOn = {
  key: number;
  image: string;
  delay: string;
};

export const featuredOns: FeaturedOn[] = [
  {
    key: 1,
    image: BusinessImage,
    delay: "0",
  },
  {
    key: 2,
    image: PunchImage,
    delay: "200",
  },
  {
    key: 3,
    image: LindaImage,
    delay: "400",
  },
  {
    key: 4,
    image: BBCImage,
    delay: "600",
  },
  {
    key: 5,
    image: DisruptImage,
    delay: "800",
  },
  {
    key: 6,
    image: GuardianImage,
    delay: "1000",
  },
  {
    key: 7,
    image: BellaImage,
    delay: "1200",
  },
  {
    key: 8,
    image: TechpointImage,
    delay: "1400",
  },
];
