"use client"

import InputForms from "@/client/components/ui/inputForms";
import useUser from "@/client/hooks/useUser";
import { createNoticeService } from "@/client/services/notice.service";
import { noticePostSchema } from "@/shared/schemas/notice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast"


export default function Escrever() {
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<INoticeInput>({
        resolver: zodResolver(noticePostSchema),
    });

    const { user } = useUser();

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            for (const key in errors) {
                const _key = key as "title" | "slug"
                const mensagem = errors[_key]?.message as string
                toast.error(mensagem, { duration: 1000 })
            }
        }
    }, [errors])

    useEffect(() => {
        if (!user.isLogged) {
            location.href = "/"
        }
    }, [])
    const createNotice = async (dataForm: INoticeInput) => {
        const { msg, error, } = await createNoticeService(
            dataForm,
        );
        setButtonIsDisabled(true);
        if (!error) {
            toast.success(msg, { duration: 1000 })
        } else {
            toast.error(msg, { duration: 1000 })
        }

        setTimeout(() => {
            if (error) {
                setButtonIsDisabled(false);
                return;
            }

            location.href = "/"
        }, 2000);
    };

    return (
        <div className="w-[100vw] h-[100vh] flex items-start justify-center bg-white pt-12">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <form className="w-[25rem] bg-[#fff] p-4 rounded-lg" onSubmit={handleSubmit(createNotice)}>
                <h3 className="text-purpleDark font-bold text-2xl pb-4">Escrever</h3>
                <InputForms
                    nameInput="title"
                    placeholder="Titulo da notica"
                    title="Titulo"
                    type="text"
                    register={register}
                    errors={errors}
                />
                <InputForms
                    nameInput="slug"
                    placeholder="Corpo da notica"
                    title="Corpo da notica"
                    type="text"
                    register={register}
                    errors={errors}
                />

                <input type="hidden" value={user.username}
                    {...register("author")}
                />


                <button type="submit" disabled={buttonIsDisabled} className="text-white mt-4 disabled:opacity-5 bg-purpleDark hover:bg-purpleInput focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Escrever</button>
            </form>

        </div>
    )
}