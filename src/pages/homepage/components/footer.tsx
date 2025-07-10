import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer
      className="py-16 lg:py-24 pb-10 text-slate-700 dark:text-slate-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col gap-10 items-center text-center md:text-left md:items-start md:grid md:grid-cols-2 lg:grid-cols-4"
          variants={footerVariants}
        >
          {/* Brand & Description */}
          <motion.div id="contact-us" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Ecovia Pest Control</h3>
            <p className="text-sm mb-6 leading-relaxed max-w-xs mx-auto md:mx-0">
              Trusted by Sydney homeowners for fast, eco-friendly, and child-safe pest solutions. Book a same-day inspection today.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="w-5 h-5 hover:text-accent-500" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5 hover:text-accent-500" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="w-5 h-5 hover:text-accent-500" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Termite Treatment",
                "Cockroach Removal",
                "Rodent Control",
                "Ant & Wasp Extermination",
                "Home Pest Inspections",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-white/80 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("about");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }} className="hover:text-white/80 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("testimonials");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }} className="hover:text-white/80 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white/80 transition-colors">
                  Service Areas
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("contact");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }} className="hover:text-white/80 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("faq");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }} className="hover:text-white/80 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#book" onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("book");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }} className="hover:text-white/80 transition-colors">
                  Book an Inspection
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 text-center text-xs text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          &copy; {new Date().getFullYear()} Ecovia Pest Control. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}
