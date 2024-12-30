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
import { CiGrid41 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSun } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
const AppSidebar = () => {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: CiGrid41,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: CiUser,
    },
    {
      title: "Property",
      url: "/dashboard/property",
      icon: CiViewList,
    },
    {
      title: "User Management",
      url: "/dashboard/user_management",
      icon: CiSun,
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
