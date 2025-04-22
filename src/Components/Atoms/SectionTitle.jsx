import React from "react";

export function SectionTitle({ children, highlight }) {
  return (
    <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl font-bold text-center mb-12">
      {children}{" "}
      {highlight && (
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      )}
    </h2>
  );
}
