import { HiCode } from 'react-icons/hi';
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <HiCode className="mx-auto inline-block w-10 mb-4 " size={36}/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            It’s time to see some work. Here are few projects, pitch work and design explorations I’ve done so far.
          </p>
        </div>

        <div className="flex flex-wrap -m-4 h-auto sm:max-content">
          {projects.map((project) => (
            <a
              href={project.link}
              rel="noreferrer"
              target="_blank"
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative h-auto sm:h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-left-top transform"
                  src={project.image}
                  width="auto"
                  height="auto"
                />
                <div className="px-8 py-10 inline-grid relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>



        {/* <div className="block 2xl:flex 2xl:flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              rel="noreferrer"
              target="_blank"
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-left sm:object-top"
                  src={project.image}
                  width="auto"
                  height="auto"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div> */}
      </div>
    </section>
  );
}