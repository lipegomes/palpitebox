import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <div>
      <PageTitle title='Seja bem-vindo' />
      <p className='mt-12 text-center text-gray-700 text-xl'>
        O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a sua opnião.
      </p>
      <div className='text-center my-12'>
        <Link href='/pesquisa'>
          <a className='bg-indigo-400 px-12 py-4 font-bold text-white rounded-lg shadow-lg hover:shadow transition duration-500 ease-in-out hover:bg-green-400 transform hover:-translate-y-1 hover:scale-110 ...'>Dar opnião ou sugestão</a>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon &&
        <p className='my-12 text-center text-gray-700 text-xl'>
          {data.message}
        </p>}
    </div>
  )
}

export default Index
