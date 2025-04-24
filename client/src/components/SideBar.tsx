"use client";
import { LockIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function SideBar() {
  const [showProjects, setShowProjects] = React.useState(false);
  const [showPriority, setShowPriority] = React.useState(false);

  const sidebarClassName = `fixed top-0 left-0 z-50 flex justify-between h-screen transition-all duration-300 h-full w-64 flex-col bg-gray-100 p-4 shadow-md dark:bg-black overflow-y-auto bg-white w-64 md:w-64`;
  return (
    <div className={sidebarClassName}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 py-3">
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
        {/* Nav links */}
      </div>
    </div>
  );
}

export default SideBar;
