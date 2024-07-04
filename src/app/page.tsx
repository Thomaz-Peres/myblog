import { Footer } from "@/components/footer";
import { ListCard } from "@/components/listCard";
import { Sidebar } from "@/components/sidebar";
import { postList } from "@/utils/postList";
import { projectsList } from "@/utils/projectlist";

export default function Home() {
  return (
    <>
      <Sidebar />

      <main className="ml-96 xl:w-7/12 lg:w-4/5 w-11/12">
        <ul>
          <ListCard
            section="Posts"
            titleLink="/posts"
            titleText="Posts"
            list={postList}>
          </ListCard>
        </ul>

        {/*
    <div>
      <h3 className="text-lg font-bold mb-2">Books</h3>
    </div> */}

        <div className="mt-5 w-full border-t-[3px] hr" />

        <ListCard
          section="Projects"
          titleLink="/projects"
          titleText="Projects"
          list={projectsList}
        />

        <Footer />
      </main>
    </>
  );
}