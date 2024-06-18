import fs from 'fs'
import path from 'path'
import readingTime from 'reading-time'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize';


export const POSTS_PATH = path.join(process.cwd(), 'posts');

export async function getPost(fileName: string) {
    var postFilePath = path.join(POSTS_PATH, fileName);

    var fileContents = fs.readFileSync(postFilePath, 'utf8');
    var { data: data, content: source } = matter(fileContents);
    var { minutes } = readingTime(fileContents);

    var [day, month, year] = data.date.split('-');
    var postDate = new Date(year, month - 1, day);
    var slug = fileName.split('.mdx')[0];

    return {
        description: data.description,
        title: data.title,
        date: postDate,
        source: await serialize(fileContents),
        minutesRead: minutes,
        slug: slug
    }
}

export function getPaths() {
    var postNames = fs.readdirSync(POSTS_PATH);
    var postToGeneratePath = postNames.filter((postName) => {
        var postDir = path.join(process.cwd(), 'posts', postName);
        return fs.existsSync(postDir);
    });

    return postToGeneratePath.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ''),
    }));
}

// export const postFilePaths =
//     fs.readdirSync(POSTS_PATH)
//         .map(getPost)
//         .sort((post1, post2) => post2.date.getTime() - post1.date.getTime());