import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import hero_sky from "../assets/images/hero_sky.png";

export default function ContactPage({ language, setLanguage }) {
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Scroll tracking
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text content
  const text = {
    en: {
      title: "Let’s Connect!",
      description:
        "Looking for a versatile creator for your next project? I’m always open to exciting new opportunities and collaborations. Send me a message and let's get in touch!",
      emailTitle: "Email",
      emailUser: "molly.lidgren",
      emailDomain: "outlook.com",
      pageHero: "Contact",

      name: "Name",
      message: "Message",
      send: "Send message",

      successTitle: "Thank you for your message!",
      successText: "I’ll get back to you as soon as possible!",
    },
    sv: {
      title: "Låt oss skapa kontakt!",
      description:
        "Letar du efter en mångsidig kreatör till ditt nästa projekt? Jag är alltid öppen för nya spännande möjligheter och samarbeten. Skicka ett meddelande så hörs vi snart!",
      emailTitle: "E-post",
      emailUser: "molly.lidgren",
      emailDomain: "outlook.com",
      pageHero: "Kontakt",

      name: "Namn",
      message: "Meddelande",
      send: "Skicka meddelande",

      successTitle: "Tack för ditt meddelande!",
      successText: "Jag hör av mig så snart jag kan!",
    },
  };

  const t = text[language];

  // Compose email
  const emailAddress = `${t.emailUser}@${t.emailDomain}`;

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Honeypot check
    const honeypotValue = e.target.honeypot.value;
    if (honeypotValue) {
      // Bot suspicious – stop form
      alert("Bot detected!");
      setLoading(false);
      return;
    }

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://codefreeform.com/api/contact-api/", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      alert("Error sending message");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen font-[SN_Pro] text-gray-700 relative">
      {/* Header */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Hero */}
      <PageHero title={t.pageHero} />

      {/* Main content */}
      <div className="relative mx-auto px-6 py-20 pb-40">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed -z-10"
          style={{ backgroundImage: `url(${hero_sky})` }}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none -z-5 ${
            scrolled ? "opacity-20" : "opacity-10"
          }`}
        />

        {/* Container */}
        <div className="relative max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl p-10 md:p-14 grid md:grid-cols-2 gap-12 items-start">
          {/* Left side (FORM) */}
          <div className="flex flex-col gap-8 text-center md:text-left">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              {t.title}
            </h1>
            {/* Accent line */}
            <div className="w-16 h-[2px] bg-pink-500 mx-auto md:mx-0 rounded-full" />

            {/* Description */}
            <p className="text-lg text-black/80 max-w-md leading-relaxed">
              {t.description}
            </p>

            {/* Email block */}
            <div className="mt-2 flex flex-col gap-2">
              <span className="text-sm uppercase tracking-widest text-black/50">
                {t.emailTitle}
              </span>

              <a
                href={`mailto:${emailAddress}`}
                className="text-xl font-medium text-black hover:text-pink-500 transition-all duration-300"
              >
                {t.emailUser}&#64;{t.emailDomain}
              </a>
            </div>
          </div>

          {/* Right side (FORM) */}
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-pink-500 shadow-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* key */}
                <input type="hidden" name="access_key" value="E447CE" />

                {/* Honeypot field */}
                <input
                  type="text"
                  name="honeypot"
                  style={{ display: "none" }}
                  autoComplete="off"
                />

                <input
                  type="text"
                  name="name"
                  placeholder={t.name}
                  required
                  className="p-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-1 focus:ring-pink-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="p-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-1 focus:ring-pink-400"
                />

                <textarea
                  name="message"
                  placeholder={t.message}
                  required
                  rows="5"
                  className="p-3 rounded-lg border border-gray-300  bg-white/80 focus:outline-none focus:ring-1 focus:ring-pink-400"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 bg-pink-400 text-white py-3 rounded-full hover:bg-pink-500 transition disabled:opacity-50"
                >
                  {loading ? "..." : t.send}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full py-10">
                <h2 className="text-2xl font-semibold text-black mb-4">
                  {t.successTitle}
                </h2>

                <p className="text-black/70">{t.successText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
