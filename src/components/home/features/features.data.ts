import { COLORS } from "../../../styles/theme";
import GrowthImage from "../../../assets/growth.png";
import WalletImage from "../../../assets/wallet.png";
import WalletOverlayImage from "../../../assets/wallet-overlay.png";
import LoansImage from "../../../assets/loans.png";
import PaybillsImage from "../../../assets/paybills.png";
import PaybillsOverlayImage from "../../../assets/paybills-overlay.png";

export type Feature = {
  key: number;
  title: string;
  tag: string;
  tagColor: string;
  tagBgColor: string;
  image: string;
  overlayImage?: string;
  description: string;
};

export const featuresData: Feature[] = [
  {
    key: 1,
    tag: "Growth",
    tagColor: `${COLORS.PRIMARY_COLOR}`,
    tagBgColor: `${COLORS.BACKGROUND_COLOR}`,
    image: GrowthImage,
    title: "Savings: Grow your Money",
    description:
      "Whether you're investing, saving, or anything in between, you can save more than you imagined. Earn bonuses on every referral.",
  },
  {
    key: 2,
    tag: "Wallet",
    tagColor: "#171355",
    tagBgColor: "rgba(23, 19, 85, 0.05)",
    image: WalletImage,
    overlayImage: WalletOverlayImage,
    title: "Spend and Save: Digital Wallet",
    description:
      "You need money on the go, this is your package. You can save money on your wallet account for petty expenses. You can also decide to send money to friends and families via your wallet account.  These all comes with zero charges on your money.",
  },
  {
    key: 3,
    tag: "Loans",
    tagColor: "#15E3F0",
    tagBgColor: "rgba(21, 227, 240, 0.05)",
    image: LoansImage,
    title: "Get Loans and still be ahead of your finanace game",
    description:
      "Loans are not supposed to wreck your finanaces. With Paymyrent, interest rate of 5 % on every loan.",
  },
  {
    key: 4,
    tag: "Paybills",
    tagColor: "#EE09BB",
    tagBgColor: "rgba(238, 9, 187, 0.05)",
    image: PaybillsImage,
    overlayImage: PaybillsOverlayImage,
    title: "Buy Airtime, Data Plans, Electricity and Cable bills",
    description:
      "No need to wrack your head to get a USSD code for transactions, simply log in to paymyrent app and let us do all the running for you.",
  },
];
