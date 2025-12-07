import React from "react";
import { motion } from "framer-motion";
import pro from "../../assets/pro.jpg";
import BOD1 from "../../assets/BOD1.jpg";
import BOD2 from "../../assets/BOD2.jpg";
import shafkat from "../../assets/shafkat.jpg";
import saikat from "../../assets/shaikat.jpg";
import sazim from "../../assets/sazim.jpg";

// BOD data
const bodMembers = [
  {
    name: "Proprietor",
    img: pro,
    role: "Proprietor",
    detail: "Founder and proprietor of the company, leading strategic vision and operations."
  },
  {
    name: "BOD1",
    img: BOD1,
    role: "Board Member",
    detail: "Responsible for overseeing company governance and decision-making processes."
  },
  {
    name: "BOD2",
    img: BOD2,
    role: "Board Member",
    detail: "Contributes expertise in finance, operations, and corporate planning."
  },
  {
    name: "Saikat",
    img: saikat,
    role: "Director",
    detail: "Manages operational excellence and business development strategies."
  },
  {
    name: "Shafkat",
    img: shafkat,
    role: "Director",
    detail: "Leads project management, ensuring timely delivery and quality standards."
  },
  {
    name: "Sazim",
    img: sazim,
    role: "Director",
    detail: "Oversees client relations and marketing strategies across departments."
  },
];

// Card component
const BODCard = ({ member, index }) => (
  <motion.div
    className="relative w-56 h-64 bg-gray-200 rounded-xl shadow-lg overflow-hidden cursor-pointer group"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
  >
    {/* Green overlay sliding from bottom */}
    <div className="absolute bottom-0 left-0 w-full h-0 bg-green-700 z-10 group-hover:h-full transition-all duration-500 ease-in-out"></div>

    {/* Front: Image and role */}
    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center z-20 transition-opacity duration-300 group-hover:opacity-0">
      <img
        src={member.img}
        alt={member.name}
        className="w-28 h-28 rounded-xl object-cover mb-3"
      />
      <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
      <p className="text-sm text-gray-900 mt-1">{member.role}</p>
    </div>

    {/* Back: Detailed info */}
    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 z-30">
      <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
      <p className="text-sm text-white">{member.detail}</p>
    </div>
  </motion.div>
);

// BOD Section
const BODSection = () => (
  <section className="w-full py-16 flex items-center bg-gray-100">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "linear" }}
      className="w-2/5 text-4xl font-bold font-serif text-center mb-10"
    >
      Board of Directors
    </motion.h2>

    {/* Cards */}
    <div className="w-3/5 flex flex-wrap justify-center gap-6 sm:gap-8 px-6">
      {bodMembers.map((member, idx) => (
        <BODCard key={idx} member={member} index={idx} />
      ))}
    </div>
  </section>
);

export default BODSection;
