import AnimatedLink from "@/components/AnimatedLink"
import { useLocation, useNavigate } from "react-router"

function NavbarLinks() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="flex px-2 text-xs">
      <AnimatedLink
        animationDuration={0.5}
        variant='link'
        className={`text-${location.pathname.substring(0, 4) === '/acc' ? 'primary' : 'foreground'}`}
        to='accounts'
      >
        Accounts
      </AnimatedLink>
      <AnimatedLink
        animationDuration={0.5}
        variant='link'
        className={`text-${location.pathname.substring(0, 4) === '/bud' ? 'primary' : 'foreground'}`}
        to='budgets'
      >
        Budgeting
      </AnimatedLink>
      <AnimatedLink
        animationDuration={0.5}
        variant='link'
        className={`text-${location.pathname.substring(0, 4) === '/cha' ? 'primary' : 'foreground'}`}
        to='charts'
      >
        Charts
      </AnimatedLink>
    </div>
  )
}

export default NavbarLinks
