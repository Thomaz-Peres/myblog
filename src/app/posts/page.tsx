import { BreadcrumbComponent } from "@/components/breadcrumb";
import { ListUnlimitedCards } from "@/components/listCard";
import { postList } from "@/utils/postList";

export default function Page() {
    return (
        <>
            <div className="mt-10 ml-105 xl:w-7/12 lg:w-4/5 w-11/12 mb-10">
                <ul>
                    <ListUnlimitedCards
                        section="Posts"
                        titleLink="/posts"
                        titleText="Posts"
                        list={postList}
                    />
                </ul>
            </div>
        </>
    )
}