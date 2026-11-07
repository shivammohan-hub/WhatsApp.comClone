import Header from "./components/Header";
import Hero from "./components/Hero";
import Private from "./components/Private";
import Web from "./components/Web";

const App = () => {
  return (
    <div className="bg-[#fcf5eb] font-[Arial,sans-serif]">
      <Header />
      <Hero />
      <Web />
      <Private />
    </div>
  );
};

export default App;
