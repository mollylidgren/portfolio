import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import hero_sky from "../assets/images/hero_sky.png";

export default function MiniSkills({ language }) {
  const navigate = useNavigate();

  // content
  const texts = {
    en: {
      heading: "My main areas",
      ctaText: "Want to get to know me better?",
      aboutBtn: "About Me",
      contactBtn: "Contact",
      skills: [
        "Visual Design",
        "Content Creation",
        "Digital Communication",
        "Motion Design",
        "Web Design",
        "UI/UX Design",
        "Creative Concept",
        "Photo Editing",
      ],
    },
    sv: {
      heading: "Mina huvudområden",
      ctaText: "Vill du lära känna mig bättre?",
      aboutBtn: "Om mig",
      contactBtn: "Kontakt",
      skills: [
        "Visuell design",
        "Innehållsskapande",
        "Digital kommunikation",
        "Motion design",
        "Webbdesign",
        "UI/UX-design",
        "Koncept & idé",
        "Bildredigering",
      ],
    },
  };

  const t = texts[language] || texts.en;

  // ✨ Animation variants (snyggare + mjukare)
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Scroll overlay
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative items-center justify-center font-[SN_Pro] pb-40">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed -z-10"
        style={{ backgroundImage: `url(${hero_sky})` }}
      />

      {/* Scroll overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none -z-5 ${
          scrolled ? "opacity-20" : "opacity-10"
        }`}
      />

      {/* Frosted container */}
      <div className="relative bg-white/60 backdrop-blur-xl p-12 shadow-xl border border-white/20 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-black mb-12">{t.heading}</h2>

        {/* Skills */}
        <div className="flex flex-wrap justify-center mb-12 max-w-5xl mx-auto text-center leading-relaxed">
          {t.skills.map((skill, i) => (
            <motion.span
              key={`${skill}-${i}`}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl md:text-xl font-light tracking-[0.12em] mx-2 my-2 whitespace-nowrap"
            >
              <span className="font-semibold inline-block bg-gradient-to-r from-pink-600 via-pink-400 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
                {skill}

                {/* Desktop only separator */}
                <span className="hidden md:inline ml-2 text-gray-800">
                  {i !== t.skills.length - 1 && "•"}
                </span>
              </span>
            </motion.span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-18 border-t border-pink-500 pt-6 flex flex-col items-center gap-4">
          <h3 className="text-black font-medium text-2xl">{t.ctaText}</h3>

          <div className="flex flex-wrap gap-4 mt-2 justify-center">
            <Button
              onClick={() => navigate("/about")}
              className="rounded-full px-6 py-3"
            >
              {t.aboutBtn}
            </Button>

            <Button
              onClick={() => navigate("/contact")}
              className="rounded-full px-6 py-3"
            >
              {t.contactBtn}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
