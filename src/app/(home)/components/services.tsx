"use client";

import { icons } from "@/constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const iconMap = [
    icons.VideoIcon,
    icons.ShortVideoIcon,
    icons.ScriptIcon,
    icons.MotionGraphicsIcon,
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 12 } },
};

const Services: React.FC = () => {
    const { t } = useTranslation();

    const services = t("services.items", { returnObjects: true }) as Array<{ title: string; description: string }>;

    return (
        <section id="services" className="relative py-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.h2
                    className="text-3xl font-extrabold mb-2 text-center text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    {t("services.title")}
                </motion.h2>
                <motion.p
                    className="text-base text-primary font-semibold mb-2 text-center tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {t("services.description")}
                </motion.p>
                <div className="flex justify-center mb-6">
                    <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 opacity-70" />
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service, idx) => {
                        const Icon = iconMap[idx];
                        return (
                            <motion.div
                                key={service.title}
                                variants={cardVariants}
                                className="group bg-white/90 dark:bg-neutral-900/90 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-blue-100 dark:border-neutral-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                            >
                                <span className="mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-100 via-cyan-100 to-purple-100 dark:from-blue-900 dark:via-cyan-900 dark:to-purple-900 p-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-12 h-12 text-blue-500 dark:text-cyan-400 drop-shadow" />
                                </span>
                                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white drop-shadow">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
                                <motion.span
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-2 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 opacity-30 group-hover:opacity-60"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1.1 }}
                                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;