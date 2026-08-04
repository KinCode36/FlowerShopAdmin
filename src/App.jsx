import React from 'react'
import Admin from './Admin/Admin'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './Components/RightSide/Dashboard/Dashboard'
import Products from './Components/RightSide/Products/Products'
import Orders from './Components/RightSide/Orders/Orders'
import Bookings from './Components/RightSide/Bookings/Bookings'
import Analytics from './Components/RightSide/Analytics/Analytics'
import Add_Products from './Components/RightSide/Add_Products/Add_Products'
import Account_Settings from './Components/RightSide/Account_Settings/Account_Settings'


function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Admin/>}>
          <Route index element={<Dashboard/>} />
          <Route path="orders" element={<Orders/>} />
          <Route path="products" element={<Products/>} />
          <Route path="bookings" element={<Bookings/>} />
          <Route path="analytics" element={<Analytics/>} />
          <Route path="Add_Products" element={<Add_Products/>} />
          <Route path="Settings" element={<Account_Settings/>} />
          
          

        </Route>
      </Routes>
      {/* <Gallary/> */}
    </div>
  )
}

export default App
