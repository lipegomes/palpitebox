import React from 'react'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-4 p-4 bg-gray-800 border-b border-indigo-600'>
        {/* Grid 1 */}
        <div className='text-center text-white'>
          Projeto desenvolvido por: {' '}
          <a className='hover:underline' href='https://filipegomes.dev'>Filipe Gomes</a>
          <div className='mt-2'>
            <a href='https://lp.devpleno.com/fullstack-master-listadeespera/' target='blank'>
              <img className='inline p-4' width='214' height='75' src='/logo_semana_fsm.png' />
            </a>
            <a href='https://devpleno.com/' target='blank'>
              <img className='inline p-4' width='240' height='60' src='/logo_devpleno.png' />
            </a>
          </div>
        </div>
        {/* Grid 2 */}
        <div className='text-white grid grid-cols-2 gap-4'>
          <ul className='space-y-4'>
            <li><a className='hover:underline' href='https://github.com/lipegomes/palpitebox/blob/main/LICENSE.md' target='blank'>Licença</a></li>
            <li><a className='hover:underline' href='https://palpitebox.filipegomes.dev/sobre' target='blank'>Sobre</a></li>
            <li><a className='hover:underline' href='https://palpitebox.filipegomes.dev/contato' target='blank'>Contato</a></li>
          </ul>
          <ul className='space-y-4'>
            <li>
              <a href='https://github.com/lipegomes' target='blank'>
                <FaGithub className='text-4xl text-white mx-2 inline-block' />
                <spam>GitHub</spam>
              </a>
            </li>
            <li>
              <a href='https://github.com/lipegomes' target='blank'>
                <FaLinkedin className='text-4xl text-white mx-2 inline-block' />
                <spam>Linkedin</spam>
              </a>
            </li>
            <li>
              <a href='https://github.com/lipegomes' target='blank'>
                <FaTelegram className='text-4xl text-white mx-2 inline-block' />
                <spam>Telegram</spam>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-gray-900 p-4'>
        <div className='text-center'>
          <a className='hover:underline text-teal-500' href='https://filipegomes.dev/'>© 2020 Filipe Gomes </a>
        </div>
      </div>
    </div>
  )
}
export default Footer
