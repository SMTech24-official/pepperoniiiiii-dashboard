"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import logo from "../../assets/placeholders/image_placeholder.png";
import {
  Settings,
  LayoutDashboardIcon,
  Users,
  PackageSearch,
  ListOrdered,
  ChartSpline,
  Bot,
  ClipboardType,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { removeCookie } from "@/utils/cookies";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboardIcon,
  },
  {
    title: "User Management",
    url: "/user-management",
    icon: Users,
  },
  {
    title: "Product",
    url: "/product",
    icon: PackageSearch,
  },
  {
    title: "Order",
    url: "/order",
    icon: ListOrdered,
  },
  {
    title: "Content",
    url: "/content",
    icon: ChartSpline,
  },
  {
    title: "Ai Diagnosis",
    url: "/ai-diagnosis",
    icon: Bot,
  },
  {
    title: "Community & Forum",
    url: "/community-forum",
    icon: ClipboardType,
  },
  {
    title: "Setting",
    url: "/setting",
    icon: Settings,
  },
];

const SideBar = () => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLolgout = () => {
    dispatch(logout());
    removeCookie("token");
    router.push("/login");
  };
  return (
    <Sidebar>
      <SidebarContent className="">
        <SidebarGroup />
        <SidebarGroupLabel className="mb-14 mt-8 mx-auto">
          <Image src={logo} alt="logo" width={190} height={50} />
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="px-4 space-y-1">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`text-base font-medium py-6 ${
                    pathName === `${item.url}` ? "bg-primary text-white" : ""
                  }`}
                >
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="">
        <button
          onClick={handleLolgout}
          className="py-3 border border-primary rounded-lg font-medium text-base"
        >
          Log out
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBar;
