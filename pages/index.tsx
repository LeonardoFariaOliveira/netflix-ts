import type { NextPage } from 'next'
import Link from 'next/link'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Image from "next/image";
import { useEffect, useState } from 'react';
import CollapseItem from '../components/Collapse';

const Home: NextPage = () => {

  
  const [navBackgroundColor, setNavBackgroundColor] = useState<string>("transparent");

  useEffect(() => {
    
     window.addEventListener("scroll", ()=>{

        if(window.scrollY >= 100){
          setNavBackgroundColor("black-400")
        }
        else{
          setNavBackgroundColor("transparent")
        }

     });

    
  }, [])

  return (
    <Layout navBackgroundColor = {navBackgroundColor}>
      <div className=' flex flex-row flex-wrap text-white max-w-9xl w-full md:pr-14 md:pl-14 px-3  mb-40'>
        <div className='md:max-w-[44.5rem] w-full flex flex-col justify-evenly  h-96'>
          <h1 className='md:max-w-[39rem]  w-full md:text-[3.125rem] text-[1.6rem] md:text-left text-center font-bold'>Filmes, séries e muito mais. Sem limites.</h1>
          <Link 
          href={""}
          >
            <button className='bg-accent max-w-[22.5rem] w-full text-[1.125rem] font-medium pt-4 pb-[0.85rem] rounded-[0.275rem] '>Catálogo completo</button>
          </Link>
        </div>
        <div className='max-w-[43rem] h-[26rem] pt-12 w-full flex justify-end'>
          <Form/>
        </div>
      </div>
      <div className=' bg-gradient-black-1-left flex flex-row flex-wrap justify-between md:py-44 py-24 text-white max-w-9xl w-full md:px-14 px-3'>
        <div className='md:mb-0 mb-12'>
          <h1 className='md:text-[2.8rem] text-[1.6rem] text-center md:text-left font-semibold mb-5'>Aproveite na TV</h1>
          <h3 className='max-w-[32rem] md:text-[1.8rem] text-[1rem] md:text-left w-full text-center'>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</h3>
        </div>
        <Image
        src={"/Y36Q.gif"}
        alt="Netflix gif"
        loading="lazy"
        width={580}
        height={400}
        />
      </div>
      <div className=' bg-black-300 flex flex-row-reverse flex-wrap justify-between md:py-44 py-24 text-white max-w-9xl w-full md:px-14 px-3'>
        <div className='md:mr-4 flex-wrap md:mb-0 mb-12'>
          <h1 className='md:text-[2.8rem] text-[1.6rem] text-center font-semibold mb-5'>Assista quando quiser</h1>
          <h3 className='max-w-[32rem] md:text-[1.8rem] text-[1rem] text-center md:text-left w-full'>Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.</h3>
        </div>
        <Image
        src={"/netflix-gif-2.gif"}
        alt="Netflix 2 gif"
        loading="lazy"
        width={600}
        height={400}
        />
      </div>
      <div className=' bg-gradient-black-1-top flex flex-col justify-between md:pt-24 md:pb-44 pt-12  pb-24 text-white max-w-9xl w-full md:px-14 px-3'>
        <div className='flex flex-row flex-wrap justify-between'>
          <div className=''>
            <div className='md:mr-4 mr-0 flex flex-col justify-center items-center text-center'>
              <h1 className='md:text-[2.2rem] text-[1.4rem]  font-semibold mb-5'>Crie perfis para crianças</h1>
              <h3 className='max-w-[32rem] md:text-[1.2rem] text-[1rem] w-full'>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</h3>
            </div>
            <Image
            src={"/inf-netflix.png"}
            alt="Netflix 2 gif"
            loading="lazy"
            width={600}
            height={400}
            />
          </div>
          <div className=' items-center flex mt-12 md:mt-0  flex-col'>
            <div className='md:mr-4 mr-0 flex flex-col justify-center items-center text-center'>
              <h1 className='md:text-[2.2rem] text-[1.4rem] font-semibold mb-5'>Baixe séries para assistir offline</h1>
              <h3 className='max-w-[32rem] text-[1.2rem] w-full'>Disponível em todos os planos, exceto no Básico com anúncios.</h3>
            </div>
            <Image
            src={"/mobile-11.jpg"}
            alt="Netflix 2 gif"
            loading="lazy"
            width={600}
            height={400}
            />
          </div>
        </div>
        <div className='mt-28 flex flex-col items-center'>
          <div>
            <div className='md:mr-4 mr-0 flex flex-col justify-center items-center text-center'>
              <h1 className='md:text-[2.8rem] text-[1.6rem] font-semibold mb-5'>Perguntas frequentes</h1>
              <CollapseItem
              keyId='collapse1'
              textButton='O que é a Netflix?'
              textCollapse='A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.'
              />
              <CollapseItem
              keyId='collapse2'
              textButton='Quanto custa a Netflix?'
              textCollapse='Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras.'
              />
              <CollapseItem
              keyId='collapse3'
              textButton='O que muda no plano Básico com anúncios?'
              textCollapse='O plano Básico com anúncios é uma excelente maneira de assistir a séries e filmes por um preço mais baixo. Você pode assistir a seus títulos favoritos em qualquer aparelho e com intervalos limitados para anúncios. Este plano não permite downloads nem contém determinados filmes e séries com restrições de licenciamento. Há também algumas restrições de localização e aparelho'
              />
              <CollapseItem
              keyId='collapse4'
              textButton='Onde posso assistir?'
              textCollapse='Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.'
              />
              <CollapseItem
              keyId='collapse5'
              textButton='Como faço para cancelar?'
              textCollapse='A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.'
              />
              <CollapseItem
              keyId='collapse6'
              textButton='O que eu posso assistir na Netflix?'
              textCollapse='A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.'
              />
              <CollapseItem
              keyId='collapse7'
              textButton='A Netflix é adequada para crianças?'
              textCollapse='O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.'
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
