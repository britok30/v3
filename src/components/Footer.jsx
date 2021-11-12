import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    const [date, setDate] = useState();

    const getYear = () => {
        setDate(new Date().getFullYear());
    };

    useEffect(() => {
        getYear();
    }, []);

    return (
        <div>
            <div className="row footer">
                <div className="col-md-12">
                    <div className="footer-text">
                        <Fade bottom cascade duration={3000} distance={'1rem'}>
                            <p>
                                &copy; {date} | Designed & built by Kelvin Brito
                            </p>
                            <p>
                                Made with
                                <span role="img" aria-label="emoji">
                                    ❤️
                                </span>
                                with React
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
