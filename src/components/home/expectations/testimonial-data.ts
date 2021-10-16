import StephenImage from "../../assets/stephen.jpeg";
import BisolaImage from "../../assets/bisola.jpeg";
import JareImage from "../../assets/jare.jpeg";

type Testimonial = {
  key: number;
  text: string;
  name: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    key: 1,
    name: "Mr. Stephen Olakulehin",
    image: StephenImage,
    text: "Paymyrent has helped me not to worry about money. I know my rent is secured and paying other bills has been with ease.",
  },
  {
    key: 2,
    name: "Miss Abisola Okunlola",
    image: BisolaImage,
    text: "I have been using Paymyrent for about 6 months now and my savings has grown drastically. Also, the interest is to die for cuz its sure meets my needs.",
  },
  {
    key: 3,
    name: "Mr. Adejare Taiwo",
    image: JareImage,
    text: "Paying my houserent has been so easy and convenient ever since I started saving with Paymyrent.",
  },
];
