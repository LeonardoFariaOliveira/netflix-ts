
import Link from "next/link";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Layout({children}:PropsWithChildren){


    return(

        <div className="flex flex-row flex-nowrap border-2  min-h-screen bg-hero gradient-1 font-body justify-center">
            <Navbar/>
            <main className="bg-white flex flex-1  mt-44 ">
                {children}     
            </main>
            <Footer/>
        </div>

    )


}