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
};

export const featuredOns: FeaturedOn[] = [
  {
    key: 1,
    image: BusinessImage,
  },
  {
    key: 2,
    image: PunchImage,
  },
  {
    key: 3,
    image: LindaImage,
  },
  {
    key: 4,
    image: BBCImage,
  },
  {
    key: 5,
    image: DisruptImage,
  },
  {
    key: 6,
    image: GuardianImage,
  },
  {
    key: 7,
    image: BellaImage,
  },
  {
    key: 8,
    image: TechpointImage,
  },
];
