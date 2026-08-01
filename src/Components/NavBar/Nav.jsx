import React from 'react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'

const Nav = () => {
  return (
    <div className='bg-white fixed top-0 z-50 flex justify-between items-center px-2 py-1 '>
      <LeftNav/>
      <RightNav/>
    </div>
  )
}

export default Nav
