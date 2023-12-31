import React from 'react'
import Home from '../pages/Home'
import Topbar from '../components/common/Topbar/Index'

export default function HomeLayout() {
  return (
    <div>
        <Topbar />
        <Home />
    </div>
  )
}
