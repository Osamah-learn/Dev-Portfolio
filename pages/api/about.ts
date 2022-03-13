// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { SimplePerson, Skill, IProject } from "../../utils/types"



export const loadAbout: SimplePerson[] = [
  {

    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> and <b>Redux</b> for state management ",
  },
  {

    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  }, {
    title: "Mobile app development",
    about:
      "I use <b>React Native</b> for creating <b> cross platform mobile apps ",
  },
  {

    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Node API</b> ",
  },
  {

    title: "Competitive Coder",
    about: "a daily problem solver by <b>creating an application</b> that meets the end user’s goals.</b> ",
  },
  {

    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },

];


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ loadAbout })
}
