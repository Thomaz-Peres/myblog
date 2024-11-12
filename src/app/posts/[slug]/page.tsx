import { getPost } from '@/utils/getPosts';
import { MdxContent } from '@/components/mdxContent';

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
        <section id="posts" className="mt-16 ml-105 xl:w-7/12 lg:w-4/5 w-11/12">
            <p className="font-bold text-4xl">{post.title}</p>
            <p className='flex space-x-2 mt-2 items-center text-sm'>{post.date} • {Math.round(post.minutesRead)} min read</p>
            <p className="flex text-xs"></p>
            <p className="flex"></p>
            <div className="mt-5 w-full border-t-[3px] hr mb-5" />
              <MdxContent source={post.source} />
        </section>
    );
}
