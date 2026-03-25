import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import girlCc from "../assets/images/girl/girlCc.png";
import hero_sky from "../assets/images/hero_sky.png";
import { Button } from "./Button";

export default function HeroSection({ language }) {
  // Tracks scroll position to adjust background overlay
  const [scrolled, setScrolled] = useState(false);

  // Navigation handler (React Router)
  const navigate = useNavigate();

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Localized text content - Handles all visible copy in the hero section
  const text = {
    en: {
      greeting: "Hello, I'm",
      description:
        "I have experience in both creating and editing content for various channels as well as producing material and building websites from a front-end perspective. Here you can see some of my projects and get to know me better!",
      projectsBtn: "All projects",
      contactBtn: "Contact",
    },
    sv: {
      greeting: "Hej, det är jag som är",
      description:
        "Jag har erfarenhet både av att skapa och redigera innehåll för olika kanaler samt producera material och bygga webbplatser ur ett front-end-perspektiv. Här kan du se några av mina projekt och lära känna mig bättre!",
      projectsBtn: "Alla projekt",
      contactBtn: "Kontakt",
    },
  };

  //Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    //Hero container
    <section className="relative min-h-[800px] flex flex-col md:flex-row items-center justify-center overflow-hidden px-8 md:px-32 gap-12 md:gap-10 font-[SN_Pro]">
      {/* Background image*/}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed -z-10"
        style={{ backgroundImage: `url(${hero_sky})` }}
      />

      {/* Scroll-based overlay*/}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          scrolled ? "opacity-20" : "opacity-0"
        }`}
      />

      {/* Text content (left side on desktop) */}
      <div className="relative z-10 flex flex-col justify-center items-start gap-6 md:basis-1/2 pt-32">
        {/* Greeting */}
        <motion.span
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-black text-2xl md:text-3xl tracking-wide"
        >
          {text[language].greeting}
        </motion.span>

        {/* Name */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-snug"
        >
          Molly Lidgren
        </motion.h1>

        {/* Description */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-black text-lg md:text-xl leading-relaxed"
        >
          {text[language].description}
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          custom={3}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="flex flex-row gap-4 mt-6"
        >
          <Button onClick={() => navigate("/projects")}>
            {text[language].projectsBtn}
          </Button>

          <Button onClick={() => navigate("/contact")}>
            {text[language].contactBtn}
          </Button>
        </motion.div>
      </div>

      {/* visual element (right side on desktop) */}
      <motion.div
        custom={4}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        className="flex justify-center flex-1 mt-[-40px]"
      >
        <img
          src={girlCc}
          alt="Girl Illustration"
          className="w-[100%] md:w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
