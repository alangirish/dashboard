import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import EventIcon from "@mui/icons-material/Event";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  const [isActive, setIsActive] = useState("Dashboard");
  function handleClick(itemName) {
    setIsActive(itemName);
  }
  return (
    <aside className="lg:h-screen lg:flex lg:flex-col lg:pl-14 hidden">
      <nav className="h-full flex flex-col bg-white shadow-sm">
        <div className="p-4 pb-2 justify-between items-center">
          <img src="Logo.png" alt="Company Logo" />
        </div>

        <div className="pt-6 pl-7">
          <h2 className="text-lightgray uppercase text-[12px] font-roboto leading-8 opacity-50">
            Main Menu
          </h2>
          <SidebarItem
            icon={<DashboardIcon />}
            color={isActive === "Dashboard" ? "text-orange" : "text-lightgray"}
            text={"Dashboard"}
            onClick={() => {
              handleClick("Dashboard");
            }}
          />
          <SidebarItem
            icon={<PersonAddAltIcon />}
            color={
              isActive === "Recruitment" ? "text-orange" : "text-lightgray"
            }
            text={"Recruitment"}
            onClick={() => {
              handleClick("Recruitment");
            }}
          />
          <SidebarItem
            icon={<EventIcon />}
            color={isActive === "Schedule" ? "text-orange" : "text-lightgray"}
            text={"Schedule"}
            onClick={() => {
              handleClick("Schedule");
            }}
          />
          <SidebarItem
            icon={<GroupsIcon />}
            color={isActive === "Employee" ? "text-orange" : "text-lightgray"}
            text={"Employee"}
            onClick={() => {
              handleClick("Employee");
            }}
          />
          <SidebarItem
            icon={<WorkspacesIcon />}
            color={isActive === "Department" ? "text-orange" : "text-lightgray"}
            text={"Department"}
            onClick={() => {
              handleClick("Department");
            }}
          />
        </div>

        <div className="pt-6 pl-7">
          <h2 className="text-lightgray uppercase text-[12px] font-roboto leading-8 opacity-50">
            Other
          </h2>
          <SidebarItem
            icon={<SupportAgentIcon />}
            color={isActive === "Support" ? "text-orange" : "text-lightgray"}
            text={"Support"}
            onClick={() => {
              handleClick("Support");
            }}
          />
          <SidebarItem
            icon={<SettingsIcon />}
            color={isActive === "Settings" ? "text-orange" : "text-lightgray"}
            text={"Settings"}
            onClick={() => {
              handleClick("Settings");
            }}
          />
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
