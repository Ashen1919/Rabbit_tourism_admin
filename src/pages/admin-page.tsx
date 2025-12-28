import { AiOutlineLogout } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";
import { FaMapLocationDot, FaRegImages } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlinePlace } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard";
import Destinations from "../components/destination";
import Destination_Details from "../components/destination-details";
import Tours from "../components/tours";
import Tour_Details from "../components/tour-details";
import Gallery from "../components/gallery";

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex">

            {/* Left-side panel */}
            <div className="w-[20%] h-full relative p-3 flex flex-col space-y-2 bg-gray-800/40">
                <h1 className="text-xl font-bold mb-3 text-center">Admin Dashboard</h1>
                <Link to={"/admin/"}>
                    <div className="w-full p-2 flex gap-3 items-center text-lg font-semibold border-2 border-transparent duration-300 rounded-[10px] hover:bg-gray-700">
                        <FaChartBar/>
                        <h1>Dashboard</h1>
                    </div>
                </Link>
                <Link to={"/admin/destinations"}>
                    <div className="w-full p-2 flex gap-3 items-center text-lg font-semibold border-2 border-transparent duration-300 rounded-[10px] hover:bg-gray-700">
                        <MdOutlinePlace/>
                        <h1>Destinations</h1>
                    </div>
                </Link>
                <Link to={"/admin/destination-details"}>
                    <div className="w-full p-2 flex gap-3 items-center text-lg font-semibold border-2 border-transparent duration-300 rounded-[10px] hover:bg-gray-700">
                        <TbListDetails/>
                        <h1>Destination Details</h1>
                    </div>
                </Link>
                <Link to={"/admin/tours"}>
                    <div className="w-full p-2 flex gap-3 items-center text-lg font-semibold border-2 border-transparent duration-300 rounded-[10px] hover:bg-gray-700">
                        <FaMapLocationDot/>
                        <h1>Tours</h1>
                    </div>
                </Link>
                <Link to={"/admin/tour-details"}>
                    <div className="w-full p-2 flex gap-3 items-center text-lg font-semibold border-2 border-transparent duration-300 rounded-[10px] hover:bg-gray-700">
                        <LuClipboardList/>
                        <h1>Tour Details</h1>
                    </div>
                </Link>
                <Link to={"/admin/gallery"}>
                    <div className="w-full p-2 flex gap-3 items-center text-lg font-semibold border-2 border-transparent duration-300 rounded-[10px] hover:bg-gray-700">
                        <FaRegImages/>
                        <h1>Gallery</h1>
                    </div>
                </Link>
                <button className="p-2 cursor-pointer flex absolute bottom-3 left-3 right-3 gap-3 items-center text-lg font-semibold border-2 border-transparent duration-300 rounded-[10px] hover:bg-gray-700">
                    <AiOutlineLogout/>
                    <h1>Logout</h1>
                </button>
            </div>

            {/* Right-side panel */}
            <div className="w-[80%] h-auto p-3 flex flex-col overflow-auto">
                <Routes>
                    <Route path="/" element = {<Dashboard/>}/>
                    <Route path="/destinations" element = {<Destinations/>} />
                    <Route path="/destination-details" element = {<Destination_Details/>} />
                    <Route path="/tours" element = {<Tours/>} />
                    <Route path="/tour-details" element = {<Tour_Details/>} />
                    <Route path="/gallery" element = {<Gallery/>} />
                </Routes>
            </div>
        </div>
    )
}