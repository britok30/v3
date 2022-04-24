import React from 'react';
import { Intro } from './Intro';
import { About } from './About';
import { Work } from './Work';
import { Skills } from './Skills';
import { Connect } from './Connect';
import { Footer } from './Footer';

const App = () => {
    return (
        <div className="bg-black dark min-h-screen flex justify-center flex-col">
            <Intro />
            <div className="mx-auto">
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
