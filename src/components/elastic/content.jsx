import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/elascontimg3.jpg'
import img2 from '../../assets/elascontimg4.jpg'
import img3 from '../../assets/elastcontimg2.jpg'
import img4 from '../../assets/elastcontimg5.jpg'
import img5 from '../../assets/elastcontimg6.jpg'
import img6 from '../../assets/elasticcontimg1.jpg'

const Content = (props) => {
  return (

    <div>
      <div className='w-screen flex justify-between'>
        <motion.div
          className="w-7/10 px-6 md:px-12 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold border-b-2 border-green-300 inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Premium Elastic Manufacturing with Advanced Technology
          </motion.h1>

          <motion.p
            className="md:text-xl text-gray-700 leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            At our facility, we specialize in manufacturing high-quality elastic of various designs that are engineered for durability, flexibility, and precision. 
            With years of expertise in the textile accessories industry, we have built a reputation for delivering reliable products that meet international standards. 
            Our production line is equipped with advanced, high-speed machines imported from Taiwan, enabling us to maintain exceptional consistency and efficiency in every stage of manufacturing. Each piece of equipment is handled by skilled professionals who ensure that every meter of elastic is produced with accuracy and care.
            We use only premium-grade polyester yarns and natural rubber, sourced from trusted suppliers, to create elastics that combine superior stretch, resilience, and long-lasting performance.Our products are suitable for a wide range of applications, including garments, accessories, home textiles, and industrial uses, ensuring excellent elasticity and shape retention even under demanding conditions. 
            Through a well-structured quality control system, every batch of elastic undergoes rigorous testing for strength, stretchability, and colorfastness before it reaches our customers. We continuously invest in innovation and research to improve our product range and adapt to changing market demands. 
            From plain elastic to specialized varieties like buttonhole elastic, we aim to provide customized solutions tailored to our clients’ specific requirements. Sustainability and efficiency remain at the core of our operations, 
            as we adopt eco-conscious manufacturing practices and energy-efficient technologies to minimize environmental impact. Driven by innovation, passion, and a commitment to excellence, we continue to expand our manufacturing capabilities, offering quality you can feel, performance you can rely on, and service you can trust.
          </motion.p>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-8 mt-12 pr-30">
          <img src={img1} alt="Elastic 1"  height={150} width={150} className=" rounded-lg" />
          <img src={img2}  alt="Elastic 2" height={150} width={150}  className=" rounded-lg" />
          <img src={img3}  alt="Elastic 3" height={150} width={150}  className=" rounded-lg" />
          <img src={img4}  alt="Elastic 4" height={150} width={150}  className=" rounded-lg" />
          <img src={img5}  alt="Elastic 5" height={150} width={150}  className=" rounded-lg" />
          <img src={img6}  alt="Elastic 6" height={150} width={150}  className=" rounded-lg" />
        </motion.div>

      </div>
      <div className='my-10'>
      <h1  className="text-4xl font-bold text-center mb-8">Our Production Capacity</h1>
      <div className="flex md:flex-row justify-center items-center gap-8 mt-12">

      {/* Plain Elastic */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-linear-to-r from-green-600 to-emerald-400 text-white px-10 py-8 rounded-2xl shadow-xl text-center w-full md:w-80"
      >
        <motion.h2
          className="text-5xl font-extrabold tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          80,000+
        </motion.h2>
        <p className="text-lg font-semibold mt-2 leading-snug">
          Plain Elastic <br /> Produced Daily
        </p>
      </motion.div>

      {/* Button Hole Elastic */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-linear-to-r from-emerald-400 to-green-600 text-white px-10 py-8 rounded-2xl shadow-xl text-center w-full md:w-80"
      >
        <motion.h2
          className="text-5xl font-extrabold tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          50,000+
        </motion.h2>
        <p className="text-lg font-semibold mt-2 leading-snug">
          Button Hole Elastic <br /> Produced Daily
        </p>
      </motion.div>
    </div>
      </div>
    </div>
  )
};

export default Content;