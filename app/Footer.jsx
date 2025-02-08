import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        {/* MemeGold64 Logo */}
        <div className="text-3xl pixel-font mb-6 text-harvest-gold">
          MemeGold64
        </div>

        {/* Social Media Icons */}
        <div id="community" className="flex space-x-6 mb-6">
          <a
            href="https://t.me/memegold64"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={50}
              width={50}
              src="/telegram.png"
              alt="telegram logo"
              className="size-10 inline-block bg-white rounded-lg border border-transparent hover:border-yellow-500 hover:outline hover:outline-yellow-500 hover:scale-110 transition-all duration-300"
            />
          </a>
          <a
            href="https://x.com/MemGold64"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={50}
              width={50}
              src="/twitter.png"
              alt="twitter logo"
              className="size-10 inline-block bg-white rounded-lg border border-transparent hover:border-yellow-500 hover:outline hover:outline-yellow-500 hover:scale-110 transition-all duration-300"
            />
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={50}
              width={50}
              src="/dex-screener-logo.png"
              alt="dex logo"
              className="size-10 inline-block bg-white rounded-lg border border-transparent hover:border-yellow-500 hover:outline hover:outline-yellow-500 hover:scale-110 transition-all duration-300"
            />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mb-4">
          Copyright © 2025 MemeGold64. All Rights Reserved.
        </div>

        {/* Developed By Ahsan DevHub */}
        <div className="text-center text-xs text-gray-400">
          Developed by{" "}
          <a
            href="https://ahsandevhub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:underline"
          >
            Ahsan DevHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
