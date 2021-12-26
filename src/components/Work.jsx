import React from 'react';
import { Project } from './Project';
import playspace from '../images/playspace.jpg';
import apple from '../images/apple.png';
import appledemo from '../images/AppleNewsDemo.mp4';
import spotifyDemo from '../images/spotifyDemo.mp4';
import applereact from '../images/react-apple.mp4';
import appreact from '../images/apple-react.png';
import vizcaya from '../images/vizcaya.png';
import Fade from 'react-reveal/Fade';
import discord from '../images/discord.png';
import horizon from '../images/horizon.png';
import spotify from '../images/spotify.png';

export const Work = () => {
    return (
        <div>
            <Fade bottom duration={3000} distance={'1rem'}>
                <h1 className="text-gray-300 text-4xl my-10 antialiased text-center">
                    Some things I've built
                </h1>
            </Fade>

            <Fade bottom duration={3000} distance={'1rem'}>
                <Project
                    title="Spotify Next v2"
                    description="Spotify app built with Next.js and Spotify API"
                    github="https://github.com/britok30/spotify-next"
                    demo={spotifyDemo}
                    img={spotify}
                    stack="Next.js, React, TypeScript, TailwindCSS, Recoil, Spotify API"
                />
            </Fade>

            <Fade bottom duration={3000} distance={'1rem'}>
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
            </Fade>
            <Fade bottom duration={3000} distance={'1rem'}>
                <Project
                    title="Apple News.js"
                    description="Web app that features up-to-date news. Users can see top news and news based on certain categories. User can also search any topic and find news on it."
                    github="https://github.com/britok30/applenews"
                    demo={appledemo}
                    img={apple}
                    stack="React, Node, Express, Bootstrap, News API"
                />
            </Fade>
            <Fade bottom duration={3000} distance={'1rem'}>
                <Project
                    title="Horizon"
                    description="Search engine web app featuring Google Search API"
                    github="https://github.com/britok30/horizon-search"
                    demo="https://horizonsearch.netlify.app/"
                    img={horizon}
                    stack="React, Google Search API, TailwindCSS"
                />
            </Fade>
            <Fade bottom duration={3000} distance={'1rem'}>
                <Project
                    title="Vizcaya Design Studio"
                    description="Design studio website exploring design concept"
                    github="https://github.com/britok30/Vizcaya2"
                    demo="https://vizcaya.netlify.app"
                    img={vizcaya}
                    stack="HTML, CSS, JavaScript"
                />
            </Fade>
            <Fade bottom duration={3000} distance={'1rem'}>
                <Project
                    title="Apple React"
                    description="Apple product page featuring Firebase authentication"
                    github="https://github.com/britok30/react-apple-landing"
                    demo={applereact}
                    img={appreact}
                    stack="React Hooks, Firebase, SCSS"
                />
            </Fade>
            <Fade bottom duration={3000} distance={'1rem'}>
                <Project
                    title="Discord React"
                    description="Discord clone featuring Firebase"
                    github="https://github.com/britok30/discord-react"
                    demo={'https://discord-clone-9d6be.web.app/'}
                    img={discord}
                    stack="React Hooks, Firebase, Redux"
                />
            </Fade>
        </div>
    );
};
