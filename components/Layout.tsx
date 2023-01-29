
import Link from "next/link";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props extends PropsWithChildren{

    navBackgroundColor: string

}

export default function Layout({children, navBackgroundColor}:Props){


    return(

        <div className="flex flex-wrap flex-col w-full  min-h-screen bg-hero  font-body justify-center ">
            <Navbar navBackgroundColor={navBackgroundColor}/>
            <main className=" flex flex-col md:max-w-9xl self-center  w-full   md:mt-44 mt-24   ">
                {children}
            </main>
            <Footer/>
        </div>

    )


}