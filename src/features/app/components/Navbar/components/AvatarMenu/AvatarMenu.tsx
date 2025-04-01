import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import userAtom from "@/features/auth/state/userAtom";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

function AvatarMenu() {
  const user = useAtomValue(userAtom)
  const [initials, setInitials] = useState('')

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
        <Button variant='outline' size='icon' className="rounded-full">
          <Avatar>
            <AvatarImage src={user?.avatar_url} alt={initials} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarMenu
