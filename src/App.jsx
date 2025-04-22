import React from "react";
import { Navbar } from "./Components/Organisms/Navbar";
import { HeroSection } from "./Components/Organisms/HeroSection";
import { AboutSection } from "./Components/Organisms/AboutSection";
import { SkillsSection } from "./Components/Organisms/SkillsSection";
import { ExperienceSection } from "./Components/Organisms/ExperienceSection";
import { HobbiesSection } from "./Components/Organisms/HobbiesSection";
import { ProjectsSection } from "./Components/Organisms/ProjectsSection";
import { ContactSection } from "./Components/Organisms/ContactSection";
import { Footer } from "./Components/Organisms/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <HobbiesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
