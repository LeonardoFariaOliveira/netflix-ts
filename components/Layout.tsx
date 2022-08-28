
import Link from "next/link";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Layout({children}:PropsWithChildren){


    return(

        <div className="flex flex-1 flex-row  w-full flex-wrap min-h-screen bg-hero font-body justify-center">
            <Navbar/>
            <main className=" flex  w-full mt-44 justify-center mb-44 ">
                {children}
            </main>
            <Footer/>
        </div>

    )


}