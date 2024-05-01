import React from 'react'
import cmrimage from '../assets/cmrimage.jpg'

const Education = () => {
  return (
    <div className='mx-auto w-11/12 mb-10 '>
      <h1 className='text-5xl font-bold mt-10 '>Cmr Technical Campus </h1>
      <div className='flex justify-center items-center mt-10'>
        <img src={cmrimage} alt='cmrimage' width={1000} />
      </div>
      <div className='flex flex-col w-9/12 mx-auto text-start text-xl space-y-10 mt-10 translate-x-5'>
        <div>I am a diligent graduate of CMR Technical Campus, Hyderabad, India, with a Bachelor's degree in Information Technology. Throughout my academic pursuit, I immersed myself in the dynamic world of technology, delving into various aspects of IT such as programming, software development, and database management.</div>
        
        <div>In addition to my studies, I actively engaged in extracurricular activities, notably serving as the Public Relations Head of the esteemed English Literature Club, known as the Lexis Club. Within this role, I orchestrated events, workshops, and discussions to foster a vibrant literary community on campus. My tenure as Public Relations Head honed my communication skills and leadership abilities, as I effectively conveyed the club's initiatives to both internal and external stakeholders.</div>
        
        <div>Graduating in the year 2024, I am proud of my academic achievements and extracurricular involvement, which have shaped me into a well-rounded individual equipped with a blend of technical expertise and interpersonal skills. I am eager to leverage this diverse skill set as I embark on my professional journey in the field of Information Technology, poised to make meaningful contributions to the ever-evolving landscape of technology.</div>
    </div>
    </div>
  )
}

export default Education
