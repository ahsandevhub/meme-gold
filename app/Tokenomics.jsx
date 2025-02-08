"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaExchangeAlt,
  FaFire,
  FaGlobe,
  FaLock,
  FaRocket,
} from "react-icons/fa";

const tokenomicsData = [
  {
    icon: <FaRocket />,
    text: "Fair Launch",
    color: "text-red-500 border-red-500 hover:shadow-red-400",
  },
  {
    icon: <FaFire />,
    text: "No pre-sale, no insiders, max 1B supply",
    color: "text-orange-500 border-orange-500 hover:shadow-orange-400",
  },
  {
    icon: <FaLock />,
    text: "Ownership renounced, immutable",
    color: "text-blue-500 border-blue-500 hover:shadow-blue-400",
  },
  {
    icon: <FaCheckCircle />,
    text: "Fully audited smart contracts",
    color: "text-green-500 border-green-500 hover:shadow-green-400",
  },
  {
    icon: <FaExchangeAlt />,
    text: "Buy and sell at any time",
    color: "text-purple-500 border-purple-500 hover:shadow-purple-400",
  },
  {
    icon: <FaGlobe />,
    text: "Available on Solana",
    color: "text-yellow-500 border-yellow-500 hover:shadow-yellow-400",
  },
];

const Tokenomics = () => {
  return (
    <section className="relative py-16 sm:py-[100px] bg-gradient-to-br from-english-violet to-raw-umber text-black overflow-hidden">
      <div id="tokenomics" className="absolute -top-12"></div>
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/treasure.avif')] bg-cover bg-center opacity-10" />

      {/* Content Container */}
      <div className="relative max-w-3xl mx-auto text-center px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold sm:mb-14 text-yellow-400 mb-8 uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tokenomics
        </motion.h2>

        {/* Tokenomics Cards */}
        <div className="space-y-6">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col sm:flex-row items-center sm:gap-4 gap-3 bg-black/40 rounded-lg p-4 shadow-lg border-2 backdrop-blur-md transition-all duration-300 hover:scale-105 ${item.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span className="sm:text-2xl text-4xl">{item.icon}</span>
              <p className="text-base sm:text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
