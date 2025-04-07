import { Button } from "@/components/ui/button"
import { useLocation, useNavigate } from "react-router"

function NavbarLinks() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="flex px-2 text-xs">
      <Button
        variant='link'
        className={`text-${location.pathname.substring(0, 4) === '/acc' ? 'primary' : 'foreground'}`}
        onClick={() => navigate('accounts')}
      >
        Accounts
      </Button>
      <Button
        variant='link'
        className={`text-${location.pathname.substring(0, 4) === '/bud' ? 'primary' : 'foreground'}`}
        onClick={() => navigate('budgets')}
      >
        Budgeting
      </Button>
      <Button
        variant='link'
        className={`text-${location.pathname.substring(0, 4) === '/cha' ? 'primary' : 'foreground'}`}
        onClick={() => navigate('charts')}
      >
        Charts
      </Button>
    </div>
  )
}

export default NavbarLinks
