import React from 'react';
import Fade from 'react-reveal/Fade';
import arrow from '../images/chevron.svg';

const Arrow = () => {
    const arrowStyle = {
        height: '20px',
        width: '20px',
        display: 'block',
        margin: 'auto',
        filter: 'invert(100%)',
    };
    return (
        <div>
            <Fade top duration={3000} delay={6000}>
                <img
                    style={arrowStyle}
                    className="arrow"
                    src={arrow}
                    alt="arrow-down"
                />
            </Fade>
        </div>
    );
};

export default Arrow;
