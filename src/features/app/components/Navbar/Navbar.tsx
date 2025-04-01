import { ModeToggle } from "@/styles/theme-toggle"
import AvatarMenu from "./components/AvatarMenu"
import NavbarLinks from "./components/NavbarLinks"

function Navbar() {
  return (
    <div className="top-0 z-50 fixed flex justify-between items-center bg-secondary px-2 py-0.5 w-screen">
      {/* Logo */}
      <div className="">
        <div className="font-heading text-md">Papa's Ledger</div>
      </div>
      {/* Links */}
      <div className="flex items-center gap-2">
        <div><NavbarLinks /></div>
        <div><AvatarMenu /></div>
        <div><ModeToggle /></div>
      </div>
    </div>
  )
}

export default Navbar
