"use client";

import { icons } from "@/constants";
import { useTranslation } from "react-i18next";

const CreateNavRoutes = (activeString: string) => {
    const { t } = useTranslation();

    return [
        {
            href: "/#about",
            label: t("nav.about"),
            active: activeString === "about",
            icon: icons.AboutIcon
        },
        {
            href: "/#services",
            label: t("nav.services"),
            active: activeString === "services",
            icon: icons.ServicesIcon
        },
        {
            href: "/#projects",
            label: t("nav.projects"),
            active: activeString === "projects",
            icon: icons.ProjectsIcon
        },
    ];
};

export default CreateNavRoutes;