import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import { Button } from "../components/Button";
import hero_sky from "../assets/images/hero_sky.png";
import cvImage from "../assets/images/cv/cvImage.png";
import MainSkills from "../components/MainSkills";

export default function AboutPage({ language, setLanguage }) {
  const navigate = useNavigate();

  // Tracks scroll position to modify background overlay opacity
  const [scrolled, setScrolled] = useState(false);

  //Scroll listener
  useEffect(() => {
    window.scrollTo(0, 0); // ensure page starts at top
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text content for both languages
  const text = {
    en: {
      pageHero: "About me",
      title: "Hi! My name is Molly Lidgren",
      intro1:
        "I am a creative designer and front-end developer with a strong passion for visual storytelling, user experience and concept-driven design. Through my university studies and project-based work, I have developed a versatile skill set that spans visual identity, editorial design, motion graphics and responsive web development.",
      intro2:
        "I enjoy taking ideas from early concept stages, such as moodboards, wireframes and visual exploration, all the way to refined and functional final outcomes. My projects range from designing and developing React-based websites, to creating illustrated motion films, editorial layouts and visual redesigns. Across all of them, I focus on clarity, aesthetic quality and meaningful user engagement.",
      intro3:
        "Alongside my academic projects, I have also worked as a freelancer for various companies. These experiences have given me valuable insight into real-world collaboration, client communication and production workflows. In this portfolio, I have chosen to highlight selected personal and university projects that best represent my creative process and design approach.",
      contactBtn: "Contact me",
      downloadCV: "Download CV",
      skillsTitle: "What I bring to the table",
      skill1Title: "Design",
      skill1Desc:
        "I develop visual ideas from scratch and translate abstract themes into clear, cohesive identities, from moodboards and typography to editorial layouts and illustration.",
      skill2Title: "Motion",
      skill2Desc:
        "I bring visuals to life through motion, transitions and interaction. Using animation, storytelling and interactive prototyping to guide attention and engagement.",
      skill3Title: "Digital",
      skill3Desc:
        "I turn design into functional digital experiences, building responsive interfaces, user flows and prototypes that bridge creativity and development.",
      projectsCTA: "Want to get in touch?",
      allProjectsBtn: "All projects",
    },
    sv: {
      pageHero: "Om mig",
      title: "Hej! Jag heter Molly Lidgren",
      intro1:
        "Jag är en kreativ designer och front-end-utvecklare med stort intresse för visuellt berättande, användarupplevelse och konceptdriven design. Genom mina universitetsstudier och projektbaserade arbeten har jag utvecklat en mångsidig kompetens som spänner över visuell identitet, redaktionell design, motion graphics och responsiv webbutveckling.",
      intro2:
        "Jag gillar att ta idéer från tidiga konceptstadier, såsom moodboards, wireframes och visuell utforskning, hela vägen till färdiga och funktionella resultat. Mina projekt sträcker sig från att designa och utveckla React-baserade webbplatser, till att skapa illustrerade motionfilmer, redaktionella layouter och visuella redesigns. I alla projekt fokuserar jag på tydlighet, estetisk kvalitet och meningsfullt användarengagemang.",
      intro3:
        "Parallellt med mina akademiska projekt har jag även arbetat som frilansare för olika företag. Dessa erfarenheter har gett värdefulla insikter i verkligt samarbete, kundkommunikation och produktionsflöden. I denna portfolio har jag valt att lyfta fram utvalda personliga och universitetsprojekt som bäst representerar min kreativa process och designmetod.",
      contactBtn: "Kontakta mig",
      downloadCV: "Ladda ner CV",
      skillsTitle: "Vad jag kan bidra med",
      skill1Title: "Design",
      skill1Desc:
        "Jag utvecklar visuella idéer från grunden och översätter abstrakta teman till tydliga och sammanhängande identiteter, från moodboards och typografi till redaktionella layouter och illustrationer.",
      skill2Title: "Rörlig bild",
      skill2Desc:
        "Jag ger visuella element liv genom rörelse, övergångar och interaktion. Med animation, storytelling och interaktiv prototypning styr jag uppmärksamhet och engagemang.",
      skill3Title: "Digital",
      skill3Desc:
        "Jag förvandlar design till funktionella digitala upplevelser, bygger responsiva gränssnitt, användarflöden och prototyper som förenar kreativitet och utveckling.",
      projectsCTA: "Vill du kontakta mig?",
      allProjectsBtn: "Alla projekt",
    },
  };

  const t = text[language];

  return (
    <div className="min-h-screen font-[SN_Pro] text-gray-700 relative">
      {/* Header component */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Hero section */}
      <PageHero title={t.pageHero} />

      {/* Main content area */}
      <div className="min-h-screen text-gray-700 relative flex flex-col items-center pb-40">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed -z-10"
          style={{ backgroundImage: `url(${hero_sky})` }}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none -z-5 ${
            scrolled ? "opacity-20" : "opacity-10"
          }`}
        />

        {/* Content container */}
        <div className="relative max-w-6xl bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl p-10">
          {/* Intro section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-items-center">
            {/* Profile image */}
            <div className="flex justify-center">
              <motion.img
                src={cvImage}
                alt="Profil"
                className="w-96 h-96 object-cover rounded-3xl shadow-xl border-4 border-white"
                style={{ transform: "rotate(-6deg)" }}
                initial={{ opacity: 0, x: -50, rotate: -10 }}
                animate={{ opacity: 1, x: 0, rotate: -6 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Introductory text content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 text-center md:text-left">
                {t.title}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left">
                {t.intro1}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left">
                {t.intro2}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left">
                {t.intro3}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                <Button
                  onClick={() => navigate("/projects")}
                  className="rounded-full px-6 py-3"
                >
                  {t.allProjectsBtn}
                </Button>

                <Button
                  onClick={() => navigate("/contact")}
                  className="rounded-full px-6 py-3 "
                >
                  {t.contactBtn}
                </Button>
              </div>
            </div>
          </div>

          <MainSkills language={language} />

          {/* Final call-to-action section */}
          <div
            className="bg-gray-50 rounded-2xl mt-20 p-8 text-center space-y-4 shadow-lg bg-fixed bg-cover bg-center"
            style={{ backgroundImage: `url(${hero_sky})` }}
          >
            <h2 className="text-2xl font-bold text-gray-900">
              {t.projectsCTA}
            </h2>
            <Button
              onClick={() => navigate("/contact")}
              className="rounded-full px-6 py-3 mt-2"
            >
              {t.contactBtn}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
