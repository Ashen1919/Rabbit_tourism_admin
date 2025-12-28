import { FaMapLocationDot, FaRegImages } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlinePlace } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import BarChart from "./chart";

export default function Dashboard() {
    return (
        <div className="w-full h-auto flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>

            {/* card section */}
            <div className="w-full h-auto grid grid-cols-3 gap-4">
                <Link to={"/admin/destinations"}>
                    <div className="w-full h-auto flex gap-3 border-2 duration-300 hover:bg-gray-700 border-white/10 p-3 rounded-[10px]">
                        <div className="flex flex-col w-full space-y-2">
                            <h1 className="text-xl text-gray-400">Total Destinations</h1>
                            <h1 className="text-5xl font-bold">05</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <MdOutlinePlace className="text-6xl" />
                        </div>
                    </div>
                </Link>
                <Link to={"/admin/destination-details"}>
                    <div className="w-full h-auto flex gap-3 border-2 duration-300 hover:bg-gray-700 border-white/10 p-3 rounded-[10px]">
                        <div className="flex flex-col w-full space-y-2">
                            <h1 className="text-xl text-gray-400">Total Destination Details</h1>
                            <h1 className="text-5xl font-bold">05</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <TbListDetails className="text-6xl" />
                        </div>
                    </div>
                </Link>
                <Link to={"/admin/tours"}>
                    <div className="w-full h-auto flex gap-3 border-2 duration-300 hover:bg-gray-700 border-white/10 p-3 rounded-[10px]">
                        <div className="flex flex-col w-full space-y-2">
                            <h1 className="text-xl text-gray-400">Total Tours</h1>
                            <h1 className="text-5xl font-bold">08</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <FaMapLocationDot className="text-6xl" />
                        </div>
                    </div>
                </Link>
                <Link to={"/admin/tour-details"}>
                    <div className="w-full h-auto flex gap-3 border-2 duration-300 hover:bg-gray-700 border-white/10 p-3 rounded-[10px]">
                        <div className="flex flex-col w-full space-y-2">
                            <h1 className="text-xl text-gray-400">Total Tour Details</h1>
                            <h1 className="text-5xl font-bold">08</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <LuClipboardList className="text-6xl" />
                        </div>
                    </div>
                </Link>
                <Link to={"/admin/gallery"}>
                    <div className="w-full h-auto flex gap-3 border-2 duration-300 hover:bg-gray-700 border-white/10 p-3 rounded-[10px]">
                        <div className="flex flex-col w-full space-y-2">
                            <h1 className="text-xl text-gray-400">Total Gallery</h1>
                            <h1 className="text-5xl font-bold">20</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <FaRegImages className="text-6xl" />
                        </div>
                    </div>
                </Link>
            </div>

            {/* chart section */}
            <div className="w-full h-auto border-2 border-white/10 p-3 rounded-[10px]">
                <BarChart />
            </div>
        </div>
    )
}