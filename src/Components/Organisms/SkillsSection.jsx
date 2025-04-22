import React from "react";
import { SectionTitle } from "../Atoms/SectionTitle";
import { SkillCard } from "../Molecules/SkillCard";

export function SkillsSection() {
  const frontendSkills = [
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Swift", level: "Beginner" },
  ];

  const otherSkills = [
    { name: "Responsive Design", level: "Intermediate" },
    { name: "UI/UX Basics", level: "Intermediate" },
    { name: "Git & GitHub", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Figma", level: "Beginner" },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle highlight="Skills">My</SectionTitle>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Frontend Development */}
          <div className="bg-zinc-950/50 rounded-2xl p-6 sm:p-8 border border-purple-900/20">
            <h3 className="text-xl sm:text-2xl text-white font-bold mb-6 text-center">
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-zinc-950/50 rounded-2xl p-6 sm:p-8 border border-purple-900/20">
            <h3 className="text-xl sm:text-2xl text-white font-bold mb-6 text-center">
              Other Skills
            </h3>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
