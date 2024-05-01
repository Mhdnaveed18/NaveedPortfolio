import React from 'react'
import Studynotionvideo from '../assets/video.mp4'

const Projects = () => {
  return (
    <div className='mx-auto w-10/12 '>
      <p className='text-6xl font-inter my-6 '>StudyNotion - EdTech Platform</p>
      <video className='mx-auto' src={Studynotionvideo} loop autoPlay onPaste={true}></video> 

      <div className='text-start'>
        <div className='my-6'>
            <h2 className='text-bold text-3xl font-inter space-y-6'>Description:</h2>
            <p className='text-xl '>StudyNotion is a comprehensive EdTech platform I developed to revolutionize online learning. Utilizing the powerful MERN (MongoDB, Express.js, React, Node.js) stack, StudyNotion offers instructors and learners a seamless experience. Instructors can effortlessly create, upload, and sell their courses, while learners can explore a diverse range of topics with ease.</p>
        </div>

    <div>
        <h2 className='text-3xl font-inter '>Key Features:</h2>
        <ul className='text-xl my-4  gap-y-2'>
            <li><strong className='orange-gradient'>MERN Stack Development:</strong> Leveraged MongoDB for data storage, Express.js for server-side functionality, React for a dynamic user interface, and Node.js for backend development.</li>
            <li><strong className='orange-gradient'>Secure Authentication:</strong> Implemented robust authentication and authorization mechanisms, ensuring user data remains safe with SHA-256 security encryption.</li>
            <li><strong className='orange-gradient'>Razorpay Integration:</strong> Seamlessly integrated Razorpay for secure payment processing, providing users with a safe and reliable transaction experience.</li>
            <li><strong className='orange-gradient'>User-Friendly Interface:</strong> Designed an intuitive interface for both instructors and learners, prioritizing ease of use and accessibility.</li>
            <li><strong className='orange-gradient'>Lesson Modules:</strong> Enabled instructors to organize course content into modules for structured learning experiences.</li>
            <li><strong className='orange-gradient'>Responsive Design:</strong> Ensured the platform is responsive across devices, allowing users to access StudyNotion anytime, anywhere.</li>
        </ul>
    </div>
      
      <div className='space-y-3'>
        <h2 className='text-3xl font-inter '>Challenges Overcome:</h2>
        <p className='text-xl'>Throughout the development process, I encountered various challenges, from implementing secure payment processing to optimizing the user experience. However, I embraced these challenges as opportunities for growth and learning, ultimately refining my skills as a developer.</p>
        
        <p className='text-xl'>StudyNotion represents the culmination of my dedication to creating impactful solutions in the EdTech space. It stands as a testament to my expertise in full-stack development and my commitment to delivering innovative solutions that empower users to learn and grow.</p>
   
      </div>
      
      </div>

      <div className='mx-auto text-xl my-10'>
        <a href="https://studynotion-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-black rounded  font-inter font-bold py-2 px-5">Click TO Visit StudyNotion</button>
        </a>
      </div>

    </div>
  )
}

export default Projects