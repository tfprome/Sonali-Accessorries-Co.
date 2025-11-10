import React from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import Polybag from '../assets/polybags.jpeg';
import Navbar from '../components/Navbar';
import polymachine from '../assets/polymachine.png';
import polymachine1 from '../assets/polymachine1.png'
import polymachine2 from '../assets/polymachine2.png'
import polymachine3 from '../assets/polyachine3.png'
import { useState,useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const Polybags = () => {
  const images=[polymachine,polymachine1,polymachine2,polymachine3]
  const visibleCount = 3;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all images
  useEffect(() => {
    images.forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  // Generate visible images for display
  const getVisibleImages = () => {
    return Array.from({ length: visibleCount }).map((_, i) => {
      return images[(currentIndex + i) % images.length];
    });
  };

  const visibleImages = getVisibleImages();
  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
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

      {/* Products & Capacity Section */}
      <div className="flex justify-between items-start bg-gray-100 p-10 gap-8 flex-wrap md:flex-nowrap">
        {/* Left text section */}
        <motion.div
          className="w-full md:w-2/5 flex flex-col gap-4 font-serif"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold border-b pb-2">Our Products include</h1>
          <p className="border-b font-semibold">1. Blister poly bag</p>
          <p className="border-b font-semibold">2. Individual single poly bag</p>
          <p className="border-b font-semibold">3. Adhesive poly bag</p>
          <p className="border-b font-semibold">4. Hanger poly bag</p>
          <p className="border-b font-semibold">5. Poly bag with flap and gusset</p>
          <p className="border-b font-semibold">6. Printed poly bag</p>
          <p className="border-b font-semibold">7. LDPE, LLDPE & PP poly bag</p>
        </motion.div>

        {/* Capacity Section */}
        <motion.div
          className="w-full md:w-1/3 flex flex-col gap-6 items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-serif font-bold border-b text-gray-800 pb-2">
            Our Capacity
          </h1>

          {/* Animated Capacity Box */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-r from-green-600 to-emerald-400 text-white px-10 py-8 rounded-2xl shadow-xl text-center w-full md:w-80"
          >
            <motion.h2
              className="text-5xl font-extrabold tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              150,000+
            </motion.h2>
            <p className="text-lg font-semibold mt-2">
              Polybags Produced <br /> Every Day
            </p>
          </motion.div>

          <p className="text-gray-600 text-center text-sm italic">
            *Maintaining global production standards with precision & efficiency*
          </p>
        </motion.div>
      </div>
      
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Our Machineries
        </h1>

        <div className="relative mx-auto w-full max-w-5xl overflow-hidden">
          {/* Slider container */}
          <motion.div
            className="flex w-full"
            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/3 p-3"
              >
                <motion.img
                  src={img}
                  alt={`Machine ${index + 1}`}
                  className="w-full h-64 object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Polybags;
