"use client"

import Header from "@/client/components/Header"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
      <main >
        <div className="bg-green">
          <section className="flex w-9/12 mx-auto justify-between text-white py-16 max-xl:w-11/12 max-mdx:flex-col max-mdx:gap-8">
            <div>
              <h2 className="text-4xl mdx:text-6xl font-bold mb-6 leading-tight">Bem-vindo ao TheNextJSBlog</h2>
              <p className="text-xl text-white/90 mb-8 max-w-lg">Descubra histórias incríveis, compartilhe suas ideias e conecte-se com uma comunidade apaixonada por conteúdo de qualidade.</p>
              <div className="flex gap-4 max-sm:flex-col">
                <button className="bg-white text-green gap-2 px-3 py-2 rounded-lg hover:bg-whiteDark transition-colors duration-300">Comece a ler</button>
                <button className="border-white border border-solid text-white gap-2 px-3 py-2 rounded-lg hover:bg-whiteDark hover:text-green transition-colors duration-300">Escreva seu primeiro post</button>
              </div>
            </div>
            <Image src="https://preview--blog-scribe-header-craft.lovable.app/lovable-uploads/985bb252-54b9-4cff-97e4-e4333a21f03d.png  " alt="" width="500" height="262" className="max-xl:w-1/2 max-xl:h-auto max-mdx:w-full" />
          </section>
        </div>

        <section className="w-9/12 mx-auto py-16">
          <div className="flex justify-center flex-col items-center">
            <h3 className="font-bold text-3xl mb-4 text-center">Por que escolher o TheBlogNextJS?</h3>
            <p className="text-gray-600">Uma plataforma completa para escritores e leitores</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-16">
            <div className="flex justify-center flex-col items-center gap-4 shadow-lg rounded-lg py-6 px-6 border-2 border-solid border-greenGray/10">
              <span className="bg-[#dcfce7] p-4 rounded-full text-2xl">📚</span>
              <h4 className="text-xl font-bold">Leia</h4>
              <p className="text-center text-gray-600">Explore artigos de diversos autores e temas interessantes. Descubra conteúdo de qualidade curado especialmente para você.</p>
            </div>
            <div className="flex justify-center flex-col items-center gap-4 shadow-lg rounded-lg py-6 px-6 border-2 border-solid border-greenGray/10">
              <span className="bg-green p-4 rounded-full text-2xl">✍️</span>
              <h4 className="text-xl font-bold">Escreva</h4>
              <p className="text-center text-gray-600">Compartilhe suas histórias e conhecimentos com o mundo. Nossa plataforma oferece todas as ferramentas que você precisa.</p>
            </div>
            <div className="flex justify-center flex-col items-center gap-4 shadow-lg rounded-lg py-6 px-6 border-2 border-solid border-greenGray/10">
              <span className="bg-[#dcfce7] p-4 rounded-full text-2xl">🤝</span>
              <h4 className="text-xl font-bold">Conecte</h4>
              <p className="text-center text-gray-600">Explore artigos de diversos autores e temas interessantes. Descubra conteúdo de qualidade curado especialmente para você.</p>
            </div>
          </div>

          <div className="flex justify-center flex-col items-center">
            <h3 className="font-bold text-3xl mb-4 text-center">Pronto para começar sua jornada?</h3>
            <p className="text-gray-600">Junte-se a milhares de escritores e leitores que já fazem parte da nossa comunidade.</p>
            <button className="bg-green text-white gap-2 px-3 py-4 rounded-lg hover:bg-greenHover transition-colors duration-300 mt-4">Criar conta gratuita</button>
          </div>
        </section>
      </main>
    </>
  )
}
