import React from 'react'
import { useTranslation } from 'react-i18next'


const Greetings = () => {
    const {t} = useTranslation()
    return (
    <div>{t('greetings')} </div>
  )
}

export default Greetings