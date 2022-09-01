
import Link from "next/link";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props extends PropsWithChildren{

    navBackgroundColor: string

}

export default function Layout({children, navBackgroundColor}:Props){


    return(

        <div className="flex flex-1 flex-row  w-full flex-wrap min-h-screen bg-hero font-body justify-center">
            <Navbar navBackgroundColor={navBackgroundColor}/>
            <main className=" flex flex-col w-full mt-44 justify-center  ">
                {children}
            </main>
            <Footer/>
        </div>

    )


}