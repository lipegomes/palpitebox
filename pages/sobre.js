import React from 'react'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title='Sobre' />
      <div className='container'>
        <p className='mt-8 text-center py-1 font-bold'>
          O que é o PalpiteBox ?
        </p>
        <p className='text-center py-4'>
          PalpiteBox é uma aplicação web desenvolvida durante o curso Fullstack Master do DevPleno.
          O intuito é possibilitar que os clinetes façam opniões/sugestões ou críticas, afim de atender
          melhor os clientes. De tal modo quando o cliente der as suas opniões/sugestões ou críticas,
          será gerado um cupom com 10 % de desconto na próxima compra.
        </p>
      </div>
      <div className='container'>
        <p className='mt-4 text-center py-1 font-bold'>
          Para quem serve o PalpiteBox ?
        </p>
        <p className='mb-4 text-center py-4'>
        A aplicação pode ser utilizada e adaptada a real necessidade de diversos tipos de comércios, empreendimentos e empresas.
        </p>
      </div>

      <div class='grid gap-3 grid-cols-3 mb-8'>
        <div className='flex mb-4'>
          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img class='w-full' src='/bakery.jpg' alt='Padeiro produzindo um pão.' />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>Padarias</div>
              <p class='text-gray-700 text-base text-justify'>
                O pão faz parte do dia-a-dia do Brasileiro, logo saber a opnião dos clientes sobre a qualidade do produto é essencial.
                Uma alimentação saudável e de qualidade torna a vida mais feliz.
              </p>
            </div>
            <div class='px-6 pt-4 pb-2'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#pão</span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#trigo</span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#alimentação</span>
            </div>
          </div>
        </div>

        <div className='flex mb-4'>
          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img class='w-full' src='/barbershop.jpg' alt='Barbeiro cortando o cabelo de um homem.' />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>Barbearias</div>
              <p class='text-gray-700 text-base text-justify'>
                Cuidar dos cabelos faz parte tanto da manutenção da higiene humana como da beleza pessoal.
                Um corte de cabelo realizado com qualidade deixará seus clientes contentes.
              </p>
            </div>
            <div class='px-6 pt-4 pb-2'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'># cabelo</span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#barba</span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#beleza</span>
            </div>
          </div>
        </div>

        <div className='flex mb-4'>
          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img class='w-full' src='/car-repair.jpg' alt='Mecânico consertando um carro chamado fusca.' />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>Oficinas mecânicas</div>
              <p class='text-gray-700 text-base text-justify'>
                Os autômovéis não se mantém usuáveis no dia-a-dia somente com combustível, aproveite o momento da manutenção dos
                autômovéis e conquiste a opnião dos seus clientes com uma excelente manutenção.
              </p>
            </div>
            <div class='px-6 pt-4 pb-2'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#motor</span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#pintura</span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#manutenção</span>
            </div>
          </div>
        </div>

        <div className='flex mb-4'>
          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img class='w-full' src='/housebuilding.jpg' alt='Uma casa em construção.' />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>Construções civil</div>
              <p class='text-gray-700 text-base text-justify'>
                Com o passar dos tempos a industria de construção civil vêm inovando a cada dia os seus processos construtivos em função
                dos avanços técnologicos. Se insira no mundo técnologico ainda mais e aproveite para saber a opnião dos seus clientes sobre
                a qualidade dos serviços prestados.
              </p>
            </div>
            <div class='px-6 pt-4 pb-2'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#casa</span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#madeira</span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#tijolo</span>
            </div>
          </div>
        </div>

        <div className='flex mb-4'>
          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img class='w-full' src='/laundry.jpg' alt='Uma lavanderia de roupas com várias máquinas de lavar roupas.' />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>Lavanderias</div>
              <p class='text-gray-700 text-base text-justify'>
                Nem todas as pessoas tem tempo para lavar as suas roupas em casa, para outras falta espaço físico. Roupas limpas,
                cheirosas, tornam a vida da pessoa mais higiênica e agradável. Conquiste a opnião dos usuários da sua lavanderia.
              </p>
            </div>
            <div class='px-6 pt-4 p   <div class="flex mb-4">b-2'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#sabão</span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#espuma</span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#higiene</span>
            </div>
          </div>
        </div>

        <div className='flex mb-4'>
          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img class='w-full' src='/store.jpg' alt='Uma loja de roupas que vende roupas.' />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>Lojas de roupas</div>
              <p class='text-gray-700 text-base text-justify'>
                Ter um vestuário que sejá agradável para cada dia da semana faz parte da vida das pessoas. As vezes se mistura
                uma peça de roupa com outra no dia-a-dia. Porém todas as pessoas tem dentro de si o consumismo, saiba a opnião
                dos seus clientes sobre o seu estabelecimento.
              </p>
            </div>
            <div class='px-6 pt-4 pb-2'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#calças</span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#vestidos</span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#casacos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sobre
