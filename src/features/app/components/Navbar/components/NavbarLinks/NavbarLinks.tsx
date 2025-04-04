import { Button } from "@/components/ui/button"

function NavbarLinks() {
  return (
    <div className="flex px-2 text-xs">
      <Button variant='link'>Accounts</Button>
      <Button variant='link'>Budgeting</Button>
      <Button variant='link'>Charts</Button>
    </div>
  )
}

export default NavbarLinks
