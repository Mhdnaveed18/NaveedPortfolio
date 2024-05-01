import React from 'react'
import {Link} from 'react-router-dom'
import { FaInstagramSquare } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import gmail from '../assets/gmail.svg';
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className='w-10/12 mx-auto mt-[100px] my-10'>
        <h3 className='text-3xl font-bold font-inter'> Contact Me </h3>
        <div className='flex flex-col  md:flex-row  gap-5  justify-center items-center text-3xl'><img src={gmail} width={50} alt='contactimg' /><div>mhdnaveed18@gmail.com</div></div>
        <div className=' text-8xl flex flex-col md:flex-row justify-around space-y-10 items-center  '>
          <Link to={'https://www.instagram.com/naveedx7/'} target="_blank" > <FaInstagramSquare /> </Link>
          <Link to={'https://github.com/Mhdnaveed18'} target='_blank'> <FaGithub /> </Link>
          <Link to={'https://www.upwork.com/freelancers/~01be91d7fae8fb7334'} target='_blank'> <FaUpwork /> </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
