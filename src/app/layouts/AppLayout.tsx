import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { useAtom, useAtomValue } from "jotai"
import { AnimatePresence, motion } from "motion/react"
import { Outlet, useLocation } from "react-router"
import AppSidebar from "../components/AppSidebar"
import Modal from "../components/Modal"
import Navbar from "../components/Navbar"
import { isModalOpenAtom, modalContentAtom, sidebarAtom } from "../state/appAtom"

function AppLayout() {
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(sidebarAtom)
  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom)
  const modalContent = useAtomValue(modalContentAtom)

  return (
    <div className="w-screen h-screen overflow-hidden">
      <SidebarProvider open={isSidebarOpen} onOpenChange={() => setIsSidebarOpen(!isSidebarOpen)}>
        <AppSidebar />
        <SidebarInset>
          <Navbar />
          <ScrollArea className="h-[calc(100vh-40px)]">
            <AnimatePresence mode='wait'>
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </ScrollArea>
        </SidebarInset>
      </SidebarProvider>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalContent?.title}>
        {modalContent?.children}
      </Modal>
    </div>
  )
}

export default AppLayout
