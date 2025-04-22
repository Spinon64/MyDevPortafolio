import React from "react";

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base";

  const variants = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25",
    secondary:
      "bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/25",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
