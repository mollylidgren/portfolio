import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import ProjectDetailPage from "./pages/ProjectDetailPage";

import "./App.css";

export default function App() {
  // Global state for language selection
  const [language, setLanguage] = useState("en");

  // Styles for inactive language buttons (same as in Header)
  const inactiveLangColor = "text-gray-400 hover:text-pink-500";

  return (
    <div className="font-sans text-gray-700 min-h-screen">
      {/* Header */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Language toggle */}
      <div className="fixed top-12 right-14 z-20 flex text-sm gap-1 font-[SN_Pro]">
        <button
          onClick={() => setLanguage("sv")}
          className={
            language === "sv" ? "underline text-pink-500" : inactiveLangColor
          }
        >
          sv
        </button>
        <span className="mx-1">/</span>
        <button
          onClick={() => setLanguage("en")}
          className={
            language === "en" ? "underline text-pink-500" : inactiveLangColor
          }
        >
          en
        </button>
      </div>

      {/* ROUTING */}
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={<HomePage language={language} setLanguage={setLanguage} />}
        />

        {/* Projects overview page */}
        <Route
          path="/projects"
          element={
            <ProjectsPage language={language} setLanguage={setLanguage} />
          }
        />

        {/* Individual project detail page */}
        <Route
          path="/projects/:id"
          element={<ProjectDetailPage language={language} />}
        />

        {/* About page */}
        <Route
          path="/about"
          element={<AboutPage language={language} setLanguage={setLanguage} />}
        />

        {/* Contact page */}
        <Route
          path="/contact"
          element={
            <ContactPage language={language} setLanguage={setLanguage} />
          }
        />
      </Routes>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}
