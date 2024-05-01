import React from 'react'

import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";

const Skills = () => {
  return (
    <div>
        <div className='flex flex-col w-10/12 mx-auto gap-y-10 text-8xl justify-between my-10  '>
            <div className='flex flex-col justify-center items-center gap-2 '><FaReact className='w-[30%] '/> <p className='text-xl '> Mastering React.js involved ME delving into Redux for state management, optimizing forms and routes for seamless navigation, and crafting interfaces that users adore. By leveraging custom hooks, I ensured efficient data handling and authentication, resulting in projects that not only impressed but also left users satisfied and coming back for more.</p></div>
            <div className='flex justify-around'>   
                <FaNodeJs />    
                <SiExpress />
            </div>
            <div className='text-xl '>
                Mastering Node.js and Express.js encompassed seamlessly integrating payment systems and handling APIs from frontend to backend responses, alongside JWT token authentication for secure user sessions. Implementing toast notifications, login/logout functionalities with secure system storage, and managing over 10 Mongoose models created a robust, interconnected ecosystem for streamlined user experiences.
            </div>
            <div className='flex justify-center'>
                <DiMongodb />
            </div>
            <div className='text-xl'>MongoDB shines as a testament to my proficiency in database management. With MongoDB's flexible and powerful features, I've crafted robust data solutions that drive seamless user experiences. From updating existing values to handling nested data structures, MongoDB has been instrumental in creating efficient and dynamic database systems. Its seamless integration with frontend interfaces ensures smooth interactions, from password updates with verification to secure handling of forgotten passwords. MongoDB isn't just a database – it's the backbone of user-centric applications, enabling streamlined data management and delivering exceptional user experiences.</div>
            <div className='flex justify-center' >
                <FaSquareGithub />
            </div>
            <div className='text-xl'> I skillfully oversee code versioning, ensuring smooth collaboration and code integrity. With proficiency in branching, merging, and collaborative workflows, I navigate complex projects with ease. Leveraging GitHub's features like pull requests and code reviews, I facilitate efficient team collaboration and project management. My meticulous approach to version control ensures code quality and project timelines are consistently met, reflecting a dedication to excellence in software development practices.</div>
            <div className='flex justify-center' >
                <SiNetlify />
            </div>
            <div className='text-xl'> I can smoothly host websites using Netlify, ensuring seamless deployment and management. With my expertise in leveraging Netlify's features, I optimize performance and security, providing users with a reliable and engaging online experience.</div>
        
        </div>
      
    </div>
  )
}

export default Skills