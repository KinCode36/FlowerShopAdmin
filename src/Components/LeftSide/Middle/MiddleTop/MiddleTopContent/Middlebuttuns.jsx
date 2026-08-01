import React from "react";

const Middlebuttuns = ({ sidebarButtons }) => {
  

  return (
    <div>
      {sidebarButtons?.map((button) => (
        <button
          key={button.id}
          className="flex items-center gap-2.5 py-2.5 px-5 text-sm text-white/55 cursor-pointer border-l-2 border-transparent transition-all duration-150 text-left font-dm font-normal hover:text-white hover:bg-white/[0.04] w-full"
        >
          <span className="text-sm w-4 text-center">
            {button.icon}
          </span>
          {button.title}
        </button>
      ))}
    </div>
  );
};

export default Middlebuttuns;