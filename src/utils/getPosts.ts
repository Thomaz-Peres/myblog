import fs from 'fs'
import path from 'path'
import readingTime from 'reading-time'
import matter from 'gray-matter'
import { ItemProps } from '@/components/ListCard';

export const POSTS_PATH = path.join(process.cwd(), "posts");

export interface PostSource {
    title: string,
    date: string,
    source: string,
    minutesRead: number,
    slug: string,
    tags: string
}

export const getPost = (fileName: string) => {

    var postFilePath = path.join(POSTS_PATH, `${fileName}.mdx`);
    var fileContent = fs.readFileSync(postFilePath, { encoding: "utf8" });

    var { data, content } = matter(fileContent);
    var { minutes } = readingTime(content);

    var slug = fileName.replace(".mdx", "");

    const postSource: PostSource = {
        title: data.title,
        date: data.date,
        source: content,
        minutesRead: minutes,
        slug: slug,
        tags: data.tags
    }
    return postSource;
}

export const getPaths = () => {
    var postNames = fs.readdirSync(POSTS_PATH);

    var posts: ItemProps[] = [];

    postNames.map((post) => {
        post = post.replace(".mdx", "");
        const postSourc = getPost(post);
        const postProps : ItemProps = { link: "posts/" + postSourc.slug, title: postSourc.title, dateTime: new Date(postSourc.date), tags: postSourc.tags }
        posts.push(postProps);
    });

    return posts;
}
