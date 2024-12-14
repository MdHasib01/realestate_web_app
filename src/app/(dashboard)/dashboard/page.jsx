import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import React from "react";
import { IoMdHome } from "react-icons/io";
const Dashboard = () => {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: IoMdHome,
    },
    {
      title: "Inbox",
      url: "#",
      icon: IoMdHome,
    },
    {
      title: "Calendar",
      url: "#",
      icon: IoMdHome,
    },
    {
      title: "Search",
      url: "#",
      icon: IoMdHome,
    },
    {
      title: "Settings",
      url: "#",
      icon: IoMdHome,
    },
  ];
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default Dashboard;
