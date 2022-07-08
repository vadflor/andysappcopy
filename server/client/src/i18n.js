import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            //translation file path
            loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
        },
        // language by default
        fallbackLng : "en",
        // order and from where user language should be detected
        order: ['cookie', 'localStorage', 'querystring', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

        // keys or params to lookup language from
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng',
        lookupSessionStorage: 'i18nextLng',
        lookupFromPathIndex: 0,
        lookupFromSubdomainIndex: 0,

        // cache user language on
        caches: ['localStorage', 'cookie'],
        //disable in production
        debug: false,
        //can have multiple namespaces, in case want to divide a huge
        // translation into smaller pieces and load them on demand
        ns: ["locales"],

        interpolation: {
            espaceValue: false,
            formatSeparator: ",",
        },
        react : {
            wait: true,
        },
});

export default i18n;