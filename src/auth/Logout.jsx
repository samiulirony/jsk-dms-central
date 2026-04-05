import DashboardLaout from "../layout/DashboardLaout"



function Logout() {
    return (
        <>
            <DashboardLaout>
                {/* Page content goes here. You can add your dashboard widgets, charts, and other components to display relevant information to the user. This area is flexible and can be customized based on your needs. */}
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Logout</h1>
                    <p className="text-gray-600">You have been successfully logged out. Thank you for using our service!</p>
                </div>
            </DashboardLaout>

        </>
    )
}

export default Logout