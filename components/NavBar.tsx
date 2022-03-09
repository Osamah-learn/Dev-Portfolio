import React, { useState, useEffect, FunctionComponent } from "react"
import Link from "next/link"
import { useRouter } from 'next/router'


type NavProps = {
    activeComponent: string,
    setActiveComponent: Function,
    name: string,
    route: string
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
const NavItems = ({ activeComponent, setActiveComponent, name, route }: NavProps) => {
    return (
        activeComponent !== name ? <Link href={route}>
            <a><span className="hover:text-green-400" onClick={() => setActiveComponent(name)}> {name}</span></a></Link> : null
    )
}


const NavBar = () => {
    const [activeComponent, setActiveComponent] = useState<string>("")
    const { pathname } = useRouter()

    useEffect(() => {

        switch (pathname) {
            case "/":
                return setActiveComponent("About");
            case "/projects":
                return setActiveComponent("Projects");
            case "/resume":
                return setActiveComponent("Resume");
        }


    }, [pathname])





    return (
        <div className="flex justify-between px-5 py-3 my-5">
            <span className="text-xl font-bold text-green-500 border-b-4 tex border-b-green-300 md:text-2xl hover:text-green-300">{activeComponent}</span>
            <div className="space-x-6 text-lg text-red-700">
                <NavItems activeComponent={activeComponent} setActiveComponent={setActiveComponent} name="About" route="/" />
                <NavItems activeComponent={activeComponent} setActiveComponent={setActiveComponent} name="Projects" route="/projects" />
                <NavItems activeComponent={activeComponent} setActiveComponent={setActiveComponent} name="Resume" route="/resume" />
            </div>
        </div>
    )
}

export default NavBar