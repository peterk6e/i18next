import React, { useState, createContext } from "react"
import i18n from "./i18n"

const defaultValue = {
  locale: "en",
  setLocale: () => {},
}

export const LocContext = createContext(defaultValue)

const LocaleContext = ({ children }) => {
  const [locale, setLocale] = useState(i18n.language)

  return (
    <LocContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocContext.Provider>
  )
}
export default LocaleContext
