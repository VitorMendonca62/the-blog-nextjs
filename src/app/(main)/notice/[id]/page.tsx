/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Header from "@/client/components/Header";
import { getOneNoticee } from "@/client/services/notice.service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation"
import { useState } from "react";


export default function PostId() {
    const [notice, setNotice] = useState<INotice | undefined>(undefined)

    const { id } = useParams()

    useQuery({
        queryKey: [`getOne`],
        queryFn: async () => {
            try {
                const notice = await getOneNoticee(id as string)
                setNotice(notice.data)

            } catch (err) {
                console.log(err);
            }
        },
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });

    const months = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Septembro", "Outubro", "Novembro", "Dezembro"]

    if (notice) {

        const { seconds, nanoseconds } = notice.createdAt
        const milliseconds = seconds * 1000 + Math.floor(nanoseconds / 1000000);
        const dateCreate = new Date(milliseconds)
        const day = dateCreate.getDate()
        const month = months[dateCreate.getMonth()]
        const year = dateCreate.getFullYear()

        return (
            <>
                <Header />
                <div className={`py-8 bg-white px-16 flex items-center flex-col post`}>
                    <Image src="/image.png" alt="dawd" width={599} height={342} />
                    <div className="flex justify-between w-[599px] items-center">
                        <strong>Autor: {notice.author}</strong>
                        <p className="pt-2 pb-4" >{month} {day}, {year}</p>
                    </div>
                    <h3 className="text-purpleDark font-bold text-2xl pb-4">{notice.title}</h3>
                    <p className={`max-w-[599px] text-justify`}>{notice.slug}
                    </p>
                    <span className="hidden max-w-[599px] "></span>
                    <span className="hidden max-w-[359.4px] "></span>

                </div>
            </>
        )
    }
    return (
        <>
            <Header />
            <div className="py-8 bg-white px-16 flex items-center flex-col post">
                <div role="status" className={`w-[559px] rounded shadow animate-pulse`}>
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded">
                        <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        </svg>
                    </div>

                    <div className="h-2.5 bg-gray-200 rounded-full w-24 mb-4"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(_ => {
                        return <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    })}

                    <div className="h-2 bg-gray-200 rounded-full"></div>
                    <span className="hidden w-[599px] "></span>
                    <span className="hidden w-[359.4px] "></span>
                </div>
            </div>
        </>
    )
}