import LanguageDetector from "i18next-browser-languagedetector";
import { ar } from "./ar";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: { en, ar, fr, es },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    }).then(() => i18n.init());


export default i18n;
