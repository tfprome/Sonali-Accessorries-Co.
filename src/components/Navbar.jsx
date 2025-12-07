import React, { useState } from "react";
import logo from "../assets/SALlogo.png";
import { easeOut, motion } from "framer-motion";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openProductsDesktop, setOpenProductsDesktop] = useState(false);
  const [openProductsMobile, setOpenProductsMobile] = useState(false);

  const products = [
    "Poly Bag", "Hang Tag", "Back Board", "Neck Board", "Price Tag", "Photo Inlay",
    "Collar Stand", "Collar Bone", "Barcode Sticker", "Carton Sticker", "Poly Sticker",
    "All Kinds of Print", "Size Label", "Sewing Thread", "Drawstring", "Drawcord",
    "Twill Tape", "Elastic", "Gum Tape", "P.P. Belt", "Tag Pin", "Eyelet", "Revit",
    "Paper Lini"
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-white to-green-300 shadow-md sticky top-0 z-50">
      <div className="w-full px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Company Logo" width={50} height={50} />
          <h1 className="text-xl font-bold text-gray-800">SoAcLi</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-black font-medium relative">

          <li className="hover:text-green-700"><a href="/">Home</a></li>
          <li className="hover:text-green-700"><a href="/moto">Our Moto</a></li>

          {/* Desktop Products Dropdown */}
          <li
            className="relative cursor-pointer"
            onClick={() => setOpenProductsDesktop(!openProductsDesktop)}
          >
            <span className="hover:text-green-700">Products ▾</span>

            {openProductsDesktop && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: easeOut }}
                className="absolute right-0 mt-3 w-[850px] bg-white shadow-lg rounded-lg border border-gray-200 z-50 p-4"
              >
                <div className="grid grid-cols-4 gap-4">
                  {products.map((item, idx) => (
                    <a
                      key={idx}
                      href={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
                      className="block px-2 py-1 hover:bg-green-200 rounded text-sm"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </li>

          <li className="hover:text-green-700"><a href="/sustainability">Sustainability</a></li>
          <li className="hover:text-green-700"><a href="/contact">Contact</a></li>

        </ul>
      </div>

      {/* MOBILE MENU */}
      {openMobileMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
          className="md:hidden bg-white w-full shadow-md border-t border-gray-200"
        >
          <ul className="flex flex-col p-4 gap-4 text-gray-700 font-medium">

            <li><a href="/">Home</a></li>
            <li><a href="/moto">Our Moto</a></li>

            {/* Mobile Products Dropdown */}
            <li>
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => setOpenProductsMobile(!openProductsMobile)}
              >
                <span>Products</span>
                <span>{openProductsMobile ? "▲" : "▼"}</span>
              </div>

              {openProductsMobile && (
                <div className="mt-2 grid grid-cols-1 gap-2">
                  {products.map((item, idx) => (
                    <a
                      key={idx}
                      href={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
                      className="block px-3 py-2 bg-gray-100 rounded hover:bg-green-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li><a href="/sustainability">Sustainability</a></li>
            <li><a href="/contact">Contact</a></li>

          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
