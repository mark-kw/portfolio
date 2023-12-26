import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { skills, moreSkills } from "../data";


export default function Skills() {
    const [show, setShow] = useState(false);

    return (
        <section id="skills" >
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Compétences
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill) => (
                        <div key={skill} className="mb-4">
                            <div
                                onClick={() => setShow(!show)}
                                className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-200 bg-gray-800 rounded flex p-4 cursor-pointer"
                            >
                                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">{skill}</span>
                            </div>
                            <div
                                className={`${show && skill ? "p-4 m-1 hidden" : "p-4 m-1 show"
                                    } grid grid-cols-2 gap-4 ransition-max-height duration-200 overflow-hidden`}
                                id={skill}

                            >
                                {moreSkills.map((obj) => {
                                    if (obj.skill === skill) {
                                        return obj.detail.map((element) => (
                                            <div
                                                key={element}
                                                className="bg-gray-700 rounded p-4 mb-3 text-center"
                                            >
                                                {element.toUpperCase()}
                                            </div>
                                        ));
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

