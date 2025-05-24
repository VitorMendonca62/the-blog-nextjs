"use client"

import { IconType } from 'react-icons';
import { FaUserPlus, FaSignOutAlt, FaSearch, FaHamburger } from 'react-icons/fa'
import { IoEnterOutline, IoMenu } from "react-icons/io5";
import { CiPen } from "react-icons/ci";
import useUser from '../hooks/useUser';
import { use, useState } from 'react';

export default function Header() {
    const [menuMobileIsVisible, setMenuMobileIsVisible] = useState<boolean>(false);
    const { user } = useUser();

    // Componentes menores
    const NavWithUserLogged = () => {
        return <>
            <li className='flex'>
                <ButtonWitouthBackground text='Cadastrar' Icon={FaUserPlus} />
            </li>
            <li className='flex'>
                <ButtonWithBackground text='Entrar' Icon={IoEnterOutline} />
            </li>
        </>
    }

    const NavWithUserLoggedOut = () => {
        return <>
            <li className='flex'>
                <ButtonWithBackground text='Escrever Post' Icon={CiPen} />
            </li>
            <li className='flex'>
                <ButtonWitouthBackground text='Sair' Icon={FaSignOutAlt} />
            </li>
        </>
    }

    const ButtonWithBackground = (props: { text: string, Icon: IconType }) => {
        const { text, Icon } = props;

        return (
            <button className='flex items-center bg-white text-green gap-2 px-3 py-2 rounded-lg hover:bg-whiteDark transition-colors duration-300'>
                <Icon />
                {text}
            </button>
        )
    }
    const ButtonWitouthBackground = (props: { text: string, Icon: IconType }) => {
        const { text, Icon } = props;

        return (
            <button className='flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-greenHover transition-colors duration-300'>
                <Icon />
                {text}
            </button>
        )
    }

    const Search = () => {
        return (
            <div className='bg-white w-full relative flex items-center rounded-lg py-1.5'>
                <FaSearch className='absolute text-greenGray left-2' />
                <input type="text" className='pl-9 pr-2 w-full outline-none border-none text-gray-900 bg-transparent ' placeholder='Buscar posts...' />
            </div>
        )
    }

    return (
        <header className='bg-green text-white border-b border-greenHover border-solid shadow-md sticky w-screen'>
            <div className='w-9/12 mx-auto px-3 py-3 flex justify-between items-center max-xl:w-11/12'>
                <h1 className='text-3xl font-bold'>TheNextJSBlog</h1>

                {/* Desktop navigation */}
                <div className='w-1/3 max-mdx:hidden'>
                    <Search />
                </div>
                <nav className='max-mdx:hidden'>
                    <ul className='flex gap-6'>
                        {user ? <NavWithUserLogged /> : <NavWithUserLoggedOut />}
                    </ul>
                </nav>

                {/* Mobile navigation */}
                <button className='flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-greenHover transition-colors duration-300 mdx:hidden' onClick={() => setMenuMobileIsVisible(!menuMobileIsVisible)}>
                    <IoMenu className='text-2xl' />
                </button>

            </div>
            {/* MObile navigatio */}
            <div
                className='mdx:hidden w-full overflow-hidden flex flex-col items-center gap-4 transition-all duration-300 ease-out transform'
                style={
                    {
                        paddingTop: menuMobileIsVisible ? '1rem' : '0px',
                        animation: menuMobileIsVisible ? 'slideDown 0.3s ease-out' : 'none',
                        height: menuMobileIsVisible ? 'auto' : '0px',
                        opacity: menuMobileIsVisible ? '1' : '0'
                    }
                }>
                <div className='w-full'>
                    <Search />
                </div>
                <nav className='flex justify-center'>
                    <ul className='flex gap-6 flex-col items-center justify-center'>
                        {user ? <NavWithUserLogged /> : <NavWithUserLoggedOut />}
                    </ul>
                </nav>
            </div>


        </header >
    )
}