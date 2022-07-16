import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4 text-center my-6 underline ">
        GitHub Finder
      </h1>
      <p className="mb-4 mt-8 text-2xl font-light">
        A full-stack application that uses the GitHub API to search for users.
      </p>
      <p className="text-lg text-gray-400">
        Author:{" "}
        <a href="https://twitter.com/swiss_45" target="_blank" rel="noreferrer">
          Ayomide
        </a>
      </p>
      <p>This application was built using the following technologies:</p>
      <ul>
        <li>React</li>
        <li>GitHub API</li>
      </ul>
      <p>Version: 1.00</p>
    </div>
  );
};

export default About;
