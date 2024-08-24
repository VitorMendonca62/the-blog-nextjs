"use client"

import Card from "@/client/components/Card";
import Header from "@/client/components/Header";
import Skeleton from "@/client/components/ui/Skeleton";
import { getFilterNotice } from "@/client/services/notice.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation"
import { useState } from "react";

export default function Title() {
    const { title } = useParams()
    const [notices, setNotices] = useState<INotice[]>([])


    const { isLoading, } = useQuery({
        queryKey: [`getData`],
        queryFn: async () => {
            try {
                const notices = await getFilterNotice(title as string)
                setNotices(notices)
            } catch (err) {
                console.log(err);
            }
        },
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });

    return (
        <>
            <Header />
            <section className="flex justify-center items-center gap-16 py-8 flex-wrap flex-col">
                {!isLoading && notices.length > 0 && notices.map((notice) => {
                    return (
                        <div className="w-[50%] flex justify-center items-center">
                            <Card withImage={true} scale={1} data={notice} />
                        </div>
                    )
                })}
                {!isLoading && notices.length == 0 && (
                    <div className="w-[50%] flex justify-center items-center">
                        <h4>Não há noticias com esse titulo</h4>
                    </div>
                )}
                {isLoading && (
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 0].map(_ => (
                        <div className="w-[50%] flex justify-center items-center">

                            <Skeleton scale={0.6} withImage={true} />
                        </div>
                    ))
                )}
            </section>
        </>
    )
}