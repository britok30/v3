import React from 'react';
import Fade from 'react-reveal/Fade';
import hero from '../images/hero.jpg';

const Intro = () => {
    return (
        <div>
            <div>
                <div className="relative">
                    <img
                        className="opacity-50 object-cover min-h-screen"
                        src={hero}
                        alt="hero-img"
                    />
                    <div className="absolute flex justify-center items-center flex-col inset-1/2">
                        <h3 className="text-5xl lg:text-8xl text-center mb-3">
                            Brito
                        </h3>
                        <p className="text-3xl lg:text-4xl text-center mb-3">
                            Frontend Engineer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
