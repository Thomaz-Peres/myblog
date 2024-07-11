import { ListUnlimitedCards } from "@/components/listCard";
import { projectsList } from "@/utils/projectlist";

export default function Page() {
    return (
        <>
            <div className="mt-10 ml-105 xl:w-7/12 lg:w-4/5 w-11/12 mb-10">
                <ul>
                    <ListUnlimitedCards
                        section="Projects"
                        titleLink="/projects"
                        titleText="Projects"
                        list={projectsList}
                    />
                </ul>
            </div>
        </>
    )
}