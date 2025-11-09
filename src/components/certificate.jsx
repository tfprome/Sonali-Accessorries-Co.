import React, { useState } from "react";
import { motion, AnimatePresence,easeOut } from "framer-motion";

import cert1 from "../assets/global-recycled-standard.png";
import cert2 from "../assets/OEKO-TEX_Logo.png";
import cert3 from "../assets/Intertek.png";
import gclcert from '../assets/gcl cert.png';
import oekocert from '../assets/oekocert.png';
import intercert from '../assets/intertekcert.png'

const certificates = [
  {
    image: cert1,
    title: "Global Recycled Standard",
    desc: "Certified for sustainable and recycled material standards.",
    certificate: gclcert,
  },
  {
    image: cert2,
    title: "OEKO-TEX Standard",
    desc: "Certified for international export compliance and safety regulations.",
    certificate:oekocert
  },
  {
    image: cert3,
    title: "Intertek Certification",
    desc: "Certified for safety and garment accessory manufacturing standards.",
    certificate:intercert
  },
];

const Card = ({ cert, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-64 h-72 rounded-[20px] bg-linear-to-tr from-[#00ff75] to-[#3700ff] p-0.5 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)]"
      onClick={onClick}
    >
      <div className="w-full h-full bg-white rounded-[18px] flex flex-col items-center justify-center text-center text-white px-6 py-6 transition-all duration-200 hover:scale-[0.98]">
        <img
          src={cert.image}
          alt={cert.title}
          className="h-24 w-auto mb-4 object-contain"
        />
        <h3 className="text-lg font-bold text-black">{cert.title}</h3>
        <p className="text-sm  mt-2 text-black">{cert.desc}</p>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full py-16 bg-gray-100 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="text-3xl font-bold text-black mb-10 uppercase tracking-wide"
      >
        Our Certificate
      </motion.div>

      <div className="flex flex-wrap gap-8 justify-center">
        {certificates.map((cert, i) => (
          <Card key={i} cert={cert} onClick={() => setSelectedImage(cert.certificate)} />
        ))}
      </div>

      {/* Modal for showing certificate */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Certificate"
              className="max-w-[90%] max-h-[80%] rounded-lg shadow-2xl border-4 border-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
