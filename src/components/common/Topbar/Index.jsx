import React from 'react'
import './index.scss'
import LeetCademyLogo from '../../../assets/LeetCademy-logos/LeetCademy-logos_black.png';

export default function Topbar() {
  return (
    <div className='topbar-main'>
      <img src={LeetCademyLogo} alt="LeetCademyLogo" className="LeetCademyLogo-topbar" />
    </div>
  )
}
