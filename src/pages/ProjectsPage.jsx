import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import ProjectsGrid from "../components/ProjectsGrid";
import { Button } from "../components/Button";
import hero_sky from "../assets/images/hero_sky.png";

export default function ProjectsPage({ language }) {
  const navigate = useNavigate();

  // Ensure the page scrolls to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Multilingual text content
  const text = {
    en: {
      title: "Behind this portfolio",
      description:
        "This portfolio was designed and developed by me using React and Tailwind CSS. I created the layout, visual identity and responsive structure from scratch to showcase my work and design process.",
      aboutBtn: "About me",
      contactBtn: "Contact",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
    },
    sv: {
      title: "Bakom denna portfolio",
      description:
        "Den här portfolion är designad och utvecklad av mig med React och Tailwind CSS. Jag har skapat layouten, den visuella identiteten och den responsiva strukturen från grunden för att presentera mina projekt och min designprocess.",
      aboutBtn: "Om mig",
      contactBtn: "Kontakt",
      tags: ["React", "Tailwind CSS", "Responsiv design"],
    },
  };
  const t = text[language];

  return (
    <div className="min-h-screen relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed -z-20"
        style={{ backgroundImage: `url(${hero_sky})` }}
      />

      {/* Page hero section */}
      <PageHero title={language === "sv" ? "Projekt" : "Projects"} />

      {/* Main projects grid */}
      <ProjectsGrid language={language} />

      {/* Banner describing portfolio creation */}
      <section className="relative z-10">
        {/* Transparent banner overlay for visual clarity */}
        <div className="backdrop-blur-md bg-transparent">
          <div className="max-w-4xl mx-auto px-6 py-14 flex flex-col gap-6">
            {/* Banner title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.title}
            </h2>

            {/* Banner description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              {t.description}
            </p>

            {/* Tags / tech stack used */}
            <div className="text-sm text-gray-600 font-medium tracking-wider">
              {t.tags.join(" · ")}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-4 pt-2 flex-wrap">
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

        {/* Spacer section below banner */}
        <div className="h-24 w-full"></div>
      </section>
    </div>
  );
}
