import { useState, createContext, useContext, useEffect } from 'react'

const Context = createContext('en')

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')
  return (
    <Context.Provider value={{ language, setLanguage }}>
      {children}
    </Context.Provider>
  )
}

export const useLanguage = () => {
  const { language, setLanguage } = useContext(Context)
  const lang = (obj = {}) => {
    if (!Object.keys(obj).includes(language)) {
      return ''
    } else {
      return obj[language]
    }
  }
  return { lang, setLang: setLanguage, currentLanguage: language }
}
const Lang = (props) => {
  const { lang, currentLanguage } = useLanguage()
  const [show, setShow] = useState(true)
  const [text, setText] = useState(lang(props))
  useEffect(() => {
    setShow(false)
    setTimeout(() => {
      setText(lang(props))
      setShow(true)
    }, 210)
  }, [currentLanguage])
  return (
    <span style={{ opacity: show ? 1 : 0, transition: 'all 0.2s ease' }}>
      {text}
    </span>
  )
}
export default Lang
