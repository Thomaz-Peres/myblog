'use client'

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents } from "./mdx-components";

export function MdxContent({ source }: { source: MDXRemoteSerializeResult }) {
    return (
        <div>
            <MDXRemote {...source} />
        </div>
    )
}