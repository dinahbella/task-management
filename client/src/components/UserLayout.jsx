"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "./ui/skeleton";

export default function UserLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/dashboard");
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  if (isLoading) {
    return (
      <div>
        <Skeleton className="w-full h-full bg-primary" />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col md:flex-row">
      {/* Desktop Sidebar (hidden on mobile) */}
      <div className="hidden h-full w-64 border-r bg-white md:block">
        {/* <Sidebar /> */}
      </div>

      {/* Mobile Sidebar (hidden on desktop) */}
      <div className="md:hidden">{/* <MobileSidebar /> */}</div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Navbar */}

        {/* Page Content */}
        <main className="p-4 2xl:px-10">{children}</main>
      </div>
    </div>
  );
}
