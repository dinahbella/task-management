"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation"; // ✅ replaces useNavigate
import { getInitials } from "@/utils"; // adjust import path as needed

const UserAvatar = () => {
  const [open, setOpen] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter(); // ✅ Next.js navigation

  const logoutHandler = () => {
    // Replace this with your actual logout logic
    console.log("Logout");
    // Example: dispatch(logOut()); router.push("/login");
  };

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-10 h-10 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-full bg-blue-600">
            <span className="text-white font-semibold">
              {getInitials(user?.name || "D B")}
            </span>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none z-50">
            <div className="p-4">
              <Menu.Item>
                {() => (
                  <button
                    onClick={() => setOpen(true)}
                    className="text-gray-700 flex w-full items-center gap-2 rounded-md px-2 py-2 text-base hover:bg-gray-100"
                  >
                    <FaUser className="w-5 h-5" />
                    Profile
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {() => (
                  <button
                    onClick={() => setOpenPassword(true)}
                    className="text-gray-700 flex w-full items-center gap-2 rounded-md px-2 py-2 text-base hover:bg-gray-100"
                  >
                    <FaUserLock className="w-5 h-5" />
                    Change Password
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {() => (
                  <button
                    onClick={logoutHandler}
                    className="text-red-600 flex w-full items-center gap-2 rounded-md px-2 py-2 text-base hover:bg-red-100"
                  >
                    <IoLogOutOutline className="w-6 h-6" />
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserAvatar;
