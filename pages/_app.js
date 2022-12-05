import '../styles/reset.css'
import '../styles/variables.css'
import '../styles/layout.scss'
import { BsSnow2 } from 'react-icons/bs'
import { LanguageProvider } from '../Components/useLanguage'
function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <div id='body'>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <footer>
          Developed and maintained by a nepotistic, capitalist cabal.
        </footer>
      </div>
    </LanguageProvider>
  )
}
function Header() {
  return (
    <header>
      <div className='icon-container'>
        <BsSnow2 className='icon' />
      </div>
      <div className='header-text'>
        <div className='title'>frostdates</div>
        <div className='subtitle'>plant with confidence</div>
      </div>
    </header>
  )
}
export default MyApp
