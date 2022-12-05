import '../styles/reset.css'
import '../styles/variables.css'
import '../styles/layout.scss'
import { BsSnow2 } from 'react-icons/bs'
function MyApp({ Component, pageProps }) {
  return (
    <div id='body'>
      <header>
        <div className='icon-container'>
          <BsSnow2 className='icon' />
        </div>
        <div className='header-text'>
          <div className='title'>frostdates</div>
          <div className='subtitle'>plant with confidence</div>
        </div>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        Developed and maintained by a nepotistic, capitalist cabal.
      </footer>
    </div>
  )
}

export default MyApp
