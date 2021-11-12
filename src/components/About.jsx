import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div>
            <section>
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <Fade bottom duration={3000} distance={'1rem'}>
                            <h2 className="sub-heading">About Me</h2>
                        </Fade>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6 about-p">
                        <Fade
                            bottom
                            duration={3000}
                            distance={'1rem'}
                            delay={1000}
                        >
                            <p>
                                Hey there, I'm Kelvin Brito and I'm a front-end
                                software engineer specializing in building &
                                designing exceptional, high-quality websites and
                                applications. As I continue this life-long
                                journey of self-learning and mastering my craft,
                                I hope to be shaped by the challenges and
                                experiences coming my way.
                            </p>
                            <p>
                                I thrive at the intersection of tech +
                                art/design. I'm passionate in combining my
                                technical knowledge and artistic creativity to
                                build beautiful UIs, and continue expanding my
                                knowledge in everything programming.
                            </p>
                            <p>
                                In my free time, I like doing street
                                photography, reading books, bike trails,
                                traveling, snowboarding, hiking, and painting.
                            </p>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
