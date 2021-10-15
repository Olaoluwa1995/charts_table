import "../App.css";
import Banner from "../components/banner/banner";
import Benefits from "../components/benefits/benefits";
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
    </div>
  );
}

export default Home;
