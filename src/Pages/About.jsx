import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const About = () => {
  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook className="text-blue-600 hover:text-blue-700" />, url: "https://facebook.com" },
    { name: "Twitter", icon: <FaTwitter className="text-blue-400 hover:text-blue-500" />, url: "https://twitter.com" },
    { name: "LinkedIn", icon: <FaLinkedin className="text-blue-700 hover:text-blue-800" />, url: "https://linkedin.com" },
    { name: "Instagram", icon: <FaInstagram className="text-pink-500 hover:text-pink-600" />, url: "https://instagram.com" },
    { name: "YouTube", icon: <FaYoutube className="text-red-600 hover:text-red-700" />, url: "https://youtube.com" },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-20" id="about">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">About TechNova Innovations</h2>
        <p className="text-lg leading-relaxed mb-10">
          At <span className="font-semibold text-blue-600 dark:text-blue-400">TechNova Innovations</span>, we are passionate about harnessing the power of technology to simplify lives and empower businesses. From cutting-edge software solutions to affordable learning platforms, our mission is to drive innovation and make a lasting impact. We pride ourselves on providing high-quality services that cater to the needs of individuals and organizations worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-base">To become a global leader in delivering innovative solutions that transform the way we work and live.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-base">To simplify technology and create value for our clients by providing scalable, secure, and impactful tools.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <p className="text-base">Integrity, Innovation, Excellence, Collaboration, and Customer-Centricity are at the core of everything we do.</p>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-transform transform hover:scale-110"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
