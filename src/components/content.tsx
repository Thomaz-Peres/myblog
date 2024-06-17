'use client'

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export function MdxContent({ source } : { source : MDXRemoteSerializeResult}) {
    return (
        <div>
            <MDXRemote {...source} />
        </div>
    )
}