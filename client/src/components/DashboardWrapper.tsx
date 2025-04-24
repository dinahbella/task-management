import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-gray-200 dark:bg-gray-900">
      {/* Sidebar */}
      <SideBar />
      <main className={`flex w-full flex-col md:pl-64`}>
        <Navbar />
        {/* Main content */}
        {children}
      </main>
    </div>
  );
}
