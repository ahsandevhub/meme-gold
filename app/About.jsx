const About = () => {
  return (
    <section className="relative py-16 sm:py-[150px] bg-black text-white">
      <div id="about" className="absolute -top-12"></div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/pixelated-video-game-treasure.avif')] bg-cover bg-center opacity-10" />

      <div className="relative max-w-screen-lg mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-medium pixel-font text-maize mb-6">
          About MemGold64
        </h2>

        {/* Banner Image
        <div className="w-full flex justify-center mb-6">
          <img
            src="/banner final.jpg"
            alt="GoldMeme Banner"
            className="w-full rounded-lg shadow-lg border-2 border-sky-500"
          />
        </div> */}

        {/* About Details */}
        <p className="text-gray-300 max-w-3xl mx-auto">
          Move over, Gold—MemGold64 is here to claim the throne! Meme coins may
          battle it out with Bitcoin, but there’s never been a meme precious
          metal to rival gold… until now. MemGold64 is the golden treasure of
          internet culture, celebrating iconic memes and rewarding those who
          live for viral moments. It’s not just a coin; it’s digital gold for
          meme lovers everywhere. Collect the laughs, share the nostalgia, and
          secure your place in meme history!
        </p>

        <div className="max-w-3xl mx-auto flex justify-center sm:border-4 border-2 border-yellow-500 rounded-lg bg-slate-800 sm:p-2 p-1 sm:mt-12 mt-10">
          <img
            src="/tweet.jpg"
            alt="GoldMeme Banner"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
