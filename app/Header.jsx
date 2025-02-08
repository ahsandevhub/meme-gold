"use client";

import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "" },
    { name: "About", href: "#about" },
    { name: "Teams", href: "#teams" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Community", href: "#community" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky w-full top-0 backdrop-blur-md bg-gradient-to-r from-raw-umber to-harvest-gold text-white z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left - Logo */}
        <a
          href="/"
          className="flex items-center gap-1 text-xl sm:text-2xl font-medium"
        >
          <Image
            src={"/goldmeme.gif"}
            height={50}
            width={50}
            alt="logo"
            className="size-12 sm:size-16"
          />
          <h3>MemeGold64</h3>
        </a>

        {/* Right - Navbar */}
        <nav className="hidden sm:flex space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:bg-picton-blue hover:text-black py-2 px-4 rounded-md transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-10"
          >
            {/* Hamburger Icon */}
            <div
              className={`w-6 h-1 bg-white mb-1 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white mb-1 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            {/* Cross Icon */}
            <div
              className={`w-6 h-1 bg-white mt-1 transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-english-violet text-white py-4 space-y-4 transition-all duration-300 ease-in-out">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-center py-2 px-4 rounded-md hover:bg-harvest-gold transition duration-300"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
