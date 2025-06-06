"use client";

import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  MdDashboard,
  MdOutlineAddTask,
  MdOutlinePendingActions,
  MdSettings,
  MdTaskAlt,
} from "react-icons/md";
import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { setOpenSidebar } from "@/redux/slices/authSlice";
import { Button } from "./ui/button";

const linkData = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Tasks",
    link: "/tasks",
    icon: <FaTasks />,
  },
  {
    label: "Completed",
    link: "/completed/completed",
    icon: <MdTaskAlt />,
  },
  {
    label: "In Progress",
    link: "/in-progress/in progress",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "ToDo",
    link: "/todo/todo",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "Team",
    link: "/team",
    icon: <FaUsers />,
  },
  {
    label: "Trash",
    link: "/trashed",
    icon: <FaTrashAlt />,
  },
];

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const sidebarLinks = user?.isAdmin ? linkData : linkData.slice(0, 5);

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  const NavLink = ({ el }) => {
    const isActive = pathname.startsWith(el.link);
    return (
      <Link
        href={el.link}
        onClick={closeSidebar}
        className={clsx(
          "w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base hover:bg-primary/20",
          isActive && "bg-primary text-white"
        )}
      >
        {el.icon}
        <span className="hover:text-primary">{el.label}</span>
      </Link>
    );
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 p-5">
      {/* Logo/Title */}
      <h1 className="flex gap-1 items-center">
        <p className="bg-primary p-2 rounded-full">
          <MdOutlineAddTask className="text-white text-2xl font-black" />
        </p>
        <span className="text-2xl font-bold text-black">TaskMe</span>
      </h1>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-y-5 py-8">
        {sidebarLinks.map((link) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>

      {/* Settings */}
      <div className="">
        <Button className="w-full flex gap-2 p-2 items-center text-lg text-white">
          <MdSettings />
          <span>Settings</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
