import type { NextPage } from 'next'
import Link from 'next/link'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Image from "next/image";
import { useEffect, useState } from 'react';

const Home: NextPage = () => {

  
  const [navBackgroundColor, setNavBackgroundColor] = useState<string>("transparent");

  useEffect(() => {
    
     window.addEventListener("scroll", ()=>{

        if(window.scrollY >= 100){
          setNavBackgroundColor("black")
        }
        else{
          setNavBackgroundColor("transparent")
        }

     });

    
  }, [])

  return (
    <Layout navBackgroundColor = {navBackgroundColor}>
      <div className=' flex flex-row text-white max-w-9xl w-full pr-14 pl-14 mb-40'>
        <div className='max-w-[44.5rem] w-full flex flex-col justify-evenly  h-96'>
          <h1 className='max-w-[39rem] w-full text-[3.125rem] font-bold'>Filmes, séries e muito mais. Sem limites.</h1>
          <Link 
          href={""}
          >
            <button className='bg-accent max-w-[22.5rem] w-full text-[1.125rem] font-medium pt-4 pb-4 rounded-[0.275rem] '>Catálogo completo</button>
          </Link>
        </div>
        <div className='max-w-[44.5rem] h-[26rem] w-full flex justify-end'>
          <Form/>
        </div>
      </div>
      <div className=' bg-gradient-black-1-left flex flex-row justify-between pt-44 pb-44 text-white max-w-9xl w-full pr-14 pl-14'>
        <div>
          <h1 className='text-[2.8rem] font-semibold mb-5'>Aproveite na TV</h1>
          <h3 className='max-w-[32rem] text-[1.8rem] w-full'>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</h3>
        </div>
        <Image
        src={"/Y36Q.gif"}
        alt="Netflix gif"
        loading="lazy"
        width={600}
        height={400}
        />
      </div>
    </Layout>
  )
}

export default Home
