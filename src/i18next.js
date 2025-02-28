import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const loadPath = "/locales/{{lng}}.json";
i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "es",
        ns: ["default"],
        defaultNS: "default",
        supportedLngs: ["en", "es", "ru"],
        backend: {
            loadPath: loadPath,
        },
    });

export default i18next;