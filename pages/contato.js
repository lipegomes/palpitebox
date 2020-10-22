import React from 'react'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div>
      <PageTitle title='Contato' />
      <div className='container'>
        <p className='text-center font-bold py-4'>
          Entre em contado através de:
        </p>
        <div className='container mb-8 text-center'>
          <a className='text-center px-20' href='https://www.linkedin.com/in/filipe-gomes-43905a1b2/'>Linkedin: https://www.linkedin.com/in/filipe-gomes-43905a1b2/</a>
        </div>
      </div>
    </div>
  )
}
export default Contato
