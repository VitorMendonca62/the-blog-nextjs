"use client"

import Image from "next/image"
import { useRouter } from "next/navigation";


interface IProps {
    withImage: boolean;
    scale: number;
    data: INotice
}

export default function Card(props: IProps) {
    const router = useRouter()

    const months = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Septembro", "Outubro", "Novembro", "Dezembro"]

    const { seconds, nanoseconds } = props.data.createdAt
    const milliseconds = seconds * 1000 + Math.floor(nanoseconds / 1000000);
    const dateCreate = new Date(milliseconds)
    const day = dateCreate.getDate()
    const month = months[dateCreate.getMonth()]
    const year = dateCreate.getFullYear()

    const goToNotice = (id: string) => {
        router.push(`/notice/${id}`)
    }
    return (
        <div className={`w-[${559 * props.scale}x] hover:bg-whiteDark p-2 cursor-pointer rounded-xl`} onClick={() => goToNotice(props.data.id)}>
            {props.withImage && <Image src="/image.png" alt="dawd" width={599 * props.scale} height={342 * props.scale} />}

            <p className="pt-2 pb-4" >{month} {day}, {year}</p>
            <h3 className={`text-purpleDark font-bold text-2xl pb-4 max-w-[${599 * props.scale}px]`}>{props.data?.title}</h3>
            <p className={`max-w-[${599 * props.scale}px] text-justify`}>{props.data?.slug.slice(0, 200)}{props.data?.slug.length > 200 && "..."}
            </p>
            <span className="hidden max-w-[599px] "></span>
            <span className="hidden max-w-[359.4px] "></span>
        </div>
    )
}