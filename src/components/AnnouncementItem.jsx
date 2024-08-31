import React from 'react';
import PushPinIcon from "@mui/icons-material/PushPin";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function AnnouncementItem({ title, text }) {
  return (
    <div className="pt-5 pl-2 shadow-md pb-3">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col justify-center">
          <p className="font-poppins text-[#303030] text-sm leading-5">
            {title}
          </p>
          <p className="font-roboto text-xs text-[#686868] pt-2">
            {text}
          </p>
        </div>
        <div className="flex flex-row space-x-3 items-center">
          <button className="text-[#B2B2B2] rotate-45">
            <PushPinIcon />
          </button>
          <button className="text-[#B2B2B2]">
            <MoreHorizIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementItem;
