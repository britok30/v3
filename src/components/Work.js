import React from 'react';
import Project from './Project';
import playspace from '../images/playspace.jpg';
import covid from '../images/covid.png';

const Work = () => {
    return (
        <div>
            <section>
                <h2 className="sub-heading">
                    <span className="number">02.</span> Some things I've Built
                </h2>
                <Project
                    title="Playspace"
                    description="A web app for visualizing video game data. View your
                            favorite video games, ratings, release dates, etc.
                            Grabs information from the Rawg Api."
                    github="https://github.com/britok30/Play-Space"
                    demo="https://playspace.netlify.com"
                    img={playspace}
                    stack="React, RAWG API"
                />
                <div className="project-space"></div>
                <Project
                    title="Covid.js"
                    description="This web app features live up-to-date data from multiple sources. The user can look at an overall outlook of the world and the United States. Features a news section, a search section to lookup cities/counties, and data tables."
                    github="https://github.com/britok30/covid"
                    demo="https://covid19js.netlify.app/"
                    img={covid}
                    stack="React, Corona Tracking Project API, Bootstrap"
                />
            </section>
        </div>
    );
};

export default Work;
