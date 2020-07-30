import React from 'react';
import Intro from './Intro';
import About from './About';
import Work from './Work';
import '../App.css';

const App = () => {
    return (
        <div>
            <Intro />
            <div className="container">
                <About />
                <Work />
            </div>
        </div>
    );
};

export default App;
