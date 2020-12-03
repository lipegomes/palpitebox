import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    // fragment shorthand
    <>
      <div className='bg-gradient-to-r from-teal-400 to-indigo-500 ... p-4'>
        <div className='container mx-auto'>
          <Link href='/'>
            <a><img className='mx-auto' src='/logo_palpitebox.png' width='10%' height='auto' alt='PalpiteBox' /></a>
          </Link>
        </div>
      </div>
      <div className='bg-gradient-to-r from-teal-400 to-indigo-500 ... p-4 shadow-md text-center'>
        <Link href='/sobre'>
          <a className='text-white px-2 hover:underline'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='text-white px-2 hover:underline'>Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className='text-white px-2 hover:underline'>Pesquisa</a>
        </Link>
      </div>
    </>
  )
}
export default Header
