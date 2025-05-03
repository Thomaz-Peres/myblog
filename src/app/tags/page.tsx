import { BreadcrumbComponent } from "@/components/Breadcrumb";
import { listTags } from "@/utils/getTags";
import Link from "next/link";

export default function Tags() {
    return (
    <div id="tags">
        <ul>
            {listTags().map((str) =>
            <>
                {str.tag.split(',').map((tag) =>
                    <div key={tag} className="">
                        <Link key={tag} href={tag}>
                            {tag}
                        </Link>
                    </div>
                )}
            </>
            )}
        </ul>
    </div>
    )
}
