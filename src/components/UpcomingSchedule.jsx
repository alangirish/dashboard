import React from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import ScheduleCard from "./ScheduleCard";

function UpcomingSchedule() {
  return (
    <div className="border border-opacity-30 border-lightgray rounded-lg flex flex-col pt-6 pl-6 -mb-2 pr-4">
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-poppins text-lg lg:text-xl font-semibold text-[#161E54]">
          Upcoming Schedule
        </h1>
        <div className="flex flex-row items-center">
          <p className="font-roboto text-[#686868] text-[10px]/[28px] lg:text-[12px]/[28px]">
            Today, 13 Sep 2021
          </p>
          <button className="text-[#B2B2B2] items-center">
            <KeyboardArrowDown />
          </button>
        </div>
      </div>
      <p className="font-roboto text-xs font-light pt-2 pb-2 text-[#686868]">Priority</p>
      <ScheduleCard title={"Review candidate applications"} text={"Today - 11.30 AM"}/>
      <p className="font-roboto text-xs font-light pt-2 pb-2 text-[#686868]">Other</p>
      
      <ul className="overflow-y-auto max-h-56 no-scrollbar"> 
        <li className="pb-2"><ScheduleCard title={"Interview with candidates"} text={"Today - 10.30 AM"}/></li>
        <li className="pb-2"><ScheduleCard title={"Short meeting with product designer from IT Departement"} text={"Today - 09.15 AM"}/></li>
        <li className="pb-2"><ScheduleCard title={"Short meeting with product designer from IT Departement"} text={"Today - 09.15 AM"}/></li>
        <li className="pb-2"><ScheduleCard title={"Short meeting with product designer from IT Departement"} text={"Today - 09.15 AM"}/></li>
    
      </ul>
      <div className="flex flex-row items-center justify-center pt-2 border-t border-lightgray border-opacity-30">
        <p className="font-poppins text-orange">Create a New Schedule</p>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
