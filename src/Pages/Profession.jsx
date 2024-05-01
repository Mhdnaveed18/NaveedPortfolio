import React from 'react'
import accenture from '../assets/accenture.webp'

const Profession = () => {
  return (
    <div className='w-8/12 mx-auto space-y-5 mb-10'>
        <h1 className='text-5xl my-5 font-bold  '> Accenture</h1>
        <img src={accenture} width={1000} className=' translate-x-[10px]'/>
        <p className='text-xl text-start translate-x-[10px] '>As an Associate Software Engineer (ASE) at Accenture Hyderabad, I contribute to dynamic projects with a focus on software development and engineering solutions. Collaborating within a talented team, I engage in the design, development, and implementation of innovative software solutions, ensuring they meet client requirements and industry standards. Through utilizing cutting-edge technologies and methodologies, I strive for excellence in delivering efficient and scalable software solutions. My role involves problem-solving, code optimization, and continuous learning, fostering an environment of growth and innovation. At Accenture, I am committed to driving impactful outcomes and leveraging technology to address complex challenges in today's digital landscape.</p>
    </div>
  )
}

export default Profession
