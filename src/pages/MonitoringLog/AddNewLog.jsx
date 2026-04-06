
import DashboardLaout from '../../layout/DashboardLaout';
import { Bold, Italic, Underline, List, ChevronDown, Upload, } from 'lucide-react';

import { CiViewList } from 'react-icons/ci';
import { Link } from 'react-router-dom';


function AddNewLog() {
    return (
        <>
            <DashboardLaout>

                <div className="flex items-center justify-between my-3 px-3">
                    <Link to="/all-logs" className="btn btn-md bg-gray-900 text-white hover:bg-gray-200 hover:text-gray-900 uppercase border-2 border-gray-900 flex items-center gap-2">
                        <CiViewList size={20} />
                        View All Logs
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-800 uppercase">Monitoring Logs Management</h1>

                </div>

                <div className="container w-full p-2">
                    <fieldset className="border-2 border-gray-300 p-4 mb-4">
                        <legend className="text-2xl font-medium text-gray-700">Add New Monitoring Log</legend>

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

                        <div className="mb-4 flex justify-end">
                            <button className="btn btn-lg bg-gray-100 text-gray-900 hover:bg-gray-300 hover:text-gray-900 uppercase mt-6 mr-6 shadow-sm border-2 border-gray-600">Reset</button>
                            <button className="btn btn-lg bg-gray-900 text-white hover:bg-gray-200 hover:text-gray-900 uppercase mt-6 border-2 border-gray-900">Submit</button>
                        </div>
                    </fieldset>

                </div>

            </DashboardLaout>

        </>
    )
}

export default AddNewLog;