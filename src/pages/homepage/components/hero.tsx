import { motion } from "framer-motion";
interface Props{
    isDarkMode: boolean;
    setOpenBookModel: (show: boolean) => void;
}
export default function Hero({ isDarkMode, setOpenBookModel }: Props) {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-accent-500/90 via-accent-500 to-accent-600 overflow-hidden py-20"
    >
      {/* Glow Background */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] z-0" />

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fast, Eco-Friendly Pest Control in Sydney
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg lg:text-xl text-white/90 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Book a same-day inspection with child-safe, eco-friendly treatments. Trusted by Sydney homeowners with upfront pricing and no hidden fees.
        </motion.p>

        {/* Pulse line */}
        <motion.p
          className="text-sm uppercase tracking-wide font-semibold text-white mb-10 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          No Hidden Costs · 100% Safe · Free Quotes
        </motion.p>

        {/* buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button
            onClick={() => setOpenBookModel(true)}
            className="bg-[#03b5a6] px-6 md:px-10 hover:bg-transparent border border-[#03b5a6] text-white text-sm  py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Book an Inspection
          </button>
        </motion.div>
      </div>

      {/* SVG Wave Layers */}
      <svg className="svg-intro-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z" fill={isDarkMode ? "#232226" : "white"} />
      </svg>
      <svg className="svg-intro-bottom-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z" fill={isDarkMode ? "#232226" : "white"} fillOpacity="0.4" />
      </svg>
      <svg className="svg-intro-bottom-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M95,0 Q90,90 10,100 L100,100 100,0 Z" fill="white" fillOpacity="0.1" />
      </svg>
    </section>
  );
}
