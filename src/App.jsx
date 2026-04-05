
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"

import Services from "./pages/Services/Services"
import Settings from "./pages/Settings/Settings"

import Profile from "./pages/User/Profile"
import Logout from "./auth/Logout"
import AddNewLog from "./pages/MonitoringLog/AddNewLog"
import AllLogs from "./pages/MonitoringLog/AllLogs"
import Support from "./pages/Support/Support"


function App() {

  return (
    <> 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/all-logs" element={<AllLogs />} />
        <Route path="/add-new-log" element={<AddNewLog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
        
        
        
      </Routes>

    </>
  )
}

export default App
