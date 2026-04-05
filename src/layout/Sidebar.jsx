import { AiFillDashboard } from "react-icons/ai"
import { TbHomeFilled, TbInfoOctagonFilled, TbList, TbLogout2, TbLogs, TbSettings2 } from "react-icons/tb"
import { Link } from "react-router-dom"




function Sidebar() {
    return (
        <>
            {/* ===================== SIDEBAR ===================== */}
            <div className="drawer-side flex flex-col min-h-screen border-r-2 border-gray-300">
                <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-open"></label>

                {/* Sidebar Brand/Logo */}
                <div className=" flex flex-row items-center justify-center w-full h-[18%] bg-gray-200 border-b-2 border-gray-300 sticky top-0">
                    <img src="../../public/favicon.png" alt="WEB DEV DIARY" className="w-10 h-10 mx-2" />
                    <span className="text-md font-bold p-2 text-[#1E2939]">DMS CENTRAL</span>
                </div>

                {/* Sidebar Navigation Area with Scroll Opting */}
                <div className="w-full flex flex-col h-[71%] overflow-auto bg-gray-100">
                    <ul className="menu w-full font-semibold flex flex-col">
                        <li className="cursor-pointer mt-2">
                            <Link to="/"><AiFillDashboard size={20} />Dashboard</Link>
                        </li>

                        {/* Dropdown Menu Item */}
                        <li className="dropdown dropdown-start">
                            <details className="group">
                                <summary className="cursor-pointer mt-1">
                                    <TbLogs size={20} />
                                    <li>Monitoring Logs</li>

                                </summary>

                                <ul class="border-l-2 my-2 p-2 bg-[#E8E8E8] border-gray-300">
                                    <li><Link to="/all-logs" className="w-full cursor-pointer ">All Logs</Link></li>
                                    <li><Link to="/add-new-log" className="w-full cursor-pointer ">Add New Log</Link></li>
                                </ul>
                            </details>
                        </li>
                        {/* Dropdown End */}

                        

                        

                        <li className="cursor-pointer mt-1">
                            <Link to="/services"> <TbList size={20} />Services</Link>
                        </li>

                        <li className="cursor-pointer mt-1">
                            <Link to="/support"><TbInfoOctagonFilled size={20} />Support</Link>
                        </li>

                        



                    </ul>
                </div>

                {/* Sidebar Footer Fixed */}
                <div className="bg-gray-200 flex items-center justify-center w-full h-[11%] sticky bottom-0 z-50 border-t-2 border-gray-300">
                    <ul className="menu menu-horizontal">
                        <li><Link to="/"><TbHomeFilled size={24} color="#1E2939" /></Link></li>
                        <li><Link to="/all-logs"><TbLogs size={24} color="#1E2939" /></Link></li>
                        <li><Link to="/settings"><TbSettings2 size={24} color="#1E2939" /></Link></li>
                        <li><Link to="/logout"><TbLogout2 size={24} color="#1E2939" /></Link></li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar