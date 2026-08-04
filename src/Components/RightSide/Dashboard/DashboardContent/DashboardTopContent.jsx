import React from 'react'
import DashboardTopElement from './DashboardTopElement'

const DashboardTopContent = () => {
  return (
    <div className='grid grid-cols-4 gap-4 mb-6' >
      <DashboardTopElement color="bg-[#4A7A52]"/>
      <DashboardTopElement color="bg-[#C8897A]"/>
      <DashboardTopElement color="bg-[#E6A817]"/>
      <DashboardTopElement color="bg-[#7A6BA8]"/>
    </div>
  )
}

export default DashboardTopContent
