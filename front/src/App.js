import "./App.css";
import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Industry from "./components/Industry";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Product from "./components/Product";
import Section1 from "./components/Section1";
import Urgence from "./components/Urgence";
import Compare from "./components/Compare";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
    // Remove listener on cleanup
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const gradientStyle = {
    backgroundImage:
      "radial-gradient(circle at center, skyblue 0%, white 100%)",
  };
  return (
    <>
      <Navbar />
      <Hero />
      <Presentation />
      <Section1 />
      <Compare />
      <Product />
      <div style={gradientStyle}>
        <Industry />
        <Contact />
        <Urgence />
        <Footer />
      </div>
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="fixed bottom-5 right-5 h-12 w-12 text-2xl z-50 rounded-md bg-blue-500 text-white flex items-center justify-center cursor-pointer hover:bg-blue-600"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;
