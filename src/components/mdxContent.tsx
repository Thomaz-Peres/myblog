import { MDXRemote } from "next-mdx-remote/rsc";

export function MdxContent({ source }: { source: string }) {
  return (
    <article>
      <MDXRemote source={source} components={components}/>
    </article>
  )
}

const components = {
  // pre: (props: any) => CodeWrapper(props),
}
