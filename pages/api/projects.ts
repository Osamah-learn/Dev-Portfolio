// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SimplePerson, Skill, IProject } from "../../utils/types"



export const projects: IProject[] = [
  {
    name: "JSON Web Token ",
    description:
      "JWTs are used as a secure way to authenticate users and share information.",
    image_path: "/../img/jwt.svg",
    deployed_url: "https://github.com/Osamah-learn/FullStackOpen/tree/main/part4/JWTIsReady",
    github_url: "https://github.com/Osamah-learn/FullStackOpen/tree/main/part4/JWTIsReady",
    category: ["node", "express", "mongo"],
    key_techs: ["Node.js", "Express", "MongoDB"],
  },
  {
    name: "PhoneBook App",
    description:
      "Full-Stack SPA application PhoneBook application with non style.",
    image_path: "/../img/jwt.svg",
    deployed_url: "https://phonebook-osamah.herokuapp.com/",
    github_url: "https://github.com/Osamah-learn/FullStackOpen",
    category: ["node", "express", "mongo","react"],
    key_techs: ["Node.js", "Express", "MongoDB","ReactJs"],
  },
  {
    name: "Ylitse MentorApp",
    description:
      "Ylitse mentors will assist you in your personal situation with confidence. You can choose the right mentor based on your problem and get help no matter when and where. .",
    image_path: "/../img/jwt.svg",
    deployed_url: "https://play.google.com/store/apps/details?id=com.ylitse&hl=fi&gl=US",
    github_url: "https://github.com/sos-lapsikyla/ylitse-app",
    category: ["react", "python", "reactNative"],
    key_techs: ["Python", "React", "React Native"],
  }
]


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ projects })
}