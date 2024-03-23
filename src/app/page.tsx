'use client'

import { ItemProps, ListCard } from "@/components/listCard";
import { postList } from "@/utils/postList";
import { projectsList } from "@/utils/projectlist";
// import matter from "gray-matter";
// import path from "path";
// import fs from 'fs'
// import { GetStaticProps } from "next";
import Link from "next/link";

export default function Home() {

  return (
  <>
    <div>

      {/* <ListCard
      section="Posts"
      titleLink="/posts"
      titleText="Posts"
      list={postList}
    /> */}

      <ul>
        {postList.map((post) => (
          <li key="" >
            <Link key={post.title} href={`${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      {/*
    <div>
      <h3 className="text-lg font-bold mb-2">Books</h3>
    </div> */}

      <div className="mt-5 w-full border-t-[3px] hr" />

      <ListCard
        section="Projects"
        titleLink="/projects"
        titleText="Projects"
        list={projectsList}
      />

    </div>
  </>
  );
}