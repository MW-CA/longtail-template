import React, { useEffect } from 'react'
import { BsSnow2 } from 'react-icons/bs'
import Lang, { useLanguage, LanguageProvider } from '../Components/useLanguage'
import { useState } from 'react'
function Header() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])
  return (
    <header
      style={{
        minHeight: '75px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex' }}>
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            backgroundColor: 'var(--color-primary)',
            height: '75px',
            width: '75px',
            borderRadius: '75px',
            marginRight: '20px',
            transform: `rotate(${loaded ? 90 : 0}deg)`,
            opacity: loaded ? 1 : 0,
            transition: 'all 1s ease',
          }}
        >
          <BsSnow2 style={{ fontSize: '50px', color: 'var(--color-white)' }} />
        </div>
        <div
          style={{
            overflow: 'hidden',
            opacity: loaded ? 1 : 0,
            transition: 'all 1s ease',
          }}
        >
          <div
            style={{
              fontWeight: '700',
              fontSize: '3em',
              fontFamily: 'var(--font-roboto-slab)',
              position: 'relative',
              left: loaded ? 0 : -500,
              transition: 'all 1s ease',
            }}
          >
            frostdates
          </div>
          <div
            style={{
              fontSize: '1.6em',
              fontStyle: 'italic',
              display: 'hidden',
              position: 'relative',
              top: loaded ? 0 : 500,
              transition: 'all 1s ease',
            }}
          >
            <Lang en='plant with confidence' es='siembra confiable' />
            {/* {lang({ en: 'plant with confidence', es: 'siembra confiable' })} */}
          </div>
        </div>
      </div>
      <LanguageSelector />
    </header>
  )
}
function LanguageSelector() {
  const { currentLanguage: curr, setLang } = useLanguage()
  const [isActive, setIsActive] = useState(false)
  const switchLanguage = () => {
    setLang((lang) => {
      if (lang == 'en') {
        return 'es'
      } else {
        return 'en'
      }
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.25em',
        cursor: isActive ? 'pointer' : 'default',
        fontFamily: 'var(--font-roboto)',
      }}
      onMouseDown={switchLanguage}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <p
        style={{
          fontWeight: curr == 'en' ? 600 : 400,
          transition: 'all 0.2s ease',
        }}
      >
        en
      </p>
      <div
        style={{
          width: 25,
          height: 10,
          backgroundColor:
            curr == 'en' ? 'var(--color-primary)' : 'var(--color-secondary)',
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: curr == 'en' ? 'flex-start' : 'flex-end',
          marginLeft: 10,
          marginRight: 10,
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            width: 15,
            height: 15,
            borderRadius: 10,
            backgroundColor: 'var(--color-white)',
            boxShadow: '1px 1px 2px var(--color-black)',
          }}
        ></div>
      </div>
      <p
        style={{
          fontWeight: curr == 'es' ? 600 : 400,
          transition: 'all 0.2s ease',
        }}
      >
        es
      </p>
    </div>
  )
}
export default Header
