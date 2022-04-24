import React from "react";

export const Connect = () => {
  return (
    <>
      <h1 className="text-white text-4xl mt-10 text-center antialiased">
        Get in touch
      </h1>

      <div className="flex justify-center items-center flex-col md:flex-row md:space-x-6  mt-3 font-light">
        <a
          className="text-gray-400"
          href="https://github.com/britok30"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>

        <a
          className="text-gray-400"
          href="mailto:britok30@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Gmail
        </a>

        <a
          className="text-gray-400"
          href="https://www.linkedin.com/in/kelvin-brito/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>

        <a
          className="text-gray-400"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </>
  );
};
