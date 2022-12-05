import '../styles/reset.css'
import '../styles/variables.css'

import Header from '../Components/Header'
import { LanguageProvider } from '../Components/useLanguage'
import Footer from '../Components/Footer'
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
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default MyApp
