import React from "react";

import { HiTerminal } from 'react-icons/hi';
import { HiUsers } from 'react-icons/hi';
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <HiUsers className="w-10 inline-block mb-4" size={36}/>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 p-8 rounded">
                <HiTerminal className="block w-8 text-green-400 mb-4" size={36}/>
                <p className="leading-relaxed m-2 mb-6 text-justify">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col">
                    <span className="title-font font-medium text-white text-lg">
                      {testimonial.name}
                    </span>
                    <span className="text-green-400 text-xs uppercase">
                      {testimonial.position}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}