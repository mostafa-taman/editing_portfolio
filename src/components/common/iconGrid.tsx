"use client";

import { icons, socialMedia } from "@/constants";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface IconGridProps {
    showMessage: boolean;
}

const IconGrid: React.FC<IconGridProps> = ({ showMessage }) => {
    const { t } = useTranslation();

    const [copied, setCopied] = useState<string | null>(null);
    const [selectedInfo, setSelectedInfo] = useState<null | { name: string; value: string; icon: any }>(null);

    const handleGridClick = (entry: any) => {
        if (entry.type === "link") {
            window.open(entry.url, "_blank", "noopener,noreferrer");
        } else if (entry.type === "info" && entry.value) {
            setSelectedInfo({ name: entry.name, value: entry.value, icon: entry.icon });
        }
    };

    const handleCopy = (value: string) => {
        navigator.clipboard.writeText(value);
        setCopied(value);
        setTimeout(() => setCopied(null), 1500);
    };



    return (
        <motion.div
            className="mt-8 flex flex-col justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, }}
        >
            {
                showMessage && <motion.p
                    className="text-sm  text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {t("hero.hireMeMessage")}
                </motion.p>
            }

            <div className="grid grid-cols-6 gap-4">
                {socialMedia.map(({ name, icon: Icon, url, type, value }) => (
                    <button
                        key={name}
                        type="button"
                        aria-label={name}
                        onClick={() => handleGridClick({ name, icon: Icon, url, type, value })}
                        className={`
                            group
                            relative
                            flex items-center justify-center
                            rounded-full
                            p-2
                            w-full
                            cursor-pointer
                            bg-white/80 dark:bg-neutral-900/80
                            shadow
                            transition
                            hover:scale-110
                            active:scale-95
                            focus:outline-none
                            hover:main-gradient
                            animate-gradient
                        `}
                    >
                        <Icon
                            className="
                                relative
                                z-10
                                h-6 w-6
                                text-blue-500
                                group-hover:text-white
                                transition
                                cursor-pointer
                                drop-shadow
                            "
                        />
                    </button>
                ))}
            </div>

            {selectedInfo && (
                <div className="mt-6 flex flex-col items-center gap-3 w-full">
                    <div className="flex items-center w-full gap-3 bg-white/80 dark:bg-neutral-900/80 rounded-xl px-4 py-2 shadow border border-blue-100 dark:border-neutral-800">
                        <span className="flex items-center justify-center">
                            <selectedInfo.icon className="h-6 w-6 text-blue-500" />
                        </span>
                        <span className="flex-1 text-center font-medium text-gray-700 dark:text-gray-200">
                            {selectedInfo.value}
                        </span>
                        {copied === selectedInfo.value ? (
                            <icons.CheckIcon className="text-green-600 h-5 w-5" />
                        ) : (
                            <button
                                onClick={() => handleCopy(selectedInfo.value)}
                                className="cursor-pointer rounded text-primary text-xs font-semibold shadow hover:scale-105 transition flex items-center"
                            >
                                <icons.CopyIcon className="h-5 w-5" />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </motion.div>
    )
}

export default IconGrid