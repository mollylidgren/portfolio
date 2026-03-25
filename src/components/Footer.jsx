import React from "react";
import { Link } from "react-router-dom";
import girlCc from "../assets/images/girl/girlCc.png";

export default function Footer({ language }) {
  // Handles all labels and text for supported languages
  const text = {
    en: {
      menuTitle: "Menu",
      start: "Start",
      projects: "Projects",
      about: "About me",
      contact: "Contact",
      contactTitle: "Any questions? Contact me!",
      emailUser: "molly.lidgren",
      emailDomain: "outlook.com",
    },
    sv: {
      menuTitle: "Meny",
      start: "Start",
      projects: "Projekt",
      about: "Om mig",
      contact: "Kontakt",
      contactTitle: "Frågor? Kontakta mig!",
      emailUser: "molly.lidgren",
      emailDomain: "outlook.com",
    },
  };

  // Select correct language (fallback handled by parent)
  const t = text[language];

  // Compose email
  const emailAddress = `${t.emailUser}@${t.emailDomain}`;

  return (
    <footer className="bg-[#1d1e22] text-white py-10 px-6 font-[SN_Pro] hover:underline-offset-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {/* Navigation column */}
        <div className="flex flex-col space-y-2 text-left">
          <h3 className="font-bold text-lg mb-2">{t.menuTitle}</h3>

          <Link to="/" className="hover:underline">
            {t.start}
          </Link>
          <Link to="/projects" className="hover:underline">
            {t.projects}
          </Link>
          <Link to="/about" className="hover:underline">
            {t.about}
          </Link>
          <Link to="/contact" className="hover:underline">
            {t.contact}
          </Link>
        </div>

        {/* Contact column */}
        <div className="flex flex-col space-y-2 text-left">
          <h3 className="font-bold text-lg mb-2">{t.contactTitle}</h3>

          <a href={`mailto:${emailAddress}`} className="hover:text-pink-400">
            {t.emailUser}&#64;{t.emailDomain}
          </a>
        </div>

        {/* Branding column */}
        <div className="flex items-center justify-center md:justify-end">
          <img src={girlCc} alt="Logotyp" className="h-46 object-contain" />
        </div>
      </div>
    </footer>
  );
}
