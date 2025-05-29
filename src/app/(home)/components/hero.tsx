"use client";

import { Button } from "@/components/ui/button";
import CustomVideoPlayer from "@/components/video/customVideoPlayer";
import IconGrid from "@/components/common/iconGrid";
import Link from "next/link";
import { icons } from "@/constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
    const { t } = useTranslation();
    const [showGrid, setShowGrid] = useState(false);
    const [showReelPlaying, setShowReelPlaying] = useState(false);

    const handleCTAClick = () => setShowGrid((prev) => !prev);

    const showReel = t("hero.showReel", { returnObjects: true }) as {
        title: string;
        description: string;
        videoUrl: string;
        thumbnail: string;
        type: string;
        vertical?: boolean;
    };

    return (
        <section className="relative pt-24 pb-32">
            <div className="container mx-auto px-6 sm:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    <div className="text-center lg:text-left">
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link href="/#projects" className="inline-flex items-center gap-x-2 bg-neutral-200 border border-gray-700 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600">
                                {t("hero.banner.title")}


                                <span className="flex items-center gap-x-1">
                                    <span className="border-s border-gray-900 text-primary ps-2 dark:border-neutral-700">
                                        {t("hero.banner.cta")}
                                    </span>
                                    <icons.ArrowRightIcon className="h-4 w-4 text-primary" />
                                </span>
                            </Link>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span className="text-gradient">{t("hero.titleSpan")}</span>
                            {" "}
                            <span>{t("hero.title")}</span>
                        </motion.h1>



                        <motion.p
                            className="mt-6 text-lg  text-gray-800 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {t("hero.description")}
                        </motion.p>



                        <motion.div
                            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >

                            <Button
                                size="default"
                                variant={"heroGradient"}
                                className="w-full"
                                onClick={handleCTAClick}
                            >
                                <span className="flex items-center justify-center gap-4 w-full">
                                    <icons.CallToAction className="!h-6 !w-6 flex-shrink-0" />
                                    <span className="font-bold text-xl">{t("hero.cta")}</span>
                                </span>
                            </Button>
                        </motion.div>

                        {showGrid && <IconGrid showMessage />}
                    </div>


                    <motion.div
                        className="relative lg:flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div
                            className="
                                absolute
                                -z-10
                                w-[420px] h-[420px]
                                rounded-full
                                hidden
                                blur-3xl
                                bg-blue-400/40
                                dark:bg-blue-700/40
                                top-1/2 left-1/2
                                -translate-x-1/2 -translate-y-1/2
                                pointer-events-none
                            "
                        />

                        <motion.div
                            className="mt-10 flex flex-col items-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <motion.div>

                                <div className="relative w-full max-w-xl aspect-video flex items-center justify-center group">
                                    {/* Glowing border */}
                                    <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-blue-400 via-cyan-400 to-purple-500 blur-[6px] opacity-70 animate-pulse" />

                                    {/* Title on top of the video, full width, only on hover and not playing */}
                                    <motion.div
                                        className={`
                                        absolute top-0 left-0 w-full z-20
                                        transition-opacity duration-300
                                        pointer-events-none
                                        group-hover:opacity-100
                                        opacity-0
                                        px-0
                                    `}
                                        initial={false}
                                        animate={{ opacity: !showReelPlaying ? 1 : 0 }}
                                    >
                                        <div className="w-full rounded-t-2xl bg-white/90 dark:bg-neutral-900/90 py-2 px-3 text-center">
                                            <span className="block text-base md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 drop-shadow-sm">
                                                {showReel.title}
                                            </span>
                                        </div>
                                    </motion.div>

                                    {/* Video player */}
                                    <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
                                        <CustomVideoPlayer
                                            url={showReel.videoUrl}
                                            poster={showReel.thumbnail}
                                            type={showReel.type}
                                            vertical={showReel.vertical}
                                            className={showReel.vertical ? "h-full w-auto mx-auto" : "w-full h-full"}
                                            onPlay={() => setShowReelPlaying(true)}
                                            onPause={() => setShowReelPlaying(false)}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;