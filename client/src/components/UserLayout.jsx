"use client";

import React, { useEffect, useRef, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import Sidebar from "@/components/Sidebar"; // adjust if needed
import { Transition } from "@headlessui/react"; // install via `npm install @headlessui/react`
import Navbar from "./Navbar";
import { setOpenSidebar } from "@/redux/slices/authSlice";

export default function Layout({ children }) {
  const { user, isSidebarOpen } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  //   if (!user) {
  //     router.push("/log-in");
  //   }
  // }, [user, router]);

  // if (!mounted || !user) return null;

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <MobileSidebar />{" "}
      </div>
      {/* Main Content */}

      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <div className="p-4 2xl:px-10">{children}</div>
      </div>
    </div>
  );
}

const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const mobileMenuRef = useRef(null);

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <Transition
      show={isSidebarOpen}
      as={Fragment}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        ref={mobileMenuRef}
        className={clsx(
          "fixed inset-0 z-40 md:hidden bg-black/40",
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
        onClick={closeSidebar}
      >
        <div
          className="bg-white w-3/4 h-full shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full flex justify-end px-5 mt-5">
            <button onClick={closeSidebar} className="text-gray-700">
              <IoClose size={25} />
            </button>
          </div>
          <div className="-mt-10">
            <Sidebar />
          </div>
        </div>
      </div>
    </Transition>
  );
};
