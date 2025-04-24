import { Search, Settings2 } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 shadow-md dark:bg-black">
      {/* search */}
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute top-1/2 left-2 mr-2 h-5 w-5 -translate-y-1/2 cursor-pointer text-gray-500 dark:text-white" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-md border-none bg-gray-100 pl-8 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-gray-700 dark:placeholder:text-gray-300"
          />
        </div>
      </div>
      {/* icons */}
      <div className="flex items-center">
        <Link
          href="/settings"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          <Settings2 className="h-5 w-5 cursor-pointer" />
        </Link>
        <div className="mr-5 ml-2 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
}
