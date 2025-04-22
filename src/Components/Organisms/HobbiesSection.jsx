import React from "react";
import { GameIcon } from "../Atoms/Icons/GameIcon";
import { MusicIcon } from "../Atoms/Icons/MusicIcon";
import { BookIcon } from "../Atoms/Icons/BookIcon";
import { CameraIcon } from "../Atoms/Icons/CameraIcon";
import { CodeIcon } from "../Atoms/Icons/CodeIcon";
import { ArtIcon } from "../Atoms/Icons/ArtIcon";
import { CoffeeIcon } from "../Atoms/Icons/CoffeeIcon";
import { CyclingIcon } from "../Atoms/Icons/CyclingIcon";

export function HobbiesSection() {
  const hobbies = [
    {
      icon: <GameIcon />,
      title: "Gaming",
      description:
        "I enjoy strategy and RPG games that challenge my problem-solving skills.",
      skill: "Strategic thinking and persistence",
    },
    {
      icon: <MusicIcon />,
      title: "Music",
      description:
        "I play guitar and enjoy discovering new genres and artists.",
      skill: "Creativity and pattern recognition",
    },
    {
      icon: <CodeIcon />,
      title: "Coding Side Projects",
      description:
        "I work on personal coding projects to experiment with new technologies.",
      skill: "Innovation and technical growth",
    },
    {
      icon: <CoffeeIcon />,
      title: "Coffee Brewing",
      description:
        "I'm passionate about specialty coffee and different brewing methods.",
      skill: "Precision and attention to process",
    },
    {
      icon: <CyclingIcon />,
      title: "Legos",
      description:
        "I enjoy building new Legos to find a space of relax and music.",
      skill: "Concentration",
    },
  ];

  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      <section id="hobbies" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-white lg:text-5xl font-bold text-center mb-8">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hobbies
            </span>
          </h2>

          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-sm sm:text-base">
            Beyond coding, I have diverse interests that keep me inspired and
            help me bring fresh perspectives to my work. These activities shape
            who I am and often influence my creative approach to
            problem-solving.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {hobbies.map((hobby) => (
              <div
                key={hobby.title}
                className="bg-zinc-950/50 rounded-2xl p-6 sm:p-8 border border-purple-900/20"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-purple-950 rounded-full flex items-center justify-center mb-6 text-purple-400">
                  {hobby.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                  {hobby.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-6">
                  {hobby.description}
                </p>
                <p className="text-xs sm:text-sm text-purple-400">
                  {hobby.skill}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-purple-950/20 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4">
              How My Hobbies Influence My Work
            </h3>
            <p className="text-gray-400 text-center max-w-4xl mx-auto text-sm sm:text-base">
              My diverse interests help me approach development challenges from
              different angles. Photography improves my eye for design, gaming
              enhances my problem-solving abilities, and music keeps my creative
              thinking flowing. These hobbies don't just make me a more
              well-rounded person—they make me a better developer who can
              connect with users and create more engaging experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
