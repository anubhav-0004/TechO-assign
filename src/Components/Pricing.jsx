import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹299 (₹499)",
      features: [
        { text: "Access to one course", valid: true },
        { text: "Course duration: 1 year", valid: true },
        { text: "No doubt clearance", valid: false },
        { text: "No personal mentor", valid: false },
      ],
    },
    {
      name: "Pro",
      price: "₹559 (₹999)",
      features: [
        { text: "Access to one course", valid: true },
        { text: "Course duration: 2 years", valid: true },
        { text: "Doubt clearance included", valid: true },
        { text: "Personal mentor", valid: true },
        { text: "2 minor projects", valid: true },
        { text: "No major projects", valid: false },
      ],
    },
    {
      name: "Premium",
      price: "₹999 (₹1,699)",
      features: [
        { text: "Access to 3 courses", valid: true },
        { text: "Course duration: 5 years", valid: true },
        { text: "Doubt clearance included", valid: true },
        { text: "Personal mentor", valid: true },
        { text: "2 minor projects", valid: true },
        { text: "2 major projects", valid: true },
      ],
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-12" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Pricing Plans
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div key={index} className={`p-8 rounded-lg shadow-lg border flex flex-col ${index === 1 ? "transform scale-105 bg-blue-50 dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-800"} border-gray-300 dark:border-gray-700`} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.3 }}>
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-xl font-semibold mb-6"><span className="line-through text-red-400">{plan.price.split(" ")[1]}</span> <span className="text-green-600 dark:text-green-400">{plan.price.split(" ")[0]}</span></p>
              <ul className="mb-6 space-y-3 text-left flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2 text-base md:text-lg">
                    {feature.valid ? <span className="text-green-500 dark:text-green-400">✔</span> : <span className="text-red-500 dark:text-red-400">✘</span>}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <motion.button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full font-semibold mt-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
