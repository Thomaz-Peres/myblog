'use client'

import { ItemProps, ListCard } from "@/components/listCard";
import { POSTS_PATH, postFilePaths } from "@/utils/getPosts";
import { postList } from "@/utils/postList";
import { projectsList } from "@/utils/projectlist";
// import matter from "gray-matter";
// import path from "path";
// import fs from 'fs'
// import { GetStaticProps } from "next";
import Link from "next/link";
import { use } from "react";


// export async function getProps() {
//   return {
//     props: {
//       posts: postFilePaths.map((post) => ({
//         title: post.title,
//         description: post.description,
//         date: post.postDate.toDateString(),
//         slug: post.slug,
//       })),
//     },
//   };
// };

export default function Home() {
  // const postFiles = use(getProps());

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
            <li>
              <Link href={`${post.link}`}>
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

// export async function getStaticProps () {
//   const posts = postFilePaths.map((filePath) => {
//     const source = fs.readFileSync(path.join(POSTS_PATH, filePath), 'utf8');
//     const { data } = matter(source);

//     return {
//       link: `/posts/${filePath.replace(/\.mdx?$/, '')}`,
//       title: data.title,
//       description: data.description,
//       dateTime: new Date(data.date),
//     };
//   });

//   return { props: { posts } };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {
//       posts: postFilePaths.map((post) => ({
//         title: post.title,
//         description: post.description,
//         date: post.postDate.toDateString(),
//         slug: post.slug,
//       })),
//     },
//   };
// };