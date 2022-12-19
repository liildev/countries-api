import React from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { theme, click } = useTheme();

  return (
    <header>
      <h1>Where in the world?</h1>

      <button className="flex items-center gap-x-2" onClick={click}>
        {theme === "light" ? (
          <>
            <IoMoonOutline className="text-black" size={20} />
            <p>Dark Mode</p>
          </>
        ) : (
          <>
            <IoMoonSharp size={20} />
            <p>Light Mode</p>
          </>
        )}
      </button>
    </header>
  );
}
