'use client'

import { ListCard } from "@/components/listCard";

const projectsList = [
  {
    title: 'Teste',
    description: 'Teste',
    link: 'https://github.com/Thomaz-Peres',
    dateTime: new Date('02/26/2024')
  },
  {
    title: 'Teste',
    description: 'Teste',
    link: 'https://github.com/Thomaz-Peres',
    dateTime: new Date('02/26/2024')
  },
];

export default function Home() {
  return (
    <div>

      <ListCard
        section="Posts"
        titleLink="/posts"
        titleText="Posts"
        list={projectsList}
      />

      {/*
      <div>
        <h3 className="text-lg font-bold mb-2">Books</h3>
      </div> */}

      <div className="my-5 w-full border-t hr border-black-300" />

      <ListCard
        section="Projects"
        titleLink="/projects"
        titleText="Projects"
        list={projectsList}
      />

    </div>
  );
}
