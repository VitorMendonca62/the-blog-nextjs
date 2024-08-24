import Link from "next/link"
import { FaLinkedin, FaMailBulk, FaGithub } from "react-icons/fa"


export default function Footer() {
    return (
        <footer className="bg-purpleDark flex py-4 px-32 gap-4 max-[768px]:flex-col max-[768px]:items-center">
            <div id="#sobre" className="w-[50%] flex justify-start items-center flex-col">
                <h4 className="text-4xl pb-3 font-bold text-purpleLigth">Sobre</h4>
                <p className="text-white max-w-[300px]">
                    Olá, sou Vitor, um Técnico em Manutenção e Suporte em Informática com
                    formação em Sistema da Informação e estou ingressando no mundo do Desenvolvimento FullStack.
                    Tenho muita vontade em entrar na AtomStudio e por meio desse desafio espero entrar nela.
                </p>
            </div>
            <div id="contato" className="w-[50%] flex justify-start items-center flex-col">
                <h4 className="text-4xl pb-3 font-bold text-purpleLigth">Contato</h4>
                <ul className="text-white">
                    <li>
                        <Link href="https://github.com/VitorMendonca62">
                            <span className="flex gap-2"><FaGithub />VitorMendonca62</span>
                        </Link>
                    </li>
                    <li className="flex gap-2">
                        <Link href="https://www.linkedin.com/in/vitormendonca62/">
                            <span className="flex gap-2"><FaLinkedin />
                                Vitor Mendonça</span>
                        </Link>
                    </li>
                    <li className="flex gap-2">
                        <Link href="mailto:vitorqueiroz325@gmail.com">
                            <span className="flex gap-2">
                                <FaMailBulk />
                                vitorqueiroz325@gmail.com
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div></div>
        </footer>
    )
}