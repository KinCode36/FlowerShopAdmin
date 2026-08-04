import React from 'react'
import LeftSide from '../Components/LeftSide/LeftSide'
import RightSide from '../Components/RightSide/RightSide'
import { Outlet } from 'react-router-dom'
import Nav from '../Components/NavBar/Nav'
const Admin = () => {
  return (
    <>
      <Nav />
      <div className="flex">
        <LeftSide />
        <main className="flex-1 ml-60 pt-15 p-7 min-h-screen bg-[#F4F3EF]">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Admin
