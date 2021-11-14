import React from 'react';
import resume from '../images/Kelvin Brito Resume.pdf';
import Fade from 'react-reveal/Fade';

export const Connect = () => {
    return (
        <>
            <Fade bottom duration={3000} distance={'1rem'}>
                <h1 className="text-white text-4xl mt-10 text-center antialiased">
                    Get in touch
                </h1>
            </Fade>

            <div className="flex justify-center items-center flex-col md:flex-row md:space-x-6  mt-3 font-light">
                <Fade bottom cascade duration={3000} distance={'1rem'}>
                    <a
                        className="text-gray-400"
                        href="https://github.com/britok30"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>

                    <a
                        className="text-gray-400"
                        href="mailto:britok30@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Gmail
                    </a>

                    <a
                        className="text-gray-400"
                        href="https://www.linkedin.com/in/kelvin-brito/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Linkedin
                    </a>

                    <a
                        className="text-gray-400"
                        href={resume}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                    </a>
                </Fade>
            </div>
        </>
    );
};
