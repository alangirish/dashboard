import { Search } from "@mui/icons-material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SmsIcon from "@mui/icons-material/Sms";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div className="pt-2 px-4 lg:px-14 w-full">
      <div className="flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <button className="text-lightgray opacity-75 lg:hidden">
            <MenuIcon />
          </button>
          <button className="text-lightgray opacity-75">
            <Search />
          </button>
          <input
            type="text"
            className="hidden lg:block rounded-sm bg-transparent text-lightgray"
            placeholder="Search"
          />
        </div>

        
        <div className="flex items-center justify-end space-x-4 lg:space-x-12 flex-grow">
          <button className="text-lightgray opacity-65">
            <NotificationsIcon />
          </button>
          <button className="text-lightgray opacity-65">
            <SmsIcon />
          </button>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="h-9 w-9 lg:h-10 lg:w-10 rounded-full overflow-hidden">
              <img
                src="Profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="hidden lg:block text-[#161E54] font-poppins">
              Admirra John
            </p>
            <button className="text-lightgray opacity-65">
              <KeyboardArrowDownIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
