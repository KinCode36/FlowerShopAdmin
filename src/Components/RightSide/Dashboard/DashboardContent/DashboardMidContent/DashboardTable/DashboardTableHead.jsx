import React from 'react'

const DashboardTableHead = () => {
  const tableHeaders = [
    { id: 1, title: "Order ID" },
    { id: 2, title: "Customer" },
    { id: 3, title: "Items" },
    { id: 4, title: "Amount" },
    { id: 5, title: "Status" },
    { id: 6, title: "Date" },
  ];
  return (
    <thead>
      <tr>
        <th className='py-2.5 px-4 text-left text-[11px] font-semibold tracking-[0.08] uppercase text-[#7A7A76] bg-[#F4F3EF] border-b border-[#E0DDD6]'>
          <input className='size-[15px] cursor-pointer accent-[#4A7A52]' type="checkbox" />
        </th>
        {tableHeaders.map((headers) => (
          <th key={headers.id} className='py-2.5 px-4 text-left text-[11px] font-semibold tracking-[0.08] uppercase text-[#7A7A76] bg-[#F4F3EF] border-b border-[#E0DDD6]'>{headers.title}</th>
        ))}
      </tr>
    </thead>
  )
}

export default DashboardTableHead
