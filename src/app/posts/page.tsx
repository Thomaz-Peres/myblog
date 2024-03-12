import { FC } from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { GetStaticProps } from 'next';
import { getPost } from '@/utils/getPosts';

interface PostProp {
    description: string;
    title: string;
    link: string;
    date: Date;
    content: MDXRemoteSerializeResult;
    tags: string[],
    minutesRead: number
}

const Page = (props: PostProp) => {
    return (
        <section id="posts">
            <article>
                <h1>{props.title}</h1>
                <p>{props.minutesRead}</p>
                <p className='mb-1'>{props.date.toDateString()}</p>
                <MDXRemote {...props.content} />
            </article>
        </section>
    );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    let fileName = params?.title + '.mdx';
    const { description, title, link, postDate, content, minutesRead } = getPost(fileName);

    return {
        props: {
            description,
            title,
            link,
            postDate,
            source: await serialize(content),
            minutesRead,
        }
    };
}