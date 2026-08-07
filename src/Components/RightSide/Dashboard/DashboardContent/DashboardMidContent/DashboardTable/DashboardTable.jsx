import React from "react";
import DashboardTableHead from "./DashboardTableHead";
import DashboardTableBody from "./DashboardTableBody";



const DashboardTable = ({orders}) => {
  return (
    <table className="w-full border-collapse bg-white">
      <DashboardTableHead />
      <DashboardTableBody orders={orders} />
    </table>
  );
};

export default DashboardTable;