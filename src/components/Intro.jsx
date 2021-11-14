import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'react-feather';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

export const Intro = () => {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const fetchUnsplash = async () => {
            const response = await axios.get(
                `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_API_KEY}`,
                {
                    content_filter: 'high',
                    orientation: 'landscape',
                    // Nature, Architecture, Texture/Patterns
                    topics: '6sMVjTLSkeQ,rnSKDHwwYUk,iUIsnVtjB0Y',
                }
            );

            setImageData(response.data);
            console.log(response.data);
            //Trigger download behind the scenes
            triggerDownload(response.data);
        };

        fetchUnsplash();
    }, []);

    const triggerDownload = (data) => {
        console.log(
            `${data.links.download_location}&client_id=${process.env.REACT_APP_API_KEY}`
        );
        return `${data.links.download_location}&client_id=${process.env.REACT_APP_API_KEY}`;
    };

    return (
        <div className="relative h-screen max-h-screen min-w-full">
            {imageData && (
                <a
                    href={`https://unsplash.com/photos/${imageData.id}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="opacity-50 object-cover h-screen max-h-screen min-w-full"
                        src={imageData.urls.full}
                        alt="hero-img"
                        loading="eager"
                    />
                </a>
            )}
            <div
                className="absolute flex justify-center items-center flex-col"
                style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <Fade bottom duration={3000} distance={'1rem'}>
                    <h1 className="text-3xl lg:text-6xl font-light text-center mb-3 text-white antialiased">
                        Brito
                    </h1>
                </Fade>
                <Fade bottom delay={2000} duration={3000} distance={'1rem'}>
                    <p className="text-lg font-extralight text-center mb-3 text-white antialiased">
                        Frontend Engineer
                    </p>
                </Fade>
            </div>
            <div className="absolute text-white text-sm right-3 bottom-3 opacity-50">
                {imageData && (
                    <Fade bottom delay={2000} duration={3000} distance={'1rem'}>
                        <>
                            Photo by{' '}
                            <a
                                href={`https://unsplash.com/${imageData.user.username}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {imageData.user.name}
                            </a>{' '}
                            on{' '}
                            <a
                                href="https://unsplash.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Unsplash
                            </a>
                        </>
                    </Fade>
                )}
            </div>

            <Fade top delay={4000} duration={3000} distance={'1rem'}>
                <div
                    className="absolute flex justify-center items-center"
                    style={{
                        bottom: '20%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <ArrowDown
                        className="animate-bounce"
                        color="#fff"
                        size={22}
                    />
                </div>
            </Fade>
        </div>
    );
};
