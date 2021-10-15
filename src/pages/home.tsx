import "../App.css";
import Banner from "../components/banner/banner";
import Benefits from "../components/benefits/benefits";
import Features from "../components/features/features";
import Header from "../components/header/header.component";

function Home() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Benefits />
      <Features />
    </div>
  );
}

export default Home;
