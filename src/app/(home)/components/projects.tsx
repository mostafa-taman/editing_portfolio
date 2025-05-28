"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 14 } },
};

function chunkProjects<T>(arr: T[], size: number) {
    const result: T[][] = [];
    let i = 0;
    while (i < arr.length) {
        result.push(arr.slice(i, i + size));
        i += size;
    }
    return result;
}

const Projects: React.FC = () => {
    const { t } = useTranslation();

    const projects = t("projects.videos", { returnObjects: true }) as Array<{
        title: string;
        description: string;
        videoUrl: string;
    }>;

    // Always split into rows of 2
    const rows = chunkProjects(projects, 2);

    return (
        <section id="projects" className="py-24 bg-white dark:bg-neutral-900">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.h2
                    className="text-3xl font-extrabold mb-2 text-center text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    {t("projects.title")}
                </motion.h2>
                <motion.p
                    className="text-base text-primary font-semibold mb-2 text-center tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {t("projects.description")}
                </motion.p>
                <div className="flex justify-center mb-6">
                    <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 opacity-70" />
                </div>
                <div className="flex flex-col gap-12">
                    {rows.map((row, rowIdx) => (
                        <div
                            key={rowIdx}
                            className={`
                                grid gap-10
                                grid-cols-2
                                auto-rows-[22rem]
                                md:grid-cols-2
                                lg:grid-cols-4
                            `}
                        >
                            {row.map((project, idx) => (
                                <motion.div
                                    key={project.title}
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: (rowIdx * 2 + idx) * 0.1 }}
                                    className="relative group flex flex-col justify-end overflow-visible col-span-2"
                                >
                                    {/* Video */}
                                    <div className="relative w-full h-3/4 rounded-3xl overflow-hidden shadow-2xl group">
                                        <iframe
                                            src={project.videoUrl}
                                            title={project.title}
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full object-cover rounded-3xl border-none"
                                            style={{ zIndex: 1, background: "rgba(0,0,0,0.7)" }}
                                        />
                                        {/* Animated border accent on hover */}
                                        <motion.div
                                            className="absolute inset-0 rounded-3xl pointer-events-none z-30"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="w-full h-full rounded-3xl border-4 border-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 opacity-60 animate-pulse" />
                                        </motion.div>
                                    </div>
                                    {/* Info section under the video */}
                                    <div className="w-full mt-4 px-4 py-3 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-blue-100 dark:border-neutral-800 shadow flex flex-col gap-1">
                                        <span className="font-bold text-base text-blue-700 dark:text-blue-500">{project.title}</span>
                                        <span className="text-xs text-gray-600 dark:text-gray-300">{project.description}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;