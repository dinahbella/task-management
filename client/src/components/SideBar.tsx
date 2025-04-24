"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LockIcon,
  LucideIcon,
  Briefcase,
  Search,
  Settings,
  User,
  Users,
  X,
  Menu,
  ChevronUp,
  ChevronDown,
  AlertCircle,
  ShieldAlert,
  AlertTriangle,
  AlertOctagon,
  Layers3,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

function SideBar() {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 hidden h-screen w-64 flex-col border-r bg-white shadow-sm transition-all duration-300 md:flex dark:border-gray-800 dark:bg-gray-900 ${
          isSidebarCollapsed ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b px-6 dark:border-gray-800">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            DINAH
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => dispatch(setIsSidebarCollapsed(true))}
            className="h-8 w-8"
          >
            <X className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </Button>
        </div>

        {/* Team section */}
        <div className="flex items-center gap-4 border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <Image
            src="/logo.jpg"
            alt="DINAH Team Logo"
            width={40}
            height={40}
            className="rounded-md object-cover"
            priority
          />
          <div>
            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">
              DINAH TEAM
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <LockIcon className="h-3.4 w-3.4 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Private
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2">
          <SidebarLink icon={Home} label="Home" href="/" />
          <SidebarLink icon={Briefcase} label="Timeline" href="/timeline" />
          <SidebarLink icon={Search} label="Search" href="/search" />
          <SidebarLink icon={Settings} label="Settings" href="/settings" />
          <SidebarLink icon={User} label="Users" href="/users" />
          <SidebarLink icon={Users} label="Teams" href="/teams" />
        </nav>
      </div>

      {/* Mobile sheet */}
      <Sheet
        open={!isSidebarCollapsed}
        onOpenChange={(open) => !open && dispatch(setIsSidebarCollapsed(true))}
      >
        <SheetContent
          side="left"
          className="w-64 p-0"
          onInteractOutside={() => dispatch(setIsSidebarCollapsed(true))}
        >
          <SheetHeader className="border-b px-6 py-4 dark:border-gray-800">
            <SheetTitle className="text-left text-xl font-bold text-gray-800 dark:text-white">
              DINAH
            </SheetTitle>
          </SheetHeader>
          <div className="flex h-full flex-col">
            {/* Team section */}
            <div className="flex items-center gap-4 border-b border-gray-200 px-6 py-4 dark:border-gray-800">
              <Image
                src="/logo.jpg"
                alt="DINAH Team Logo"
                width={40}
                height={40}
                className="rounded-md object-cover"
                priority
              />
              <div>
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">
                  DINAH TEAM
                </h3>
                <div className="mt-1 flex items-center gap-2">
                  <LockIcon className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Private
                  </p>
                </div>
              </div>
            </div>
            <div>
              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto py-2">
                <SidebarLink icon={Home} label="Home" href="/" />
                <SidebarLink
                  icon={Briefcase}
                  label="Timeline"
                  href="/timeline"
                />
                <SidebarLink icon={Search} label="Search" href="/search" />
                <SidebarLink
                  icon={Settings}
                  label="Settings"
                  href="/settings"
                />
                <SidebarLink icon={User} label="Users" href="/users" />
                <SidebarLink icon={Users} label="Teams" href="/teams" />
              </nav>
              <button
                onClick={() => setShowProjects((prev) => !prev)}
                className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
              >
                <span className="">Projects</span>
                {showProjects ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-5" />
                )}
              </button>
              {/* PROJECT LIST */}
              {/* PRIORITY LINKS */}
              <button
                onClick={() => setShowPriority((prev) => !prev)}
                className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
              >
                <span className="">Priority</span>
                {showPriority ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {showPriority && (
                <>
                  <SidebarLink
                    icon={AlertCircle}
                    label="Urgent"
                    href="/priority/urgent"
                  />
                  <SidebarLink
                    icon={ShieldAlert}
                    label="High"
                    href="/priority/high"
                  />
                  <SidebarLink
                    icon={AlertTriangle}
                    label="Medium"
                    href="/priority/medium"
                  />
                  <SidebarLink
                    icon={AlertOctagon}
                    label="Low"
                    href="/priority/low"
                  />
                  <SidebarLink
                    icon={Layers3}
                    label="Backlog"
                    href="/priority/backlog"
                  />
                </>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const dispatch = useAppDispatch();

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
