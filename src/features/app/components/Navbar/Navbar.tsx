import { SidebarTrigger } from "@/components/ui/sidebar"
import AvatarMenu from "./components/AvatarMenu"
import NavbarLinks from "./components/NavbarLinks"

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-secondary px-2 py-0.5 border-accent border-b w-full">
      <div className="flex items-center">
        <SidebarTrigger className="-ml-1" />
        <div className="">
          <div className="ml-3 font-heading text-md text-primary">Papa's Ledger</div>
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-2">
        <div className="hidden md:flex"><NavbarLinks /></div>
        <div><AvatarMenu /></div>
      </div>
    </div>
  )
}

export default Navbar
