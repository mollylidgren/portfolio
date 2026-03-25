import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ language, setLanguage }) {
  // Current route (used for active links + homepage logic)
  const location = useLocation();
  const isHome = location.pathname === "/";

  // UI state
  const [scrolled, setScrolled] = useState(false); // tracks scroll position
  const [openNav, setOpenNav] = useState(false); // mobile menu state

  // Reset UI state on route change
  useEffect(() => {
    setScrolled(false);
    setOpenNav(false);
  }, [location.pathname]);

  //Scroll listener (only active on homepage)
  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const newScrolled = window.scrollY > 80;
      setScrolled(newScrolled);

      // Close menu if user scrolls back to top
      if (!newScrolled && openNav) setOpenNav(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, openNav]);

  //Dynamic styling logic
  const isTransparent = isHome && !scrolled;

  // Header background
  const headerStyle = isTransparent
    ? "bg-transparent"
    : "bg-white/90 backdrop-blur-md shadow-sm";

  // Show full desktop content only when needed
  const showDesktopContent = !isHome || scrolled;

  // Text color adapts to background
  const textColor = isTransparent ? "text-white" : "text-black";

  // Inactive language button styling
  const inactiveLangColor = isTransparent
    ? "text-white/70 hover:text-white"
    : "text-gray-400 hover:text-pink-500";

  // Navigation labels (multilingual)
  const texts = {
    en: {
      start: "START",
      projects: "PROJECTS",
      about: "ABOUT ME",
      contact: "CONTACT",
    },
    sv: {
      start: "START",
      projects: "PROJEKT",
      about: "OM MIG",
      contact: "KONTAKT",
    },
  };
  const t = texts[language];

  //Determines when hamburger icon should be visible
  const showHamburger = !isHome || scrolled || openNav;

  //Returns dynamic styling for active navigation link
  const navStyle = (path) =>
    location.pathname === path
      ? "text-pink-500 underline underline-offset-4"
      : `${textColor} hover:text-pink-500`;

  return (
    // Header container
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${headerStyle}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center font-[SN_Pro] font-bold">
        {/* Logo */}
        {showDesktopContent && (
          <Link to="/" className={`text-xl uppercase ${textColor}`}>
            ML
          </Link>
        )}

        {/* Desktop navigation */}
        {showDesktopContent && (
          <nav className="hidden md:flex items-center gap-8 uppercase text-sm tracking-wide font-[SN_Pro]">
            <Link to="/" className={navStyle("/")}>
              {t.start}
            </Link>
            <Link to="/projects" className={navStyle("/projects")}>
              {t.projects}
            </Link>
            <Link to="/about" className={navStyle("/about")}>
              {t.about}
            </Link>
            <Link to="/contact" className={navStyle("/contact")}>
              {t.contact}
            </Link>

            {/* Language switch (desktop) */}
            <div className="ml-6 text-sm normal-case">
              <button
                onClick={() => setLanguage("sv")}
                className={
                  language === "sv"
                    ? "underline text-pink-500"
                    : inactiveLangColor
                }
              >
                sv
              </button>
              <span className="mx-1">/</span>
              <button
                onClick={() => setLanguage("en")}
                className={
                  language === "en"
                    ? "underline text-pink-500"
                    : inactiveLangColor
                }
              >
                en
              </button>
            </div>
          </nav>
        )}

        {/* Mobile menu toggle (hamburger icon) */}
        {showHamburger && (
          <button
            className="block md:hidden space-y-1.5 z-50"
            onClick={() => setOpenNav(!openNav)}
          >
            {/* Hamburger lines */}
            <span
              className="block w-7 h-0.5 rounded"
              style={{
                backgroundColor:
                  isTransparent && !openNav ? "transparent" : "black",
              }}
            ></span>
            <span
              className="block w-7 h-0.5 rounded"
              style={{
                backgroundColor:
                  isTransparent && !openNav ? "transparent" : "black",
              }}
            ></span>
            <span
              className="block w-7 h-0.5 rounded"
              style={{
                backgroundColor:
                  isTransparent && !openNav ? "transparent" : "black",
              }}
            ></span>
          </button>
        )}
      </div>

      {/* Mobile navigation menu */}
      <div
        className={`md:hidden absolute left-0 w-full transition-all duration-300 overflow-hidden ${openNav ? "top-16 opacity-100" : "top-[-500px] opacity-0"}`}
      >
        <ul className="flex flex-col text-center text-m uppercase text-black tracking-wide p-4 bg-white w-full font-[SN_Pro]">
          {/* Navigation links */}
          <li className="py-2">
            <Link to="/" onClick={() => setOpenNav(false)}>
              {t.start}
            </Link>
          </li>
          <li className="py-2">
            <Link to="/projects" onClick={() => setOpenNav(false)}>
              {t.projects}
            </Link>
          </li>
          <li className="py-2">
            <Link to="/about" onClick={() => setOpenNav(false)}>
              {t.about}
            </Link>
          </li>
          <li className="py-2">
            <Link to="/contact" onClick={() => setOpenNav(false)}>
              {t.contact}
            </Link>
          </li>

          {/* Language switch (mobile) */}
          <li className="py-2 flex justify-center gap-2 mt-2">
            <button
              onClick={() => {
                setLanguage("sv");
                setOpenNav(false);
              }}
              className={
                language === "sv"
                  ? "underline text-pink-500"
                  : "text-gray-400 hover:text-pink-500"
              }
            >
              sv
            </button>
            <span>/</span>
            <button
              onClick={() => {
                setLanguage("en");
                setOpenNav(false);
              }}
              className={
                language === "en"
                  ? "underline text-pink-500"
                  : "text-gray-400 hover:text-pink-500"
              }
            >
              en
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
