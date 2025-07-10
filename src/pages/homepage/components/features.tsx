import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface Props{
    features: {
        title: string;
        description: string;
        icon: React.ReactNode;
    }[];
    isDarkMode: boolean;
}
export default function FeaturesSection({ features, isDarkMode }:Props) {
  return (
    <section
      id="features"
      className="py-16 lg:py-24 bg-gray-50 dark:bg-[#201f23] relative"
      aria-label="Features that make Ecovia different"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl lg:text-5xl font-bold mb-6 relative text-gray-900 dark:text-white"
            variants={fadeUpVariants}
          >
            What Makes Ecovia Different
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-16 h-1 bg-accent-500 rounded-full"></div>
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            variants={fadeUpVariants}
          >
            From eco-friendly treatments to fast same-day service, discover the key features that make Ecovia Pest Control Sydney’s most trusted choice for a pest-free home.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-[#29282e] p-6 sm:p-8 rounded-2xl shadow-md dark:shadow-none border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group will-change-transform cursor-pointer"
              variants={fadeUpVariants}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300 animate-pulse-once">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          className="w-full h-32 lg:h-40"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z"
            fill={isDarkMode ? "#232226" : "white"}
          />
        </svg>
      </div>
    </section>
  );
}
