import React, { FunctionComponent } from 'react'
import { GetPerson } from "../utils/types"




const PersonCard: FunctionComponent<{ items: GetPerson }> = ({ items }, { icon }) => {
  function createMarkup() {
    return { __html: items.about };
  }
  return (

    <div className="text-center ">
      <h4 className="p-4 text-lg font-bold text-cyan-600">{items.title} {icon}</h4>
      <p className="p-8" dangerouslySetInnerHTML={createMarkup()} />

    </div>
  )
}

export default PersonCard