import React, { FunctionComponent, ReactNode } from 'react'
import { GetPerson } from "../utils/types"




const AboutCard: FunctionComponent<{items: GetPerson }> = ({ items: {  title, about } }) => {
  function createMarkup() {
    return { __html:about };
  }

  return (

    <div className="text-center dark:bg-zinc-700 dark:text-white ">
      <h4 className="p-4 text-lg font-bold text-cyan-600">{title}</h4>
      <p className="p-8" dangerouslySetInnerHTML={createMarkup()} />

    </div>
  )
}

export default AboutCard