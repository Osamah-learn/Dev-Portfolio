import logo from "../img/osku.jpg";
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiFillWindows, AiFillYoutube } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import { GiTie } from "react-icons/gi"
import { MdDeveloperMode } from "react-icons/md";
import { useTheme } from "next-themes";





export const SideBar = () => {

    const { theme, setTheme } = useTheme()
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <div>
            <Image src={logo} alt="logo" className="w-24 h-32 mx-auto rounded-full" />
            <div className="flex items-center justify-center">
                <MdDeveloperMode className="w-6 h-6 text-cyan-600" />
                <h3 className="my-5 text-3xl tracking-wider font-kaushan text-cyan-600">
                    <span className="text-cyan-500 ">Osku</span>
                    Dev
                </h3>

            </div>

            <p className="flex items-center justify-center px-2 py-1 my-3 rounded-full bg-gray-50 dark:bg-zinc-500 dark:text-white">
                Junior Full-Stack Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 rounded-full bg-gray-50 dark:bg-zinc-500 dark:text-white" href="https://github.com/" download="https://github.com ">
                <GiTie className="w-6 h-6 " />
                Download resume</a>
            {/* Social icons */}
            <div className="flex items-center justify-around h-20 text-blue-500 ">
                <a href="a"></a>
                <AiFillGithub className="w-8 h-8 cursor-pointer " />
                <a href="a"></a>
                <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                <a href="a"></a>
            </div>

            {/* Adress here  */}

            <div className="py-4 my-5 bg-gray-50 dark:bg-zinc-500 dark:text-white">
                <div className="flex items-center justify-center space-x-2 ">
                    <GoLocation />
                    <span>Tampere,Finland</span>
                </div>
                <p className="my-2">osku@osamah-dev.tech</p>
                <p className="my-2b">+358400236682</p>
            </div>
            {/* Email Button */}
            <button type="button" className="w-8/12 px-4 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                onClick={() => window.open('mailto:osku@osamah-dev.tech')}>Contact Me</button>
            <button onClick={changeTheme} type="button" className="w-8/12 px-4 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Toggle Theme</button>
        </div>
    )
}
