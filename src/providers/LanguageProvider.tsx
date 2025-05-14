"use client";

import { useTranslation } from "react-i18next";

type LanguageProviderProps = {
    children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const { i18n } = useTranslation();

    return <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        {children}
    </div>;
};

export default LanguageProvider;