import '../styles/reset.css'
import '../styles/variables.css'
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {
  return (
    <div id='body'>
      <header>Header</header>
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
