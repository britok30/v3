import React from 'react';
import { GitHub, Share } from 'react-feather';

export const Project = ({ title, description, github, demo, img, stack }) => {
    return (
        <div>
            <div className="flex justify-center items-start mb-12">
                <div className="w-72">
                    <img
                        className="object-cover rounded-md opacity-60"
                        src={img}
                        alt="project-img"
                        loading="lazy"
                    />
                </div>

                <div className="flex justify-between items-start flex-col w-64 ml-10">
                    <h2 className="text-2xl text-white mb-2 antialiased">
                        {title}
                    </h2>
                    <p className="text-gray-300 mb-2 text-sm antialiased">
                        {description}
                    </p>
                    <p className="text-gray-300 mb-2 text-sm antialiased">
                        {stack}
                    </p>
                    <div className="flex justify-center items-center">
                        <a
                            className="mr-2"
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                        >
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
