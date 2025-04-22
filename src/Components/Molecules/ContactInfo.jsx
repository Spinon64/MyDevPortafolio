import React from "react";

export function ContactInfo({ icon, title, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-gray-400 hover:text-purple-400 transition-colors group"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-950 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-purple-900 transition-colors">
        {icon}
      </div>
      <div>
        <div className="font-medium text-white mb-1">{title}</div>
        <div className="text-xs sm:text-sm">{value}</div>
      </div>
    </a>
  );
}
