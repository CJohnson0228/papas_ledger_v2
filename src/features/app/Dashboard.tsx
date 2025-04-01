import { Button } from "@/components/ui/button"
import { useAuth } from "../auth/hooks/useAuth"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function Dashboard() {
  const { logOut } = useAuth()

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <Sidebar />
      <Button onClick={logOut}>Logout</Button>
    </div>
  )
}

export default Dashboard
