import React, { FunctionComponent, useState } from 'react'
import Image from 'next/image'
import { IProject } from "../utils/types"
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';



const ProjectCard: FunctionComponent<{ items: IProject }> = ({ items }) => {
    const [showContent, setShowContent] = useState(false)

    return (


        <div>
            <Image onClick={() => setShowContent(true)} className="cursor-pointer rounded-2xl " width="400" height="200" src={items.image_path} alt={items.name} />
            <p className="my-3 text-center">{items.name}</p>
            {/* truthy statment*/
                showContent &&

                <div className="absolute top-0 left-0 z-10 flex flex-wrap justify-around w-full h-auto bg-slate-100 dark:text-white dark:bg-zinc-500">
                    {/* left Section */}
                    <div className="p-1 bg-gray-200 w-96 rounded-2xl dark:bg-zinc-400 ">
                        <Image className="rounded-2xl" width="400" height="200" src={items.image_path} alt={items.name} />
                        <div className="flex justify-center my-4 space-x-3 ">
                            <a className="flex justify-center px-4 py-2 space-x-3 text-lg text-blue-500 rounded-md outline-none hover:text-blue-700 dark:text-white" href={items.github_url}><AiFillGithub size={28} /> <span>Github</span></a>
                            <a className="flex justify-center px-4 py-2 space-x-3 text-lg text-blue-500 rounded-md outline-none hover:text-blue-700 dark:text-white " href={items.deployed_url}><AiFillProject size={28} /> <span>Project</span></a>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="p-4 w-96 ">
                        <h2 className="text-3xl font-medium text-center text-indigo-400 b-2 md-text-2xl dark:text-white">{items.name}</h2>
                        <h3 className="mb-3 font-medium text-center my-14">{items.description}</h3>
                        <div className="flex flex-wrap mt-5 space-x-3 text-sm text-green-500 dark:text-white">
                            {items.key_techs.map((tech) => (
                                <span className="px-2 py-1 my-1 dark:bg-zinc-400 " key={tech}>{tech}</span>
                            ))}
                        </div>
                    </div>
                    <button className="absolute top-0 p-1 right-2 focus:outline-none" onClick={() => setShowContent(false)}><MdClose className="text-red-500 dark:text-white" size={40} /></button>
                </div>
            }
        </div>

    )
}

export default ProjectCard