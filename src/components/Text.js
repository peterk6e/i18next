import React from "react"
import { useTranslation } from "react-i18next"

const Text = () => {
  const { t } = useTranslation()
  return <div>{t("text")}</div>
}

export default Text
