import { Menu, MenuSquare, Moon, Search, Settings2, Sun } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux";
import { Button } from "./ui/button";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 shadow-md dark:bg-gray-900">
      {/* search */}
      <div className="flex items-center gap-4">
        {!isSidebarCollapsed && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => dispatch(setIsSidebarCollapsed(true))}
            className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            <MenuSquare className="h-5 w-5" />
          </Button>
        )}
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-md border-none bg-gray-100 pl-9 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-gray-800 dark:placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* icons */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => dispatch(setIsSidebarCollapsed(false))}
          className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        <Button
          variant="outline"
          size="icon"
          asChild
          className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        >
          <Link href="/settings">
            <Settings2 className="h-5 w-5" />
          </Link>
        </Button>

        <div className="mx-2 hidden h-6 w-px bg-gray-200 md:inline-block dark:bg-gray-700" />
      </div>
    </div>
  );
}
