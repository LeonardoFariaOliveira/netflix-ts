import Image from "next/image";
import Link from "next/link";
import NavbarItem from "./Navbar-Item";

interface NavbarProps{

    navBackgroundColor: string

}


export default function Navbar({navBackgroundColor}:NavbarProps){

    return(

        <nav className={`flex flex-1 flex-row z-50 text-white bg-${navBackgroundColor} fixed justify-between   max-w-full md:max-w-9xl pt-7 pb-7 md:pr-14 md:pl-14 w-full border-black`}>
            <img className="max-w-[8.438rem] md:max-w-[10.438rem] w-full p-[1.30rem] h-auto relative" src="/netflix.svg" alt = 'Netflix logo'/>
            <div className="mt-[1.2rem]">
                <Link
                href='/login'
                >
                    <a className="text-white hover:text-accent hover:transition hover:all hover:duration-300 pr-[1.062rem] text-base font-bold uppercase rounded-md pl-[1.063rem] md:pt-[0.438rem] md:pb-[0.438rem]">
                        Entrar
                    </a>
                </Link>
            </div>
        </nav>

    )


}