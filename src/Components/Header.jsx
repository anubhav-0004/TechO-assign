import React, { useState } from "react";
import Logo from "../assets/images.png";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };
  const closeModal = () => setIsMenuOpen(false);

  return (
    <header className="bg-[#142166] dark:bg-gray-900 text-gray-200 dark:text-gray-100 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-2 py-2 md:py-3">
        <img src={Logo} alt="Technova Logo" className="h-10 aspect-video rounded-md border max-sm:ml-3" />
        <nav className="hidden md:flex space-x-2">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:bg-blue-900 px-4 py-2 rounded-md">Home</Link></li>
            <li><a href="#services" className="hover:bg-blue-900 px-4 py-2 rounded-md">Services</a></li>
            <li><a href="#about" className="hover:bg-blue-900 px-4 py-2 rounded-md">About</a></li>
            <li><Link to="/contact" className="hover:bg-blue-900 px-4 py-2 rounded-md">Contact</Link></li>
          </ul>
          <button onClick={toggleDarkMode} className="max-md:hidden md:block flex items-center space-x-2 px-4 py-2 rounded-md">
            {isDarkMode ? <BsSun className="text-yellow-400 scale-150" /> : <BsMoon className="text-blue-600 scale-150" />}
            <span className="text-sm absolute text-gray-900 dark:text-gray-100 hidden group-hover:block">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </nav>
        <div className="md:hidden flex items-center px-4 space-x-4">
          <button onClick={toggleDarkMode} className="text-xl">{isDarkMode ? <BsSun className="text-yellow-400" /> : <BsMoon className="text-blue-600" />}</button>
          <button onClick={toggleMenu}>{isMenuOpen ? <IoClose className="h-6 w-6 text-gray-200 dark:text-gray-100" /> : <MdMenu className="h-6 w-6 text-gray-200 dark:text-gray-100" />}</button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute inset-0 bg-black top-[10rem] bg-opacity-50 z-40 flex justify-end items-center" onClick={closeModal}>
          <div className="bg-[#d8cece] dark:bg-gray-800 rounded-lg p-6 w-3/5" onClick={(e) => e.stopPropagation()}>
            <ul className="flex flex-col space-y-6">
              <li><Link to="/" className="text-gray-900 dark:text-gray-100" onClick={closeModal}>Home</Link></li>
              <li><a href="#services" className="text-gray-900 dark:text-gray-100" onClick={closeModal}>Services</a></li>
              <li><a href="#about" className="text-gray-900 dark:text-gray-100" onClick={closeModal}>About</a></li>
              <li><Link to="/contact" className="text-gray-900 dark:text-gray-100" onClick={closeModal}>Contact</Link></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
