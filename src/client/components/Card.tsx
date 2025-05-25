"use client"

import Image from "next/image"
import * as timeago from 'timeago.js';
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaRegCommentAlt, FaImages } from "react-icons/fa";
import pt_BR from 'timeago.js/lib/lang/pt_BR';

timeago.register('pt_BR', pt_BR);
interface IProps {
    withImage: boolean;
    scale: number;
    data: INoticeInputMeta
}
export default function Card(props: IProps) {
    const Images = () => {
        return (
            <div className="relative">
                <div className="flex gap-2">
                    {props.data.photos.map((photo, index) => (
                        <Image key={index} src={photo} alt="Imagem do post" width={200} height={200} className="rounded-lg object-cover w-1/3 " />
                    ))}
                </div>
                {props.data.photos.length > 3 && <div className="absolute flex flex-col rounded-lg justify-center items-center text-white h-[105px] bg-black/40 top-0 right-0 translate-x-2" style={{ width: "calc(33.333% - 8px)" }}>
                    <FaImages className="text-2xl" />
                    +{props.data.photos.length - 2}
                </div>}
            </div>
        )
    }
    return (
        <div className="border border-solid border-green rounded-3xl px-5 py-4 bg-white ">
            <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <Image src={props.data.authorPhoto} alt="Foto do autor do post" width={45} height={45} className="rounded-full h-[45px] object-cover" />
                    <div>
                        <h2 className="font-medium">{props.data.author}</h2>
                        <p className="text-xs text-[#474747]">{timeago.format(new Date(props.data.createdAt), 'pt_BR')}</p>
                    </div>
                </div>
                <h3 className="text-green text-lg font-bold">{props.data.title}</h3>
                <p
                    className="whitespace-pre-line overflow-hidden text-ellipsis justify "
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {props.data.content}
                </p>
                <Images />

                <div className="flex justify-end gap-5">
                    <button className="flex gap-1">
                        {
                            props.data.liked
                                ? <BiSolidLike className="text-green text-2xl cursor-pointer" style={{ color: "#00e963" }} />
                                : <BiLike className="text-black text-2xl cursor-pointer" />
                        }
                        {props.data.likes}
                    </button>
                    <button className="flex gap-1">
                        <FaRegCommentAlt className="text-black text-2xl cursor-pointer" />
                        {props.data.comments}
                    </button>
                </div>
            </div>
        </div >
    )
}