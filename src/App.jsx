import Business from "./components/Business";
import Encrypted from "./components/Encrypted";
import Express from "./components/Express";
import Footer from "./components/Footer";
import Groups from "./components/Groups";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Private from "./components/Private";
import VideoCall from "./components/VideoCall";
import Web from "./components/Web";

const App = () => {
  return (
    <div className="bg-[#fcf5eb] font-[Arial,sans-serif]">
      <Header />
      <Hero />
      <Web />
      <Private />
      <VideoCall />
      <Encrypted />
      <Groups />
      <Express />
      <Business />
      <Footer />
    </div>
  );
};

export default App;
