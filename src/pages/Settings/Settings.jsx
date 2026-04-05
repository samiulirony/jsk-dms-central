import DashboardLaout from "../../layout/DashboardLaout"


function Settings() {
    return (
        <>
            <DashboardLaout>
                {/* Page content goes here. You can add your dashboard widgets, charts, and other components to display relevant information to the user. This area is flexible and can be customized based on your needs. */}

                <h2 className="text-2xl font-bold mb-4">Settings:</h2>
                <p className="text-gray-700 mb-6">Manage your account settings and preferences.</p>
            </DashboardLaout>

        </>
    )
}

export default Settings