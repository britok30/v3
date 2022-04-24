import React, { useState, useEffect } from "react";
import { ArrowDown, Download } from "react-feather";
import axios, { AxiosResponse } from "axios";

interface Topics {
  nature: string;
  architecture: string;
  wallpapers: string;
  experimental: string;
}

export const Intro = () => {
  const [imageData, setImageData] = useState<any>(null);
  const [download, setDownload] = useState<any>(null);
  const baseUrl: string = "https://api.unsplash.com";

  useEffect(() => {
    const topics: Topics = {
      nature: "6sMVjTLSkeQ",
      architecture: "rnSKDHwwYUk",
      wallpapers: "bo8jQKTaE0Y",
      experimental: "qPYsDzvJOYc",
    };

    const fetchUnsplash = async () => {
      const response: AxiosResponse = await axios.get(
        `${baseUrl}/photos/random?client_id=${process.env.REACT_APP_API_KEY}`,
        {
          params: {
            content_filter: "high",
            topics: `${topics.nature},${topics.architecture},${topics.wallpapers},${topics.experimental}`,
          },
        }
      );

      setImageData(response.data);
    };

    fetchUnsplash();
  }, []);

  useEffect(() => {
    if (!imageData) return;

    const fetchDownload = async (data: any) => {
      const response = await axios.get(
        `${data.links.download_location}&client_id=${process.env.REACT_APP_API_KEY}`
      );

      setDownload(response.data);
    };

    fetchDownload(imageData);
  }, [imageData]);

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
            loading="lazy"
          />
        </a>
      )}
      <div className="absolute flex justify-center items-center flex-col top-[50%] left-[50%]">
        <h1 className="text-3xl lg:text-6xl font-light text-center mb-3 text-white antialiased">
          Brito
        </h1>

        <p className="text-lg font-extralight text-center mb-8 text-white antialiased">
          Frontend Engineer
        </p>

        <div className="mt-8">
          <ArrowDown className="animate-bounce" color="#fff" size={22} />
        </div>
      </div>

      <div className="absolute text-white text-sm right-3 bottom-3 opacity-50">
        {imageData && (
          <>
            Photo by{" "}
            <a
              href={`https://unsplash.com/${imageData.user.username}`}
              target="_blank"
              rel="noreferrer"
            >
              {imageData.user.name}
            </a>
            on{" "}
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">
              Unsplash
            </a>
          </>
        )}
      </div>

      <div className="absolute bottom-3 left-3 opacity-70 text-white">
        {download && (
          <a
            href={download.url}
            download={imageData.user.name}
            target="_blank"
            rel="noreferrer"
          >
            <Download color="#fff" size={28} />
          </a>
        )}
      </div>
    </div>
  );
};
