import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero_sky from "../assets/images/hero_sky.png";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { getProjects } from "../data/projectsData";

export default function ProjectsGrid({ language }) {
  const navigate = useNavigate();

  // Tracks scroll position for background overlay effect
  const [scrolled, setScrolled] = useState(false);

  // Fetch projects based on selected language
  const projects = getProjects(language);

  //Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for project cards - Staggered fade + upward motion
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Localized UI text
  const texts = {
    en: { viewProject: "View Project" },
    sv: { viewProject: "Se projekt" },
  };

  // Fallback to English if language is undefined
  const t = texts[language] || texts.en;

  return (
    //Section container
    <section className="relative min-h-screen flex flex-col items-center justify-start font-[SN_Pro]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${hero_sky})` }}
      />

      {/* Scroll-based overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          scrolled ? "opacity-20" : "opacity-10"
        }`}
      />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl w-full px-8 pb-32 flex flex-col items-center gap-12">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            // Project card
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col cursor-pointer"
            >
              {/* Project image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full max-w-md h-48 object-cover mx-auto"
              />

              {/* Title & short description */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-700 text-base md:text-lg line-clamp-4">
                  {project.shortDescription}
                </p>
              </div>

              {/* Call-to-action button */}
              <div className="p-6 pt-0">
                <Button className="w-auto px-6 py-2 rounded-full text-center cursor-pointer">
                  {t.viewProject}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
