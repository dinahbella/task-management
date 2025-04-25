"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function UserLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const user = ""; // Replace with actual auth check or user context

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null; // Prevent rendering before redirect

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="h-screen bg-white sticky top-0 hidden md:block">
        {/* sidebar */}
      </div>

      {/* mobileSidebar */}

      <div className="flex-1 overflow-y-auto">
        {/* Navbar */}
        <div className="p-4 2xl:px-10">{children}</div>
      </div>
    </div>
  );
}
