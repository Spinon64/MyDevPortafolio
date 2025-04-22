import React from "react";

export function SkillCard({ name, level }) {
  const getProgressWidth = (level) => {
    switch (level) {
      case "Beginner":
        return "w-[40%]";
      case "Intermediate":
        return "w-[60%]";
      case "Advanced":
        return "w-[90%]";
      default:
        return "w-0";
    }
  };

  return (
    <div>
      <div className="flex justify-between text-sm text-white mb-2">
        <span>{name}</span>
        <span>{level}</span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ${getProgressWidth(
            level
          )}`}
        />
      </div>
    </div>
  );
}
