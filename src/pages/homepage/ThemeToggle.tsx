import React from "react";
import { useTheme } from "../../hooks/ThemeContext";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 md:right-10 p-2 rounded-full  border-gray-300 dark:border-gray-600 "
    >
      <GoSun
        className=" hidden dark:inline cursor-pointer hover:text-opacity-75 active:text-opacity-100"
        size={20}
      />
      <FaMoon
        className=" inline dark:hidden cursor-pointer hover:text-opacity-75 active:text-opacity-100"
        size={20}
      />
    </button>
  );
};

export default ThemeToggle;
