import React from "react";

function Card({ topText, value, bText, bgColor, tColor }) {
  return (
    <div className="p-3 rounded-lg" style={{ backgroundColor: bgColor }}>
      <h2 className="font-poppins text-darkblue text-xl p-2">{topText}</h2>
      <h1 className="font-poppins text-darkblue text-4xl/[28px] pl-2 pb-4 pt-2">{value}</h1>
      <h2 className="font-poppins text-sm pl-2 pb-2" style={{ color: tColor }}>
        {bText}
      </h2>
    </div>
  );
}

export default Card;
