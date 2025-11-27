import React from "react";
import { IoVolumeHigh } from 'react-icons/io5';
import profilePicture from './../assets/Profile picture.jpg';

import {Howl} from 'howler';
import pronunciation from './../assets/Pronunciation.mp3';

export default function About() {

  const play = () => {
    new Howl({
      src: pronunciation, 
      volume: 1.0
    }).play();
  }

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Sharmik <IoVolumeHigh className="w-5 inline-block mt-2 text-gray-400 hover:text-white" size={16} onClick={play}/>
          </h1>
          <h2 className="title-font sm:text-2xl text-xl mb-4 font-medium text-white">
            I love to play with programs.
          </h2>
          <p className="mb-8 leading-relaxed text-gray-300 text-justify">
          I can still recall from my memory, when a 15-year-old boy sitting next to his sister and staring at the computer screen, curiously waiting 
          for the output by a C program. When his sister build and run that program, it generated a right angled triangle made up of asterisk signs. 
          Then, she made some changes in one line and rerun the program, which flipped the triangle vertically. The boy was wondering that how a small 
          change in a program can make the huge difference in the output. After this boy made up his mind and set the goal that he will explore more 
          in the IT field.
          <br /> <br />
          The portfolio, which is opened on your screen, is designed by the same boy after 15 years. Yes, I followed my dreams and my goals. I have 
          pursued Masters in Information Technology from a Swinburne University of Technology. With 2-years of experience as a developer in hand, 
          I started working on my portfolio using ReactJS and Tailwind CSS. This portfolio will take you into my IT journey til date. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white text-center bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white text-center bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={profilePicture}
            width="100%"
          />
        </div>
      </div>
    </section>
  );
}