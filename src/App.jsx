import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Features from "./Components/Features";
import Header from "./Components/Header";
import Hero from "./Components/HeroSection";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Router>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <Testimonials />
                  <Pricing />
                  <About />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-200 dark:bg-gray-800 py-4">
          <div className="max-w-7xl mx-auto text-center">
            <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
          </div>
        </footer>
      </Router>
    </div>
  );
};

export default App;
