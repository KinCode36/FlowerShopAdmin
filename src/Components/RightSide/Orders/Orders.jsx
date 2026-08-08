import React, { useState } from 'react';
import DashboardTable from '../Dashboard/DashboardContent/DashboardMidContent/DashboardTable/DashboardTable';
import { useOutletContext } from 'react-router-dom';
import OrderTop from './OrderTop/OrderTop';
import OrderMid from './OrderMid/OrderMid';

const Orders = () => {
  const { orders } = useOutletContext();

  const [activeStatus, setActiveStatus] = useState('All');

  const filteredOrders =
    activeStatus === 'All'
      ? orders
      : orders.filter((order) => order.status === activeStatus);

  return (
    <div>
      <OrderTop />

      <OrderMid
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
      />

      <div className="bg-white rounded-xl border border-[#E0DDD6] overflow-hidden">
        <DashboardTable orders={filteredOrders} />
      </div>
    </div>
  );
};

export default Orders;