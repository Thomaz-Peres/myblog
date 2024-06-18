import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getPost} from '@/utils/getPosts';
import { MdxContent } from '@/components/content';

export interface PostProp {
    description: string;
    title: string;
    date: Date;
    source: MDXRemoteSerializeResult;
    tags?: string[],
    minutesRead: number,
    slug: string
}

export default async function Page({ params }: { params: { slug : string } }) {
    const source = await getPost(`${params.slug}.mdx`);
    return (
        <section id="posts">
            <article>
                <h1>{params.slug}</h1>
                <p className='mb-1'>{source.date.toLocaleDateString()}</p>
                <p>Time to read: {Math.round(source.minutesRead)}m</p>
                <div>
                    <MdxContent source={source.source} />
                </div>
            </article>
        </section>
    );
}