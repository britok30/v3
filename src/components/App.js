import React from 'react';
import Intro from './Intro';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Connect from './Connect';
import Footer from './Footer';

import '../App.css';

const App = () => {
    return (
        <div>
            <Intro />
            <div className="container">
                <About />
                <Work />
                <Skills />
                <Connect />
                <Footer />
            </div>
        </div>
    );
};

export default App;
