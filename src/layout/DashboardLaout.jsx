import Footer from "./Footer"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"



function DashboardLaout({ children }) {
    return (
        <>

            <div className="drawer lg:drawer-open bg-base-200">

                {/* This hidden checkbox controls the sidebar toggle. When checked, the sidebar opens on mobile.*/}
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

                {/* ==== MAIN CONTENT AREA in RIGHT SIDE ==== */}
                <div className="drawer-content flex flex-col">
                    <TopBar />
                    <main className="flex-1">
                        {/* A white card container for your actual page content */}
                        <div className="bg-gray-50 p-4 m-2 border-gray-300 rounded-sm shadow-sm">
                            <div className="flex flex-col overflow-auto max-h-86">
                                {children}
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>

                {/* ==== SIDEBAR ==== */}
                <Sidebar />
            </div>



        </>
    )
}

export default DashboardLaout