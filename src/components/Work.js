import React from 'react';
import Project from './Project';
import playspace from '../images/playspace.jpg';
import covid from '../images/covid.png';
import apple from '../images/apple.png';
import appledemo from '../images/AppleNewsDemo.mp4';
import vizcaya from '../images/vizcaya.png';
import hike from '../images/hike.png';
import skudra from '../images/skudra.png';
import akg from '../images/akg.png';
import productivo from '../images/productivo.png';

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
                    title="Apple News.js"
                    description="Web app that features up-to-date news. Users can see top news and news based on certain categories. User can also search any topic and find news on it."
                    github="https://github.com/britok30/applenews"
                    demo={appledemo}
                    img={apple}
                    stack="React, Node, Express, Bootstrap, News API"
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
                <div className="project-space"></div>
                <Project
                    title="Vizcaya Design Studio"
                    description="Design studio website exploring design concept"
                    github="https://github.com/britok30/Vizcaya2"
                    demo="https://vizcayamia.xyz/"
                    img={vizcaya}
                    stack="HTML, CSS, JavaScript"
                />
                <div className="project-space"></div>
                <Project
                    title="The Hike Co."
                    description="Hiking company website for a client"
                    github="https://github.com/britok30/The-Hike"
                    demo="https://thehikeco.netlify.app/"
                    img={hike}
                    stack="HTML, CSS, JavaScript, Parallax.js"
                />
                <div className="project-space"></div>
                <Project
                    title="Skudra"
                    description="Portfolio for a Toronto based photographer"
                    github="https://github.com/britok30/skudra"
                    demo="https://skudra.netlify.app/"
                    img={skudra}
                    stack="HTML, CSS, JavaScript, Greensock"
                />
                <div className="project-space"></div>
                <Project
                    title="AKG Real Estate"
                    description="Real Estate website based in California"
                    github="https://github.com/britok30/akg-res"
                    demo="https://britores.xyz/"
                    img={akg}
                    stack="HTML, CSS, JavaScript"
                />
                <div className="project-space"></div>
                <Project
                    title="Productivo"
                    description="E-Commerce concept site for notebooks/planners"
                    github="https://github.com/britok30/Productivo"
                    demo="https://productivo.netlify.app/"
                    img={productivo}
                    stack="HTML, CSS, JavaScript, Greensock"
                />
            </section>
        </div>
    );
};

export default Work;
