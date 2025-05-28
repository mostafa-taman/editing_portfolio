"use client";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
    const { t } = useTranslation();


    const skills = [
        { name: "Davinci Resolve", level: 90 },
        { name: "Adobe After Effects", level: 60 },
        { name: "Cap Cut", level: 50 },
        { name: "Final Cut Pro", level: 70 },
        { name: "Photoshop", level: 80 },
        { name: "Canva", level: 90 },
        { name: "Adobe Premerie Pro", level: 40 },
        // Add more skills as needed
    ];

    return (
        <section id="about" className="relative py-24 bg-neutral-200 dark:bg-neutral-900 overflow-hidden">
            {/* Decorative SVG Illustration - Top Left */}
            <svg
                className="absolute top-0 left-0 w-64 h-64 opacity-10 -z-10"
                viewBox="0 0 200 200"
                fill="none"
            >
                <circle cx="100" cy="100" r="100" fill="url(#about-gradient1)" />
                <defs>
                    <linearGradient id="about-gradient1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3b82f6" />
                        <stop offset="1" stopColor="#a78bfa" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Decorative SVG Illustration - Bottom Right */}
            <svg
                className="absolute bottom-0 right-0 w-64 h-64 opacity-10 -z-10"
                viewBox="0 0 200 200"
                fill="none"
            >
                <rect x="0" y="0" width="200" height="200" rx="60" fill="url(#about-gradient2)" />
                <defs>
                    <linearGradient id="about-gradient2" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06b6d4" />
                        <stop offset="1" stopColor="#6366f1" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 -z-20 pointer-events-none">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="#a5b4fc" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 max-w-3xl relative z-10">
                <motion.h2
                    className="text-3xl font-extrabold mb-2 text-center text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    {t("about.title")}
                </motion.h2>
                <motion.p
                    className="text-base text-primary font-semibold mb-2 text-center tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {t("about.description")}
                </motion.p>
                <div className="flex justify-center mb-6">
                    <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 opacity-70" />
                </div>
                <motion.p
                    className="text-sm text-gray-700 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {t("about.body")}
                </motion.p>

                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    {/* SVG Illustration: Lightbulb with info */}
                    <svg width="180" height="180" viewBox="0 0 96 96" fill="none">
                        <ellipse cx="48" cy="48" rx="44" ry="36" fill="url(#about-gradient3)" opacity="0.18" />
                        <g>
                            <circle cx="48" cy="40" r="18" fill="#fff" />
                            <path d="M48 22a18 18 0 0 1 18 18c0 7.5-4.5 13.5-10.5 16.5V64a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V56.5C34.5 53.5 30 47.5 30 40A18 18 0 0 1 48 22Z" fill="url(#about-gradient3)" />
                            <rect x="43" y="64" width="10" height="6" rx="2" fill="#6366f1" />
                            <rect x="45" y="70" width="6" height="4" rx="1" fill="#a5b4fc" />
                            <circle cx="48" cy="40" r="6" fill="#fff" stroke="#6366f1" strokeWidth="2" />
                            <rect x="46" y="36" width="4" height="8" rx="2" fill="#6366f1" />
                        </g>
                        <defs>
                            <linearGradient id="about-gradient3" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6366f1" />
                                <stop offset="1" stopColor="#06b6d4" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>

                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                >

                    <motion.h2
                        className="text-3xl font-extrabold mb-2 text-center text-gray-900 dark:text-white"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {t("about.skillsTitle", "Skills & Tools")}
                    </motion.h2>
                    <motion.p
                        className="text-base text-primary font-semibold mb-2 text-center tracking-wide"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {t("about.skillsDescription")}
                    </motion.p>
                    <div className="flex justify-center mb-6">
                        <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 opacity-70" />
                    </div>

                    <div className="space-y-6 mt-6">
                        {skills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-neutral-800 rounded-full h-3">
                                    <div className="w-full bg-gray-200 dark:bg-neutral-800 rounded-full h-3">
                                        <motion.div
                                            className="main-gradient h-3 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>



            </div>
        </section>
    );
};

export default About;