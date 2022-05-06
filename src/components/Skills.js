import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { skills, moreSkills } from "../data";


export default function Skills() {
    const [show, setShow] = useState(true);

    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Compétences
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">

                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div className="p-2 sm:w-1/2 w-full" >
                            {/* < div key={skill} className="p-2 sm:w-2/2 w-full" > */}
                            <div key={skill} onClick={() => setShow(!show)} className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-200 bg-gray-800 rounded flex p-4">
                                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                            {/* <div className="p-1 m-1 hidden" id={skill}> */}
                            <div className={show && skill ? " p-1 m-1 hidden" : " p-1 m-1 show"} id={skill}>
                                {console.log(show)}
                                {moreSkills.map((obj) => {
                                    if (obj.skill === skill) {
                                        return (
                                            obj.detail.map((element) => {
                                                return (
                                                    <div className=" ml-40 bg-gray-700 w-1/2 rounded p-4 mb-3 text-center">
                                                        {element.toUpperCase()}
                                                    </div>
                                                )
                                            })
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    );
}


function displaySkills(skill) {
    //setShow(!show)
    const title = moreSkills[skill];
}

