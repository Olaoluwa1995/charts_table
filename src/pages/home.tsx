import "../App.css";
import Banner from "../components/banner/banner";
import Benefits from "../components/benefits/benefits";
import CustomerService from "../components/customer-service/customer-service";
import Expectations from "../components/expectations/expectations";
import AsFeaturedOn from "../components/featured-on/featured-on";
import Features from "../components/features/features";
import Header from "../components/header/header.component";
import Story from "../components/story/story";

function Home() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Benefits />
      <Features />
      <Story />
      <CustomerService />
      <Expectations />
      <AsFeaturedOn />
    </div>
  );
}

export default Home;
