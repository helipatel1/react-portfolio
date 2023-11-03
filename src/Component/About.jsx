import React from "react";

const About = () => {

    const Links = [
        {
            id: 1,
            list: "Proactively liaised with the design team and project team to ensure efficient and timly delivery of significant projects."
        },
        {
            id: 2,
            list: "Designed and Developed web application using javascript frameworks ReactJs and AngularJs to increase tarrget audience engagement by 12%."
        },
        {
            id: 3,
            list: "Created accessible,responsive,and functional user interfaces to allow visitors on any device to have the same perfect user expeirence."
        },
        // {
        //     id:2,
        //     list: "Designed and Developed web application using javascript frameworks ReactJs and AngularJs to increase tarrget audience engagement by 12%."
        // },
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