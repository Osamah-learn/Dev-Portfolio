import { loadLang } from "../lib/loadLang"
import { GetServerSideProps, GetStaticProps, NextPage } from "next"
import { DiVim } from "react-icons/di";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Image from 'next/image'
import ivan from '../img/ivan.jpg'
import ahto from '../img/ahtona.jpeg'
import teemu from "../img/Teemu.jpg"
import eppu from "../img/eppu.jpg"
import Bar from "../components/Bar"
import { Key } from "react";
export const getServerSideProps: GetServerSideProps = async () => {
    /* This is a promise that is resolved when the data is loaded. */
    const results = await loadLang()

    return {

        /* This is a special syntax for Next.js that allows you to pass data to the page. */
        props: {
            languages: results.languages || null,
            tools: results.tools || null
        },
    };
};



const resume: NextPage = ({ languages, tools }: any) => {
    return (
        <div className="px-6 py-2">
            {/* edication */}
            <div className="grid grid-cols-2 gap-6 ">
                <div>
                    <h5 className="my-5 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-sm font-bold">
                            Computer Engineering
                        </h5>
                        <p>Metropolia Tieto- ja viestintätekniikan tutkinto-ohjelma 03.11.2021 - 31.12.2022</p>
                        <p>I currently study Tieto- ja viestintätekniikka AMK, monimuoto-opiskelu, and i have 150 credits points</p>
                        <h5 className="my-2 text-sm font-bold ">Degree in Information and Communication Technology</h5>
                        <p>I have Omnia Degree in Information and Communication Technology 1-09-2021-27-3-2022 </p>
                        <h5 className="my-2 text-sm font-bold">Hamk AMK KOODARI Koulutus: Web Development </h5>
                        <p>I have Hamk Certificate in Web Development 2019-2020 </p>
                        <h5 className="my-2 text-sm font-bold">Mechanical and production engineering </h5>
                        <p>I have Tredu degree in mechanical and production engineering 2018-2019 </p>
                        <h5 className="my-2 text-sm font-bold">FULLSTACK OPEN 2021</h5>
                        <p>I have certificate from Full stack open is a free online course organized by University of Helsinki and some top-notch Finnish companies.
                            Stack is very up-to-date: single-page-app development using latest React, Redux, Node. js and MongoDB and course contains also GraphQL tutorial. </p>

                    </div>
                </div>
                <div>
                    <h5 className="my-5 text-2xl font-bold">Experience</h5>
                    <div>
                        <h5 className="my-2 text-sm font-bold">
                            Front End Developer
                        </h5>
                        <p>Front End Developer at SOS Children s Villages (SOS-Lapsikylä) 1.3.2021– 1.3.2022</p>
                        <div>
                            <h5 className="my-2 text-sm font-bold">
                                Full-stack Development Bootcamp
                            </h5>
                            <p>Full Stack Development Bootcamp with BearIT building real life App with modern Full-Stack technologies 1.1.2021– 1.9.2021</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Languges and Tools*/}
            <div className="grid grid-cols-1 my-14 md:grid-cols-2 lg:grid-cols-2">
                <div>
                    <h5 className="font-bold text2-xl my-7">Languges and Frameworks</h5>
                    <div className="px-4 my-2">
                        {
                            languages.map((language: any) => <Bar data={language} key={language.name} />)
                        }
                    </div>
                </div>
                {/* Tools */}


                <div>
                    <h5 className="font-bold my-7 text2-xl">Tools and Softwares</h5>
                    <div className="px-4 my-2">
                        {
                            tools.map((tool: any) =><Bar data={tool} key={tool.name} />)
                        }
                    </div>
                </div>
            </div>


        </div>



    )
}

export default resume