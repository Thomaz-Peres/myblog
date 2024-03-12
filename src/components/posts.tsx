import { FC } from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { GetStaticProps } from 'next';

interface PostProp {
    description: string;
    title: string;
    link: string;
    date: Date;
    content: MDXRemoteSerializeResult;
    tags: string[]
}

export const Posts = (props: PostProp) => {
    return (
        <section id="posts">
            <article>
                <h1>{props.title}</h1>
                <p className='mb-1'>{props.date.toDateString()}</p>
                <MDXRemote {...props.content} />
            </article>
        </section>
    );
};

// export async function getStaticProps(params) {
//     // MDX text - can be from a local file, database, CMS, fetch, anywhere...
//     // const res = await fetch('https:...')
//     // const mdxText = await res.text()
//     const source = params.;
//     const mdxSource = await serialize(mdxText)
//     return { props: { mdxSource } }
// }

export const getStaticProps: GetStaticProps = async ({params}) => {
    let fileName = params?.title + '.md';
    let post = 
}