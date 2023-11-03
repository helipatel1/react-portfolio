import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                     <FaLinkedin size={30} />
                </>
            ),
            href: "https://linkedin.com",
            // style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/helipatel1",
        },
        {
            id: 3,
            child: (
                <>
                     <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:heli171998@gmail.com",
        },
        // {
        //     id: 4,
        //     child: (
        //         <>
        //              <BsFillPersonLinesFill size={30} />
        //         </>
        //     ),
        //     // style: "rounded-br-md",
        //     href: "/heli.pdf",
        //     download: true,
        // },
    ];

    return (
        <div>
            <ul className="flex px-2">
                {links.map((link) => (
                    <li
                        key={link.id}
                        className={
                            "flex justify-between items-center p-2 bg-gray-500 rounded-full mx-1 hover:scale-105 duration-300" 
                        }
                    >
                        <a
                            href={link.href ? link.href : "/"}
                            className="flex justify-between items-center w-full text-white"
                            // download={link.download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks