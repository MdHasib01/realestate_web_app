import { cookies } from "next/headers";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar/AppSidebar";
export default async function DashboardLayout({ children }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen || true}>
      <AppSidebar />
      <main>
        <SidebarTrigger className="border p-2 m-2 block md:hidden" />
        {children}
      </main>
    </SidebarProvider>
  );
}
