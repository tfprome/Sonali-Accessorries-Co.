import React from 'react';
import pro from '../../assets/pro.jpg';
import BOD1 from '../../assets/BOD1.jpg';
import BOD2 from '../../assets/BOD2.jpg';
import shafkat from '../../assets/shafkat.jpg';
import saikat from '../../assets/shaikat.jpg';
import sazim from '../../assets/sazim.jpg';
import { motion } from 'framer-motion';

const BOD = () => {
  return (
    <div className="flex flex-col my-20 gap-10">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'linear' }}
        className="text-4xl font-bold font-serif text-center"
      >
        Board of Directors
      </motion.h1>

      {/* Proprietor */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'linear' }}
        className="flex justify-center"
      >
        <img
          src={pro}
          alt="proprietor"
          className="w-40 h-40 md:w-44 md:h-44 lg:w-[200px] lg:h-[200px] rounded-xl object-contain"
        />
      </motion.div>

      {/* Row 2 */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, type: 'linear' }}
        className="flex flex-wrap justify-center md:justify-evenly gap-6 md:gap-10"
      >
        <img
          src={BOD2}
          alt="BOD2"
          className="w-36 h-36 md:w-40 md:h-40 lg:w-[200px] lg:h-[200px] rounded-xl object-contain"
        />
        <img
          src={BOD1}
          alt="BOD1"
          className="w-36 h-36 md:w-40 md:h-40 lg:w-[200px] lg:h-[200px] rounded-xl object-contain"
        />
      </motion.div>

      {/* Row 3 */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, type: 'linear' }}
        className="flex flex-wrap justify-center md:justify-evenly gap-6 md:gap-10"
      >
        <img
          src={saikat}
          alt="saikat"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-[200px] lg:h-[200px] rounded-xl object-contain"
        />
        <img
          src={shafkat}
          alt="shafkat"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-[200px] lg:h-[200px] rounded-xl object-contain"
        />
        <img
          src={sazim}
          alt="sazim"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-[200px] lg:h-[200px] rounded-xl object-contain"
        />
      </motion.div>
    </div>
  );
};

export default BOD;
