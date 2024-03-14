import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { GetStaticPaths, GetStaticProps, Metadata } from 'next';
import { getPaths, getPost, postFilePaths } from '@/utils/getPosts';
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link';

export async function generateStaticParams() {
    return {
        paths: getPaths(),
        fallback: false,
    };
}

export async function generateMetada({
    params,
}: {
    params: { slug: string }
}): Promise<PostProp | undefined> {
    console.log(params.slug)

    const post = getPost(params.slug);
    const mdxSource = await serialize(post.source);
    const { minutesRead, description, postDate: date, title } = post;
    console.log(description)

    return {
        description,
        title,
        date,
        source: mdxSource,
        minutesRead,
    };
}

export interface PostProp {
    description: string;
    title: string;
    date: Date;
    source: MDXRemoteSerializeResult;
    tags?: string[],
    minutesRead: number
}

const mdxComponents: MDXComponents = {
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
}

const Page = ({ date, description, minutesRead, source, title, tags } : PostProp ) => {
    return (
        <>
            <section id="posts">
                <article>
                    <h1>{title}</h1>
                    <p>{minutesRead}</p>
                    <p>{description}</p>
                    <p className='mb-1'>{date.toDateString()}</p>
                    <div>
                        <MDXRemote {...source} components={mdxComponents} />
                    </div>
                </article>
            </section>
        </>
    );
}

export default Page;