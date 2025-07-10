import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <section className="py-16 lg:py-24 mb-24 relative bg-accent-500 text-white text-center overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl lg:text-5xl font-bold mb-6 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Say Goodbye to Pests — Fast & Safely
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-12 h-1 bg-white rounded-full"></div>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-200 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Book your same-day pest inspection with Ecovia Pest Control and protect your home with eco-friendly, child-safe treatments trusted by Sydney families.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 120 }}
          className="w-full sm:w-auto"
        >
          <Link to="/book" tabIndex={-1}>
            <button
              onClick={() => {
                window.location.href = "/book";
              }}
              className="text-white font-bold bg-[#03b5a6] hover:bg-transparent hover:border px-6 py-3 transition-all duration-300 text-sm rounded-full hover:bg-[#38CBDD] hover:text-white border-white hover:border-[#38CBDD] mb-6 md:mb-2 w-[80%] sm:w-auto"
            >
              BOOK AN INSPECTION NOW
            </button>
          </Link>
        </motion.div>
      </div>

      <svg
        className="svg-cta-bottom absolute bottom-0 left-0 right-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z"
          fill={isDarkMode ? "#232226" : "white"}
        />
      </svg>
    </section>
  );
}
