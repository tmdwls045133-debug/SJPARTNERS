"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  Kanban,
  LogOut,
  Settings,
} from "lucide-react";
import { useRoleStore } from "@/lib/useRole";
import { useAuthStore } from "@/lib/useAuth";

const salesMenuItems = [
  { name: "대시보드", href: "/dashboard", icon: LayoutDashboard },
  { name: "고객 관리", href: "/dashboard/customers", icon: Users },
  { name: "계약 관리", href: "/dashboard/contracts", icon: FileText },
];

const managementMenuItems = [
  { name: "대시보드", href: "/dashboard", icon: LayoutDashboard },
  { name: "계약 관리", href: "/dashboard/contracts", icon: FileText },
  { name: "진행현황", href: "/dashboard/funding", icon: Kanban },
];

const adminMenuItems = [
  { name: "대시보드", href: "/dashboard", icon: LayoutDashboard },
  { name: "고객 관리", href: "/dashboard/customers", icon: Users },
  { name: "계약 관리", href: "/dashboard/contracts", icon: FileText },
  { name: "진행현황", href: "/dashboard/funding", icon: Kanban },
  { name: "사용자 관리", href: "/dashboard/admin/users", icon: Settings },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { role, setRole } = useRoleStore();
  const { logout } = useAuthStore();

  const menuItems =
    role === "sales"
      ? salesMenuItems
      : role === "management"
      ? managementMenuItems
      : adminMenuItems;

  async function handleLogout() {
    await logout();
    router.push("/login");
  }

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold">SJPARTNERS</h1>
        <p className="text-xs text-slate-400 mt-1">내부 전산 시스템</p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-700 space-y-3">
        <div className="text-xs text-slate-400">
          현재: {role === "sales" ? "영업팀" : role === "management" ? "관리팀" : "대표자"}
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setRole("sales")}
            className={`text-xs py-2 rounded transition-colors ${
              role === "sales"
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            영업팀
          </button>
          <button
            onClick={() => setRole("management")}
            className={`text-xs py-2 rounded transition-colors ${
              role === "management"
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            관리팀
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`text-xs py-2 rounded transition-colors ${
              role === "admin"
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            대표자
          </button>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition-colors text-sm font-medium"
        >
          <LogOut size={16} />
          로그아웃
        </button>
      </div>
    </aside>
  );
}
