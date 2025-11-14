import React, { useState, useEffect } from "react";
import slider1 from "../assets/homeslider.jpg";
import slider2 from "../assets/homeslider2.jpg";
import slider3 from "../assets/homeslider3.jpg";

const slides = [slider1, slider2, slider3];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("forward");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (direction === "forward") {
          if (prev === slides.length - 1) {
            setDirection("backward");
            return prev - 1;
          }
          return prev + 1;
        } else {
          if (prev === 0) {
            setDirection("forward");
            return prev + 1;
          }
          return prev - 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  const nextSlide = () => {
    setDirection("forward");
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("backward");
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div
      className="relative w-full mx-auto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider wrapper */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <div
            key={index}
            className="min-w-full lg:h-[600px] md:h-[450px] h-[300px]"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-20 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-20 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full border ${
              current === index ? "bg-yellow-500" : "bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
