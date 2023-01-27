
import Link from "next/link";

export default function Footer(){


    return(

        <footer className="bg-black-400 flex flex-1 self-end  h-[31.5rem] p-10 md:max-w-full justify-center items-center text-font-footer ">
                <div className="flex flex-col justify-around  h-[15rem]  md:max-w-[62.5rem] w-full">
                    <h1 className="ml-16">Duvidas? Ligue 0800 591 8942</h1>
                    <div className="flex flex-row justify-evenly flex-wrap text-sm">
                        <ul>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://help.netflix.com/support/412"}>
                                    <a>Perguntas frequentes</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"http://ir.netflix.com/"}>
                                    <a>Relações com investidores</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://www.netflix.com/watch"}>
                                    <a>Formas de assistir</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://help.netflix.com/legal/corpinfo"}>
                                    <a>Informações corporativas</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://www.netflix.com/br/browse/genre/839338"}>
                                    <a>Só na Netflix</a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://help.netflix.com/"}>
                                    <a>Central de ajuda</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://jobs.netflix.com/jobs"}>
                                    <a>Carreiras</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://help.netflix.com/legal/termsofuse"}>
                                    <a>Termos de Uso</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://help.netflix.com/contactus"}>
                                    <a>Entre em contato</a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://www.netflix.com/youraccount"}>
                                    <a>Conta</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://www.netflix.com/redeem"}>
                                    <a>Resgatar cartão pré-pago</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://help.netflix.com/legal/privacy"}>
                                    <a>Privacidade</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://fast.com/"}>
                                    <a>Teste de velocidade</a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://media.netflix.com/"}>
                                    <a>Media Center</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://www.netflix.com/gift-cards"}>
                                    <a>Comprar cartão pré-pago</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={"https://help.netflix.com/legal/notices"}>
                                    <a>Avisos legais</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <h5 className="ml-16">
                        Netflix Brasil - Versão feita pra estudo e com carinho por  
                        <Link href={"https://www.linkedin.com/in/leonardo-faria-a4998121a/"}>
                            <a className="ml-1 underline hover:text-accent hover:no-underline hover:transition-all hover:ease-in hover:duration-400">Leonardo Faria de Oliveira Souza</a>
                        </Link>
                    </h5>
                </div>
            </footer>

    )

}