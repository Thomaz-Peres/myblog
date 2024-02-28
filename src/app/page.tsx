'use client'

import { ListCard } from "@/components/listCard";
import { projectsList } from "@/utils/projectlist";

export default function Home() {
  return (
    <div>

      <ListCard
        section="Posts"
        titleLink="/posts"
        titleText="Posts"
        list={[]}
      />

      {/*
      <div>
        <h3 className="text-lg font-bold mb-2">Books</h3>
      </div> */}

      <div className="mt-5 w-full border-t-[3px] hr"/>

      <ListCard
        section="Projects"
        titleLink="/projects"
        titleText="Projects"
        list={projectsList}
      />

    </div>
  );
}
