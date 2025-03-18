import { Link } from "react-router-dom";
import { useState } from "react";
import logoImage from "../assets/logo.png";
import { RiDashboardLine } from "react-icons/ri";
import { TbTimelineEventPlus } from "react-icons/tb";
import { GoTasklist } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { LuSendHorizontal } from "react-icons/lu";
import { LuFolderPlus } from "react-icons/lu";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, path: "/", name: "Dashboard", icon: <RiDashboardLine /> },
    {
      id: 2,
      path: "/timeline",
      name: "timeline",
      icon: <TbTimelineEventPlus />,
    },
    { id: 3, path: "/tasks", name: "tasks", icon: <GoTasklist /> },
    { id: 4, path: "/settings", name: "settings", icon: <IoSettingsOutline /> },
    { id: 5, path: "/messages", name: "messages", icon: <LuSendHorizontal /> },
    { id: 6, path: "/files", name: "files", icon: <LuFolderPlus /> },
  ];

  return (
    <aside className="sidebar h-[100vh] w-[6%] absolute left-0 dark:bg-[#1E1F25] bg-[#FBFAFF] ">
      <nav className="flex flex-col justify-start items-center h-[100%] pt-[10px] pl-[10px] pr-[10px] gap-[20%] ">
        <div className="logo">
          <img src={logoImage} alt="logo" className="w-[75px] h-[55px]" />
        </div>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className={`w-[45px] h-[45px] mb-[5px] rounded-[14px] dark:text-[#5F6388] text-gray-800 ${
                selectedItem === item.id
                  ? "bg-[#5051F9] dark:text-white text-white"
                  : "hover:bg-gray-400 hover:text-white"
              }`}
              onClick={() => setSelectedItem(item.id)}
            >
              <Link
                to={item.path}
                className="w-[45px] h-[45px] p-[8px] flex justify-center items-center text-2xl"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
