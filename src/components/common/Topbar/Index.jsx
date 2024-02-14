import React from 'react'
import './Index.scss'
import LeetCademyLogo from '../../../assets/LeetCademy-logos/LeetCademy-logos_black.png';
import { RiHome3Line } from "react-icons/ri";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiBriefcaseLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineNotification } from "react-icons/ai";

export default function Topbar() {
  return (
    <div className='topbar-main'>
      <img src={LeetCademyLogo} alt="LeetCademyLogo" className="LeetCademyLogo-topbar" />
      <div className='react-icons'>
        <RiHome3Line size={30}/>
        <AiOutlineUsergroupAdd size={30}/>
        <RiBriefcaseLine size={30}/>
        <BiMessageSquareDetail size={30}/>
        <AiOutlineNotification size={30}/>
      </div>
    </div>
  )
}
