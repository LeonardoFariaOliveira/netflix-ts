import Image from "next/image";
import Link from "next/link";
import NavbarItem from "./Navbar-Item";

export default function Navbar(){

    return(

        <nav className="flex flex-1 flex-row  text-white fixed justify-between  max-w-9xl pt-7 pb-7 pr-14 pl-14 w-full border-black">
            <div className = "max-w-[10.438rem]  w-full p-[1.30rem] h-auto relative">
                <Image
                src={'/netflix.svg'}
                layout="fill"
                alt="Netflix logo"
                loading="lazy"
                placeholder="blur"
                objectFit="cover"
                blurDataURL="/netflix.svg"
                />
            </div>
            <div>
                <NavbarItem
                title="Home"
                target="/"
                />
                <NavbarItem
                title="Séries"
                target="/series"
                />
                <NavbarItem
                title="Filmes"
                target="/movies"
                />
                <NavbarItem
                title="Entrar"
                target="/login"
                />
            </div>
        </nav>

    )


}