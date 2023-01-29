import Link from 'next/link'

export default function Form() {

  return (
    <form className="bg-black-400 text-white h-fit max-w-[28.188rem] pb-8 flex-1 items-center p-4 flex flex-col rounded-[0.275rem] ">
        <h1 className='text-[1.525rem] mt-8 mb-8'>Cadastre-se já</h1>
        <input
        className='max-w-[22rem] mt-4 mb-4 text-black rounded-[0.275rem] w-full h-12 p-4  border-2 '
        placeholder='Email'
        />
        {/* <input
        className='max-w-[22rem] mt-4 mb-4 rounded-[0.275rem] w-full h-12 p-4  border-2 text-black'
        placeholder='Senha'
        /> */}
        <Link 
        href={"https://www.netflix.com/br/"}
        >
          <button className='bg-accent mt-4 mb-4 max-w-[22.5rem] h-12 w-full text-[1.125rem] font-medium  rounded-[0.275rem] '>Enviar</button>
        </Link>
    </form>
  )
}