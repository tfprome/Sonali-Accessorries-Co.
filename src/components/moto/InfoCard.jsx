import React from "react";
import { motion } from "framer-motion";

// Card data
export const strengthCards = [
  {
    title: "Heritage & Legacy",
    brief: "25+ years of delivering quality accessories.",
    detail:
      "M/S Sonali Accessories Co. is a 100% export‑oriented garments accessories manufacturer and M/S S.K. Printers is a sister concern… Since 1996 both businesses are manufacturing quality garments accessories. Our printing project is in Motijheel, Dhaka; factory in Signboard, Narayanganj.",
  },
  {
    title: "State‑of‑the‑Art Facilities",
    brief: "Modern factories & printing units.",
    detail:
      "Our facilities are well‑established on our own land and well equipped with many types of machinery. Staff and technicians are skilled and well trained to support the garments & export industry.",
  },
  {
    title: "Mission & Goal",
    brief: "Customer satisfaction through export‑quality accessories.",
    detail:
      "Our goal is to provide backward linkage support to the garments industry by manufacturing and supplying high‑quality accessories items. We seek to attain customer satisfaction by manufacturing and providing export quality accessories while maintaining proper delivery schedule.",
  },
  {
    title: "Vision for Excellence",
    brief: "Lead global garment accessories & packaging industry.",
    detail:
      "To lead the global garment accessories and packaging industry by consistently setting new standards of excellence. We envision a future where our innovative solutions empower fashion brands to create sustainable products.",
  },
  {
    title: "Customer‑Centric Approach",
    brief: "Strong long‑term partnerships & service.",
    detail:
      "Foster strong, long‑term partnerships with our clients by offering personalized solutions, excellent customer service, and timely delivery, ensuring their success and satisfaction.",
  },
  {
    title: "Sustainability & Community",
    brief: "Eco‑friendly practices and community engagement.",
    detail:
      "Lead the industry in sustainable practices by sourcing eco‑friendly materials, reducing waste, and promoting responsible production and consumption. Create a supportive workplace and contribute to local communities through social and educational initiatives.",
  },
];

// Card component
const InfoCard = ({ card, index }) => (
  <motion.div
    className="relative w-64 h-72 bg-gray-200 rounded-xl shadow-lg overflow-hidden cursor-pointer group"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
  >
    {/* Green overlay sliding from bottom */}
    <div className="absolute bottom-0 left-0 w-full h-0 bg-green-700 z-10 group-hover:h-full transition-all duration-500 ease-in-out"></div>

    {/* Front: brief info */}
    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center z-20 transition-opacity duration-300 group-hover:opacity-0">
      <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
      <p className="text-sm text-gray-900 mt-2">{card.brief}</p>
    </div>

    {/* Back: detailed info */}
    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 z-30">
      <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
      <p className="text-sm text-white">{card.detail}</p>
    </div>
  </motion.div>
);

// Strength Section
const StrengthSection = () => (
    <section className="w-full py-16 flex bg-gray-100">
      {/* Left: Header */}
      <div className="w-2/5 flex flex-col font-serif font-semibold gap-2 pl-12 mt-12">
        <h2 className="text-5xl">
          <span className="text-green-300">Essence</span> of
        </h2>
        <h2 className="text-5xl text-gray-900">our Strength</h2>
      </div>
  
      {/* Right: Cards */}
      <div className="w-4/5 flex flex-wrap justify-center gap-8 px-6">
        {strengthCards.map((card, idx) => (
          <InfoCard key={idx} card={card} index={idx} />
        ))}
      </div>
    </section>
  );
  


export default StrengthSection;
