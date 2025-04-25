import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

export default function UserLayout({ children }) {
  const user = "";
  const pathname = usePathname();
  const router = useRouter();
  return user ? (
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
  ) : (
    router.push("/login")
  );
}
