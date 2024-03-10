import React from "react";
import { 
    FaGithub,
    FaLinkedin,
} from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Obiefuna Anthony-Uzoeto. All Rights Reserved.`,
    author: {
        name: "Obiefuna Anthony-Uzoeto",
        accounts: [
            {
                url: "https://github.com/ObiAU",
                label: "Github Account",
                type: "gray",
                icon: <FaGithub/>
            },
            {
                url: "https://www.linkedin.com/in/obi-anthony-uzoeto-4219b1183/",
                label: "LinkedIn Account",
                type: "LinkedIn",
                icon: <FaLinkedin/>
            },
            {
                url: "mailto:obszeto@gmail.com",
                label: "Mail Obi",
                type: "gray",
                icon: <FiMail/>
            }
        ]
    }
}

export default siteConfig;