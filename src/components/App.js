import React, { Fragment } from 'react';
import { Lines } from 'react-preloaders';
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
            <Lines
                animation={'fade'}
                time={2500}
                background={'linear-gradient(to right, #000000, #434343)'}
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
