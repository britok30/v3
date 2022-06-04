import React from 'react';

export const Skills = () => {
    const skills = [
        'HTML',
        'CSS/Sass',
        'JavaScript (ES6+)',
        'TypeScript',
        'Tailwind',
        'React',
        'Next.js',
        'CSS-in-JS',
        'Vue',
        'Git',
        'Github',
        'Agile & SCRUM',
        'REST',
    ];

    return (
        <div>
            <h1 className="text-gray-300 text-4xl mt-10 antialiased text-center">
                Skills
            </h1>

            <div className="mt-3 flex flex-col items-center justify-center md:flex-row md:space-x-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="text-gray-400 text-sm font-light cursor-pointer hover:text-red-600 transition-all duration-200 ease-in-out antialiased"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};
