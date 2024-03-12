import { MDXRemote } from "next-mdx-remote/rsc"
import { Suspense } from "react"


export default function Page() {
    return (
        <article>
            <h1 className="font-title text-3xl text-center mb-4">{} Teste</h1>
            <Suspense>
                <MDXRemote 
                source={`# Lens

                [Lens](https://k8slens.dev/) it's a tool to managing and troubleshooting Kubernetes workloads and many other things.

                Let's start installing Lens, and doing a login (you will need to create an account in lens and take the lens ID).

                You can run in terminal  the command:`}/>
            </Suspense>
        </article>
    );
}