import { IconType } from "react-icons";

export interface GetPerson {
  title: string;
  about: string;
  items: [];
  icon:any;
}

export interface AboutType {
  Icon?: IconType;
  title?: string;
  about?: string;

}

export interface Skill {
  name: string;
  level: string;
  data: []
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}


/* Assing type Category inside Iproject */
export type Category = "react" | "node" | "express" | "django" | "mongo"| "reactNative";