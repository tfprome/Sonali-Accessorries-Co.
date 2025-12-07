import React, { useState } from "react";
import { motion } from "framer-motion";

// Import your 5 images
import img1 from "../../assets/drawcode.jpg";
import img2 from "../../assets/drawcord2.jpg";
import img3 from "../../assets/drawcord3.jpg";
import img4 from "../../assets/drawcord4.jpg";
import img5 from "../../assets/drawcord5.jpg";

const OurProductDemo = () => {
  const images = [img1, img2, img3, img4, img5];

  // State for modal
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Parent container animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Each image animation
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  // Handle image click
  const handleImageClick = (img) => {
    setSelectedImage(img);
    setShowImage(true);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center">
          Our Product Demo
        </h2>

        {/* Flex container with staggered animation */}
        <motion.div
          className="flex flex-wrap justify-evenly gap-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.1 }}
              className="w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick(img)}
            >
              <img
                src={img}
                alt={`Drawcord ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black/40 bg-opacity-30 flex justify-center items-center z-50"
          onClick={() => setShowImage(false)}
        >
          <motion.img
            src={selectedImage}
            alt="Selected Drawcord"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="max-w-full h-4/5 rounded-lg shadow-2xl will-change-transform"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking image
          />
        </div>
      )}
    </section>
  );
};

export default OurProductDemo;
