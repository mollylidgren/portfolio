import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { Button } from "../components/Button";
import { getProjects } from "../data/projectsData";
import hero_sky from "../assets/images/hero_sky.png";

export default function ProjectDetailPage({ language }) {
  const { id } = useParams(); // Project ID from URL
  const navigate = useNavigate();

  // Fetch all projects in the current language and find the active project
  const allProjects = getProjects(language);
  const project = allProjects.find((p) => p.id === id);

  // State for tracking currently displayed media in carousel
  const [selectedMedia, setSelectedMedia] = useState(0);

  // Reset scroll and media selection when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedMedia(0);
  }, [id]);

  // Fallback if project is not found
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-[SN_Pro]">
        {language === "sv" ? "Projektet hittades inte" : "Project not found"}
      </div>
    );
  }

  // Framer-motion animation variant for fade-in effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Ensure media array exists for carousel, fallback to project image
  const media =
    Array.isArray(project.media) && project.media.length > 0
      ? project.media
      : [{ type: "image", src: project.img }];

  // Carousel navigation functions
  const prevMedia = () =>
    setSelectedMedia((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  const nextMedia = () =>
    setSelectedMedia((prev) => (prev === media.length - 1 ? 0 : prev + 1));

  // Multilingual text for UI elements
  const texts = {
    en: {
      previous: "Previous media",
      next: "Next media",
      contactBtn: "Contact",
      aboutBtn: "About me",
      allProjects: "← All projects",
    },
    sv: {
      previous: "Föregående media",
      next: "Nästa media",
      contactBtn: "Kontakt",
      aboutBtn: "Om mig",
      allProjects: "← Alla projekt",
    },
  };
  const t = texts[language] || texts.en;

  return (
    <div className="relative min-h-screen font-[SN_Pro] text-gray-700">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${hero_sky})` }}
      />
      <div className="absolute inset-0" />

      <div className="relative z-10">
        {/* Header always visible */}
        <Header alwaysVisible={true} language={language} />

        <div className="max-w-5xl mx-auto px-6 py-32 flex flex-col gap-12">
          {/* Project title with animation */}
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-center text-gray-900 break-words px-2"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {project.title}
          </motion.h1>

          {/* Media carousel */}
          <motion.div
            className="w-full flex justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="relative inline-block">
              {/* Desktop arrows */}
              {media.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="hidden md:block absolute top-1/2 -translate-y-1/2 right-full mr-4 z-20 border border-pink-500 bg-pink-500/20 hover:bg-pink-500/50 text-gray-900 rounded-full p-3 shadow-lg transition"
                    aria-label={t.previous}
                  >
                    ←
                  </button>
                  <button
                    onClick={nextMedia}
                    className="hidden md:block absolute top-1/2 -translate-y-1/2 left-full ml-4 z-20 border border-pink-500 bg-pink-500/20 hover:bg-pink-500/50 text-gray-900 rounded-full p-3 shadow-lg transition"
                    aria-label={t.next}
                  >
                    →
                  </button>
                </>
              )}

              {/* Media display (image or video) */}
              {media[selectedMedia].type === "image" ? (
                <img
                  src={media[selectedMedia].src}
                  alt={`${project.title} media`}
                  className="max-h-[500px] max-w-full rounded-xl shadow-xl object-contain bg-white"
                />
              ) : (
                <video
                  src={media[selectedMedia].src}
                  controls
                  className="max-h-[500px] max-w-full rounded-2xl shadow-xl object-contain bg-white"
                />
              )}
            </div>
          </motion.div>

          {/* Mobile arrows */}
          {media.length > 1 && (
            <div className="flex justify-center gap-4 md:hidden">
              <button
                onClick={prevMedia}
                className="border border-pink-500 bg-pink-500/20 text-gray-900 rounded-full p-3 shadow-lg"
                aria-label={t.previous}
              >
                ←
              </button>
              <button
                onClick={nextMedia}
                className="border border-pink-500 bg-pink-500/20 text-gray-900 rounded-full p-3 shadow-lg"
                aria-label={t.next}
              >
                →
              </button>
            </div>
          )}

          {/* Thumbnails navigation */}
          {media.length > 1 && (
            <div className="flex justify-center gap-4 mt-4 overflow-x-auto overflow-y-hidden px-2">
              {media.map((m, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedMedia(i)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    i === selectedMedia ? "border-pink-500" : "border-gray-200"
                  }`}
                >
                  <div className="transition-transform duration-200 hover:scale-105">
                    {m.type === "image" ? (
                      <img
                        src={m.src}
                        alt={`Thumbnail ${i + 1}`}
                        className="h-20 w-28 object-cover"
                      />
                    ) : (
                      <video
                        src={m.src}
                        className="h-20 w-28 object-cover"
                        muted
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Project details */}
          <div className="w-full flex justify-center bg-white/70 p-10 rounded-4xl">
            <motion.div
              className="w-full max-w-3xl flex flex-col gap-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <p>
                <strong>{language === "sv" ? "Min roll:" : "My role:"}</strong>{" "}
                {project.role}
              </p>
              <p>
                <strong>{language === "sv" ? "Typ:" : "Type:"}</strong>{" "}
                {project.type}
              </p>
              <p>
                <strong>
                  {language === "sv" ? "Beskrivning:" : "Description:"}
                </strong>{" "}
                {project.description}
              </p>

              <div>
                <strong>
                  {language === "sv" ? "Ansvarsområden:" : "Responsibilities:"}
                </strong>
                <ul className="list-disc list-inside mt-2">
                  {project.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <p>
                <strong>{language === "sv" ? "Resultat:" : "Result:"}</strong>{" "}
                {project.result}
              </p>

              {project.note && (
                <p className="text-sm text-gray-500 italic mt-2">
                  {project.note}
                </p>
              )}

              {/* CTA buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  onClick={() => navigate("/contact")}
                  className="rounded-full px-3 py-1 text-xs w-fit"
                >
                  {t.contactBtn}
                </Button>
                <Button
                  onClick={() => navigate("/about")}
                  className="rounded-full px-3 py-1 text-xs w-fit"
                >
                  {t.aboutBtn}
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Back to all projects */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate("/projects")}
              className="text-pink-500 hover:text-pink-600 text-lg font-bold"
            >
              {t.allProjects}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
