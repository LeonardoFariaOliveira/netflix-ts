import Link from "next/link";

export interface NavbarItemProps{

    title:string,
    target:string

}

export default function NavbarItem({title, target}:NavbarItemProps){

    return(

        <Link
        href={target}
        >
            <a className="text-white hover:text-accent hover:transition hover:all hover:duration-300 pr-[1.062rem] text-base font-bold uppercase rounded-md pl-[1.063rem] pt-[0.438rem] pb-[0.438rem]">
                {title}
            </a>
        </Link>

    )


}