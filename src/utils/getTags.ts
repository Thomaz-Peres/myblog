import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_PATH = path.join(process.cwd(), "posts");

type tags = {
    tag: string
    count: number
}

export const listTags = () => {
    var post = fs.readdirSync(POSTS_PATH);

    var posts: tags[] = [];

    post.map((post) => {
        post = post.replace(".mdx", "");
        var postFilePath = path.join(POSTS_PATH, `${post}.mdx`);
        var fileContent = fs.readFileSync(postFilePath, { encoding: "utf8" });

        var { data } = matter(fileContent);
        const postProps = { tag: data.tags, count: 0 }
        posts.push(postProps);
    });

    return posts;
}
