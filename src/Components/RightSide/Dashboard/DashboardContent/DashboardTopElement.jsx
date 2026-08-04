import React from 'react'

const DashboardTopElement = ({ color }) => {
  return (
    <div className='bg-white border-[1px] border-solid border-[#E0DDD6] py-5 px-[22px] relative overflow-hidden before:content-["] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:rounded-t-xl'>
        <div
        className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-xl ${color}`}
      ></div>
      Foirst
    </div>
  )
}

export default DashboardTopElement
