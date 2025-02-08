import About from "./About";
import BackgroundMusic from "./BackgroundMusic";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <>
      <BackgroundMusic />
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  );
};

export default HomePage;
