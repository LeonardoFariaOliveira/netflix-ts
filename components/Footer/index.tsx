
import Link from "next/link";

export default function Footer(){


    return(

        <footer className="bg-footer flex flex-1 self-end  h-[31.5rem] p-10 max-w-full justify-center items-center text-font-footer ">
                <div className="flex flex-col justify-around  h-[15rem] max-w-[62.5rem] w-full">
                    <h1 className="ml-16">Duvidas? Ligue 0800 591 8942</h1>
                    <div className="flex flex-row justify-evenly text-sm">
                        <ul>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Perguntas frequentes</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Relações com investidores</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Formas de assistir</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Informações corporativas</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Só na Netflix</a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Central de ajuda</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Carreiras</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Termos de Uso</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Entre em contato</a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Conta</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Resgatar cartão pré-pago</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Privacidade</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Teste de velocidade</a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Media Center</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Comprar cartão pré-pago</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
                                    <a>Preferências de cookies</a>
                                </Link>
                            </li>
                            <li className="mt-2 mb-2">
                                <Link
                                href={""}>
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