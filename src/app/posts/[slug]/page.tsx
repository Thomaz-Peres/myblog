import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getPost } from '@/utils/getPosts';
import { serialize } from 'next-mdx-remote/serialize';
import { MdxContent, useMDXComponents } from '@/components/mdxContent';
// import MdxContent from '@/components/content';

export interface PostProp {
    description: string;
    title: string;
    date: Date;
    source: MDXRemoteSerializeResult;
    tags?: string[],
    minutesRead: number,
    slug: string
}

export default async function Page({ params }: { params: { slug: string } }) {
    const source = getPost(`${params.slug}`);

    return (
        <section id="posts">
            <article>
                <h1>{source.title}</h1>
                <p className='mb-1'>{source.date.toLocaleDateString()}</p>
                <p>Time to read: {Math.round(source.minutesRead)}m</p>
                <div className="mt-5 w-full border-t-[3px] hr" />
                <MdxContent source={await serialize(source.source)} />
            </article>
        </section>
    );
}