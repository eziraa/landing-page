import React from "react";
import { useTheme } from "../../hooks/ThemeContext";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  caption: string;
}

const ShowDemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, caption }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const gifSrc = isDarkMode
    ? "/landing/HOWITWORKSBLACK.gif"
    : "/landing/HOWITWORKSWHITE.gif";


  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ display: isOpen ? "flex" : "none" }}
      onClick={onClose}
    >
    <div
      className="absolute z-[9999] bg-white dark:bg-zinc-900 rounded-xl shadow-xl border dark:border-zinc-700 overflow-hidden animate-fadeIn"
      style={{ maxWidth: "600px", width: "100%" }}
    >
      <div className="relative ">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-gray-500 transition z-10"
        >
          ✕
        </button>
        <img
          src={gifSrc}
          alt="Demo"
          className="w-full h-auto object-contain rounded-t-xl"
        />
      {caption && (
        <div className="px-4 py-3 text-center text-gray-700 dark:text-gray-300 text-sm">
          {caption}
        </div>
      )}
      </div>
    </div>
    </div>
  );
};

export default ShowDemoModal;
