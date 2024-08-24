"use client"

import { ReactNode, createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

interface IPropsUserContenxt {
    children: ReactNode;
}
interface JwtPayload {
    username: string;
    id: string;
}

export const UserContext = createContext<IUserContext | null>(null);

export default function UserProvider(props: IPropsUserContenxt) {
    const [user, setUser] = useState<IUserDataContext>({
        auth: false,
        username: 'Visitante',
        isLogged: false,
        token: null,
        id: ".",
    });

    useEffect(() => {
        const verifyToken = async () => {
            const token = Cookies.get("USER-TOKEN");
            console.log(document.cookie)
            console.log(token)
            if (token) {
                const tokenDecoded = jwtDecode(token) as JwtPayload;
                const { username, id } = tokenDecoded;

                setUser({
                    auth: true,
                    username,
                    isLogged: true,
                    token,
                    id,
                });
            }
        };
        verifyToken();
    }, []);

    const handleUpdateUser = (newUser: IUserDataContext) => {
        setUser(newUser);
    };

    const handleLogout = () => {
        setUser({
            auth: false,
            username: 'Visitante',
            isLogged: false,
            token: null,
            id: "NaN",
        });
        Cookies.remove("USER-TOKEN")
    };

    const { children } = props;

    return (
        <UserContext.Provider
            value={{ user, updateUser: handleUpdateUser, logoutUser: handleLogout }}
        >
            {children}
        </UserContext.Provider>
    );
}