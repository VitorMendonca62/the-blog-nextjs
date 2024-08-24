import Link from "next/link"
import { FaSearch } from "react-icons/fa"

export default function Header() {
    return (
        <header className="bg-purpleDark flex justify-between items-center px-32 py-7 ">
            <h1 className="text-4xl font-bold text-white"><Link href="/">The Blog</Link><span className="text-green">.</span></h1>
            <nav className="">
                <ul className="flex justify-between gap-6 text-white text-lg">
                    <li><Link href="#" className="border-s-4 ps-2 border-transparent border-solid hover:border-green hover:font-medium">Home</Link></li>
                    <li><Link href="#" className="border-s-4 ps-2 border-transparent border-solid hover:border-green hover:font-medium">Sobre</Link></li>
                    <li><Link href="#" className="border-s-4 ps-2 border-transparent border-solid hover:border-green hover:font-medium">Categorias</Link></li>
                    <li><Link href="#" className="border-s-4 ps-2 border-transparent border-solid hover:border-green hover:font-medium" >Contato</Link></li>
                </ul>
            </nav>
            <div className="flex justify-center items-start ">
                <input type="text" name="search" className="bg-purpleInput ps-4 py-3 pe-2 text-white outline-none border-none rounded-s-xl w-56" placeholder="Buscar" />
                <span className="bg-purpleLigth h-[100%] py-[0.85rem] px-5 rounded-e-xl cursor-pointer hover:bg-[#5e4074]"><FaSearch className="text-xl text-white" /></span>
            </div>
        </header>
    )
}