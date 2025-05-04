import { getPost } from '@/utils/getPosts';
import { MdxContent } from '@/components/mdxContent';
import Link from 'next/link';

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

    return (
        <section id="posts" className="w-[80ch] max-w-full mt-16">
          <p className="font-bold text-4xl">{post.title}</p>
          <p className='flex mt-2 items-center text-sm'>{post.date} • {Math.round(post.minutesRead)} min read</p>
          <div className='flex space-x-2 mt-2 items-center text-sm underline'>
              {post.tags.split(',').map((tag) =>
                <Link key={tag} href={'/tags/' + tag}>#{tag}</Link>
              )}
          </div>
          <div className="mt-5 w-full border-t-[3px] hr mb-5" />
          <MdxContent source={post.source} />
        </section>
    );
}
