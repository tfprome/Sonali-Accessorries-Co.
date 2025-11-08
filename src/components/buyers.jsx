import React, { useRef, useEffect, useState } from "react";
import { motion, easeOut } from "framer-motion";

import logo1 from "../assets/alpine-pro.png";
import logo2 from "../assets/cocodrillo.png";
import logo3 from "../assets/juritex.png";
import logo4 from "../assets/lotto.png";
import logo5 from "../assets/Lpp.png";
import logo6 from "../assets/orchestra.png";
import logo7 from "../assets/pep&co.png";
import logo8 from "../assets/pepco.png";

const Buyers = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  const containerRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const children = Array.from(containerRef.current.children);
      const width = children.reduce((acc, child) => acc + child.offsetWidth + 64, 0); // 64 = gap-16 in px
      setTotalWidth(width / 2); // half width for seamless loop
    }
  }, []);

  const duplicatedLogos = [...logos, ...logos]; // duplicate once for seamless scroll

  return (
    <section className="w-full py-16 bg-gray-50 flex flex-col items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="text-3xl font-bold text-black mb-10 uppercase tracking-wide"
      >
        Our Valued Buyers
      </motion.div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-16"
          animate={{ x: [0, -totalWidth] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 flex justify-center items-center"
              style={{ width: "160px" }}
            >
              <img
                src={logo}
                alt={`Buyer ${i + 1}`}
                className="h-16 w-auto object-contain transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Buyers;
