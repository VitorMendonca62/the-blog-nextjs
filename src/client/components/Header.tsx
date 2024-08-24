"use client"

import Link from "next/link"
import { useRef } from "react"
import { FaSearch } from "react-icons/fa"
import useUser from "../hooks/useUser"


export default function Header() {

    const inputRef = useRef<HTMLInputElement | null>(null)
    const { logoutUser, user } = useUser();

    const changeSearch = (event: SubmitEvent) => {
        event.preventDefault()
        if (inputRef) {
            location.href = `/pesquisa/${inputRef.current?.value}`
        }
    }
    return (
        <header className="bg-purpleDark flex justify-between items-center px-32 max-[1024px]:px-16 py-7 ">
            <h1 className="text-4xl font-bold text-white"><Link href="/">The Blog</Link><span className="text-green">.</span></h1>
            <nav className="">
                <ul className="flex justify-between gap-6 text-white text-lg">
                    <li><Link href="/" className="border-s-4 ps-2 border-transparent border-solid hover:border-green hover:font-medium">Home</Link></li>
                    <li><Link href="/#contato" className="border-s-4 ps-2 border-transparent border-solid hover:border-green hover:font-medium">Informações</Link></li>

                    {
                        user.isLogged ? (
                            <>
                                <li><Link href="/escrever" className="border-s-4 ps-2 border-transparent border-solid hover:border-green hover:font-medium" >Escrever</Link></li>
                                <li className="border-s-4 ps-2 border-transparent border-solid hover:border-green hover:font-medium" onClick={logoutUser}>Sair</li>
                            </>) : (<>
                                <li><Link href="/login" className="border-s-4 ps-2 border-transparent border-solid hover:border-green hover:font-medium" >Login</Link></li>
                                <li><Link href="/cadastro" className="border-s-4 ps-2 border-transparent border-solid hover:border-green hover:font-medium" >Cadastro</Link></li>
                            </>)

                    }

                </ul>
            </nav>
            <form className="flex justify-center items-start" onSubmit={changeSearch}>
                <input type="text" ref={inputRef} name="search" className="bg-purpleInput ps-4 py-3 pe-2 text-white outline-none border-none rounded-s-xl w-56" placeholder="Buscar" />
                <button type="submit" className="bg-purpleLigth h-[100%] py-[0.85rem] px-5 rounded-e-xl cursor-pointer hover:bg-[#5e4074]"><FaSearch className="text-xl text-white" /></button>
            </form>
        </header >
    )
}