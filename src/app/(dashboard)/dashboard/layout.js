import { cookies } from "next/headers";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
export default async function DashboardLayout({ children }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      {/* <AppSidebar /> */}
      <main className="flex">
        {children}
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  );
}
