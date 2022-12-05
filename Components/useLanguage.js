import { useState, createContext, useContext } from 'react'

const Context = createContext('en')

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')
  return (
    <Context.Provider value={{ language, setLanguage }}>
      {children}
    </Context.Provider>
  )
}

const useLanguage = () => {
  const { language, setLanguage } = useContext(Context)
  const lang = (obj = {}) => {
    if (!Object.keys(obj).includes(language)) {
      return ''
    } else {
      return obj[language]
    }
  }
  return { lang, setLang: setLanguage }
}
export default useLanguage
