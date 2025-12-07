import React from "react";
import herodrawcord from "../../assets/drawcordherosection.png";
import { motion } from "framer-motion";

const DrawcordHeroSection = () => {
  return (
    <div className="relative w-full h-[420px] md:h-[480px] overflow-hidden">
      <img
        src={herodrawcord}
        alt="Drawcord"
        className="w-full h-full object-cover"
      />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-6xl font-bold text-white drop-shadow-xl leading-snug"
        >
          Drawcord & Drawstring
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-3 text-base md:text-xl font-medium text-white drop-shadow-lg max-w-lg"
        >
          Where Quality Holds Together
        </motion.p>
      </div>
    </div>
  );
};

export default DrawcordHeroSection;
