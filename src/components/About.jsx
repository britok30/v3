import React from 'react';
import Fade from 'react-reveal/Fade';

export const About = () => {
    return (
        <div>
            <Fade bottom duration={3000} distance={'1rem'}>
                <h1 className="text-gray-300 text-2xl md:text-4xl text-center font-bold mt-14">
                    Hey there, I'm Kelvin Brito!
                </h1>
            </Fade>

            <div className="w-60 md:w-96 antialiased mx-auto">
                <Fade bottom duration={3000} distance={'1rem'}>
                    <p className="font-light text-gray-400 my-5">
                        I'm a front-end software engineer specializing in
                        building & designing exceptional, high-quality websites
                        and applications. As I continue this life-long journey
                        of self-learning and mastering my craft, I hope to be
                        shaped by the challenges and experiences coming my way.jfgk the chslnnehsnf jjff
                    </p>
                </Fade>
                <Fade bottom duration={3000} distance={'1rem'}>
                    <p className="font-light text-gray-400 mb-5">
                        I thrive at the intersection of tech & art/design. I'm
                        passionate in combining my technical knowledge and
                        artistic creativity to build beautiful UIs, and continue
                        expanding my knowledge in everything front-end.
                    </p>
                </Fade>
                <Fade bottom duration={3000} distance={'1rem'}>
                    <p className="font-light text-gray-400 mb-5">
                        In my free time, I enjoy photography, reading books,
                        bike trails, traveling, hiking, and painting.
                    </p>
                </Fade>
            </div>
        </div>
    );
};
