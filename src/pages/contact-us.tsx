import ContactBanner from "../components/blog/contact-us/contact-banner";
import Download from "../components/blog/download/download";
import FollowUs from "../components/blog/follow-us/follow-us";
import Footer from "../components/footer/footer";
import Header from "../components/header/header.component";

function ContactUs() {
  return (
    <>
      <Header />
      <ContactBanner />
      <FollowUs />
      <Download />
      <Footer />
    </>
  );
}

export default ContactUs;
