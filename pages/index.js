import Head from 'next/head'
import Image from 'next/image'
import Lang from '../Components/useLanguage'
import { GrFormSearch } from 'react-icons/gr'
import { useEffect, useState } from 'react'
export default function Home() {
  return (
    <div
      style={{
        position: 'relative',
        height: '90vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundImage:
            'url(https://upload.wikimedia.org/wikipedia/commons/9/92/Colorful_spring_garden.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'sepia(30%)',
          opacity: '0.7',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
      />
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Input />
      </div>
    </div>
  )
}

function Input() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontSize: '2em',
          fontFamily: 'var(--font-poppins)',
          fontWeight: 500,
        }}
      >
        <Lang
          en='FIND YOUR FROST DATES BY ZIPCODE'
          es='ENCUENTRA LA FECHA DE LAS PRÓXIMAS HELADAS POR CÓDIGO POSTAL'
        />
      </div>
      <SearchBar />
    </div>
  )
}

function SearchBar() {
  const [isHover, setIsHover] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        height: 50,
        width: 500,
        boxShadow: `1px 1px 1px rgba(0,0,0,${isHover ? 0.3 : 0})`,
        borderRadius: '20px',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <input
        style={{
          height: '100%',
          flex: 1,
          // borderRadius: '20px 0px 0px 20px',
          paddingLeft: '20px',
          cursor: isHover ? 'pointer' : 'default',
        }}
      ></input>
      <button
        style={{
          backgroundColor: 'var(--color-secondary)',
          // borderRadius: '0px 20px 20px 0px',
          height: '100%',
          width: 50,
          margin: 'none',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <GrFormSearch style={{ fontSize: '2em' }} />
      </button>
    </div>
  )
}
