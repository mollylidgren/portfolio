import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgProjects from "../assets/images/hero_sky.png";
import { Button } from "./Button";
import { getProjects } from "../data/projectsData";

export default function LatestProjects({ language }) {
  const navigate = useNavigate();

  // Tracks scroll position to control background overlay
  const [scrolled, setScrolled] = useState(false);

  //Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //Fetch project data based on selected language - Only display the latest 3 projects
  const allProjects = getProjects(language);
  const projects = allProjects.slice(0, 3);

  //Section header animation trigger (in view)
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, {
    once: true,
    margin: "-100px", // trigger slightly before entering viewport
  });

  //Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  //Project animation variants - Alternates direction (left/right) for dynamic layout
  const projectVariants = (isEven) => ({
    hidden: { opacity: 0, x: isEven ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  });

  // Localized UI text
  const texts = {
    en: {
      sectionTitle: "Latest projects",
      viewProjectBtn: "View Project",
      viewAllBtn: "View All Projects",
    },
    sv: {
      sectionTitle: "Senaste projekt",
      viewProjectBtn: "Visa Projekt",
      viewAllBtn: "Visa Alla Projekt",
    },
  };

  const t = texts[language];

  return (
    //Section container
    <section className="relative min-h-screen font-[SN_Pro] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed -z-10"
        style={{ backgroundImage: `url(${bgProjects})` }}
      />

      {/* Scroll-based overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none -z-10 ${
          scrolled ? "opacity-20" : "opacity-0"
        }`}
      />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12 pb-32 flex flex-col gap-24">
        {/* Accessibility: hidden main heading for screen readers */}
        <h1 className="sr-only">Portfolio - Latest Projects</h1>

        {/* Section title */}
        <motion.h2
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-4xl md:text-5xl font-bold text-[#222222] text-center mb-4"
        >
          {t.sectionTitle}
        </motion.h2>

        {/* Project list */}
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          // Individual project animation trigger
          const projectRef = useRef(null);
          const projectInView = useInView(projectRef, {
            once: true,
            margin: "-100px",
          });

          return (
            <motion.article
              key={project.id}
              ref={projectRef}
              initial="hidden"
              animate={projectInView ? "visible" : "hidden"}
              variants={projectVariants(isEven)}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Project image (clickable) */}
              <a
                href={`/projects/${project.id}`}
                aria-label={`View project: ${project.title}`}
                className="flex-1 w-full md:w-1/2 cursor-pointer flex justify-center"
              >
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full max-w-md h-64 rounded-2xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>

              {/* Project content card */}
              <div className="flex-1 w-full md:w-1/2 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col justify-between">
                {/* Title + description */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Call-to-action */}
                <div className="mt-6">
                  <Button
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="rounded-full px-6 py-2"
                  >
                    {t.viewProjectBtn}
                  </Button>
                </div>
              </div>
            </motion.article>
          );
        })}

        {/* Link to full project list */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => navigate("/projects")}
            className="rounded-full px-6 py-2"
          >
            {t.viewAllBtn}
          </Button>
        </div>
      </div>
    </section>
  );
}
