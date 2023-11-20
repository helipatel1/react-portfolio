import React from "react";
import ticTacToe from "../assets/tic-tac-toe.png";
import quiz from "../assets/quiz.png";
import voiceConverter from "../assets/voiceConverter.png";
import toDo from "../assets/to-do.png"
import recipe from "../assets/recipe.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ticTacToe,
      href: "https://github.com/helipatel1/tic-tac-toe",
      name: "Tic-Tac-Toe Game"
    },
    {
      id: 2,
      src: quiz,
      href: "https://github.com/helipatel1/Quiz",
      name: "Quiz App"
    },
    {
      id: 3,
      src: voiceConverter,
      href: "https://github.com/helipatel1/Voice-Converter",
      name: "Voice-Converter"
    },
    {
      id: 4,
      src: toDo,
      href: "https://github.com/helipatel1/to-do",
      name: "To-Do App"
    },
    {
      id: 5,
      src: recipe,
      href: "https://github.com/helipatel1/Receipe",
      name: "Delicious"
    },
    //     {
    //       id: 6,
    //       src: reactWeather,
    //     },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, name }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <button className="px-6 py-3 w-full m-4 duration-200 hover:scale-105">
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;