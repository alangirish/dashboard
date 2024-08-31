import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function ScheduleCard({title, text}) {
  return (
    <div className="pt-5 pl-2 border border-lightgray border-opacity-20 rounded-lg pb-3">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col justify-center">
          <p className="font-poppins text-[#303030] text-sm leading-5">
            {title}
          </p>
          <p className="font-roboto text-xs text-[#686868] pt-2">
            {text}
          </p>
        </div>
        <div className="flex flex-row space-x-3 items-center pr-2">
          <button className="text-[#B2B2B2] -mt-3">
            <MoreHorizIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScheduleCard;
