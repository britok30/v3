import React from 'react';
import { Project } from './Project';
import playspace from '../images/playspace.png';
import apple from '../images/apple.png';
import appledemo from '../images/AppleNewsDemo.mp4';
import spotifyDemo from '../images/spotifyDemo.mp4';
import spotifyConnect from '../images/spotify-connect.png';
import applereact from '../images/react-apple.mp4';
import appreact from '../images/apple-react.png';
import vizcaya from '../images/vizcaya.png';
// import discord from '../images/discord.png';
import horizon from '../images/horizon.png';
import spotify from '../images/spotify.png';

export const Projects = () => {
    return (
        <div>
            <h1 className="text-gray-300 text-4xl my-10 antialiased text-center">
                Some things I've built
            </h1>

            <Project
                title="Spotify Next v2"
                description="Spotify app built with Next.js and Spotify API"
                github="https://github.com/britok30/spotify-next"
                demo={spotifyDemo}
                imgSrc={spotify}
                stack="Next.js, React, TypeScript, TailwindCSS, Recoil, Spotify API"
            />

            <Project
                title="Playspace"
                description="A web app for visualizing video game data. View your
                            favorite video games, ratings, release dates, etc.
                            Grabs information from the Rawg Api."
                github="https://github.com/britok30/Play-Space"
                demo="https://playspace.netlify.com"
                imgSrc={playspace}
                stack="React Hooks, Bootstrap, RAWG API"
            />

            <Project
                title="Spotify Connect"
                description="Spotify profile with personalized data"
                github="https://github.com/britok30/spotify-connect"
                demo={'https://spotify-connect-v1.herokuapp.com/'}
                imgSrc={spotifyConnect}
                stack="TypeScript, React, Tailwind, Spotify API"
            />

            <Project
                title="Apple News.js"
                description="Web app that features up-to-date news. Users can see top news and news based on certain categories. User can also search any topic and find news on it."
                github="https://github.com/britok30/applenews"
                demo={appledemo}
                imgSrc={apple}
                stack="React, Node, Express, Bootstrap, News API"
            />

            <Project
                title="Horizon"
                description="Search engine web app featuring Google Search API"
                github="https://github.com/britok30/horizon-search"
                demo="https://horizonsearch.netlify.app/"
                imgSrc={horizon}
                stack="React, Google Search API, Tailwind"
            />

            <Project
                title="Vizcaya Design Studio"
                description="Design studio website exploring design concept"
                github="https://github.com/britok30/Vizcaya2"
                demo="https://vizcaya.netlify.app"
                imgSrc={vizcaya}
                stack="HTML, CSS, JavaScript"
            />

            <Project
                title="Apple React"
                description="Apple product page featuring Firebase authentication"
                github="https://github.com/britok30/react-apple-landing"
                demo={applereact}
                imgSrc={appreact}
                stack="React Hooks, Firebase, SCSS"
            />
        </div>
    );
};
