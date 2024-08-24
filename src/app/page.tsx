"use client"

import Card from "@/client/components/Card";
import Header from "@/client/components/Header";
import Highlight from "@/client/components/Highlight";
import { getAllNotices } from "@/client/services/notice.service";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query"
import Skeleton from "@/client/components/ui/Skeleton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Footer from "@/client/components/Footer";

export default function Home() {
  const [notices, setNotices] = useState<INotice[]>([])
  const [page, setPage] = useState<number>(0)

  const { isLoading, } = useQuery({
    queryKey: [`getData`],
    queryFn: async () => {
      try {
        const notices = await getAllNotices()
        setNotices(notices.data)

      } catch (err) {
        console.log(err);
      }
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  const changePage = (signal: "-" | "+") => {
    const lengthPages = Math.ceil(notices.length / 8)
    let newPage = page
    if (signal == "+") newPage += 1
    if (signal == "-") newPage -= 1

    if (newPage < 0) newPage = 0
    if (newPage > lengthPages - 1) newPage = lengthPages - 1

    setPage(newPage)
  }


  return (
    <div>
      <Header />
      <main >
        <div className="bg-purpleDark px-32 max-[1024px]:px-16">
          {isLoading || notices.length == 0 ? <Skeleton scale={1} withImage={true} /> : <Highlight data={notices[0]} />}
        </div>

        <div className="bg-white px-32 max-[1024px]:px-16">
          <section className="flex justify-center gap-3 pt-12 flex-wrap">
            {isLoading || notices.length == 0 ?
              <Skeleton scale={1} withImage={true} /> : <Card withImage={true} scale={1} data={notices[1]} />
            }

            <aside className="flex flex-col gap-8 ">
              {isLoading || notices.length == 0 ?
                <Skeleton scale={1} withImage={false} /> : <Card withImage={false} scale={1} data={notices[2]} />
              }
              {isLoading || notices.length == 0 ?
                <Skeleton scale={1} withImage={false} /> : <Card withImage={false} scale={1} data={notices[3]} />
              }
            </aside>
          </section>
          <div className="flex justify-end items-end gap-4">
            <div className="p-4 bg-purpleLigth hover:bg-[#5e4074] text-white cursor-pointer" onClick={() => changePage("-")}>
              <FaArrowLeft />
            </div>
            <div className="p-4 bg-purpleLigth hover:bg-[#5e4074] text-white cursor-pointer" onClick={() => changePage("+")}>
              <FaArrowRight />
            </div>

          </div>
          <section className="flex justify-center gap-16 py-8 flex-wrap">
            {!isLoading && notices.length > 0 && notices.slice((page * 8), (page * 8) + 8).map((notice) => {
              return <Card withImage={true} scale={0.6} data={notice} key={notice.id} />
            })}
            {isLoading && (
              [1, 2, 3, 4, 5, 6, 7, 8].map(index => (
                <Skeleton scale={0.6} withImage={true} key={index} />
              ))
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
