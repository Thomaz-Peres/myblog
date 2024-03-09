import { FC } from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

type PostProp = {
    section: string;
    title: string;
    text: MDXRemoteSerializeResult;
}

export const Posts: FC<PostProp> = ({
    section,
    title,
    text
}) => {
    return (
        <section id={section}>
            <h1>{title}</h1>
            <MDXRemote {}/>
        </section>
    );
};

export async function getStaticProps() {
    // MDX text - can be from a local file, database, CMS, fetch, anywhere...
    // const res = await fetch('https:...')
    // const mdxText = await res.text()
    const source
    const mdxSource = await serialize(mdxText)
    return { props: { mdxSource } }
  }