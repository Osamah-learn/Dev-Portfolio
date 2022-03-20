import { GetServerSideProps, GetStaticProps, NextPage } from "next"
import ProjectCard from "../components/ProjectCard";
import { loadProjects } from "../lib/loadProjects"
import ProjectsNavBar from "../components/ProjectsNavBar"
import { useState } from "react";
import { Category } from "../utils/types";




export const getServerSideProps: GetServerSideProps = async () => {
  /* This is a promise that is resolved when the data is loaded. */
  const results = await loadProjects()

  return {

    /* This is a special syntax for Next.js that allows you to pass data to the page. */
    props: {
      projectData: results.projects || null
    },
  };
};

const Projects: NextPage = ({ projectData }: any) => {

  /* States */
  const [projects, setProjects] = useState(projectData)
  const [activeItem, setactiveItem] = useState("all")

  /* Handlers */
  const projectFilterHandler = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectData)
      setactiveItem(category)
      return;
    }
    const newArray = projectData.filter((categoryItem: any) => categoryItem.category.includes(category));
    setProjects(newArray);
    setactiveItem(category);
  }

  /* Return */
  return (
    <div className="px-5 py-2 overflow-scroll " style={{ height: "65vh" }}>
      <ProjectsNavBar projectFilterHandler={projectFilterHandler} activeItem={activeItem} />
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project: any) => (<div className="col-span-12 p-2 rounded-lg sm:col-span-6 lg:col-span-4 bg-slate-200 dark:bg-zinc-500" key={project.name}>
          <ProjectCard items={project} key={project.name} />
        </div>))}
      </div>
    </div>
  )
}

export default Projects