'use client'

import { Separator } from "@/components/ui/separator";
import { ArchiveIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <p className="italic underline"><a href="/projects"> Ver mais {'->'} </a></p>
      </div>
    </div>
  );
}
