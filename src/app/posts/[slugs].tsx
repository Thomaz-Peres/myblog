import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPaths, getPost, postFilePaths } from '@/utils/getPosts';
import path from 'path';
import dynamic from 'next/dynamic';
const testComponent = "../../components/teste";
// import TestComponent from '@/components/teste';
// import {  } from '@/components/teste';

const components = {
    TestComponent: dynamic(() => import(testComponent))
}

export interface PostProp {
    description: string;
    title: string;
    date: Date;
    source: MDXRemoteSerializeResult;
    tags: string[],
    minutesRead: number
}

export default function Page({ title, minutesRead, date, source }) {
    return (
        <>
            <section id="posts">
                <article>
                    <h1>{title}</h1>
                    <p>{minutesRead}</p>
                    <p className='mb-1'>{date.toDateString()}</p>
                    <div>
                        <MDXRemote {...source} components={components} />
                    </div>
                </article>
            </section>
        </>
    );
}

export const getStaticProps = async (
    { params }
    ) => {
    let fileName = `${params.slug}.mdx`;
    console.log(fileName)
    const post = getPost(fileName);
    const mdxSource = await serialize(post.source);

    return {
        props: {
            title: post.title,
            minutesRead: post.minutesRead,
            date: post.postDate,
            source: mdxSource,
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: getPaths(),
        fallback: false,
    };
}

// export async function getStaticPaths() {
//     const paths = postFilePaths
//         // .map((path) => path(/\.mdx?$/, ""))
//         .map((slug) => ({ params: { slug } }))

//     return {
//         paths,
//         fallback: false
//     }
// }