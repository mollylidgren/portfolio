import React, { useEffect } from "react";
import Hero from "../components/Hero";
import LatestProjects from "../components/LatestProjects";
import MiniSkills from "../components/MiniSkills";

export default function HomePage({ language }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero section */}
      <Hero language={language} />

      {/* Latest projects showcase */}
      <LatestProjects language={language} />

      {/* Skills overview */}
      <MiniSkills language={language} />
    </main>
  );
}
