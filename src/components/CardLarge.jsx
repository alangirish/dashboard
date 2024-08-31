import React from "react";

function CardLarge({tText, value, mText, wText, img}) {
  return (
    <div className="grid grid-cols-2 border border-lightgray rounded-lg p-4 border-opacity-20 w-[350px] lg:w-auto">
      <div className="col-span-1">
        <h2 className="text-darkblue font-poppins text-lg pl-2 pb-2">
          {tText}
        </h2>
        <h1 className="text-darkblue font-poppins text-5xl pt-2 pb-4 pl-2">
          {value}
        </h1>
        <h6 className="font-roboto text-xs text-lightgray pt-5 pl-2">
          {mText}
        </h6>
        <h6 className="font-roboto text-xs text-lightgray pt-2 pl-2">
          {wText}
        </h6>
      </div>
      <div className="pt-8 col-span-1">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default CardLarge;
