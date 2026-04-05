import DashboardLaout from "../../layout/DashboardLaout"




function Profile() {
    return (
        <>
            <DashboardLaout>
                {/* Page content goes here. You can add your dashboard widgets, charts, and other components to display relevant information to the user. This area is flexible and can be customized based on your needs. */}
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Profile</h1>
                    <p className="text-gray-600">This is your profile page. You can view and edit your information here.</p>
                </div>
            </DashboardLaout>

        </>
    )
}

export default Profile