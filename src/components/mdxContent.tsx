'use client'

import type { MDXComponents } from 'mdx/types'
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export function MdxContent({ source }: { source: MDXRemoteSerializeResult }) {
    return (
        <MDXRemote {...source} />
    )
}
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}