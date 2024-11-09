'use client'

import { MDXProvider } from '@mdx-js/react';
import type { MDXComponents } from 'mdx/types'
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export function MdxContent({ source }: { source: MDXRemoteSerializeResult }) {
    return (
      <MDXProvider>
        <MDXRemote {...source}/>
      </MDXProvider>
    )
  }

export const Components = {
  h1: (props: any) => <h1 className="text-5xl" {...props} />,
  ol: (props: any) => <ol className="list-decimal" {...props} />,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
