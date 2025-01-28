import React from "react";
import { motion } from "framer-motion";
import Card from "../shared/Card";

const topics = [
  {
    title: "Web Development",
    description: "Build robust, scalable, and user-friendly websites.",
    img: "https://cdni.iconscout.com/illustration/premium/preview/mobile-app-development-illustration-download-in-svg-png-gif-file-formats--application-programming-developer-pack-people-illustrations-3874584.png",
  },
  {
    title: "AI/ML Services",
    description: "Leverage AI and ML to power your business decisions.",
    img: "https://cdn.kodytechnolab.com/wp-content/uploads/2023/08/ai-and-ml-development-company.png",
  },
  {
    title: "App Development",
    description: "Craft seamless mobile applications for all platforms.",
    img: "https://www.google.com/imgres?q=mobile%20app%20development%20logo%20png&imgurl=https%3A%2F%2Fgkwebdevelopers.in%2Fwp-content%2Fuploads%2F2020%2F04%2Fmobile-application-development.png&imgrefurl=https%3A%2F%2Fgkwebdevelopers.in%2Fmobile-app-development%2F&docid=QP-n-PYIsQehCM&tbnid=-qgVh6tHpYPg6M&vet=12ahUKEwi7o6u51peLAxW_yDgGHa0qDjYQM3oECGIQAA..i&w=443&h=415&hcb=2&ved=2ahUKEwi7o6u51peLAxW_yDgGHa0qDjYQM3oECGIQAA",
  },
  {
    title: "Blockchain Solutions",
    description: "Secure and transparent blockchain applications.",
    img: "https://blog.hireclap.com/wp-content/uploads/2023/05/1644357944737.png",
  },
  {
    title: "Cloud Computing",
    description: "Scalable and cost-effective cloud infrastructure.",
    img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-download-cloud-computing-concept-3d-rendering-png-image_13145169.png",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20" id="services">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <Card title={topic.title} description={topic.description} img={topic.img} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
