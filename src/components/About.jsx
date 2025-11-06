import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="relative pt-20">
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute left-7 pt-6 pl-10 text-3xl font-bold text-gray-800">About</motion.div>
        <section className="w-full px-6 py-16 bg-gray-50 flex justify-center">
        <div className="w-full flex flex-col justify-between md:flex-row items-center gap-60">
          {/* Left: Animated About Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/6 flex flex-col justify-start relative"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-green-600"></div>
            <h3 className="text-4xl text-gray-700 pl-10 font-bold">SONALI ACCESSORIES CO.</h3>
          </motion.div>
  
          {/* Right: Paragraph */}
          <div className="w-full md:w-5/6">
            <p className="text-gray-700 leading-relaxed max-h-80 max-w-[1000px] overflow-auto">
              M/S SONALI ACCESSORIES CO. is a 100% export-oriented garments accessories
              manufacturer and supplier. M/S S.K. PRINTERS is a prominent quality offset printers
              and is a sister concern of M/S Sonali Accessories Co. Since 1996 both businesses are
              manufacturing quality garments accessories. Our printing project is located at the heart
              of Dhaka City (Motijheel) and our factory is located in Signboard, Narayanganj. Our
              goal is to provide backward linkage support to the garments industry by manufacturing
              and supplying high-quality accessories items to them. Our facilities are well established
              on our own land and well equipped with many types of machinery. Our staff and technicians
              are skilled and well trained.
              M/S Sonali Accessories Co. and M/S S.K. Printers seek to attain customer satisfaction
              by manufacturing and providing export quality accessories products while maintaining
              the proper delivery schedule. To us, the greatest customer satisfaction is the key to
              our business growth and prosperity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
