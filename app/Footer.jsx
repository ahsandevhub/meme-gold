import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        {/* MemeGold Logo */}
        <div className="text-4xl font-bold pixel-font mb-6 text-harvest-gold">
          MemeGold
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-3xl hover:text-harvest-gold transition duration-300" />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="text-3xl hover:text-harvest-gold transition duration-300" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="text-3xl hover:text-harvest-gold transition duration-300" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mb-4">
          Copyright © 2025 MemeGold. All Rights Reserved.
        </div>

        {/* Developed By Ahsan DevHub */}
        <div className="text-center text-sm text-gray-400">
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
