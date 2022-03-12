import { FunctionComponent } from 'react'
import { Skill } from "../utils/types"
import { BsCircle } from "react-icons/bs";
const Bar: FunctionComponent<{
  data: Skill
}> = ({ data: { name, level } }) => {
  console.log("level value",level);
  return (

    <div className="my-2 text-white rounded-full bg-slate-200">

      <div className="flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-wh"
        style={{ width: level }}>

        <BsCircle className="px-1 py-1 mr-3" />
        <p className="" >{name}</p>
        
      </div>

    </div>
  )
}

export default Bar