import React from 'react'
import DashboardTable from '../Dashboard/DashboardContent/DashboardMidContent/DashboardTable/DashboardTable'
import { useOutletContext } from 'react-router-dom'
import OrderTop from './OrderTop/OrderTop'
import OrderMid from './OrderMid/OrderMid'

const Orders = () => {
  const {orders} = useOutletContext()
  return (
    <div>
      <OrderTop/>
      <OrderMid/>
      <div className="bg-white rounded-xl border border-[#E0DDD6] overflow-hidden">
      <DashboardTable orders={orders}/>
      </div>
    </div>
  )
}

export default Orders
