import SideBar from "@/components/shared/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insightify",
  description: "Transform Voice, Images, and Videos into Text",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <SideBar />
      <main className="w-full bg-[#F6F6F6]">
        <div className="max-w-[1372px] mx-auto md:py-5 md:px-0 px-3">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default CommonLayout;
