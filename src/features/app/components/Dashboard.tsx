import { Button } from "@/components/ui/button"
import { useAuth } from "@/features/auth/hooks/useAuth"
import { motion } from "motion/react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

function Dashboard() {
  const { logOut } = useAuth()

  return (
    <motion.div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <Sidebar />
      <Button onClick={logOut}>Logout</Button>
    </motion.div>
  )
}

export default Dashboard
