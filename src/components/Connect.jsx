import React from 'react';
import resume from '../images/Kelvin Brito Resume.pdf';
import Fade from 'react-reveal/Fade';

export const Connect = () => {
    return (
        <>
            <Fade bottom duration={3000} distance={'1rem'}>
                <h1 className="text-gray-300 text-4xl mt-10">Get In Touch</h1>
            </Fade>
            <div className="border"></div>
            <div className="flex justify-center space-x-6 items-center flex-col md:flex-row mt-3 font-light">
                <Fade bottom cascade duration={3000} distance={'1rem'}>
                    <a
                        className="text-white"
                        href="https://github.com/britok30"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>

                    <a
                        className="text-white"
                        href="mailto:britok30@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Gmail
                    </a>

                    <a
                        className="text-white"
                        href="https://www.linkedin.com/in/kelvin-brito/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Linkedin
                    </a>

                    <a
                        className="text-white"
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
