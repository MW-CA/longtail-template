import '../styles/reset.css'
import '../styles/variables.css'
import { BsSnow2 } from 'react-icons/bs'
import Lang, { useLanguage, LanguageProvider } from '../Components/useLanguage'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <div
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <Header />
        <main style={{ flex: 1 }}>
          <Component {...pageProps} />
        </main>
        <footer style={{ height: '75px' }}>
          Developed and maintained by a nepotistic, capitalist cabal.
        </footer>
      </div>
    </LanguageProvider>
  )
}
function Header() {
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
          }}
        >
          <BsSnow2 style={{ fontSize: '50px', color: 'var(--color-white)' }} />
        </div>
        <div>
          <div
            style={{
              fontWeight: '700',
              fontSize: '3em',
              fontFamily: 'var(--font-roboto-slab)',
            }}
          >
            frostdates
          </div>
          <div style={{ fontSize: '1.6em', fontStyle: 'italic' }}>
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
export default MyApp
