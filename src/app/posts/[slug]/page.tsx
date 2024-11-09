// import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getPost, PostSource } from '@/utils/getPosts';
// import { serialize } from 'next-mdx-remote/serialize';
// import { BreadcrumbComponent } from '@/components/breadcrumb';
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteProps } from 'next-mdx-remote';
import { MdxContent } from '@/components/mdxContent';
// import { usePathname } from 'next/navigation';
// import MdxContent from '@/components/content';

// export interface PostProp {
//     description: string;
//     title: string;
//     date: Date;
//     source: MDXRemoteSerializeResult;
//     tags?: string[],
//     minutesRead: number,
//     slug: string
// }

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export async function generateMetadata(props: {
    params: Params
    searchParams: SearchParams
  }) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const slug = params.slug;
    const query = searchParams.query;
  }

export default async function Page(props: {
    params: Params
    searchParams: SearchParams,
  }) {
    const params = await props.params;
    const post = await getPost(`${params.slug}`);

    const { content } = await compileMDX({
      source: post.source,
      options: { parseFrontmatter: true },
  });

    return (
        <section id="posts" className="mt-16 ml-105 xl:w-7/12 lg:w-4/5 w-11/12">
            <p className="font-bold text-4xl">{post.title}</p>
            <p className='flex space-x-2 mt-2 items-center text-sm'>{post.date} • {Math.round(post.minutesRead)} min read</p>
            <p className="flex text-xs"></p>
            <p className="flex"></p>
            <div className="mt-5 w-full border-t-[3px] hr mb-5" />
            <div>
              <div className="prose">{content}</div>
            </div>
        </section>
    );
}
