"use client"

import InputForms from "@/client/components/ui/inputForms";
import useUser from "@/client/hooks/useUser";
import { loginUserService } from "@/client/services/user.service";
import { userLoginSchema } from "@/shared/schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast"
import Cookies from 'js-cookie';


export default function Login() {
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserInput>({
        resolver: zodResolver(userLoginSchema),
    });

    const { updateUser } = useUser();


    const loginUser = async (dataForm: IUserInput) => {
        const { msg, error, token, auth, username, id } = await loginUserService(
            dataForm,
        );


        setButtonIsDisabled(true);
        if (!error) {
            toast.success(msg, { duration: 1000 })
        } else {
            toast.error(msg, { duration: 1000 })
        }
        if (!error) {
            Cookies.set("USER-TOKEN", token)
            updateUser({
                id,
                auth,
                isLogged: !error,
                token,
                username
            });
        }
        setTimeout(() => {
            if (error) {
                setButtonIsDisabled(false);
                return;
            }

            // location.href = "/"
        }, 2000);
    };

    return (
        <div className="w-[100vw] h-[100vh] flex items-start justify-center bg-white pt-12">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <form className="w-[25rem] bg-[#fff] p-4 rounded-lg" onSubmit={handleSubmit(loginUser)}>
                <h3 className="text-purpleDark font-bold text-2xl pb-4">Login</h3>
                <InputForms
                    nameInput="email"
                    placeholder="vitorqueiroz325@gmail.com"
                    title="Email"
                    type="email"
                    register={register}
                    errors={errors}
                />

                <InputForms
                    nameInput="password"
                    placeholder="********"
                    title="Senha"
                    type="password"
                    register={register}
                    errors={errors}
                />


                <button type="submit" disabled={buttonIsDisabled} className="text-white mt-4 disabled:opacity-5 bg-purpleDark hover:bg-purpleInput focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Entrar</button>
            </form>

        </div>
    )
}