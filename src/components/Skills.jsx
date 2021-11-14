import React from 'react';
import Fade from 'react-reveal/Fade';

export const Skills = () => {
    const skills = [
        'HTML',
        'CSS/Sass',
        'JavaScript (ES6+)',
        'TypeScript',
        'Tailwind',
        'React (Hooks)',
        'Redux',
        'Jest',
        'Vue',
        'Nuxt',
        'Git',
    ];

    return (
        <div>
            <Fade bottom duration={3000} distance={'1rem'}>
                <h1 className="text-gray-300 text-4xl mt-10 antialiased">
                    Skills
                </h1>
            </Fade>
            <div className="border"></div>
            <div className="mt-3">
                <Fade bottom cascade duration={3000} distance={'1rem'}>
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="text-white text-sm font-light mx-2 cursor-pointer hover:text-red-600 transition-all duration-200 ease-in-out antialiased"
                        >
                            {skill}
                        </span>
                    ))}
                </Fade>
            </div>
        </div>
    );
};
