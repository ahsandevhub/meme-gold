import About from "./About";
import BackgroundMusic from "./BackgroundMusic";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Teams from "./Teams";
import Tokenomics from "./Tokenomics";

const HomePage = () => {
  return (
    <>
      <BackgroundMusic />
      <Header />
      <Hero />
      <hr className="border-yellow-800" />
      <About />
      <hr className="border-yellow-800" />
      <Teams />
      <hr className="border-yellow-800" />
      <Tokenomics />
      <Footer />
    </>
  );
};

export default HomePage;
