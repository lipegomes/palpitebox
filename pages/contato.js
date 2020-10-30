import React from 'react'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div>
      <PageTitle title='contato' />
      <div className='py-12 bg-white'>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <p className='text-2xl leading-6 text-indigo-600 font-semibold tracking-wide uppercase'>Entre em contato:</p>
            <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl sm:leading-10'>
              Procuramos lhe atender da melhor maneira possível.
            </h3>
            <p className='mt-4 max-w-2xl text-xl leading-7 text-gray-700 lg:mx-auto'>
              O nosso compromisso e responsabilidade é conceber ao cliente um bom atendimento. Desejamos aos nossos
              clientes uma vida repleta de felicidade, e temos como meta lhe propriciar um atendimento que lhe deixe feliz
              com os resultados.
            </p>
          </div>

          <div className='mt-10'>
            <ul className='md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
              <li>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center h-12 w-12'>
                      <img src='./github.svg' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <a className='text-lg leading-6 font-medium text-gray-900 hover:underline' href='https://github.com/lipegomes' target='blank'>Github</a>
                    <p className='mt-2 text-base leading-6 text-gray-700'>
                      Este projeto é licenciado sobre a licença MIT - veja <a className='link hover:underline font-bold' href='https://github.com/lipegomes/palpitebox/blob/main/LICENSE.md' target='blank'>LICENSE.md</a> para mais informações.
                    </p>
                  </div>
                </div>
              </li>
              <li className='mt-10 md:mt-0'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center h-12 w-12'>
                      <img src='./linkedin.svg' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <a className='text-lg leading-6 font-medium text-gray-900 hover:underline' href='https://www.linkedin.com/in/lipegomes/ ' target='blank'>Likedin</a>
                    <p className='mt-2 text-base leading-6 text-gray-700'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </p>
                  </div>
                </div>
              </li>
              <li className='mt-10 md:mt-0'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center h-12 w-12'>
                      <img src='./whatsapp-brands.svg' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <a className='text-lg leading-6 font-medium text-gray-900 hover:underline' href='https://wa.me/5521993459648?text=Adorei%20o%20palpitebox' target='blank'>WhatsApp</a>
                    <p className='mt-2 text-base leading-6 text-gray-700'>
                      Entre em contado via WhatsApp, mande a sua opnião/sugestão.
                    </p>
                  </div>
                </div>
              </li>
              <li className='mt-10 md:mt-0'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center h-12 w-12'>
                      <img src='./telegram-brands.svg' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <a className='text-lg leading-6 font-medium text-gray-900 hover:underline' href='https://t.me/lord_fil' target='blank'>Telegram</a>
                    <p className='mt-2 text-base leading-6 text-gray-700'>
                      Entre em contado via Telegram, mande a sua opnião/sugestão.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>)
}
export default Contato
