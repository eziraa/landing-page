import { motion } from "framer-motion";

export default function EPCLogo({ size = "text-3xl" }: { size?: string }) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center font-extrabold ${size} rounded-full select-none`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="bg-[#03b5a6] px-3 text-white p-[0.4px] rounded-full">E</span>
    </motion.div>
  );
}
