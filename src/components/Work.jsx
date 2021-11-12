import React from 'react';
import Project from './Project';
import playspace from '../images/playspace.jpg';
import covid from '../images/covid.png';
import apple from '../images/apple.png';
import appledemo from '../images/AppleNewsDemo.mp4';
import applereact from '../images/react-apple.mp4';
import appreact from '../images/apple-react.png';
import vizcaya from '../images/vizcaya.png';
// import hike from '../images/hike.png';
import skudra from '../images/skudra.png';
import akg from '../images/akg.png';
import productivo from '../images/productivo.png';
import id from '../images/ID.png';
import Fade from 'react-reveal/Fade';
import discord from '../images/discord.png';

const Work = () => {
    return (
        <div>
            <section>
                <Fade bottom duration={3000} distance={'1rem'}>
                    <h2 className="sub-heading">Some Things I've Built</h2>
                </Fade>
                <Project
                    title="Playspace"
                    description="A web app for visualizing video game data. View your
                            favorite video games, ratings, release dates, etc.
                            Grabs information from the Rawg Api."
                    github="https://github.com/britok30/Play-Space"
                    demo="https://playspace.netlify.com"
                    img={playspace}
                    stack="React Hooks, Bootstrap, RAWG API"
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
                    demo="https://vizcaya.netlify.app"
                    img={vizcaya}
                    stack="HTML, CSS, JavaScript"
                />
                <div className="project-space"></div>
                <Project
                    title="Apple React"
                    description="Apple product page featuring Firebase authentication"
                    github="https://github.com/britok30/react-apple-landing"
                    demo={applereact}
                    img={appreact}
                    stack="React Hooks, Firebase, SCSS"
                />
                <div className="project-space"></div>
                <Project
                    title="Discord React"
                    description="Discord clone featuring Firebase"
                    github="https://github.com/britok30/discord-react"
                    demo={'https://discord-clone-9d6be.web.app/'}
                    img={discord}
                    stack="React Hooks, Firebase, Redux"
                />
                <div className="project-space"></div>
                <Project
                    title="Il Duce"
                    description="Official website of Il Duce"
                    github="https://github.com/britok30/ID"
                    demo="https://ilduceofficial.com/"
                    img={id}
                    stack="HTML, CSS, JavaScript, Greensock"
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
                    demo="http://akgres.netlify.app"
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
