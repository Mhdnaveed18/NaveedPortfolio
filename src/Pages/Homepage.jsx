import React, { useState, useEffect } from 'react';
import ProfilePicture from '../assets/ProfilePicture.jpg'
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { useMemo } from 'react';
import {Link} from 'react-router-dom'
import { FaInstagramSquare } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import gmail from '../assets/gmail.svg';
import { FaGithub } from "react-icons/fa";




const Homepage = () => {

  const texts = useMemo(
    () => [
      ' Freelancer          ',
      ' Mern Stack Developer',
      ' Full Stack Developer',
      ' Frontend Developer  ',
      ' Backend Developer   ',
    ],
    []
  );
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [displayedText, setDisplayedText] = useState('');
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setDisplayedText(texts[currentIndex].substring(0, displayedText.length + 1));
        }, 100); // Typing speed, adjust as needed
    
        return () => clearInterval(intervalId);
      }, [displayedText, currentIndex, texts]);
    
      useEffect(() => {
        if (displayedText === texts[currentIndex]) {
          const timeoutId = setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % texts.length);
          }, 2000); // Delay between texts, adjust as needed
    
          return () => clearTimeout(timeoutId);
        }
      }, [displayedText, currentIndex, texts]);

  return (
    <div className='w-10/12 mx-auto '>
       <div className='flex flex-col md:flex-row justify-around items-center h-[580px] mb-10 mx-auto '>
          <div className=' space-y-2  translate-x-20 flex flex-col'>
            <div className='font-bold text-3xl font-inter text-start '>
                Hi! Naveed 
            </div>
            <div className='text-3xl font-inter gap-1 relative text-start w-[500px]'>
                i am a <div className='orange-gradient'> <spam>{displayedText}</spam> </div>
            </div>
          </div>
          <div className='flex justify-center md:translate-x-8'>
              <div> <img className='rounded-lg' src={ProfilePicture} width={350} alt='profilephoto' /> </div>
          </div>
          
      </div>
      
      <div className='flex text-8xl flex-row justify-between mb-10  '>
        <FaReact />
        <DiMongodb />
        <SiExpress />
        <FaNodeJs />
      </div>
      

      <div className='text-2xl space-y-3 text-start mb-10 font-semibold  '>
        <div> I am brimming with confidence in my ability to meet and exceed your requirements as a <span className="orange-gradient"> MERN Stack Developer </span>. Whether it's crafting responsive and dynamic user interfaces with <span className="orange-gradient"> React </span> , architecting robust backend systems with <span className="orange-gradient"> Node.js </span>  and  <span className="orange-gradient"> Express </span> , or seamlessly integrating databases with MongoDB, I am prepared to fulfill your needs to the fullest extent.</div>
        <div>Having just embarked on this journey, I bring fresh perspectives, a hunger for challenges, and a dedication to delivering top-notch solutions tailored to your specific needs. Your satisfaction and success are my utmost priorities, and I am committed to going above and beyond to achieve them.</div>
        <div>I am eager to discuss how my skills and passion for MERN Stack development can contribute to the success of your projects. Please feel free to reach out at your earliest convenience to explore potential collaborations or discuss any inquiries you may have.</div>
      </div>

      <div className='my-10'>
        <h3 className='text-3xl font-bold font-inter'> Contact Me </h3>
        <div className='flex gap-5  justify-center items-center text-3xl'><img src={gmail} width={50} alt='contactimg' /><div>mhdnaveed18@gmail.com</div></div>
        <div className=' text-8xl flex flex-col md:flex-row justify-around space-y-10 items-center  '>
          <Link to={'https://www.instagram.com/naveedx7/'} target="_blank" > <FaInstagramSquare /> </Link>
          <Link to={'https://github.com/Mhdnaveed18'} target='_blank'> <FaGithub /> </Link>
          <Link to={'https://www.upwork.com/freelancers/~01be91d7fae8fb7334'} target='_blank'> <FaUpwork /> </Link>
        </div>
      </div>
    

    </div>
   
  )
}


export default Homepage