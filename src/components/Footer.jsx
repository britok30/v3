import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

export const Footer = () => {
    const [date, setDate] = useState();

    const getYear = () => {
        setDate(new Date().getFullYear());
    };

    useEffect(() => {
        getYear();
    }, []);

    return (
        <div className="block w-full text-center my-10 font-light">
            <Fade bottom cascade duration={3000} distance={'1rem'}>
                <p className="text-white text-xs">
                    &copy; {date} | Designed & built by Kelvin Brito
                </p>
                <p className="text-white text-xs">
                    Made with
                    <span
                        className="mx-2 text-xs"
                        role="img"
                        aria-label="emoji"
                    >
                        ❤️
                    </span>
                    with React & Tailwind
                </p>
            </Fade>
        </div>
    );
};
