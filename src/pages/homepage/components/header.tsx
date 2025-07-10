import React from 'react'
import ThemeToggle from '../ThemeToggle';
import { Menu, Moon, Sun, X } from 'lucide-react';
import EPCLogo from '../../../components/logo';
import { GoSun } from 'react-icons/go';
import { FaMoon } from 'react-icons/fa';
import { useTheme } from '../../../hooks/ThemeContext';

interface Props{
    sections: {
        id: string;
        label: string;
    }[];
    isHeaderSticky: boolean;
    activeSection: string;
    setActiveSection: (sectionId: string) => void;
    isDarkMode: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    isMenuOpen: boolean;
}
const Header = ({
    sections,
    isHeaderSticky,
    activeSection,
    setActiveSection,
    setIsMenuOpen,
    isMenuOpen
}:Props) => {
    const {toggleTheme} = useTheme()
  return (
         <header
         className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-500 ${isHeaderSticky
           ? "bg-white dark:bg-[#232226]  text-gray-800 dark:text-white shadow-md"
           : "bg-[#047857] text-white"
           }`}
       >
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-between h-16">
             {/* Logo + Brand */}
             <div className="flex items-center space-x-3">
               <EPCLogo/>
               <span className="font-bold text-lg tracking-tight">Ecovia Pest Control</span>
             </div>
 
             {/* Desktop Nav */}
             <nav className="hidden lg:flex space-x-8 items-center text-sm font-medium">
               {sections.map((section) => (
                 <a
                   key={section.id}
                   href={`#${section.id}`}
                   className={`transition-colors ${activeSection === section.id
                     ? isHeaderSticky
                       ? "text-[#047857] dark:text-white font-semibold"
                       : "text-white font-semibold"
                     : isHeaderSticky
                       ? "text-gray-700 dark:text-white hover:text-[#047857]"
                       : "text-white hover:text-gray-200"
                     }`}
                   onClick={(e) => {
                     e.preventDefault();
                     setIsMenuOpen(false);
                     setActiveSection(section.id);
                     const el = document.getElementById(section.id);
                     if (el) {
                       el.scrollIntoView({ behavior: "smooth", block: "start" });
                     }
                   }}
                 >
                   {section.label}
                 </a>
               ))}
               <button
                 onClick={() => {
                   const el = document.getElementById("book");
                   if (el) el.scrollIntoView({ behavior: "smooth" });
                 }}
                 className="bg-[#03b5a6] hover:bg-transparent border border-[#03b5a6] text-white hover:text-[#03b5a6] px-5 py-2 rounded-full transition"
               >
                 Book an Inspection
               </button>
               <ThemeToggle />
 
             </nav>
 
             {/* Mobile Toggle */}
             <div className="lg:hidden   relative  flex-row flex items-center">
               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 focus:outline-none">
                 {isMenuOpen ? (
                   <X className="w-6 h-6" />
                 ) : (
                   <Menu className="w-6 h-6" />
                 )}
               </button>
                   <button
                     onClick={toggleTheme}
                     className="  border-gray-300 dark:border-gray-600 "
                   >
                     <Sun
                       className=" hidden dark:inline cursor-pointer hover:text-opacity-75 active:text-opacity-100"
                       size={20}
                     />
                     <Moon
                       className=" inline dark:hidden cursor-pointer hover:text-opacity-75 active:text-opacity-100"
                       size={20}
                     />
                   </button>
             </div>
           </div>
 
           {/* Mobile Menu */}
           {isMenuOpen && (
             <div className="lg:hidden bg-white shadow-md border-t border-gray-100">
               <div className="px-4 py-6 space-y-4 text-gray-800">
                 {sections.map((section) => (
                   <a
                     key={section.id}
                     href={`#${section.id}`}
                     onClick={(e) => {
                       e.preventDefault();
                       setIsMenuOpen(false);
                       setActiveSection(section.id);
                       const el = document.getElementById(section.id);
                       if (el) el.scrollIntoView({ behavior: "smooth" });
                     }}
                     className={`block text-sm ${activeSection === section.id
                       ? "text-[#047857] font-semibold"
                       : "text-gray-700 hover:text-[#047857]"
                       }`}
                   >
                     {section.label}
                   </a>
                 ))}
                 <button
                   onClick={() => {
                     setIsMenuOpen(false);
                     const el = document.getElementById("book");
                     if (el) el.scrollIntoView({ behavior: "smooth" });
                   }}
                   className="w-full bg-[#03b5a6] text-white hover:bg-transparent border border-[#03b5a6] hover:text-[#03b5a6] px-4 py-2 rounded-full transition"
                 >
                   Book an Inspection
                 </button>
               </div>
             </div>
           )}
         </div>
       </header>
  )
}

export default Header