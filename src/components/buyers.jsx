import React, { useRef, useEffect } from "react";
import logo1 from "../assets/alpine-pro.png";
import logo2 from "../assets/cocodrillo.png";
import logo3 from "../assets/juritex.png";
import logo4 from "../assets/lotto.png";
import logo5 from "../assets/Lpp.png";
import logo6 from "../assets/orchestra.png";
import logo7 from "../assets/pep&co.png";
import logo8 from "../assets/pepco.png";

export default function Buyers() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  const containerRef = useRef(null);       // the moving strip (contains duplicated content)
  const wrapperRef = useRef(null);         // visible viewport wrapper
  const rafRef = useRef(null);             // requestAnimationFrame id
  const posRef = useRef(0);                // current translateX position (in px)
  const speedRef = useRef(1.0);            // pixels per frame (adjust to change speed)
  const widthRef = useRef(0);              // computed width of one set of logos (px)
  const isHoverRef = useRef(false);        // optional pause on hover

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    // measure the width of the first set (we duplicated them)
    // container.scrollWidth is total width (two sets), so half it.
    const total = container.scrollWidth;
    widthRef.current = total / 2;

    // ensure starting position is 0
    posRef.current = 0;
    container.style.transform = `translateX(0px)`;
    container.style.willChange = "transform";

    // animation loop (mutates DOM directly - no React state)
    const step = () => {
      if (!isHoverRef.current) {
        posRef.current -= speedRef.current; // move left
        // when we've moved a full width, reset by adding width (seamless)
        if (Math.abs(posRef.current) >= widthRef.current) {
          posRef.current += widthRef.current;
        }
        container.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    // start animation
    rafRef.current = requestAnimationFrame(step);

    // cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Optional: expose a function to update speed from outside (not required)
  // Example: speedRef.current = 2 for faster, 0.5 for slower.

  return (
    <section className="w-full py-16 bg-gray-50 flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl font-bold text-black mb-10 uppercase tracking-wide">
        Our Valued Buyers
      </h2>

      <div
        ref={wrapperRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => (isHoverRef.current = true)}   // optional pause on hover
        onMouseLeave={() => (isHoverRef.current = false)}
      >
        {/* 
          container holds two copies of the logos in a row.
          We duplicate the logos to allow a seamless wrap-around.
        */}
        <div
          ref={containerRef}
          className="flex gap-16"
          style={{
            display: "flex",
            alignItems: "center",
            // width is natural via content; we rely on measuring scrollWidth above
          }}
        >
          {/* first set */}
          {logos.map((logo, i) => (
            <div
              key={`a-${i}`}
              className="shrink-0 flex justify-center items-center"
              style={{ width: 160 }}
            >
              <img src={logo} alt={`logo-${i}`} className="h-16 w-auto object-contain" />
            </div>
          ))}

          {/* second (duplicated) set */}
          {logos.map((logo, i) => (
            <div
              key={`b-${i}`}
              className="shrink-0 flex justify-center items-center"
              style={{ width: 160 }}
            >
              <img src={logo} alt={`logo-dup-${i}`} className="h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
