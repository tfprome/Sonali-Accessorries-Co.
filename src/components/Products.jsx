import React from "react";
import {  easeOut, motion } from "framer-motion";

import polybag from "../assets/Polybags.png";
//import pricetag from "../assets/";
import barcode from "../assets/printed-barcode-label.jpg";
import elastic from "../assets/Elastic bands.jpg";
import drawcord from "../assets/drawcode.jpg";
import twill from "../assets/twill-tape.jpg";
import labels from "../assets/NylonLabel.jpg";
//import thread from "../assets/thread.jpg";
import silica from "../assets/silica.jpg";
//import eyelet from "../assets/eyelet.jpg";
import backboard from "../assets/back_board.png";
//import gumtape from "../assets/gumtape.jpg";

const products = [
  { name: "Poly Bags", desc: "Durable packaging materials for garments and accessories.", image: polybag },
//   { name: "Price Tag & Hand Tags", desc: "Custom-designed tags to enhance your brand presentation.", image: pricetag },
  { name: "Barcode & Stickers", desc: "High-quality printed barcodes and adhesive labels.", image: barcode },
  { name: "Elastics", desc: "Premium stretch materials for various garment applications.", image: elastic },
  { name: "Drawcord & Drawstrings", desc: "Soft and durable cords available in multiple colors.", image: drawcord },
  { name: "Twill Tape", desc: "Strong cotton twill tape for label reinforcement and seams.", image: twill },
  { name: "All Kinds of Printed Labels", desc: "Fabric and satin printed labels for professional branding.", image: labels },
//   { name: "Sewing Thread", desc: "High-strength threads for smooth and durable stitching.", image: thread },
  { name: "Silica Gel", desc: "Moisture absorbers to protect product freshness.", image: silica },
//   { name: "Eyelet", desc: "Metal and plastic eyelets for garments and accessories.", image: eyelet },
  { name: "Neck Board & Back Board", desc: "Premium boards for garment packaging support.", image: backboard },
//   { name: "Gum Tape", desc: "Strong adhesive tape for packaging and sealing.", image: gumtape },
];

const Products = () => {
  return (
    <section className="w-full py-16 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Products</h2>

      <div className="flex flex-wrap justify-center gap-8 px-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ scale:0.8, opacity: 0 }}
            whileInView={{ scale:1, opacity: 1 }}
            transition={{ type:"tween", duration: 1.5, ease:"linear" }}
            viewport={{ once: true }}
            className="w-72 h-80 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl transition-all duration-300"
          >
            {/* Image section (60%) */}
            <div className="h-[60%] w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text section (40%) */}
            <div className="h-[40%] flex flex-col justify-center items-center text-center px-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{product.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
