import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import NotificationPanel from "./NotificationPanel";
import { setOpenSidebar } from "@/redux/slices/authSlice";
import { Input } from "./ui/input";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Left section - Hamburger and Search */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => dispatch(setOpenSidebar(true))}
            className="p-1 text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            aria-label="Open sidebar"
          >
            <span className="text-2xl">☰</span>
          </button>

          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MdOutlineSearch className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search..."
              className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-full bg-gray-100 focus:bg-white focus:border-gray-300 focus:ring-1 focus:ring-primary text-gray-800 placeholder-gray-500 transition-all duration-200"
            />
          </div>
        </div>

        {/* Right section - Notifications and User */}
        <div className="flex items-center space-x-4">
          <NotificationPanel />

          {/* Uncomment when UserAvatar is ready */}
          <UserAvatar user={user} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
