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
import Link from "next/link";
import React from "react";
import { IoMdHome } from "react-icons/io";

const AppSidebar = () => {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: IoMdHome,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: IoMdHome,
    },
    {
      title: "Property",
      url: "/dashboard/property",
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
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
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

export default AppSidebar;
