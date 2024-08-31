import React from "react";

function RecentActivity() {
  return (
    <div className="rounded-lg bg-[#161E54] pb-4 w-full">
      <div className="bg-[#1B204A] rounded-t-lg">
        <h1 className="font-poppins text-lg pl-4 pt-4 text-white ">
          Recently Active
        </h1>
      </div>
      <div className="pl-4 pt-8 pr-12 w-full">
        <p className="text-xs font-roboto text-white opacity-60">
          10.40 AM, Fri 30th Aug 2024
        </p>
        <h1 className="text-2xl font-poppins text-white pt-4 ">
          You Posted a new Job
        </h1>
        <p className="font-roboto text-[14px]/[20px] text-white pt-4 opacity-80 pr-10">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
        <div className="pt-8 flex flex-col space-y-2 lg:flex-row lg:items-center lg:justify-between">
          <h3 className="font-poppins text-xs lg:text-sm text-white">Today you makes 12 Activity</h3>
          <button className="bg-[#FF5151]  text-white rounded-lg p-2 text-xs lg:text-sm">
            See All Activity
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
