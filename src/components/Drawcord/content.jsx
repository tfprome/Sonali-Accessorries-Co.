import React from "react";

const DrawcordContentSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center">
          Premium Drawcords & Drawstrings
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Our drawcords and drawstrings are designed to combine <strong>strength, durability,</strong> and <strong>modern design</strong> for a wide range of applications. From clothing to industrial use, every product is tested to ensure you get only the best quality.
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Durable Materials</h3>
            <p className="text-gray-600">
              Made from high-quality elastic materials that last longer and resist wear and tear.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Precision Engineering</h3>
            <p className="text-gray-600">
              Manufactured with modern machines for consistent thickness, stretch, and performance.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Trusted Quality</h3>
            <p className="text-gray-600">
              Each batch is tested for strength and reliability so you can trust our products for any project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrawcordContentSection;
