import React from "react";
import { GitHub, Share } from "react-feather";

interface ProjectProps {
  title: string;
  description: string;
  github: string;
  demo: string;
  imgSrc: string;
  stack: string;
}

export const Project = ({
  title,
  description,
  github,
  demo,
  imgSrc,
  stack,
}: ProjectProps) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col md:flex-row md:items-start mb-12">
        <div className="w-72">
          <img
            className="object-cover rounded-md opacity-60"
            src={imgSrc}
            alt="project-img"
            loading="lazy"
          />
        </div>

        <div className="flex justify-between items-start flex-col w-64 mt-10 md:ml-10 md:mt-0">
          <h2 className="text-2xl text-white mb-2 antialiased">{title}</h2>
          <p className="text-gray-400 mb-2 text-sm antialiased">
            {description}
          </p>
          <p className="text-gray-400 mb-2 text-sm antialiased">{stack}</p>
          <div className="flex justify-center items-center">
            <a className="mr-2" href={github} target="_blank" rel="noreferrer">
              <GitHub color="#fff" size={22} />
            </a>
            <a href={demo} target="_blank" rel="noreferrer">
              <Share color="#fff" size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
