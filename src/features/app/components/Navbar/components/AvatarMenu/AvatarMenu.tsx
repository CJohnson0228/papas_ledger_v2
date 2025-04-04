import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/features/auth";
import userAtom from "@/features/auth/state/userAtom";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

function AvatarMenu() {
  const user = useAtomValue(userAtom)
  const [initials, setInitials] = useState('')
  const { logOut } = useAuth()

  useEffect(() => {
    if (user) {
      if (user.first_name && user.last_name) {
        setInitials(user?.first_name?.charAt(0) + user?.last_name?.charAt(0))
      }
    }
  }, [user])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className="rounded-full avatar-button" >
          <Avatar>
            <AvatarImage src={user?.avatar_url} alt={initials} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-center">{user?.first_name + ' ' + user?.last_name} </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="md:hidden">
          <DropdownMenuItem>Accounts</DropdownMenuItem>
          <DropdownMenuItem>Budgeting</DropdownMenuItem>
          <DropdownMenuItem>Charts</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="md:hidden" />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={logOut}>Logout</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarMenu
