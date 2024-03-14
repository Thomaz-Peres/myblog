import fs from 'fs'
import path from 'path'
import readingTime from 'reading-time'
import matter from 'gray-matter'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "src/posts");


export function getPost(fileName: string) {
    const postFilePath = path.join(POSTS_PATH, fileName);

    const fileContents = fs.readFileSync(postFilePath);
    const { data: data, content: source } = matter(fileContents);
    const { minutes } = readingTime(source);

    const [day, month, year] = data.date.split('-');
    const postDate = new Date(year, month - 1, day);
    const slug = fileName.split('.mdx')[0];

    return {
        description: data.description,
        title: data.title,
        postDate: postDate,
        source: source,
        minutesRead: minutes,
        slug: slug
    };
}

export function getPaths() {
    const postNames = fs.readdirSync(POSTS_PATH);
    const postToGeneratePath = postNames.filter((postName) => {
        const postDir = path.join(process.cwd(), 'src/posts', postName);
        return fs.existsSync(postDir);
    });

    return postToGeneratePath.map((slug) => ({
        params: {
            slug: slug.replace(/\.mdx$/, ''),
        },
    }));
}

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .map(getPost)
  .sort((post1, post2) => post2.postDate.getTime() - post1.postDate.getTime());
  // Only include md(x) files
//   .filter((path) => /\.mdx?$/.test(path));