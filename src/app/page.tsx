"use client"

import Card from "@/client/components/Card";
import Header from "@/client/components/Header";
import Highlight from "@/client/components/Highlight";
import { getAllNotices } from "@/client/services/notice.service";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query"
import Skeleton from "@/client/components/ui/Skeleton";

export default function Home() {
  const [notices, setNotices] = useState<INotice[]>([])

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
  let page = 0
  return (
    <div>
      <Header />
      <main >
        <div className="bg-purpleDark px-32">
          {isLoading || notices.length == 0 ? <Skeleton scale={1} withImage={true} /> : <Highlight data={notices[0]} />}
        </div>

        <div className="bg-white px-32">
          <section className="flex justify-between gap-3 pt-12">
            {isLoading || notices.length == 0 ?
              <Skeleton scale={1} withImage={true} /> : <Card withImage={true} scale={1} data={notices[1]} />
            }

            <aside className="flex flex-col gap-8">
              {isLoading || notices.length == 0 ?
                <Skeleton scale={1} withImage={false} /> : <Card withImage={false} scale={1} data={notices[2]} />
              }
              {isLoading || notices.length == 0 ?
                <Skeleton scale={1} withImage={false} /> : <Card withImage={false} scale={1} data={notices[3]} />
              }
            </aside>
          </section>

          <section className="flex justify-center gap-[4.5rem] py-8">
            {!isLoading && notices.length > 0 && notices.slice((page * 4), (page * 4) + 5).map((notice) => {
              return <Card withImage={true} scale={0.6} data={notice} />
            })}
            {isLoading && (
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              [0, 1, 2, 3, 4].map(_ => (
                <Skeleton scale={0.6} withImage={true} />
              ))
            )}

          </section>
        </div>
      </main>
    </div>
  );
}
