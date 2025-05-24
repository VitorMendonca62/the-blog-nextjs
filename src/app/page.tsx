"use client"

import Header from "@/client/components/Header"
import Image from "next/image"
export default function Home() {
  return (
    <>
      <Header />
      <main >
        <div className="bg-green">
          <section className="flex w-9/12 mx-auto justify-between items-center text-white py-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Bem-vindo ao <br />TheNextJSlLog</h2>
              <p className="text-xl text-white/90 mb-8 max-w-lg">Descubra histórias incríveis, compartilhe suas ideias e conecte-se com uma comunidade apaixonada por conteúdo de qualidade.</p>
              <div className="flex gap-4">
                <button className="bg-white text-green gap-2 px-3 py-2 rounded-lg hover:bg-whiteDark transition-colors duration-300">Comece a ler</button>
                <button className="border-white border border-solid text-white gap-2 px-3 py-2 rounded-lg hover:bg-whiteDark hover:text-green transition-colors duration-300">Escreva seu primeiro post</button>
              </div>
            </div>
            <Image src="https://preview--blog-scribe-header-craft.lovable.app/lovable-uploads/985bb252-54b9-4cff-97e4-e4333a21f03d.png  " alt="" width="500" height="262" />
          </section>
        </div>
      </main>
    </>
  )
}
