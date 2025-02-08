import About from "./About";
import BackgroundMusic from "./BackgroundMusic";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Tokenomics from "./Tokenomics";

const HomePage = () => {
  return (
    <>
      <BackgroundMusic />
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Footer />
    </>
  );
};

export default HomePage;
