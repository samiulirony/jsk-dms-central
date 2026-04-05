
import DashboardLaout from '../../layout/DashboardLaout';
import { Bold, Italic, Underline, List, ChevronDown, Upload, } from 'lucide-react';

import { CiViewList } from 'react-icons/ci';


function AddNewLog() {
    return (
        <>
            <DashboardLaout>

                <div className="container mx-auto flex items-center justify-between mb-6 px-4">
                    <h1 className="text-2xl font-bold text-gray-800">Monitoring Logs Management</h1>
                    <button className="btn btn-md btn-secondary flex items-center gap-2">
                        <CiViewList size={20} />
                        View All Logs
                    </button>
                </div>

                <div className="container w-full p-2">
                    <fieldset className="border-2 border-gray-300 p-4 mb-4">
                        <legend className="text-sm font-medium text-gray-700">Add New Monitoring Log</legend>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label htmlFor="logTitle" className="block text-sm font-medium text-gray-700 mb-2">Select Business Units</label>
                                <select defaultValue="Pick a language" className="select border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer">
                                    <option disabled={true}>Pick a Business Unit</option>
                                    <option>Medical Center</option>
                                    <option>Hospital</option>
                                    <option>Travel Agency</option>
                                    <option>Highway BUS Service</option>
                                    <option>Resturant</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="logTitle" className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                                <input type="datetime-local" placeholder="Select Date & Time" className="input border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-500" />
                            </div>

                            <div>
                                <div className="mb-4">
                                    <label htmlFor="logTitle" className="block text-sm font-medium text-gray-700 mb-2">Log Title</label>
                                    <input type="text" placeholder="Log Title" className="input border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-500" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="logContent" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                    <textarea placeholder="Log Description" className="input border border-gray-300 w-full min-h-40 focus:outline-none focus:ring-2 focus:ring-gray-500" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="logTitle" className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                <select defaultValue="Pick a language" className="select border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer">
                                    <option disabled={true}>Pick a Status</option>
                                    <option>Pending</option>
                                    <option>In Progress</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                </div>

            </DashboardLaout>

        </>
    )
}

export default AddNewLog;