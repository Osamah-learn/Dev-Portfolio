import ivan from '../img/ivan.jpg'
import ahto from '../img/ahtona.jpeg'
import teemu from "../img/Teemu.jpg"
import eppu from "../img/eppu.jpg"
import Image from 'next/image'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";





export const CardComponent = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 dark:bg-zinc-700 dark:text-white">
            {/* Card Component */}
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow dark:bg-zinc-800 dark:text-white">

                <div className="inline-flex w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-lg ">

                    <Image src={teemu}
                        alt="teemu"
                        className="w-full h-full" />
                </div>
                <h2 className="mt-4 text-xl font-bold">Teemu Karhu</h2>
                <h6 className="mt-2 text-sm font-medium">CEO – Liiketoiminta</h6>

                <p className="mt-3 text-xs text-center text-gray-500">
                    CEO & Founder of BearIT
                </p>

                <ul className="flex flex-row mt-4 space-x-2 dark:text-white">
                    <li>
                        <a onClick={() => window.open('mailto:osku@osamah-dev.tech')} className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full dark:bg-zinc-800 dark:text-white ">
                            <AiOutlineMail className="cursor-pointer" />

                        </a>
                    </li>
                    <li>
                        <a href="tel:+15555551212" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full dark:bg-zinc-800 dark:text-white">
                            <AiOutlinePhone />
                        </a>
                    </li>
                </ul>
            </div>
            {/* Card Component */}

        </div>
    )
}
