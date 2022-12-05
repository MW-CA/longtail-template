import '../styles/reset.css'
import '../styles/variables.css'

import { BsSnow2 } from 'react-icons/bs'
import { LanguageProvider } from '../Components/useLanguage'
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
      }}
    >
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
          plant with confidence
        </div>
      </div>
    </header>
  )
}
export default MyApp
