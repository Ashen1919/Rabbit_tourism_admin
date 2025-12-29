import { FaMapLocationDot, FaRegImages } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlinePlace, MdTrendingUp } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Destinations",
      value: "05",
      icon: MdOutlinePlace,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-400"
    },
    {
      title: "Destination Details",
      value: "05",
      icon: TbListDetails,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-400"
    },
    {
      title: "Total Tours",
      value: "08",
      icon: FaMapLocationDot,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-400"
    },
    {
      title: "Tour Details",
      value: "08",
      icon: LuClipboardList,
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-500/10",
      iconColor: "text-orange-400"
    },
    {
      title: "Gallery Items",
      value: "20",
      icon: FaRegImages,
      color: "from-rose-500 to-red-500",
      bgColor: "bg-rose-500/10",
      iconColor: "text-rose-400"
    }
  ];

  const chartData = [
    { month: "Jan", sales: 65, color: "bg-gradient-to-t from-pink-600 to-pink-400" },
    { month: "Feb", sales: 59, color: "bg-gradient-to-t from-amber-600 to-amber-400" },
    { month: "Mar", sales: 80, color: "bg-gradient-to-t from-yellow-600 to-yellow-400" },
    { month: "Apr", sales: 81, color: "bg-gradient-to-t from-teal-600 to-teal-400" },
    { month: "May", sales: 56, color: "bg-gradient-to-t from-blue-600 to-blue-400" }
  ];

  const maxSales = Math.max(...chartData.map(d => d.sales));

  return (
    <div className="w-full h-auto flex flex-col space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white bg-clip-text">
            Dashboard
          </h1>
          <p className="text-gray-400 text-sm mt-1">Welcome back! Here's your overview</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
          <MdTrendingUp className="text-emerald-400 text-xl" />
          <span className="text-sm text-gray-300">All systems operational</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-gray-800/40 backdrop-blur-sm p-5 transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-lg hover:shadow-gray-900/50 cursor-pointer">
            {/* linear Background Effect */}
            <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-400 font-medium">{stat.title}</p>
                  <h2 className="text-4xl font-bold mt-2 bg-linear-to-br from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </h2>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`text-2xl ${stat.iconColor}`} />
                </div>
              </div>
              
              {/* Bottom indicator */}
              <div className="flex items-center gap-1 text-xs text-emerald-400">
                <MdTrendingUp className="text-sm" />
                <span>Active</span>
              </div>
            </div>

            {/* Animated border effect */}
            <div className={`absolute inset-0 rounded-xl bg-linear-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="w-full border-2 border-white/10 rounded-xl bg-gray-800/40 backdrop-blur-sm p-6 overflow-hidden relative">
        {/* linear overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="relative z-10">
          {/* Chart Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white">Monthly Sales Overview</h2>
              <p className="text-sm text-gray-400 mt-1">Tour bookings performance</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-700/50 rounded-lg border border-white/10">
              <div className="w-3 h-3 rounded-full bg-linear-to-r from-pink-500 to-blue-500"></div>
              <span className="text-xs text-gray-300">Sales</span>
            </div>
          </div>

          {/* Chart */}
          <div className="flex items-end justify-between gap-4 h-64 px-4">
            {chartData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-3">
                {/* Bar */}
                <div className="w-full flex flex-col items-center justify-end h-full">
                  <div className="relative w-full group">
                    {/* Value tooltip */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 border border-white/20 rounded text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {data.sales} bookings
                    </div>
                    
                    {/* Bar element */}
                    <div
                      className={`w-full ${data.color} rounded-t-lg transition-all duration-500 hover:opacity-80 shadow-lg relative overflow-hidden`}
                      style={{ height: `${(data.sales / maxSales) * 100}%` }}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-linear-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                </div>

                {/* Month label */}
                <div className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  {data.month}
                </div>
              </div>
            ))}
          </div>

          {/* Y-axis labels */}
          <div className="absolute left-0 top-20 bottom-16 flex flex-col justify-between text-xs text-gray-500">
            <span>90</span>
            <span>70</span>
            <span>50</span>
            <span>30</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}