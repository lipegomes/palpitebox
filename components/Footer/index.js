import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por: {' '}
        <a className='hover:underline' href='https://filipegomes.dev'>Filipe Gomes</a> / {' '}
        <a className='hover:underline' href='https://www.linkedin.com/in/filipe-gomes-43905a1b2/'>Linkedin</a> / {' '}
        <a className='hover:underline' href='https://github.com/lipegomes'>Github</a>
        <div className='mt-2'>
          <img className='inline p-4' width='17%' height='auto' src='/logo_semana_fsm.png' />
          <img className='inline p-4' width='17%' height='auto' src='/logo_devpleno.png' />
        </div>
      </div>
    </div>
  )
}
export default Footer