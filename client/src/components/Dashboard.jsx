import React from "react";
import {
  MdAdminPanelSettings,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { FaNewspaper, FaUsers } from "react-icons/fa";
import { FaArrowsToDot } from "react-icons/fa6";
import moment from "moment";
import { summary } from "../assets/data";
import clsx from "clsx";
import { Chart } from "@/components/Chart";
import { BGS, PRIOTITYSTYELS, TASK_TYPE, getInitials } from "../utils";
import UserInfo from "@/components/UserInfo";
import { ClipboardEdit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TaskTable = ({ tasks }) => {
  const ICONS = {
    high: <MdKeyboardDoubleArrowUp className="text-lg" />,
    medium: <MdKeyboardArrowUp className="text-lg" />,
    low: <MdKeyboardArrowDown className="text-lg" />,
  };

  const TableHeader = () => (
    <thead className="border-b border-gray-200">
      <tr className="text-left text-sm font-medium text-gray-700">
        <th className="py-3 px-2">Task Title</th>
        <th className="py-3 px-2">Priority</th>
        <th className="py-3 px-2">Team</th>
        <th className="py-3 px-2 hidden md:table-cell">Created At</th>
      </tr>
    </thead>
  );

  const TableRow = ({ task }) => (
    <tr className="border-b border-gray-100 text-sm hover:bg-gray-50/50">
      <td className="py-3 px-2">
        <div className="flex items-center gap-2">
          <div
            className={clsx("w-3 h-3 rounded-full", TASK_TYPE[task.stage])}
          />
          <p className="font-medium text-gray-900 line-clamp-1">{task.title}</p>
        </div>
      </td>

      <td className="py-3 px-2">
        <div className="flex items-center gap-1">
          <span className={clsx(PRIOTITYSTYELS[task.priority])}>
            {ICONS[task.priority]}
          </span>
          <span className="capitalize text-gray-600">{task.priority}</span>
        </div>
      </td>

      <td className="py-3 px-2">
        <div className="flex -space-x-1">
          {task.team.map((m, index) => (
            <div
              key={index}
              className={clsx(
                "w-6 h-6 rounded-full text-white flex items-center justify-center text-xs border-2 border-white",
                BGS[index % BGS.length]
              )}
            >
              <UserInfo user={m} />
            </div>
          ))}
        </div>
      </td>

      <td className="py-3 px-2 hidden md:table-cell">
        <span className="text-gray-500 text-sm">
          {moment(task?.date).fromNow()}
        </span>
      </td>
    </tr>
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Recent Tasks</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <TableHeader />
            <tbody>
              {tasks?.map((task, id) => (
                <TableRow key={id} task={task} />
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

const UserTable = ({ users }) => {
  const TableHeader = () => (
    <thead className="border-b border-gray-200">
      <tr className="text-left text-sm font-medium text-gray-700">
        <th className="py-3 px-2">User</th>
        <th className="py-3 px-2">Status</th>
        <th className="py-3 px-2 hidden sm:table-cell">Joined</th>
      </tr>
    </thead>
  );

  const TableRow = ({ user }) => (
    <tr className="border-b border-gray-100 text-sm hover:bg-gray-50/50">
      <td className="py-3 px-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-700">
            <span className="text-sm font-medium">
              {getInitials(user?.name)}
            </span>
          </div>
          <div>
            <p className="font-medium text-gray-900">{user.name}</p>
            <span className="text-xs text-gray-500">{user?.role}</span>
          </div>
        </div>
      </td>

      <td className="py-3 px-2">
        <span
          className={clsx(
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
            user?.isActive
              ? "bg-blue-100 text-blue-800"
              : "bg-yellow-100 text-yellow-800"
          )}
        >
          {user?.isActive ? "Active" : "Disabled"}
        </span>
      </td>

      <td className="py-3 px-2 hidden sm:table-cell">
        <span className="text-gray-500 text-sm">
          {moment(user?.createdAt).fromNow()}
        </span>
      </td>
    </tr>
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Team Members</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <TableHeader />
            <tbody>
              {users?.map((user) => (
                <TableRow key={user._id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const totals = summary.tasks;

  const stats = [
    {
      id: "1",
      label: "TOTAL TASKS",
      total: summary?.totalTasks || 0,
      icon: <FaNewspaper className="h-5 w-5" />,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      id: "2",
      label: "COMPLETED",
      total: totals["completed"] || 0,
      icon: <MdAdminPanelSettings className="h-5 w-5" />,
      color: "text-teal-600",
      bg: "bg-teal-100",
    },
    {
      id: "3",
      label: "IN PROGRESS",
      total: totals["in progress"] || 0,
      icon: <ClipboardEdit className="h-5 w-5" />,
      color: "text-amber-600",
      bg: "bg-amber-100",
    },
    {
      id: "4",
      label: "TO DO",
      total: totals["todo"] || 0,
      icon: <FaArrowsToDot className="h-5 w-5" />,
      color: "text-rose-600",
      bg: "bg-rose-100",
    },
  ];

  return (
    <div className="container py-4 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ icon, bg, color, label, total, id }) => (
          <Card key={id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">{label}</p>
                <h3 className="text-2xl font-bold">{total}</h3>
                <p className="text-xs text-gray-400">{"110 last month"}</p>
              </div>
              <div className={clsx("p-3 rounded-full", bg, color)}>{icon}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tasks by Priority</CardTitle>
        </CardHeader>
        <CardContent>
          <Chart />
        </CardContent>
      </Card>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <TaskTable tasks={summary.last10Task} />
        </div>
        <div className="lg:col-span-1">
          <UserTable users={summary.users} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
