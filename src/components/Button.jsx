import React from "react";

function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 md:px-8 md:py-2 
        bg-pink-400 text-white font-semibold font-[SN_Pro]
        rounded-full cursor-pointer
        text-sm md:text-base
        hover:bg-pink-500 
        transition-colors duration-300
        ${className || ""}
      `}
    >
      {children}
    </button>
  );
}

export { Button };
