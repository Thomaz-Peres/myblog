import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getPost } from '@/utils/getPosts';
import { serialize } from 'next-mdx-remote/serialize';
import { MdxContent } from '@/components/mdxContent';
import { BreadcrumbComponent } from '@/components/breadcrumb';
// import { usePathname } from 'next/navigation';
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
        <section id="posts" className="mt-16 ml-105 xl:w-7/12 lg:w-4/5 w-11/12">
            <p className="font-bold text-4xl">{source.title}</p>
            <p className='flex space-x-2 mt-2 items-center text-sm'>{source.date} • {Math.round(source.minutesRead)} min read</p>
            <p className="flex text-xs"></p>
            <p className="flex"></p>
            <div className="mt-5 w-full border-t-[3px] hr mb-5" />
            <article>
                <MdxContent source={await serialize(source.source)} />
            </article>
        </section>
    );
}