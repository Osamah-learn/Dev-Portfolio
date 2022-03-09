import { GetServerSideProps, GetStaticProps, NextPage } from "next"
import { GetPerson } from "../utils/types";


export const getServerSideProps:GetServerSideProps = async () => {

  const res = await fetch("http://localhost:3000/api/data")
  const results: GetPerson = await res.json()

  return {

    props: {
      items: results.simplePerson || null
    },
  };
};


const index: NextPage = ({ items }: any) => {
  const whoIam = items;
  return (
    <div>
      <ul>
        {whoIam.map((iam: any) => (
          <li key={iam.title}>{iam.title}</li>
        ))}
      </ul>

    </div>
  )
}





export default index
