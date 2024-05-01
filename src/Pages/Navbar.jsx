import React from 'react'
import logo from '../assets/logo .png'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location =  useLocation();
    const currentlocation = location.pathname;

    function checklocation (location) {
        if(currentlocation === location){
            return true;
        }
        else{
            return false;
        }
    }

   

  return (
    <div className='flex flex-col md:flex-row justify-around items-center w-full h-[100vh-3.5rem] py-2 text-xl border-b-2 '>
    <Link to={'/'}><img src={logo} width={150} alt='image10' className='text-xl '></img></Link>
      <div className='flex gap-10 md:gap-2 '>
        <Link to={'/projects'} className={`${checklocation('/projects') ? 'orange-gradient' :''}`} >Projects</Link>
        <Link to={'/skills'} className={`${checklocation('/skills') ? 'orange-gradient' :''}`} >Skills</Link>
        <Link to={'/Education'} className={`${checklocation('/Education') ? 'orange-gradient' :''}`} >Education</Link>
        <Link to={'/Profession'} className={`${checklocation('/Profession') ? 'orange-gradient' :''}`} >Profession</Link>
      </div>
    </div>
  )
}

export default Navbar