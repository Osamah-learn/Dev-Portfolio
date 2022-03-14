/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { GetServerSideProps, GetStaticProps, NextPage } from "next"
import NoSsr from "../components/NoSsr"
import { loadAbout } from "../lib/loadAbout"
import PersonCard from "../components/AboutCard"
import icons from "../utils/icons"
export const getServerSideProps: GetServerSideProps = async () => {
  /* This is a promise that is resolved when the data is loaded. */
  const results = await loadAbout()

  return {

    /* This is a special syntax for Next.js that allows you to pass data to the page. */
    props: {
      items: results.loadAbout || null
    },
  };
};


const index: NextPage = ({ items }: any) => {

  return (
    <div className="flex flex-col flex-grow px-6 pt1 dark:bg-zinc-700 dark:text-white">
      <h5 className="my-5 font-medium">Hei My name is Osamah, but people call me Osku. iam A junior full stack developer with one year experience as a front end developer in the SOS-Lapsikylä
        organization in Finland, I graduated from Omnia Institute in information and communication technology
        also i have about 150 credits in Software Engineering at University of Metropolia.
      </h5>
      <div className="p-4 mt-5 ">
        <h6 className="my-3 text-xl font-bold tracking-wider text-green-500">What do I offer ?</h6>
        <div className="grid gap-6 lg:grid-cols-2">

          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {items.map((item: any, idx: any) => {
            /* is is a way to access the array of icons. */
            const Icon = icons[idx];
            return (
              <div key={item.about} className="col-span-1 text-black bg-gray-100 border lg:rounded-lg dark:bg-zinc-500 dark:text-white">
                <div className="flex items-center justify-center py-3 dark:bg-zinc-500 dark:text-white"><Icon className="w-10 h-10 text-fuchsia-400" /></div>
                <NoSsr>
                  <PersonCard items={item} key={item.title} />
                </NoSsr>
              </div>

            )
          })}
        </div>
      </div>
    </div>
  )
}





export default index
