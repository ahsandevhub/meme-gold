const About = () => {
  return (
    <section className="relative py-16 sm:py-[150px] bg-gradient-to-br from-raw-umber to-english-violet text-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-medium pixel-font text-maize mb-6">
          About MemeGold
        </h2>

        {/* Banner Image */}
        <div className="w-full flex justify-center mb-6">
          <img
            src="/banner.jpg"
            alt="GoldMeme Banner"
            className="w-full max-w-3xl rounded-lg shadow-lg"
          />
        </div>

        {/* About Details */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          MemeGold is the ultimate meme token inspired by the timeless value of
          gold and the power of the meme community. 100% Gold Meme, No Utility,
          No Roadmap, Just Fun! Join us and become part of the golden
          revolution.
        </p>
      </div>
    </section>
  );
};

export default About;
