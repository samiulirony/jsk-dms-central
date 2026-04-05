import { BsFillInfoCircleFill, BsInfoSquare } from "react-icons/bs"
import { FaSearch } from "react-icons/fa"
import { FaRegCircleUser } from "react-icons/fa6"
import { IoIosNotificationsOutline } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { MdCircleNotifications, MdLogout } from "react-icons/md"
import { Link } from "react-router-dom"
import Breadcrumbs from "./Breadcrumbs"

function TopBar() {
    return (
        
        <div className="sticky top-0 z-40 w-full flex flex-col">
            
            {/* TOP NAVBAR */}
            <div className="navbar bg-gray-200 border-b-2 border-gray-300">
                <div className="flex-none lg:hidden">
                    <label htmlFor="dashboard-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    {/* Search Option */}
                    <div className="flex ml-4 text-gray-800">
                        <label className="input input-secondary h-8 rounded-full border-2 border-[#384559] relative">
                            <input type="search" required placeholder="Search Topics Here ...." />
                            <FaSearch className="absolute text-gray-500 right-2" />
                        </label>
                    </div>

                    <div className="flex flex-row gap-4 items-center justify-center">
                        <div className="flex">
                            <button className="btn btn-ghost btn-circle btn-sm hover:bg-white"><BsFillInfoCircleFill size={25} color="#1E2939" /></button>
                        </div>

                        {/* Notification*/}
                        <div className="flex">
                            <button className="btn btn-ghost btn-circle btn-sm hover:bg-white">
                                <div className="indicator">
                                    <MdCircleNotifications size={30} />
                                    <span className="badge badge-xs badge-primary indicator-item">3</span>
                                </div>
                            </button>
                        </div>

                        {/* User Profile / Navbar Actions */}
                        <div className="flex gap-2">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-square btn-sm avatar p-1 bg-white border-2 border-gray-500   hover:bg-gray-200">
                                    <div className="w-7">
                                        <img alt="User avatar" src="https://placehold.co/100x100/1E2939/FFFFFF?text=User" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-gray-100 rounded-box w-52 border border-base-200">
                                    <li className="hover:bg-gray-200 hover:text-[#1E2939] hover:font-bold rounded-sm">
                                        <Link to="/profile"><FaRegCircleUser />Profile</Link>
                                    </li>
                                    <li className="hover:bg-gray-200 hover:text-[#1E2939] hover:font-bold rounded-sm">
                                        <Link to="/settings"><IoSettingsOutline />Settings</Link>
                                    </li>
                                    <li className="hover:bg-gray-200 hover:text-[#1E2939] hover:font-bold rounded-sm">
                                        <Link to="/logout"><MdLogout />Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BREADCRUMBS */}
            <div className="bg-gray-50 w-full px-2 shadow">
                <Breadcrumbs />
            </div>

        </div>
    )
}

export default TopBar