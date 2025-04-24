import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import StoreProvider, { useAppSelector } from "@/redux";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  return (
    <div className="flex min-h-screen w-full bg-gray-200 dark:bg-gray-900">
      {/* Sidebar */}
      <SideBar />
      <main
        className={`dark:bg-dark-bg flex w-full flex-col bg-gray-200 ${isSidebarCollapsed ? "" : "md:pl-64"}`}
      >
        <Navbar />
        {/* Main content */}
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
}

export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
}
