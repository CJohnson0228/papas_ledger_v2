import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { motion } from "motion/react"
import AppSidebar from "./AppSidebar"
import Navbar from "./Navbar"

function Dashboard() {

  return (
    <motion.div className="w-screen h-screen overflow-hidden">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Navbar />
          <ScrollArea className="h-[calc(100vh-40px)]">
            {/* This is the content window and will be based on Outlet from Router */}
            <div>Content</div>
            {/* This is the content window and will be based on Outlet from Router */}
          </ScrollArea>
        </SidebarInset>
      </SidebarProvider>
    </motion.div>
  )
}

export default Dashboard
