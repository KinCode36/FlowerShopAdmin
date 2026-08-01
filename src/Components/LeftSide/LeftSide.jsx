import React from 'react'
import LeftSideTop from './LeftSideTop/LeftSideTop'
import MiddleTop from './Middle/MiddleTop/MiddleTop'
import Middle from './Middle/Middle'
import LeftSideFooter from './LeftsideFooter/LeftSideFooter'

const LeftSide = () => {
  return (
    <div className='bg-[#2C2C2A] w-[240px] flex flex-col shrink-0 fixed top-0 left-0 h-[100vh] overflow-y-auto z-50'>
      <LeftSideTop/>
      <Middle/>
      <LeftSideFooter/>
    </div>
  )
}

export default LeftSide
