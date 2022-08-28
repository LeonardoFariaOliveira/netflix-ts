import type { NextPage } from 'next'
import Link from 'next/link'
import Form from '../components/Form'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className=' flex flex-row text-white max-w-9xl w-full pr-14 pl-14'>
        <div className='max-w-[44.5rem] w-full flex flex-col justify-evenly  h-96'>
          <h1 className='max-w-[39rem] w-full text-[3.125rem] font-bold'>Filmes, séries e muito mais. Sem limites.</h1>
          <Link 
          href={""}
          >
            <button className='bg-accent max-w-[22.5rem] text-[1.125rem] font-medium pt-4 pb-4 rounded-[0.275rem] '>Catalogo completo</button>
          </Link>
        </div>
        <div className='max-w-[44.5rem] h-[32rem] w-full flex justify-end'>
          <Form/>
        </div>
      </div>
    </Layout>
  )
}

export default Home
