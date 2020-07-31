import React, { Fragment } from 'react';
import { Sugar } from 'react-preloaders';
import Intro from './Intro';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Connect from './Connect';
import Footer from './Footer';

import '../App.css';

const App = () => {
    return (
        <Fragment>
            <Intro />
            <Sugar
                animation={'fade'}
                time={3500}
                background={'#000'}
                color={'#feceab'}
            />
            <div className="container">
                <About />
                <Work />
                <Skills />
                <Connect />
                <Footer />
            </div>
        </Fragment>
    );
};

export default App;
