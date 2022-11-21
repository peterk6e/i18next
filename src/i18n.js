import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"
import translationEN from "./locales/en/translation.json"
import translationFR from "./locales/fr/translation.json"

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
}

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(Backend)
  .use(initReactI18next) //passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    debug: true,
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, //react already safes from xss
    },
  })

export default i18n
