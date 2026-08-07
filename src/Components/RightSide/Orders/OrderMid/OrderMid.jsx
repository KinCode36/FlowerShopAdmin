import React from 'react'

const OrderMid = () => {
  return (
    <div className='flex gap-2 bg-[#F4F3EF] p-1 rounded-lg border border-solid border-[#E0DDD6] w-fit mb-5'>
      <button className='py-1.5 px-3.5 rounded-[6px] text-[12px] font-medium cursor-pointer text-[#7A7A76] font-dm whitespace-nowrap transition-all duration-150 active:bg-white active:text-[#2C2C2A] active:shadow-[0_1px_3px_rgba(0,0,0,0.08)]'>All</button>
      <button className='py-1.5 px-3.5 rounded-[6px] text-[12px] font-medium cursor-pointer text-[#7A7A76] font-dm whitespace-nowrap transition-all duration-150 active:bg-white active:text-[#2C2C2A] active:shadow-[0_1px_3px_rgba(0,0,0,0.08)]'>Pending</button>
      <button className='py-1.5 px-3.5 rounded-[6px] text-[12px] font-medium cursor-pointer text-[#7A7A76] font-dm whitespace-nowrap transition-all duration-150 active:bg-white active:text-[#2C2C2A] active:shadow-[0_1px_3px_rgba(0,0,0,0.08)]'>Confirmed</button>
    </div>
  )
}

export default OrderMid
