import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
              ></textarea>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg w-full">Send Message</button>
          </motion.div>

          <motion.div
            className="relative h-72 md:h-96"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-center mb-4">Our Location</h3>
            <div className="absolute inset-0 mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13911.281609105647!2d82.075159!3d26.746973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399addb42b5829af%3A0xd1bcfa71e6d73a42!2sTechNova%20Innovations!5e0!3m2!1sen!2sin!4v1675681612341!5m2!1sen!2sin"
                width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
          <p className="text-md">
            <FaMapMarkerAlt className="inline mr-2 text-red-500" />
            TechNova Innovations, Sultanpur, Uttar Pradesh, India 228001
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
