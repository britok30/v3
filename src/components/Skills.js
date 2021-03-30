import React from 'react';
import Fade from 'react-reveal/Fade';

const Skills = () => {
    const skills = [
        'HTML',
        'CSS/Sass',
        'JavaScript (ES6+)',
        'jQuery',
        'Bootstrap',
        'React (Hooks)',
        'Redux',
        'Jest',
        'Vue',
        'Nuxt',
        'Git',
    ];

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
                                {skills.map((skill) => (
                                    <li className="skills">{skill}</li>
                                ))}
                            </Fade>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
