import fs from 'fs'
import path from 'path'
import readingTime from 'reading-time'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize';
import { PostProp } from '@/app/posts/[slug]/page';
// import { serialize } from 'next-mdx-remote/serialize';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts');

export function getPost(fileName: string) {
    const postFilePath = path.join(POSTS_PATH, fileName);

    const fileContents = fs.readFileSync(postFilePath, 'utf8');
    const { data: data, content: source } = matter(fileContents);
    const { minutes } = readingTime(fileContents);

    const [day, month, year] = data.date.split('-');
    const postDate = new Date(year, month - 1, day);
    const slug = fileName.split('.mdx')[0];

    var postProp: PostProp = {
        description: data.description,
        title: data.title,
        date: postDate,
        source: fileContents,
        minutesRead: minutes,
        slug: slug
    }

    return postProp;
}

export function getPaths() {
    // console.log(POSTS_PATH)
    const postNames = fs.readdirSync(POSTS_PATH);
    const postToGeneratePath = postNames.filter((postName) => {
        const postDir = path.join(process.cwd(), 'posts', postName);
        return fs.existsSync(postDir);
    });

    return postToGeneratePath.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ''),
    }));
}

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths =
    fs.readdirSync(POSTS_PATH)
        .map(getPost)
        .sort((post1, post2) => post2.date.getTime() - post1.date.getTime());

// Only include md(x) files
//   .filter((path) => /\.mdx?$/.test(path));

// export const teste = await Promise.all(
//     fs.readdirSync(POSTS_PATH)
//         .map(getPost)
// )
//     .then(posts => posts.sort((post1, post2) => post2.date.getTime() - post1.date.getTime()));