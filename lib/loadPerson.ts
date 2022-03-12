
/* This is importing a type from a file that is not the current file. */
import { GetPerson } from "../utils/types";
/**
 * It fetches data from the server.
 * @returns An object with a title and about property.
 */
 export  const loadPerson:any = async () => {

  const res = await fetch("http://localhost:3000/api/data")
  const results: GetPerson = await res.json()
  return results

};