import React from 'react'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div>
      <PageTitle title='Contato' />
      <div className='container mt-8'>
        <p className='text-center font-bold py-4 text-gray-700 text-xl'>
          Entre em contato através de:
        </p>
        <div className='container mb-8 text-center text-gray-700 text-xl'>
          <a className='text-center px-20' href='https://www.linkedin.com/in/lipegomes/'>Linkedin: https://www.linkedin.com/in/lipegomes/</a>
        </div>
      </div>
    </div>
  )
}
export default Contato
