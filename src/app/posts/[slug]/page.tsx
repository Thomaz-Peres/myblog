import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { getPaths, getPost, postFilePaths } from '@/utils/getPosts';
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link';

async function generateStaticParams(slug: string) {
    var posts = getPaths();

    const source = getPost(`${slug}.mdx`);
    console.log(slug);
    console.log(source);
    let serializedSource = await serialize(source.source);
    
    return source;
    // return posts.map((post) => ({
    //     ...posts,
    //     slug: post.slug,
    //     source: serializedSource
    // }));
}

export interface PostProp {
    description: string;
    title: string;
    date: Date;
    source: MDXRemoteSerializeResult;
    tags?: string[],
    minutesRead: number,
    slug: string
}

const mdxComponents: MDXComponents = {
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
}

export default async function Page({ params }: { params: { slug : string } }) {
    const teste = await generateStaticParams(params.slug);
    return (
        <section id="posts">
            <article>
                <h1>{params.slug}</h1>
                <h1>{teste.minutesRead}</h1>
                <p className='mb-1'>{"22/11/23"}</p>
                <div>
                    {/* <MDXRemote {...teste} components={mdxComponents} /> */}
                </div>
            </article>
        </section>
    );
}