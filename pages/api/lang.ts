// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Skill } from "../../utils/types"
export const languages: Skill[] = [
  {
    data: [],
    name: "Javascript",
    level: "70%",
  },
  {
    data: [],
    name: "Node.js",
    level: "75%",
  },
  {
    data: [],
    name: "React Native",
    level: "70%",
  },
  {
    data: [],
    name: "React",
    level: "70%",
  },
  {
    data: [],
    name: "TypeScript",
    level: "75%",
  },
  {
    data: [],
    name: "TailWind",
    level: "80%",
  },
];
export const tools: Skill[] = [
  {
    data: [],
    name: "Figma",
    level: "85%",
  },
  {
    data: [],
    name: "Photoshop",
    level: "45%",
  },
  {
    data: [],
    name: "Illustrator",
    level: "60%",
  },
  {
    data: [],
    name: "Framer",
    level: "45%",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ languages,tools })
}
