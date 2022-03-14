import { GetServerSideProps, GetStaticProps, NextPage } from "next"
import ProjectCard from "../components/ProjectCard";
import { loadProjects } from "../lib/loadProjects"

export const getServerSideProps: GetServerSideProps = async () => {
  /* This is a promise that is resolved when the data is loaded. */
  const results = await loadProjects()

  return {

    /* This is a special syntax for Next.js that allows you to pass data to the page. */
    props: {
      projects: results.projects || null
    },
  };
};

const projects: NextPage = ({ projects }: any) => {
  console.log("projects : ", projects);
  return (
    <div className="px-5 py-2 overflow-scroll " style={{ height: "65vh" }}>
      <div className="NavBar">

      </div>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project: any) => (<div className="col-span-12 p-2 rounded-lg sm:col-span-6 lg:col-span-4 bg-slate-200 dark:bg-zinc-500" key={project.name}>
          <ProjectCard items={project} key={project.name} />
        </div>))}
      </div>
    </div>
  )
}

export default projects