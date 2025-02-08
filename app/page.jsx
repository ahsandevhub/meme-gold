import About from "./About";
import BackgroundMusic from "./BackgroundMusic";
import Footer from "./Footer";
import Header from "./Header";
import Hero2 from "./Hero2";
import Tokenomics from "./Tokenomics";

const HomePage = () => {
  return (
    <>
      <BackgroundMusic />
      <Header />
      {/* <Hero /> */}
      <Hero2 />
      <hr className="border-yellow-800" />
      <About />
      <hr className="border-yellow-800" />
      {/* <Teams /> */}
      <hr className="border-yellow-800" />
      <Tokenomics />
      <Footer />
    </>
  );
};

export default HomePage;
