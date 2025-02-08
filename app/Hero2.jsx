"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const contractAddress = "8vTeqSjbuidwD5wTTYf3eKgYUDfPLSfD23AVDcSgmoon";

const teamMembers = [
  {
    name: "Gold Member",
    role: "Chief Gold Strategist",
    image: "/team/Gold Member.jpg",
    color: "border-yellow-500 shadow-red-400",
  },
  {
    name: "Jonathan Goldsmith",
    role: "The Most Interesting Financial Manager",
    image: "/team/Jonathan Goldsmith.jpg",
    color: "border-red-500 shadow-red-400",
  },
  {
    name: "Peter Schiff",
    role: "Director of Meme Acquisitions",
    image: "/team/Peter Schiff.jpg",
    color: "border-blue-500 shadow-blue-400",
  },
  {
    name: "Giorgio A. Tsoukalos",
    role: "Gold Valuation Mathematician",
    image: "/team/Giorgio A. Tsoukalos.jpg",
    color: "border-green-500 shadow-green-400",
  },
];

const Hero2 = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="relative py-12 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay (Fixed - pointer-events-none) */}
      <div className="absolute inset-0 bg-black bg-opacity-80 pointer-events-none"></div>

      {/* Content (Fixed - relative) */}
      <div className="relative max-w-4xl mx-auto text-center px-6">
        {/* Banner Image */}
        <div className="w-full flex justify-center mb-6">
          <img
            src="/banner final.jpg"
            alt="GoldMeme Banner"
            className="w-full rounded-lg shadow-lg border-2 border-sky-500"
          />
        </div>

        {/* Contract Address with Copy Button */}
        <div className="mb-6 bg-white/10 p-4 rounded-lg border flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-4">
          <span className="text-yellow-400 sm:text-2xl font-mono break-all">
            CA: {contractAddress}
          </span>
          <button
            onClick={handleCopy}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-all"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Social Media Icons */}
        <div id="community" className="flex justify-center space-x-6 mb-6">
          {[
            {
              href: "https://t.me/MemGold64",
              img: "/telegram.png",
              alt: "Telegram",
            },
            {
              href: "https://x.com/MemGold64",
              img: "/twitter.png",
              alt: "Twitter",
            },
            {
              href: "https://dexscreener.com/solana/8vteqsjbuidwd5wttyf3ekgyudfplsfd23avdcsgmoon",
              img: "/dex-screener-logo.png",
              alt: "Dex Screener",
            },
            {
              href: "https://www.tiktok.com/@memgold64?_t=ZS-8tkpqlugkER&_r=1",
              img: "/tiktok.png",
              alt: "TikTok",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                height={50}
                width={50}
                src={social.img}
                alt={social.alt}
                className="size-10 inline-block bg-white rounded-lg border border-transparent hover:border-yellow-500 hover:outline hover:outline-yellow-500 hover:scale-110 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        <motion.h2
          className="relative text-2xl sm:text-4xl text-yellow-500 font-medium mb-10 uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            id="teams"
            className="absolute sm:-top-[100px] -top-[85px]"
          ></div>
          MemGold64 Corporate Team
        </motion.h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center sm:space-y-4 space-y-2 bg-white/10 sm:p-6 p-4 rounded-lg border backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Profile Image with Ring Border */}
              <div
                className={`relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 ${member.color}`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              {/* Name & Role */}
              <div className="sm:space-y-3 space-y-2">
                <h3 className="text-lg">{member.name}</h3>
                <p className="text-xs text-gray-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pixelated Background Effect (Fixed - pointer-events-none) */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center pixel-bg pointer-events-none"></div>
    </section>
  );
};

export default Hero2;
