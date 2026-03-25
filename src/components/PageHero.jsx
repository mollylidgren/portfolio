import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero_sky from "../assets/images/hero_sky.png";

export default function PageHero({ title }) {
  // Tracks scroll position to control background overlay opacity
  const [scrolled, setScrolled] = useState(false);

  // Listen to scroll events to toggle overlay intensity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation settings for the page title
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden px-8">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed -z-10"
        style={{ backgroundImage: `url(${hero_sky})` }}
      />

      {/* Dark overlay that increases opacity on scroll */}
      <div
        className={`absolute inset-0  transition-opacity duration-700 pointer-events-none ${
          scrolled ? "opacity-20" : "opacity-10"
        }`}
      />

      {/* Page title */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className="relative z-10 text-6xl md:text-7xl font-bold font-[SN_Pro] text-[#222222] text-center max-w-3xl"
      >
        {title}
      </motion.h1>
    </section>
  );
}
