import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
 
export function useMDXComponents(): MDXComponents {
  return {
    ...mdxComponents,
  }
}

const mdxComponents: MDXComponents = {
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
}