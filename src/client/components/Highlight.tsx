import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

interface IProps {
    data: INotice
}


export default function Highlight(props: IProps) {
    return (
        <section className="bg-purpleDark flex gap-6 justify-center py-6 border-b-4 border-green border-solid flex-wrap ">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl max-w-[500px] text-purpleLigth font-bold">
                    {props.data?.title}
                </h2>
                <p className="text-lg max-w-[469px] text-white">{props.data?.slug.slice(0, 200)}{props.data?.slug.length > 200 && "..."} </p>

                <Link href={`/notice/${props.data?.id}`} className="text-purpleLigth text-lg flex items-center gap-3 font-bold decoration-green pb-2  hover:underline">Ver mais
                    <FaArrowRight className="text-green" />
                </Link>

            </div>
            <Image src="/image.png" alt="dawd" width={599} height={342} />
        </section>
    )
}
