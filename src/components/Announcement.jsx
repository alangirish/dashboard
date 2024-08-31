import { KeyboardArrowDown } from "@mui/icons-material";
import React from "react";

import AnnouncementItem from "./AnnouncementItem";

function Announcement() {
  return (
    <div className="border border-opacity-30 border-lightgray rounded-lg flex flex-col pt-6 pl-6 -mb-2 pr-4" >
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-poppins text-lg lg:text-xl font-semibold text-[#161E54]">
          Announcement
        </h1>
        <div className="flex flex-row items-center justify-center">
          <p className="font-roboto text-[#686868] text-[10px]/[28px] lg:text-[12px]/[28px]">
            Today, 13 Sep 2021
          </p>
          <button className="text-[#B2B2B2] items-center">
            <KeyboardArrowDown />
          </button>
        </div>
      </div>
      <AnnouncementItem title={"Outing schedule for every departement"} text={"5 Minutes ago"} />
      <AnnouncementItem title={"Meeting HR Department"} text={"Yesterday, 12:30 PM"}/>
      <AnnouncementItem title={"IT Department need two more talents for UX/UI Designer position"} text={"Yesterday, 09:15 AM"}/>
      <div className="flex flex-row items-center justify-center pt-2 border-t border-lightgray border-opacity-30">
        <p className="font-poppins text-orange">See All Announcements</p>
      </div>
    </div>
  );
}

export default Announcement;
