import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "TechNova's platform exceeded my expectations! The courses are in-depth and easy to follow. Highly recommend it to everyone.",
  },
  {
    name: "Jane Smith",
    feedback:
      "The user interface is super intuitive, and the lessons are practical. This is the best platform I've used for online learning.",
  },
  {
    name: "Sam Wilson",
    feedback:
      "The customer support team is exceptional! They were always ready to help and ensured my learning experience was smooth.",
  },
  {
    name: "Emily Brown",
    feedback:
      "The materials provided are comprehensive and up-to-date. I feel much more confident in my skills after taking their courses.",
  },
  {
    name: "Michael Clark",
    feedback:
      "TechNova provides excellent value for money. The lessons are clear, and the projects have helped me build a strong portfolio.",
  },
  {
    name: "Sophia Davis",
    feedback:
      "The courses on AI/ML were a game-changer for my career. I landed my dream job after completing their advanced course.",
  },
  {
    name: "Daniel White",
    feedback:
      "The flexibility to learn at my own pace made all the difference. The platform is truly built with learners in mind.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    customPaging: (i) => (
        <div
          className="w-2 h-2 bg-gray-500 dark:bg-white rounded-full mx-1"
          style={{ display: "inline-block" }}
        />
      ),
  };

  return (
    <section className="bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-gray-800 dark:to-gray-900 text-white py-32 max-md:py-16 border-t border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto text-center px-12 max-md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 max-md:mb-5">What Our Users Say</h2>
        <Slider {...settings}
        className="w-full py-6 max-md:py-1 dark:text-white">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 md:p-10 bg-[#d9d3d3] dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg dark:border w-[50%] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                {testimonial.feedback}
              </p>
              <h4 className="font-bold text-right text-[#2a2424] dark:text-[#9fb6eb]">...{testimonial.name}</h4>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
