import React from 'react';
import { motion } from 'framer-motion';
import computer from '../assets/computer.png';

const Hero = () => {
  return (
    <section id="hero" className="h-screen bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-700 dark:to-gray-800 text-white flex flex-col md:flex-row items-center justify-center px-6 max-md:flex-col-reverse">
      <div className="text-center md:text-left max-w-xl">
        <motion.h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Welcome to TechNova Innovation!
        </motion.h1>
        <motion.p className="text-base md:text-lg lg:text-xl mb-6" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          We offer high-quality, affordable computer courses that cater to beginners and professionals alike. Learn at your own pace with industry-relevant materials and enjoy excellent feedback from satisfied students.
        </motion.p>
        <motion.button className="bg-green-500 hover:bg-green-600 dark:bg-[#6ec66e] dark:hover:bg-[#348e34] text-white px-6 py-3 rounded-lg font-medium border focus:outline-none focus:ring-2 focus:ring-green-400" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}>
          Get Started
        </motion.button>
      </div>
      <motion.div className="mt-1 max-md:-mb-5 md:mt-0 md:ml-10 w-64 sm:w-72 md:w-[40%] aspect-square" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        <img src={computer} alt="Computer Courses" className="rounded-lg shadow-lg" />
      </motion.div>
    </section>
  );
};

export default Hero;
