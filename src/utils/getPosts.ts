import fs from 'fs'

const postPath = './src/posts'

export async function getSlug() {
    const paths = sync(`${postPath}/*.mdx`)
}