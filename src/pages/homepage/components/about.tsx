import { motion } from "framer-motion";
import {
    Leaf,
    Clock,
    ShieldCheck,
    Bug,
    Smile,
    Recycle,
    PhoneCall, Layers, Smartphone, Zap, Users
} from "lucide-react";


const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutSection() {
    return (
        <>
            {/* Background Gradient */}
            <section
                id="about"
                className="py-16 lg:py-24 bg-white dark:bg-[#1a1a1a]"
            >
                <motion.div
                    className="max-w-6xl py-8 mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                        variants={fadeUpVariants}
                    >
                        About Ecovia Pest Control
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                        variants={fadeUpVariants}
                    >
                        Ecovia Pest Control is a trusted Sydney-based service committed to
                        keeping your home safe, healthy, and pest-free. We offer eco-friendly,
                        child-safe solutions for termites, cockroaches, rodents, ants, and
                        more — all with fast same-day service and upfront pricing.
                    </motion.p>
                </motion.div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            className="lg:col-span-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={containerVariants}
                        >
                            <motion.h2
                                className="text-3xl lg:text-4xl font-light mb-6 text-gray-900 dark:text-white"
                                variants={fadeUpVariants}
                            >
                                Protect Your Home with{" "}
                                <span className="font-bold">Safe, Fast Pest Control</span>
                            </motion.h2>
                            <motion.p
                                className="text-gray-700 dark:text-gray-400 mb-6 text-lg leading-relaxed"
                                variants={fadeUpVariants}
                            >
                                At Ecovia, we provide eco-friendly solutions that eliminate pests and
                                keep your loved ones safe. Backed by fast service and Sydney homeowner
                                trust.
                            </motion.p>
                            <motion.ul className="space-y-3" variants={containerVariants}>
                                {[
                                    {
                                        icon: <Leaf className="w-6 h-6 text-[#047857] mr-3" />,
                                        text: "Eco-friendly and child-safe treatments",
                                    },
                                    {
                                        icon: <Clock className="w-6 h-6 text-[#047857] mr-3" />,
                                        text: "Same-day service available",
                                    },
                                    {
                                        icon: <ShieldCheck className="w-6 h-6 text-[#047857] mr-3" />,
                                        text: "Trusted by hundreds of Sydney residents",
                                    },
                                ].map(({ icon, text }, i) => (
                                    <motion.li
                                        key={text}
                                        className="flex items-center"
                                        variants={fadeUpVariants}
                                        transition={{ delay: i * 0.15 }}
                                    >
                                        {icon}
                                        {text}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>

                        {/* Icon Illustration Block */}
                        <motion.div
                            className="lg:col-span-3"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={containerVariants}
                        >
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: <Bug className="w-10 h-10 text-[#047857] mx-auto mb-4" />,
                                        title: "Pest Experts",
                                        desc: "Termite, rodent, cockroach, and more",
                                    },
                                    {
                                        icon: <Smile className="w-10 h-10 text-[#047857] mx-auto mb-4" />,
                                        title: "Satisfaction First",
                                        desc: "Friendly support and free follow-ups",
                                    },
                                    {
                                        icon: <Recycle className="w-10 h-10 text-[#047857] mx-auto mb-4" />,
                                        title: "Eco Products",
                                        desc: "Family-safe, environmentally approved",
                                    },
                                    {
                                        icon: <PhoneCall className="w-10 h-10 text-[#047857] mx-auto mb-4" />,
                                        title: "Call-Back Ready",
                                        desc: "Quick contact for same-day inspections",
                                    },
                                ].map(({ icon, title, desc }, i) => (
                                    <motion.div
                                        key={title}
                                        className="bg-[#E6F4F1] dark:bg-[#26473C] p-6 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300"
                                        variants={fadeUpVariants}
                                        transition={{ delay: i * 0.15 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {icon}
                                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                            {title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section
                className="py-16 lg:py-24 bg-white dark:bg-[#1a1a1a]"
                aria-label="Pest Protection with Flexible Treatment Options"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="flex flex-col gap-12 items-center lg:flex-row-reverse"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        {/* Text Content */}
                        <motion.div
                            className="lg:col-span-2"
                            variants={containerVariants}
                        >
                            <motion.h2
                                className="text-3xl lg:text-4xl font-light mb-6 text-gray-900 dark:text-white"
                                variants={fadeUpVariants}
                            >
                                Pest Protection with{" "}
                                <span className="font-bold">Flexible Treatment Options</span>
                            </motion.h2>
                            <motion.p
                                className="text-gray-700 dark:text-gray-400 mb-6 text-lg leading-relaxed"
                                variants={fadeUpVariants}
                            >
                                Whether you need fast same-day service or routine inspection, Ecovia offers eco-friendly pest control that works around your schedule.
                            </motion.p>
                            <motion.ul className="space-y-3" variants={containerVariants}>
                                {[
                                    {
                                        icon: <Layers className="w-5 h-5 text-[#047857] mr-3" />,
                                        text: "Tailored treatment plans for your home",
                                    },
                                    {
                                        icon: <Clock className="w-5 h-5 text-[#047857] mr-3" />,
                                        text: "Same-day service available",
                                    },
                                    {
                                        icon: <Smartphone className="w-5 h-5 text-[#047857] mr-3" />,
                                        text: "Book online or by phone in minutes",
                                    },
                                ].map(({ icon, text }, i) => (
                                    <motion.li
                                        key={text}
                                        className="flex items-center"
                                        variants={fadeUpVariants}
                                        transition={{ delay: i * 0.15 }}
                                    >
                                        {icon}
                                        {text}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>

                        {/* Icon Grid */}
                        <motion.div
                            className="lg:col-span-3"
                            variants={containerVariants}
                        >
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: <Bug className="w-10 h-10 text-[#047857] mx-auto mb-4" />,
                                        title: "General Pest Control",
                                        desc: "Safe and effective treatment for cockroaches, ants, spiders, and more.",
                                    },
                                    {
                                        icon: <ShieldCheck className="w-10 h-10 text-[#047857] mx-auto mb-4" />,
                                        title: "Termite Protection",
                                        desc: "Prevent costly damage with thorough termite inspections and barriers.",
                                    },
                                    {
                                        icon: <Zap className="w-10 h-10 text-[#047857] mx-auto mb-4" />,
                                        title: "Wasp & Ant Control",
                                        desc: "Eco-friendly treatments that eliminate nests and colonies effectively.",
                                    },
                                    {
                                        icon: <Users className="w-10 h-10 text-[#047857] mx-auto mb-4" />,
                                        title: "Family-Safe Solutions",
                                        desc: "Child- and pet-safe products approved for indoor and outdoor use.",
                                    },
                                ].map(({ icon, title, desc }, i) => (
                                    <motion.div
                                        key={title}
                                        className="bg-[#E6F4F1] dark:bg-[#26473C] p-6 rounded-xl text-center shadow-md cursor-pointer transition-transform duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        variants={fadeUpVariants}
                                        transition={{ delay: i * 0.15 }}
                                    >
                                        {icon}
                                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                            {title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
