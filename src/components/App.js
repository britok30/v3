import React from 'react';
import Intro from './Intro';
import About from './About';
import '../App.css';

const App = () => {
    return (
        <div>
            <Intro />
            <div className="container">
                <About />
            </div>
        </div>
    );
};

export default App;
