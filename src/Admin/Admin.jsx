import React from 'react'
import LeftSide from '../Components/LeftSide/LeftSide'
import RightSide from '../Components/RightSide/RightSide'

const Admin = () => {
  return (
    <div className='flex justify-start items-center'>
      <LeftSide/>
      <RightSide/>
    </div>
  )
}

export default Admin
