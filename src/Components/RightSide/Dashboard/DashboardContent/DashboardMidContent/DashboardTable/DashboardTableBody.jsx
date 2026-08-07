const statusStyles = {
  Confirmed: "bg-green-100 text-green-700 before:text-green-500",
  Pending: "bg-yellow-100 text-yellow-700 before:text-yellow-500",
  Cancelled: "bg-red-100 text-red-700 before:text-red-500",
  Delivered: "bg-blue-100 text-blue-700 before:text-blue-500",
};

const DashboardTableBody = ({ orders }) => {
  return (
    <tbody>
      {orders.map((order) => (
        <tr key={order.id}>

          <td className="py-3 px-4 border-b border-[#E0DDD6]">
            <input
              type="checkbox"
              className="w-4 h-4 accent-[#4A7A52] cursor-pointer"
            />
          </td>

          <td className="font-mono font-semibold text-[#4a7a52] pl-[22px] py-3 px-4 border-b border-[#E0DDD6] text-sm">
            {order.id}
          </td>

          <td className="py-3 px-4 border-b border-[#E0DDD6] text-sm text-[#4A4A47]">
            <div className="flex items-center gap-2.5">
              <div
                className="size-[30px] rounded-lg flex items-center justify-center text-[12px] font-semibold text-white shrink-0"
                style={{ backgroundColor: order.avatarColor }}
              >
                {order.initials}
              </div>

              <div>
                <div className="font-semibold text-[#2C2C2A] text-sm">
                  {order.name}
                </div>
                <div className="text-[11px] text-[#7A7A76]">
                  {order.email}
                </div>
              </div>
            </div>
          </td>

          <td className="py-3 px-4 border-b border-[#E0DDD6] text-sm">
            {order.product}
          </td>

          <td className="py-3 px-4 border-b border-[#E0DDD6] text-sm font-semibold">
            {order.amount}
          </td>

          <td className="py-3 px-4 border-b border-[#E0DDD6] text-sm">
            <span
              className={`inline-flex items-center gap-1 rounded-full px-[9px] py-[3px] text-[11px] font-semibold before:content-['•'] before:text-[8px] ${statusStyles[order.status]}`}
            >
              {order.status}
            </span>
          </td>

          <td className="py-3 px-4 border-b border-[#E0DDD6] text-sm text-[#7A7A76]">
            {order.date}
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default DashboardTableBody;