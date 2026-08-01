import React from 'react'
import Middlebuttuns from './Middlebuttuns'


const MiddleTopContent = () => {
const sidebarButtons = [
    {
      id: 1,
      title: "Dashboard",
      icon: "📊",
    },
    {
      id: 2,
      title: "Orders",
      icon: "🛍️",
    },
    {
      id: 3,
      title: "Products",
      icon: "🌸",
    },
    {
      id: 4,
      title: "Bookings",
      icon: "📅",
    },
    {
      id: 5,
      title: "Analytics",
      icon: "📈",
    },
  ];

    return (
        <div>
            <Middlebuttuns sidebarButtons={sidebarButtons}/>
        </div>
    )
}

export default MiddleTopContent
