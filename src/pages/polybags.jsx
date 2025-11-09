import React from 'react';
import { motion } from 'framer-motion';
import Polybag from '../assets/montrimspoly.png';
import Navbar from '../components/Navbar';

const Polybags = () => {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-screen h-[80vh]">
        <img
          src={Polybag}
          alt="Polybags"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-12 md:pl-20 gap-4">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Poly Bags
          </motion.h1>
          <motion.h2
            className="w-11/12 md:w-1/3 text-lg md:text-xl font-semibold text-white drop-shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Delivering precision-measured, high-quality printed poly bags with uncompromised excellence.
          </motion.h2>
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold border-b-2 border-green-300 inline-block mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Premium Polybag Solutions with Precision & Quality
        </motion.h1>

        <motion.p
          className="md:text-xl text-gray-700 leading-relaxed text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Our polybag production unit is outfitted with cutting-edge, high-speed machinery designed for LDPE, LLDPE, and PP materials, coupled with precision Flexographic printing systems and fully automated bag-making machines sourced from Taiwan. These advanced technologies enable us to maintain impeccable standards in both production efficiency and product quality. Each polybag undergoes strict measurement checks and rigorous quality control processes, ensuring that every item meets exact specifications. From durability and dimensional accuracy to vibrant, high-resolution printing, we guarantee that our polybags uphold the highest standards of excellence, reliability, and aesthetic appeal, making them the perfect choice for the modern garments and accessories industry.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Polybags;
