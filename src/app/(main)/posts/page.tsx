'use client';

import Card from "@/client/components/Card";
import Header from "@/client/components/Header";
import { useState } from "react";
import { IconType } from "react-icons";
import { CiGlobe, CiLock } from "react-icons/ci";

type PostsType = 'public' | 'restrict';

export default function Posts() {
  const [postsType, setPostsType] = useState<PostsType>('restrict');

  const ButtonTypePosts = (props: { text: string, icon: IconType, type: PostsType }) => {
    const { text, icon: Icon, type } = props;

    return (
      <button
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-300 ${postsType === type
          ? 'bg-black text-white hover:bg-gray-800'
          : 'bg-white text-black border border-solid border-gray-200 hover:bg-gray-100'
          }`}
        onClick={() => setPostsType(type)}
      >
        <Icon />
        {text}
      </button>
    )
  }

  return (
    <>
      <Header />
      <main >
        <div className="w-9/12 mx-auto py-8">

          <h2 className="font-bold text-3xl mb-4">Todos os posts</h2>
          <p className="text-gray-600">Explore nossos artigos e descubra conteúdo de qualidade</p>
        </div>
        <div className="bg-gray-50 border-t border-solid border-gray-100 py-">
          <div className="w-9/12 mx-auto">
            <div className="flex gap-5">
              <ButtonTypePosts icon={CiGlobe} text="Públicos" type="public" />
              <ButtonTypePosts icon={CiLock} text="Restritos" type="restrict" />
            </div>
            <div className="pt-8">
              <h4 className="font-bold text-xl mb-4">Posts {postsType == "public" ? "públicos" : 'restritos'}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((_, idx) => (
                  <Card
                  key={idx}
                  withImage={false}
                  scale={1}
                  data={{
                    title: "Título do post",
                    content: `Proin sit amet egestas ipsum. Donec porttitor, neque ac iaculis auctor, purus ligula varius velit, vitae tincidunt neque dui quis quam. Nullam tempus elementum erat, non facilisis urna tristique nec. Mauris tincidunt ut arcu nec rutrum. Duis blandit enim nec neque dictum varius. Praesent sagittis et orci ac sagittis. Pellentesque id ipsum ac sem faucibus feugiat. Aenean ultricies neque quis fringilla ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In iaculis sit amet mi id fringilla. Ut ultricies eu ante quis porttitor. Ut finibus lorem sit amet nulla dictum vehicula. Proin aliquet, nulla eu tempus viverra, risus arcu scelerisque purus, a bibendum arcu metus et sem. Nulla eget fermentum enim. Nam quis lorem tincidunt, congue lorem sed, fringilla felis. Etiam cursus erat nec commodo vehicula.`,
                    photos: [
                    'https://i.imgur.com/bkL1gdp.jpeg',
                    'https://i.imgur.com/bkL1gdp.jpeg',
                    'https://i.imgur.com/bkL1gdp.jpeg'
                    ],
                    author: "Nome do autor",
                    authorId: "ID do autor",
                    authorPhoto: "https://i.imgur.com/fFXIyuV.jpeg",
                    comments: 0,
                    likes: 0,
                    createdAt: Date.now(),
                    updatedAt: new Date(),
                    liked: true,
                  }}
                  />
                ))}
                </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}