"use client";
import { useAppDispatch, useAppSelector } from "@/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Home,
  LockIcon,
  LucideIcon,
  Briefcase,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SideBar() {
  const [showProjects, setShowProjects] = React.useState(false);
  const [showPriority, setShowPriority] = React.useState(false);

  const sidebarClassName = `fixed top-0 left-0 z-50 flex justify-between h-screen transition-all duration-300 h-full w-64 flex-col bg-gray-100 p-4 shadow-md dark:bg-black overflow-y-auto bg-white w-64 md:w-64`;
  return (
    <div className={sidebarClassName}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 py-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            DINAH
          </div>
        </div>
        <div className="flex items-center gap-4 border-y border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-md object-cover"
          />
          <div>
            <h3 className="text-[15px] font-bold tracking-wide text-gray-800 dark:text-gray-200">
              DINAH TEAM
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="dark::text-gray-300 h-4 w-4 text-gray-500" />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Private
              </p>
            </div>
          </div>
        </div>
        {/* Nav links*/}
        <nav className="z-10 w-full">
          <SidebarLink icon={Home} label="Home" href="/" />
          <SidebarLink icon={Briefcase} label="Timeline" href="/timeline" />
          <SidebarLink icon={Search} label="Search" href="/search" />
          <SidebarLink icon={Settings} label="Settings" href="/settings" />
          <SidebarLink icon={User} label="Users" href="/users" />
          <SidebarLink icon={Users} label="Teams" href="/teams" />
        </nav>
      </div>
    </div>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");
  const screenWidth = window.innerWidth;

  const dispatch = useAppDispatch();
  const IsSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  return (
    <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${
          isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""
        } justify-start px-8 py-3`}
      >
        {isActive && (
          <div className="absolute top-0 left-0 h-[100%] w-[5px] bg-blue-200" />
        )}

        <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
        <span className={`font-medium text-gray-800 dark:text-gray-100`}>
          {label}
        </span>
      </div>
    </Link>
  );
};

export default SideBar;
