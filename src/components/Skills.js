import React from 'react';
import Fade from 'react-reveal/Fade';

const Skills = () => {
    return (
        <div>
            <section>
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-4">
                        <div className="sub-heading">Skills</div>
                    </div>
                    <div className="col-md-8 col-lg-8 col-sm-8">
                        <ul>
                            <Fade
                                bottom
                                cascade
                                duration={3000}
                                distance={'1rem'}
                            >
                                <li className="skills">HTML</li>
                                <li className="skills">CSS/Sass</li>
                                <li className="skills">JavaScript (ES6+)</li>
                                <li className="skills">jQuery</li>
                                <li className="skills">TypeScript</li>
                                <li className="skills">Bootstrap</li>
                                <li className="skills">React (Hooks)</li>
                                <li className="skills">Redux</li>
                                <li className="skills">Vue</li>
                                <li className="skills">Git</li>
                                <li className="skills">Adobe Creative Suite</li>
                            </Fade>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
