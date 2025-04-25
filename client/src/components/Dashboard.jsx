import React from "react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Add your dashboard cards/components here */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-medium">Welcome Back</h2>
          <p className="text-gray-600">
            Your recent activity will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
