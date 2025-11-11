import React from 'react';
import heroelastic from '../../assets/heroelastic.png'
import { motion } from 'framer-motion';

const Hero = (props) => {
    return (
        <div>
              <div className="relative w-full m-0 p-0">
        <img
          src={heroelastic}
          alt="elastic"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-12 md:pl-20 gap-4">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elastic
          </motion.h1>
          <motion.h2
            className="w-11/12 md:w-1/3 text-lg md:text-xl font-semibold text-white drop-shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Strong elastics with modern machines <br/> and trusted quality.
          </motion.h2>
        </div>
      </div>
        </div>
    );
};

export default Hero;