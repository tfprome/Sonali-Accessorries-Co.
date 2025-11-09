import React, { useState } from "react";
import logo from "../assets/SALlogo.png";
import {easeOut, motion} from 'framer-motion'

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const products = ["Poly Bag","Hang Tag","Back Board","Neck Board","Price Tag","Photo Inlay","Collar Stand", "Collar Bone",
    "Barcode Sticker","Carton Sticker","Poly Sticker","All Kinds of Print","Size Label","Sewing Thread","Drawstring","Drawcord",
    "Twill Tape","All Kinds of Elastic","Gum Tape","P.P. Belt","Tag Pin","Eyelet","Revit","Paper Lini"
  ];

  return (
    <nav className="w-full bg-linear-to-r from-white to-green-300 shadow-md sticky top-0 z-50">
      <div className="w-full px-6 py-3 flex justify-between items-center">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Company Logo" width={50} height={50} className="object-contain" />
          <h1 className="text-xl font-bold text-gray-800">SoAcLi</h1>
        </div>

        {/* Right: Links */}
        <ul className="flex gap-6 text-black font-medium relative">
          <li className="hover:text-green-700 transition">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-green-700 transition">
            <a href="/moto">Our Moto</a>
          </li>

          {/* Products & Solutions Dropdown */}
          <li
            className="relative cursor-pointer"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <span className="hover:text-green-700 transition">Products▾</span>

            {openDropdown && (
              <motion.div 
               initial={{opacity:0,y:30}}
               animate={{opacity:1,y:0}}
               transition={{duration:0.3,ease:easeOut}}
              className="absolute -right-30 mt-3 w-[850px] bg-white shadow-lg rounded-lg border border-gray-200 z-50 p-4">
                <div className="grid grid-cols-4 gap-4">
                  {products.map((item, idx) => (
                    <a
                      key={idx}
                      href={`/${item.replace(/\s+/g, '-').toLowerCase()}`}
                      className="block px-2 py-1 hover:bg-green-200 hover:text-green-700 rounded transition text-sm"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </li>

          <li className="hover:text-green-700 transition">
            <a href="/sustainability">Sustainability</a>
          </li>
          <li className="hover:text-green-700 transition">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
