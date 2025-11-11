import React from "react";
import { Mail, Phone } from "lucide-react"; // optional icons

const InfoBar = () => {
  return (
    <div className="w-full bg-green-700 text-white text-sm py-2 px-6 flex flex-col sm:flex-row justify-center sm:justify-evenly items-center gap-2">
      <div className="flex items-center gap-2">
        <Mail size={16} className="text-white" />
        <a
          href="mailto:sonaliskp@yahoo.com"
          className="hover:underline hover:text-green-200"
        >
          sonaliskp@yahoo.com
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Phone size={16} className="text-white" />
        <a
          href="tel:+880123456789"
          className="hover:underline hover:text-green-200"
        >
          +880 1234-567-89
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
