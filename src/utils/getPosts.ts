import fs from 'fs'
import path from 'path'
import readingTime from 'reading-time'
import matter from 'gray-matter'


export function getPost(fileName: string) {
    const postsDir = path.join(process.cwd(), './src/posts');
    const postPath = path.join(postsDir, fileName);
    const { data: postData, content: postContent } = matter.read(postPath);
    const { minutes } = readingTime(postContent);

    const [day, month, year] = postData.date.split('-');
    const postDate = new Date(year, month, day);
    const postTitle = fileName.split('.mdx')[0];

    return {
        description: postData.description,
        title: postData.title,
        link: postTitle,
        postDate: postDate,
        content: postContent,
        minutesRead: minutes,
    };
}

// description: string;
// title: string;
// link: string;
// date: Date;
// content: MDXRemoteSerializeResult;
// tags: string