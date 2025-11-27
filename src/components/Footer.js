import React, { useEffect, useState } from "react";
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';

export default function Footer() {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    
    const generateQuote = async () => {
        let response = await fetch("https://programming-quotesapi.vercel.app/api/random", {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        });
        let result = await response.json();
        setQuote(result.quote);
        setAuthor(result.author);
    };

    useEffect(() => {
        generateQuote();
    }, []);

  return (
    <footer className="bg-gray-800 md:sticky bottom-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-400">
        <nav className="md:mr-auto md:ml-1 md:py-1 md:pl-0 flex flex-1 items-center justify-left">
          <p className="mr-5 text-white">
              <i>"{quote}"</i> - {author}
          </p>
        </nav>
        <a
          href="https://github.com/sharmik-hirpara"
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center bg-gray-800 border-0 py-2 px-2 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base mt-4 md:mt-0">
          <IoLogoGithub className="w-7 h-7" size="100" />
        </a>
        <a
          href="https://www.linkedin.com/in/sharmik-hirpara"
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center bg-gray-800 border-0 py-2 px-2 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base mt-4 md:mt-0">
          <IoLogoLinkedin className="w-7 h-7" size="100" />
        </a>
      </div>
    </footer>
  );
}