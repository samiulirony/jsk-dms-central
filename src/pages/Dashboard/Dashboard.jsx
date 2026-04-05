import DashboardLaout from "../../layout/DashboardLaout"



function Dashboard() {
    return (
        <>
            <DashboardLaout>
                <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
                <p className="text-gray-700 mb-6">This is your dashboard where you can manage your content, view analytics, and customize your settings.</p>
            </DashboardLaout>
        </>
    )
}

export default Dashboard