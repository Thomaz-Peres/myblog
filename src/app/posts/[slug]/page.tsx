import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getPost} from '@/utils/getPosts';
import { useMDXComponents } from '@/components/mdx-components'

async function generateStaticParams(slug: string) {
    const source = getPost(`${slug}.mdx`);
    let serializedSource = await serialize(source.source);

    source.source = serializedSource;
    return source;
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

export default async function Page({ params }: { params: { slug : string } }) {
    let teste = await generateStaticParams(params.slug);
    console.log(teste.source)
    return (
        <section id="posts">
            <article>
                <h1>{params.slug}</h1>
                <p className='mb-1'>{"22/11/23"}</p>
                <div>
                    <MDXRemote {...teste.source} />
                </div>
            </article>
        </section>
    );
}