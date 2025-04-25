import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import NotificationPanel from "./NotificationPanel";
import { setOpenSidebar } from "@/redux/slices/authSlice";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-white px-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-4">
        {/* Mobile sidebar toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => dispatch(setOpenSidebar(true))}
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </Button>

        {/* Search bar */}
        <div className="relative hidden w-64 items-center 2xl:w-80">
          <MdOutlineSearch className="absolute left-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <Input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full pl-10 pr-4 shadow-sm focus-visible:ring-1"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Mobile search button (replaces search bar on small screens) */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Search"
        >
          <MdOutlineSearch className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </Button>

        {/* Notification panel */}
        <NotificationPanel />

        {/* User avatar - uncomment when ready */}
        {/* <UserAvatar /> */}
      </div>
    </header>
  );
};

export default Navbar;
