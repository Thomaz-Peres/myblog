import { BreadcrumbComponent } from "@/components/Breadcrumb";
import { ListCards } from "@/components/ListCard";
import { getPaths } from "@/utils/getPosts";

export default function Posts() {
    return (
        <div>
            <ul>
                {/* <ListCards
                    section="Posts"
                    titleLink="/posts"
                    titleText="Posts"
                    list={getPaths()}
                    maxItems={5}
                /> */}
            </ul>
        </div>
    )
}
