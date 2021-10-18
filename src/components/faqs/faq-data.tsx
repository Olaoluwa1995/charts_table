export type FAQ = {
  key: number;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    key: 1,
    question: "What is Paymyrent?",
    answer:
      "Paymyrent helps makes house rent saving seamless. Paymyrent takes away the stress and planning required to save on a regular basis through its automated and easy-to-use platform. Your savings also generates interests, up to 20% per annum.",
  },
  {
    key: 2,
    question: "Why should I save on Paymyrent?",
    answer: `
    <div>
      <p>Paymyrent is suitable for anyone who:</p>
      <ul>
        <li><strong>Never wants to miss their house rent payment when due</strong></li>
        <li><strong>Wants to save for a new apartment</strong></li>
        <li><strong>Wants the discipline to save</strong></li>
        <li><strong>Wants to avoid the embarrassment of house rent delays.</strong></li>
      </ul>
    </div>
    `,
  },
  {
    key: 3,
    question: "How do I start saving on Paymyrent?",
    answer: `
    <div>
      <p>To start saving on Paymyrent:</p>
      <ul>
        <li><strong>Visit the website to create an account.</strong></li>
        <li><strong>Set your withdrawal account</strong></li>
        <li><strong>Activate your account by making your first savings deposit. (Use a MasterCard, Visa or Verve from any bank in Nigeria).</strong></li>
        <li><strong>Then set up your savings</strong></li>
      </ul>
    </div>
    `,
  },
  {
    key: 4,
    question: "How much can I start saving with?",
    answer: `
    <div>
      <p>You can ONLY save between:</p>
      <ul>
        <li>N200 - N25,000 daily,</li>
        <li>N1500 - N100,000 weekly,</li>
        <li>or N5,000 - N500,000 monthly</li>
      </ul> 
      <br />
      <p>When using the Quicksave option which allows you to add more funds to your savings at any time, you can add up to N500,000 per time. Note that the Quicksave option does not give interest.</p>
    </div>
    `,
  },
  {
    key: 5,
    question: "Does Paymyrent have an office?",
    answer: `<p>Yes! We are located at No Paymyrent HQ 37, Akin Oshiyemi Street, Allen, Ikeja<br />
    Contact Number: 09034800393<br />
    Email: support@paymyrent.ng</p>`,
  },
  {
    key: 6,
    question: "Are my card details safe?",
    answer:
      "Your security is our only priority. Your card details are extremely safe as they are never stored on Paymyrent. We work with a PCIDSS-compliant payment processor, Paystack to handle your card details.",
  },
  {
    key: 7,
    question: "How secure is my money?",
    answer:
      "All funds are deposited in FirstBank and invested in risk-free instruments.",
  },
  {
    key: 8,
    question: "Are there bank charges when you deduct from my account?",
    answer:
      "No! it's completely FREE. There are no bank charges for transferring money to your Paymyrent account.",
  },
  {
    key: 9,
    question: "How safe is Paymyrent?",
    answer: `
      <div>
        <p>All financial information is encrypted and stored to PCI DSS Level 1 compliant standards. PCI DSS Level 1 compliance is a set of rules stated by credit card companies and audited by an independent third party.</p>
        <br />
        <p>It is the highest possible rating one can get in the electronic payment processing industry. Additionally, all transmission to our banking partner and on our site is via an encrypted 256-bit HTTPS SSL connection.</p>
      </div>
    `,
  },
  {
    key: 10,
    question: "Can I pause and continue my savings anytime?",
    answer: `
    <div>
      <p>Yes, you can, it is up to you to pause or continue the automatic saving any time for free. Just log in and click on "My Plans"</p>
      <ul>
        <li><strong>Click on the plan you want to pause or Activate</strong></li>
        <li><strong>Click on Edit Plan</strong></li>
        <li><strong>Click on Active or Pause</strong></li>
        <li><strong>Click on update.</strong></li>
      </ul>
    </div>
    `,
  },
  {
    key: 11,
    question: "Can I increase my savings anytime?",
    answer:
      "Yes, you can increase the amount you're saving at anytime. However, you won’t be able to increase your savings amount 2 months to the end of your savings tenure.",
  },
  {
    key: 12,
    question: "What if I don’t have funds in my account to debit?",
    answer: `
    <div>
      <p>Simple, we will not be able to debit you for that day, week or month. We will only be able to save for you when you have funds in your debit card. However, you have the option to use the "Quick save" option once you have loaded your account. Also note that you will lose interest on your savings if your savings comes in:</p>
      <ul>
        <li><strong>24 hours after the selected day for debit for weekly plan.</strong></li>
        <li><strong>72 hours after the selected day of debit for Monthly.</strong></li>
      </ul>
    </div>
    `,
  },
  {
    key: 13,
    question: "Do I get interest on Paymyrent?",
    answer: "Yes, you get up to 20% interest per annum.",
  },
  {
    key: 14,
    question: "What does 7% per deposit mean?",
    answer:
      "If you save N100,000 per month, you will be paid interest of N7,000 every time you make a deposit. This is the best offer you can get in the market. Note that the interest rate depends on the tenure selected.",
  },
  {
    key: 15,
    question: "Do I need to login each time I want to save?",
    answer: `No, everything is done automatically except you want to use the QuickSave option. All transactions on your debit card will be visible in your dashboard.
    We will send an email receipt to you every single time you save with your debit card and your bank will also send you an alert. It's 100% secure.`,
  },
  {
    key: 16,
    question: "How is my interest paid?",
    answer:
      "Once you make a savings, your interest goes into your withdrawable account. This amount can be withdrawn immediately.",
  },
  {
    key: 17,
    question: "How is Paymyrent able to afford higher interest rate?",
    answer:
      "Saved funds are warehoused with FirstBank PLC and invested in risk free instruments. The interest made on this instruments is shared to our savers.",
  },
  {
    key: 18,
    question: "When do I withdraw my savings?",
    answer: "You can withdraw for FREE only at the end of your savings tenure.",
  },
  {
    key: 19,
    question: "What If I want to withdraw before the end of tenure?",
    answer:
      "Withdrawing before the end of your tenure will attract a 5% penalty fee.",
  },
  {
    key: 20,
    question: "Can I choose any amount to withdraw per time?",
    answer:
      "Yes, you can, just go to the withdraw page and enter how much you want to withdraw.",
  },
  {
    key: 21,
    question: "How do I withdraw my savings?",
    answer: `You need to have filled your bank details in your withdrawal settings then, click on the "withdraw" option on your dashboard, enter the amount you want to withdraw and your funds will be transferred to your set bank account within the stipulated time.`,
  },
  {
    key: 24,
    question: "How much can I borrow?",
    answer:
      "You can borrow 10% of the total amount in your savings account. The amount you can borrow per time is displayed on your loanable dashboard.",
  },
  {
    key: 25,
    question: "How do I pay my Loan?",
    answer:
      "You can add a debit card for repayment, you can do a transfer to our bank account or you can settle the loan from your savings.",
  },
  {
    key: 26,
    question: "Why am I able to borrow from my savings?",
    answer:
      "Simply because we understand that life happens and when it happens, you are tempted to terminate your investment. We created this loan product to assist you sort unexpected expenses when the need arises.",
  },
  {
    key: 27,
    question:
      "What happens if I missed some savings and I now have funds for that?",
    answer:
      "We WON'T automatically debit your account if you missed any day, week or month and we WON'T charge you either. The QuickSave option is always available for you to manually make up for any lost day, week or month.",
  },
  {
    key: 28,
    question: "What is Quicksave and how does it work?",
    answer:
      "This option basically enables you to add more funds to your savings. For example, if you set N100,000 monthly and during the month, you got some idle funds, You can add this idle funds to your savings account. Note that this quick save funds doesn’t come with interest. Its to enable you increase your savings amount",
  },
];
