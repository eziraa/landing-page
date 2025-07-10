import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Pops{
    faqs: {
        question: string;
        answer: string;
    }[];
    activeFaqIndex: number | null;
    handleFaqToggle: (index: number) => void;
}
export default function FAQSection({ faqs, activeFaqIndex, handleFaqToggle }:Pops) {
  return (
    <section
      id="faq"
      className="py-16 lg:py-24 bg-white dark:bg-[#232226] relative"
      aria-label="Frequently Asked Questions"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl lg:text-5xl font-bold mb-6 relative text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            What Our Customers Ask
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-16 h-1 bg-accent-500 rounded-full"></div>
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Have questions about our pest control services? Find quick answers to the most common concerns — from safety to pricing and scheduling.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {faqs.map((faq, index) => {
            const isActive = activeFaqIndex === index;

            return (
              <motion.div
                key={`faq-${index}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`faq-item relative h-fit bg-white dark:bg-[#29282e] p-6 rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg min-h-[60px] ${
                  isActive ? "shadow-lg row-span-2" : ""
                }`}
              >
                <button
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                  onClick={() => handleFaqToggle(index)}
                  aria-expanded={isActive}
                  aria-controls={`faq-content-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      id={`faq-content-${index}`}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: 12 },
                        collapsed: { opacity: 0, height: 0, marginTop: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
