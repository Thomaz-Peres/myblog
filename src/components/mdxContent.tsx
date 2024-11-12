import { MDXRemote } from "next-mdx-remote/rsc";

export function MdxContent({ source }: { source: string }) {
  return (
    <article>
      <MDXRemote source={source}/>
    </article>
  )
}

export const Components = {
  h1: (props: any) => <h1 className="text-5xl" {...props} />,
}
