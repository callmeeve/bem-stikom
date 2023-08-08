import React, { useState } from "react";
import {
  HomeIcon,
  InboxIcon,
  UserIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  PresentationChartBarIcon,
  DocumentIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon: <HomeIcon className="w-6 h-6" /> },
    { title: "Inbox", icon: <InboxIcon className="w-6 h-6" /> },
    { title: "Accounts", icon: <UserIcon className="w-6 h-6" />, gap: true },
    { title: "Schedule ", icon: <CalendarDaysIcon className="w-6 h-6" /> },
    { title: "Search", icon: <MagnifyingGlassIcon className="w-6 h-6" /> },
    { title: "Analytics", icon: <PresentationChartBarIcon className="w-6 h-6" /> },
    { title: "Files ", icon: <DocumentIcon className="w-6 h-6" />, gap: true },
    { title: "Setting", icon: <Cog6ToothIcon className="w-6 h-6" /> },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-[6rem] "
        } bg-dark min-h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/control.png"
          className={`absolute cursor-pointer -right-3 top-10 w-7 border-dark
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/bem.png"
            className={`cursor-pointer duration-500 w-10 h-10 ${
              open && "rotate-[360deg] w-10 h-10 pr-0.5"
            }`}
          />
          <h1
            className={`text-white origin-left font-semibold text-sm duration-200 ${
              !open && "scale-0"
            }`}
          >
            BEM STIKOM PGRI BANYUWANGI
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light hover:text-dark text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"}`}
            >
              {/* Icon */}
              {Menu.icon}
              {/* Title */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex mx-auto mt-16">{children}</div>
    </div>
  );
};

export default AdminLayout;
