import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative md:py-[200px] py-14 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="max-w-screen-xl mx-auto px-4 flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between relative z-10">
        {/* Left Side - Text */}
        <div className="text-center sm:text-start space-y-6 w-full sm:w-1/2">
          <h1 className="text-4xl sm:text-6xl mb-3 font-medium pixel-font text-harvest-gold">
            MemeGold64
          </h1>
          <h2 className="text-xl sm:text-4xl">The Ultimate Gold Meme Token</h2>
          <p className="text-lg text-maize">
            100% Gold Meme, No Utility, No Roadmap, Just Fun!
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center flex-col sm:flex-row sm:justify-start sm:gap-6 gap-4">
            <a
              href="#how-to-buy"
              className="bg-harvest-gold text-sm text-black py-2 px-4 rounded-md hover:bg-harvest-gold/80 transition duration-300"
            >
              Buy Now
            </a>
            <a
              href="#community"
              className="border-2 text-sm border-harvest-gold text-harvest-gold py-2 px-4 rounded-md hover:bg-harvest-gold hover:text-black transition duration-300"
            >
              Join Community
            </a>
          </div>
        </div>

        {/* Right Side - Rotating Coin GIF */}
        <div className="">
          <Image
            height={800}
            width={800}
            src="/goldmeme.gif"
            alt="MemeGold64 Coin"
            className="w-64 h-64 sm:w-96 sm:h-96 object-contain"
          />
        </div>
      </div>

      {/* Pixelated Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center pixel-bg"></div>
    </section>
  );
};

export default Hero;
