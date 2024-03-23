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
        slug: params.slug
    };
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

// const Page = ({ date, description, minutesRead, source, title, tags, slug } : PostProp ) => {
//     const post = getPaths().map((post) => post.params.slug === slug)
//     return (
//         <>
//             <section id="posts">
//                 <article>
//                     <h1>{title}</h1>
//                     <p>{minutesRead}</p>
//                     <p>{description}</p>
//                     <p className='mb-1'>{date.toDateString()}</p>
//                     <div>
//                         <MDXRemote {...source} components={mdxComponents} />
//                     </div>
//                 </article>
//             </section>
//         </>
//     );
// }

// export default Page;

export default function Page({
    params,
    searchParams,
}: {
    params: { slug: string, source: MDXRemoteSerializeResult }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    return (
        <>
            <section id="posts">
                <article>
                    <h1>{params.slug}</h1>
                    <p>{params.slug}</p>
                    <p>{params.slug}</p>
                    <p className='mb-1'>{"22/11/23"}</p>
                    <div>
                        <MDXRemote {...params.source} components={mdxComponents} />
                    </div>
                </article>
            </section>
        </>
    );
}