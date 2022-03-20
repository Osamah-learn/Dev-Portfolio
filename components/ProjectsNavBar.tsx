import { FunctionComponent } from "react";
import { Category } from "../utils/types"



const NavItems: FunctionComponent<{ value: Category | "all", projectFilterHandler: Function, activeItem: String }> = ({ value, projectFilterHandler, activeItem }) => {
    let className = "capitalize cursor-pointer hover:text-green-400"
    if (activeItem === value)
    className += " text-green-400"
    return (
        <li className={className} onClick={() => projectFilterHandler(value)}>
            {value}
        </li>
    )
}



const ProjectsNavBar: FunctionComponent<{ projectFilterHandler: Function, activeItem: string }> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-auto list-none">
            <NavItems value={"all"} {...props} />
            <NavItems value={"react"} {...props} />
            <NavItems value={"reactNative"} {...props} />
            <NavItems value={"express"} {...props} />
        </div>
    )
}

export default ProjectsNavBar

