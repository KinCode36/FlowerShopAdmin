import React from 'react'
import { Link } from 'react-router-dom'

const ProductsTop = () => {
  return (
      <div className='flex items-center justify-between mb-6'>
      <h1 className='text-3xl font-normal text-[#2C2C2A] font-serif'>
        Order 
        <em className='italic text-[#6B8F71] font-cormorant'> Management</em>
      </h1>
      <div className='flex gap-2.5 items-center justify-center'>
        <button className='py-2 px-4 text-[#4A4A47] border border-solid border-[#E0DDD6] rounded-lg text-[13px] font-medium cursor-pointer font-dm flex items-center gap-1.5'>
            📤 Export CSV
        </button>
        <div className='py-2 px-4 text-white border border-solid border-[#E0DDD6]  bg-[#4A7A52] hover:bg-[#2E5235] rounded-lg text-[13px] font-medium font-dm flex items-center gap-1.5'>
            
        <Link to='/add_Products'>+ Add Products</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductsTop
