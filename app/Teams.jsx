"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Gold Member",
    role: "Chief Gold Strategist",
    image: "/team/Gold Member.jpg",
    color: "border-red-500 shadow-red-400",
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

const Teams = () => {
  return (
    <section id="team" className="py-16 sm:py-[150px] bg-black text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2
          className="text-2xl sm:text-4xl text-yellow-500 font-medium mb-10 uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MemGold64 Corporate Team
        </motion.h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-4 bg-white/10 p-6 rounded-lg border backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Profile Image with Ring Border */}
              <div
                className={`relative w-32 h-32 rounded-full overflow-hidden border-4 ${member.color}`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              {/* Name & Role */}
              <div className="space-y-3">
                <h3 className="text-lg">{member.name}</h3>
                <p className="text-xs text-gray-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
