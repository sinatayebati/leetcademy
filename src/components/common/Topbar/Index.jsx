import React from 'react'
import styled from 'styled-components';
import './Index.scss'
import LeetCademyLogo from '../../../assets/LeetCademy-logos/LeetCademy-logos_black.png';
import { RiHome3Line } from "react-icons/ri";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiBriefcaseLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineNotification } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";

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
  return (
    <div className='topbar-main'>
      <img src={LeetCademyLogo} alt="LeetCademyLogo" className="LeetCademyLogo-topbar" />
      <div className='react-icons'>
        <ResponsiveIcon><IoMdSearch className='react-icon'/></ResponsiveIcon>
        <ResponsiveIcon><RiHome3Line className='react-icon'/></ResponsiveIcon>
        <ResponsiveIcon><AiOutlineUsergroupAdd className='react-icon'/></ResponsiveIcon>
        <ResponsiveIcon><RiBriefcaseLine className='react-icon'/></ResponsiveIcon>
        <ResponsiveIcon><BiMessageSquareDetail className='react-icon'/></ResponsiveIcon>
        <ResponsiveIcon><AiOutlineNotification className='react-icon'/></ResponsiveIcon>
      </div>
    </div>
  )
}
