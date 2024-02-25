import React from 'react'
import styled from 'styled-components';
import './Index.scss'
import LeetCademyLogo from '../../../assets/LeetCademy-logos/LeetCademy-logos_black.png';
import user from '../../../assets/user2.png'
import { RiHome3Line } from "react-icons/ri";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiBriefcaseLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineNotification } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { Route, useNavigate } from 'react-router-dom';

const ResponsiveIcon = styled.div`
    display: inline-flex;
    font-size: 30px; // default size

    @media (max-width: 768px) {
        font-size: 25px; // smaller size for tablets
    }

    @media (max-width: 480px) {
        font-size: 20px; // even smaller for mobile
    }
`;

export default function Topbar() {
  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  }
  return (
    <div className='topbar-main'>
      <img src={LeetCademyLogo} alt="LeetCademyLogo" className="LeetCademyLogo-topbar" />
      <div className='react-icons'>
        <div className="icon-container">
          <IoMdSearch className='react-icon'/>
          <span className="icon-label">Search</span>
        </div>
        <div className="icon-container">
          <RiHome3Line className='react-icon' onClick={() => goToRoute("/home")}/>
          <span className="icon-label">Home</span>
        </div>
        <div className="icon-container">
          <AiOutlineUsergroupAdd className='react-icon' onClick={() => goToRoute("/profile")}/>
          <span className="icon-label">My Network</span>
        </div>
        <div className="icon-container">
          <RiBriefcaseLine className='react-icon'/>
          <span className="icon-label">Jobs</span>
        </div>
        <div className="icon-container">
          <BiMessageSquareDetail className='react-icon'/>
          <span className="icon-label">Messaging</span>
        </div>
        <div className="icon-container">
          <AiOutlineNotification className='react-icon'/>
          <span className="icon-label">Notifications</span>
        </div>
        <div className="icon-container">
          <img src={user} alt="user" className="user" />
          <span className="icon-label">Profile</span>
        </div>
    
      </div>
    </div>
  )
}