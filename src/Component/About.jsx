import React from "react";

const About = () => {

    const Links = [
        {
            id: 1,
            list: "Experienced web developer with a passion for creating user-friendly websites. Specializing in dynamic and responsive web applications using React and Angular for three years."
        },
        {
            id: 2,
            list: "I'm committed to delivering top-notch code and creating seamless user experiences. Thriving in collaboration, I turn innovative ideas into robust, feature-rich applications."
        },
        {
            id: 3,
            list: "I excel in adapting to tech trends, implementing complex features, optimizing performance, and ensuring pixel-perfect designs with detail attention."
        },
        {
            id: 4,
            list: "I specialize in full-stack development with Node.js, Firebase, and MySQL, complemented by expertise in version control, testing, and agile practices."
        },
        {
            id: 5,
            list: "I'm a continuous learner in the developer community, focused on impactful projects, not just writing code."
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