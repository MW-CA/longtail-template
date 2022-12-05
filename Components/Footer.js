import React from 'react'
import Lang from './useLanguage'

const Footer = () => {
  return (
    <footer
      style={{
        fontFamily: 'var(--font-roboto)',
        fontSize: '1.25em',
        fontStyle: 'italic',
        display: 'grid',
        placeItems: 'center',
        padding: 15,
      }}
    >
      <Lang
        en='Developed and maintained by a nepotistic, capitalist cabal.'
        es='Creado por una familia capitalista'
      />
    </footer>
  )
}

export default Footer
