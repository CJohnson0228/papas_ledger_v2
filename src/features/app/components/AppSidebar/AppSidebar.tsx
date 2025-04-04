import { Separator } from "@/components/ui/separator"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar"
import { ChartArea, Landmark, Receipt } from "lucide-react"

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="bg-accent text-center">
        Menu
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel><Landmark className="mr-2" />Accounts</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="flex justify-center">
                Add Account
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <Separator />
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel><Receipt className="mr-2" /> Budgets</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="flex justify-center">
                Add Budget
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <Separator />
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel><ChartArea className="mr-2" />Charts</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="flex justify-center">
                Add Chart
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <Separator />
      </SidebarContent>
      <Separator />
      <SidebarFooter className="text-muted-foreground text-xs text-center">
        Developed by C.M. Johnson &copy; 2025
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export default AppSidebar
