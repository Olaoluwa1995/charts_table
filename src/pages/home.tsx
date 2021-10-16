import Banner from "../components/home/banner/banner";
import Benefits from "../components/home/benefits/benefits";
import CustomerService from "../components/home/customer-service/customer-service";
import Expectations from "../components/home/expectations/expectations";
import AsFeaturedOn from "../components/home/featured-on/featured-on";
import Features from "../components/home/features/features";
import Footer from "../components/footer/footer";
import Header from "../components/header/header.component";
import Story from "../components/home/story/story";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Benefits />
      <Features />
      <Story />
      <CustomerService />
      <Expectations />
      <AsFeaturedOn />
      <Footer />
    </>
  );
}

export default Home;
