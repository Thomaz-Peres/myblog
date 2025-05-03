import { BreadcrumbComponent } from "@/components/Breadcrumb";
import { getPaths } from "@/utils/getPosts";
import { listTags } from "@/utils/getTags";
import Link from "next/link";

export default function Tags() {
    return (
    <div id="tags">
        <ul>
            {listTags().map((str) =>
            <div>
                {str.tag.split(',').map((tag) =>
                    <div className="">
                        <Link href={tag}>
                            {tag}
                        </Link>
                    </div>
                )}
            </div>
            )}
        </ul>
    </div>
    )
}
