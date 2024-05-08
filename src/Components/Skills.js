<<<<<<< HEAD
import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaFire, FaOpenid } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiVercel, SiTailwindcss, SiApi } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        'Python': <FaPython/>,
        'React': <FaReact/>,
        'Javascript': <DiJavascript1/>,
        'Node': <DiNodejs/>,
        'Express': <SiExpress/>,
        'MongoDb': <SiMongodb/>,
        'Git': <FaGitAlt/>,
        'Github': <FaGithub/>,
        'Npm': <FaNpm/>,
        'Figma': <FaFigma/>,
        'Bootstrap': <FaBootstrap/>,
        'Vercel': <SiVercel/>,
        'Firebase': <FaFire />,
        'OAuth': <FaOpenid />,
        'Tailwind CSS': <SiTailwindcss />,
      };

    return (
        <div className="SkillBox">
            {icon[skill]}
        </div>
    );
}

export default Skills;
=======
import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaFire, FaOpenid } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiVercel, SiTailwindcss, SiApi } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        'Python': <FaPython/>,
        'React': <FaReact/>,
        'Javascript': <DiJavascript1/>,
        'Node': <DiNodejs/>,
        'Express': <SiExpress/>,
        'MongoDb': <SiMongodb/>,
        'Git': <FaGitAlt/>,
        'Github': <FaGithub/>,
        'Npm': <FaNpm/>,
        'Figma': <FaFigma/>,
        'Bootstrap': <FaBootstrap/>,
        'Vercel': <SiVercel/>,
        'Firebase': <FaFire />,
        'OAuth': <FaOpenid />,
        'Tailwind CSS': <SiTailwindcss />,
      };

    return (
        <div className="SkillBox">
            {icon[skill]}
        </div>
    );
}

export default Skills;
>>>>>>> a39f6d19bacd9e8af6ec4d53020089e193297da5
