import React from 'react';
import Fade from 'react-reveal/Fade';
import Arrow from './Arrow';

const Intro = () => {
    return (
        <div>
            <div id="brito">
                <div className="intro">
                    <Fade bottom cascade duration={3000} delay={4500}>
                        <h3>Brito</h3>
                        <p>Frontend Developer</p>
                    </Fade>
                    <div className="whitespace"></div>
                    <Arrow />
                </div>
            </div>
        </div>
    );
};

export default Intro;
