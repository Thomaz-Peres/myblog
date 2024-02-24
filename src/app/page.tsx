'use client'

import { Separator } from "@/components/ui/separator";
import { ArchiveIcon, ChevronRightIcon } from '@radix-ui/react-icons'

export default function Home() {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold mb-2">Thomaz Peres</h2>
        <p>Software Engineer</p>
      </div>
      <Separator className="my-5" />
      <div>
        <h3 className="text-lg font-bold mb-2">Posts</h3>
        <p className="italic underline"><a href="/posts"> Ver mais {'->'}</a></p>
      </div>
      {/* <Separator className="my-5" />
      <div>
        <h3 className="text-lg font-bold mb-2">Books</h3>
      </div> */}
      <Separator className="my-5" />
      <div>
        <h3 className="text-lg font-bold mb-2">Projects</h3>

        <p className="italic underline"><a href="/projects"> Ver mais {'->'} </a></p>
      </div>
    </div>
  );
}
