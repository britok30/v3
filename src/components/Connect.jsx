import React from 'react';
import resume from '../images/Kelvin Brito Resume.pdf';
import Fade from 'react-reveal/Fade';

const Connect = () => {
    return (
        <div>
            <section>
                <Fade bottom duration={3000} distance={'1rem'}>
                    <h4 className="mini-heading">Get In Touch</h4>
                </Fade>
                <hr className="hr" />
                <div className="row">
                    <ul className="connect-list">
                        <Fade bottom cascade duration={3000} distance={'1rem'}>
                            <li className="connect">
                                <a
                                    href="https://github.com/britok30"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Github
                                </a>
                            </li>
                            <li className="connect">
                                <a
                                    href="mailto:britok30@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Gmail
                                </a>
                            </li>
                            <li className="connect">
                                <a
                                    href="https://www.linkedin.com/in/kelvin-brito/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Linkedin
                                </a>
                            </li>
                            <li className="connect">
                                <a
                                    href={resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Resume
                                </a>
                            </li>
                        </Fade>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Connect;
