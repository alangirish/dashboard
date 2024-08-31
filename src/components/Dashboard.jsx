import React from "react";
import Card from "./Card";
import CardLarge from "./CardLarge";
import RecentActivity from "./RecentActivity";
import Announcement from "./Announcement";
import UpcomingSchedule from "./UpcomingSchedule";

function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row space-x-6">
      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pl-16 pt-6">
          <div className="col-span-1 lg:col-span-3">
            <h1 className="text-2xl/[42px] text-darkblue">Dashboard</h1>
          </div>
          <Card
            topText={"Available Position"}
            value={"24"}
            bText={"4 Urgently needed"}
            bgColor={"#FFEFE7"}
            tColor={"#FF5151"}
          />
          <Card
            topText={"Job Open"}
            value={"10"}
            bText={"4 Active hiring"}
            bgColor={"#E8F0FB"}
            tColor={"#3786F1"}
          />
          <Card
            topText={"New Employees"}
            value={"24"}
            bText={"4 Department"}
            bgColor={"#FDEBF9"}
            tColor={"#EE61CF"}
          />
          <div className="col-span-1 lg:col-span-3">
            <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-4 lg:space-y-0">
              <CardLarge
                tText={"Total Employees"}
                value={"216"}
                mText={"120 Men"}
                wText={"96 Women"}
                img={"Graph1.png"}
              />
              <CardLarge
                tText={"Talent Request"}
                value={"16"}
                mText={"6 Men"}
                wText={"10 Women"}
                img={"Graph2.png"}
              />
            </div>
          </div>
        </div>
        <div className=" pl-12 lg:pl-16">
          <Announcement />
        </div>
      </div>
      <div className="flex flex-col pt-[90px] space-y-4 pl-6">
        <RecentActivity />
        <UpcomingSchedule />
      </div>
    </div>
  );
}

export default Dashboard;
