import { HiCode } from 'react-icons/hi';
import React from "react";
import { experience } from "../data";
import { Fragment } from 'react/cjs/react.production.min';

export default function Experience() {
  return (
    <section id="experience">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <HiCode className="mx-auto inline-block w-10 mb-4 " size={36}/>
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Experience I've gained
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here are the opportunities I have got to develop and showcase my extpertice to the employers.
            </p>
          </div>
          
          <div className="grid grid-cols-4 gap-4 text-white">
            {experience.map((xp) => (
              <Fragment key={xp.companyName}>
                <div className="text-left text-xl col-span-3">
                  {xp.position} | {xp.companyName}
                </div>
                <div className="text-right">
                  {xp.duration}
                </div>
                {Array.isArray(xp.responsibilities) && xp.responsibilities.length > 0 && (
                  <div className="col-span-4">
                    <ul className="list-disc ml-5 mb-5 text-justify text-gray-400">
                      {xp.responsibilities.map((responsibility) => (
                        <div>
                          <li key={responsibility.id}>{responsibility}</li>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
    </section>
    )
}