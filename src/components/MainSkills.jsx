import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hero_sky from "../assets/images/hero_sky.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export default function MainSkills({ language }) {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  const texts = {
    en: {
      heading: "My skills",
      ctaText: "Want to get to know me better?",
      aboutBtn: "About Me",
      contactBtn: "Contact",

      skillHeadings: {
        Adobe: "Adobe",
        "Web & Code": "Web & Code",
        "Other Tools": "Other Tools",
      },

      categories: {
        "Visual Design & Creative Concept":
          "I develop visual ideas from scratch and translate abstract themes into clear and cohesive visual identities, from moodboards and typography to editorial layout and illustration.",
        "Motion & Interactive Media":
          "I bring static visuals to life through animation, transitions and interaction. Creating engaging motion design, storyboards and interactive prototypes.",
        "Front-End & Digital Experience":
          "I transform design systems into functional digital experiences using modern front-end development, responsive layouts and user-focused UI design.",
        Design: "Advanced knowledge in visual design tools and software.",
        "Web & Code":
          "Advanced knowledge in web development tools and frameworks.",
        "Other Tools":
          "Familiarity with miscellaneous creative and productivity tools.",
      },
    },
    sv: {
      heading: "Mina färdigheter",
      ctaText: "Vill du lära känna mig bättre?",
      aboutBtn: "Om mig",
      contactBtn: "Kontakt",

      skillHeadings: {
        Adobe: "Adobe",
        "Web & Code": "Webb & Kod",
        "Other Tools": "Övriga verktyg",
      },

      categories: {
        "Visual Design & Creative Concept":
          "Jag utvecklar visuella idéer från grunden och översätter abstrakta teman till tydliga och sammanhängande visuella identiteter, från moodboards och typografi till redaktionell layout och illustration.",
        "Motion & Interactive Media":
          "Jag ger statiska bilder liv genom animation, övergångar och interaktion. Skapar engagerande motion design, storyboards och interaktiva prototyper.",
        "Front-End & Digital Experience":
          "Jag omvandlar designsystem till funktionella digitala upplevelser med modern front-end utveckling, responsiva layouter och användarfokuserad UI-design.",
        Design: "Avancerad kunskap i visuella designverktyg och mjukvara.",
        "Web & Code": "Avancerad kunskap i webbutvecklingsverktyg och ramverk.",
        "Other Tools": "Kännedom om olika kreativa och produktivitetsverktyg.",
      },
    },
  };

  const t = texts[language];

  const skills = {
    Adobe: [
      { name: "After Effects", level: 5 },
      { name: "Audition", level: 2 },
      { name: "Illustrator", level: 4 },
      { name: "InDesign", level: 2 },
      { name: "Lightroom", level: 5 },
      { name: "Photoshop", level: 3 },
      { name: "Premier Pro", level: 3 },
      { name: "XD", level: 2 },
    ],
    "Web & Code": [
      { name: "HTML", level: 5 },
      { name: "CSS", level: 5 },
      { name: "Javascript", level: 3 },
      { name: "React", level: 3 },
      { name: "Tailwind", level: 5 },
      { name: "Wordpress", level: 5 },
    ],
    "Other Tools": [
      { name: "Blender", level: 2 },
      { name: "Figma", level: 2 },
      { name: "Final Cut", level: 2 },
      { name: "Microsoft - Powerpoint", level: 5 },
      { name: "Microsoft - Word", level: 5 },
    ],
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const levelColor = (level) => "bg-pink-400";

  const levelText = (level) => {
    switch (level) {
      case 1:
      case 2:
        return language === "en" ? "Basic knowledge" : "Grundläggande kunskap";
      case 3:
        return language === "en" ? "Good knowledge" : "God kunskap";
      case 4:
      case 5:
        return language === "en" ? "Advanced knowledge" : "Avancerad kunskap";
      default:
        return "";
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center font-[SN_Pro]">
      <div className="relative mt-20 p-12">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          {t.heading}
        </h2>

        {/* ✅ UPDATED CATEGORY HEADINGS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              key: "Visual Design & Creative Concept",
              label: language === "en" ? "Visual Design" : "Visuell design",
            },
            {
              key: "Motion & Interactive Media",
              label: language === "en" ? "Motion Media" : "Rörlig media",
            },
            {
              key: "Front-End & Digital Experience",
              label:
                language === "en" ? "Digital experience" : "Digital upplevelse",
            },
          ].map(({ key, label }) => (
            <div
              key={key}
              className="bg-white/70 border border-pink-500 rounded-2xl p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-black mb-3 leading-tight">
                {label}
              </h3>
              <p className="text-black/80 text-sm leading-relaxed">
                {t.categories[key]}
              </p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-black -mb6">
                {t.skillHeadings[category] || category}
              </h3>

              <div className="flex flex-wrap gap-4">
                {items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="px-5 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-md flex flex-col items-center"
                  >
                    <span className="text-black text-sm font-medium mb-1">
                      {skill.name}
                    </span>

                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
                      <div
                        className={`h-2 ${levelColor(
                          skill.level,
                        )} rounded-full`}
                        style={{ width: `${skill.level * 20}%` }}
                      />
                    </div>

                    <span className="text-xs text-black/60">
                      {levelText(skill.level)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
