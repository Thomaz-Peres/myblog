import { ListHomeCards } from "@/components/listCard";
import { postList } from "@/utils/postList";
import { projectsList } from "@/utils/projectlist";

export default function Home() {
  return (
    <>
      <div className="mt-10 ml-105 xl:w-7/12 lg:w-4/5 w-11/12">
        <ul>
          <ListHomeCards
            section="Posts"
            titleLink="/posts"
            titleText="Posts"
            list={postList}
          />
        </ul>

        <div className="mt-5 w-full border-t-[3px] hr" />

        <ListHomeCards
          section="Projects"
          titleLink="/projects"
          titleText="Projects"
          list={projectsList}
        />

      </div>
    </>
  );
}