import React from "react";

const About = () => {

    const Links = [
        {
            id: 1,
            list: " Developed and maintained front-end features using React, contributing to a 20% increase in user engagement."
        },
        {
            id: 2,
            list: "Collaborated with cross-functional teams to design and implement new features, ensuring a seamless user experience."
        },
        {
            id: 3,
            list: " Conducted code reviews, identified improvements, and implemented best practices to enhance code quality."
        },
        {
            id: 4,
            list: "Worked with RESTful APIs to integrate front-end functionalities with back-end services."
        },
    ]
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>
                {Links.map((item) => (
                    <li className="text-xl " key={item.id}>
                        {item.list}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default About;