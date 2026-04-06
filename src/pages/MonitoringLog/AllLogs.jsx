import { DeleteIcon, PlusCircleIcon, ViewIcon } from "lucide-react"
import DashboardLaout from "../../layout/DashboardLaout"
import { Link } from "react-router-dom"
import { BiEdit } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";




function AllLogs() {

    const shortLogTitle = (text, maxLength = 30) => {
        return text.length > maxLength
            ? text.slice(0, maxLength) + "..."
            : text;
    };


    return (
        <>
            <DashboardLaout>
                <div className="flex items-center justify-between my-3 px-3">
                    <h1 className="text-2xl font-bold text-gray-800 uppercase">All Logs Management</h1>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <button className="btn btn-md bg-gray-900 text-white hover:bg-gray-200 hover:text-gray-900 uppercase border-2 border-gray-900 flex items-center gap-2" onClick={() => document.getElementById('my_modal_5').showModal()}>
                        <PlusCircleIcon size={20} />
                        Add New Log
                    </button>

                    <dialog id="my_modal_5" className="modal modal-middle">
                        <div className="modal-box max-w-4xl relative">

                            <form method="dialog">
                                <button className="btn btn-xs btn-square btn-secondary absolute top-3 left-3">
                                    <CgClose />
                                </button>
                            </form>

                            <fieldset className="border-2 border-gray-300 p-4 my-4">
                                <legend className="text-2xl font-medium text-gray-700 px-2">Add New Log</legend>

                                <div className='grid grid-cols-2 gap-4'>
                                    <div className="mb-4">
                                        <label htmlFor="logTitle" className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                                        <input type="datetime-local" placeholder="Select Date & Time" className="input border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-500" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="logStatus" className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                        <select defaultValue="Pick a language" className="select border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer">
                                            <option disabled={false}>Pick a Status</option>
                                            <option className='bg-yellow-600 text-white m-2'>Pending</option>
                                            <option className='bg-blue-500 text-white m-2'>In Progress</option>
                                            <option className='bg-green-500 text-white m-2'>Completed</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div className="mb-4">
                                            <label htmlFor="logTitle" className="block text-sm font-medium text-gray-700 mb-2">Business Units:</label>
                                            <select defaultValue="Pick a language" className="select border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer">
                                                <option disabled={true}>Select Business Unit</option>
                                                <option>Medical Center</option>
                                                <option>Hospital</option>
                                                <option>Travel Agency</option>
                                                <option>Highway BUS Service</option>
                                                <option>Resturant</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="logTitle" className="block text-sm font-medium text-gray-700 mb-2">Branches:</label>
                                            <select defaultValue="Pick a language" className="select border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer">
                                                <option disabled={true}>Select Branch</option>
                                                <option>Modern Medical Center</option>
                                                <option>Sara Hospital & Diagnostic Center</option>
                                                <option>JSK Travels</option>
                                                <option>Travel Agency</option>
                                                <option>Sara Express</option>
                                                <option>Food Vally</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='grid-cols-1'>
                                        <div className="mb-4">
                                            <label htmlFor="logStatus" className="block text-sm font-medium text-gray-700 mb-2">Assign User</label>
                                            <select defaultValue="Pick a language" className="select border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer">
                                                <option disabled={true}>Assign User</option>
                                                <option>John Doe</option>
                                                <option>Jane Smith</option>
                                                <option>Bob Johnson</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-1'>
                                    <div className="mb-4">
                                        <label htmlFor="logTitle" className="block text-sm font-medium text-gray-700 mb-2">Log Title</label>
                                        <input type="text" placeholder="Log Title" className="input border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-500" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="logContent" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                        <textarea placeholder="Log Description" className="input border border-gray-300 w-full min-h-40 focus:outline-none focus:ring-2 focus:ring-gray-500" />
                                    </div>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <div className="flex items-center gap-4">
                                        <div className="">
                                            <label htmlFor="logTitle" className="block text-sm font-medium text-gray-700 mb-2">Upload Video</label>
                                            <input type="file" className="file-input file-input-secondary" />
                                        </div>
                                        <div className="">
                                            <label htmlFor="logTitle" className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
                                            <input type="file" className="file-input file-input-secondary" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3 flex justify-end">
                                    
                                    <form method="dialog">
                                    <button className="btn btn-md bg-gray-700 text-gray-200 hover:bg-gray-300 hover:text-gray-900 uppercase mt-6 mr-6 shadow-sm border-2 border-gray-600">X</button>
                                    </form>
                                    
                                    <button className="btn btn-md bg-gray-100 text-gray-900 hover:bg-gray-300 hover:text-gray-900 uppercase mt-6 mr-6 shadow-sm border-2 border-gray-600">Reset</button>
                                    <button className="btn btn-md bg-gray-900 text-white hover:bg-gray-200 hover:text-gray-900 uppercase mt-6 border-2 border-gray-900">Submit</button>
                                </div>
                            </fieldset>
                        </div>
                    </dialog>


                </div>

                <div>
                    <table className="table table-zebra w-full border-2 border-gray-200">
                        <thead>
                            <tr>
                                <th>Log ID</th>
                                <th>Date & Time</th>
                                <th>Title (Log / Issue)</th>
                                <th>Branches</th>
                                <th>Assign User</th>
                                <th>Status</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>2024-06-15 10:30 AM</td>
                                <td className="">{shortLogTitle("Employee (Samiul Islam) Using Mobile & Browsing Facebook")}</td>
                                <td>JSK Group - Admin Room</td>
                                <td>Mr. Shakib</td>
                                <td className="label label-primary">Pending</td>
                                <td>
                                    <button className="btn btn-xs bg-gray-700 text-white hover:bg-blue-700">
                                        <BsEyeFill />
                                    </button>
                                    <button className="btn btn-xs bg-blue-500 text-white hover:bg-blue-700">
                                        <BiEdit />
                                    </button>
                                    <button className="btn btn-xs bg-red-500 text-white hover:bg-red-700">
                                        <MdDeleteOutline />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>2024-06-14 02:45 PM</td>
                                <td>{shortLogTitle("Bus Speed High and Supervisor Using Mobile")}</td>
                                <td>DHAKA-DA-5237</td>
                                <td>Minhaz Bappy</td>
                                <td>In Progress</td>
                                <td>
                                    <button className="btn btn-xs bg-gray-700 text-white hover:bg-blue-700">
                                        <BsEyeFill />
                                    </button>
                                    <button className="btn btn-xs bg-blue-500 text-white hover:bg-blue-700">
                                        <BiEdit />
                                    </button>
                                    <button className="btn btn-xs bg-red-500 text-white hover:bg-red-700">
                                        <MdDeleteOutline />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>2024-06-13 09:15 AM</td>
                                <td>{shortLogTitle("CCTV Offline Suddenly and Internet Speed Slow")}</td>
                                <td>Benemoy Securities Ltd.</td>
                                <td>Golam Mortuza</td>
                                <td>Completed</td>
                                <td>
                                    <button className="btn btn-xs bg-gray-700 text-white hover:bg-blue-700">
                                        <BsEyeFill />
                                    </button>
                                    <button className="btn btn-xs bg-blue-500 text-white hover:bg-blue-700">
                                        <BiEdit />
                                    </button>
                                    <button className="btn btn-xs bg-red-500 text-white hover:bg-red-700">
                                        <MdDeleteOutline />
                                    </button>
                                </td>
                            </tr>
                            
                           
                            
                        </tbody>
                    </table>
                </div>


            </DashboardLaout>
        </>
    )
}

export default AllLogs