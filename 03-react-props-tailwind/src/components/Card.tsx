import React from "react";

function Card({title, artist, link}) {
    return ( 
        <>
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src={link}
          />
        </div>
        <div className="flex items-center md:items-start">
          <span className="text-2xl font-medium">{title}</span>
          <span className="font-medium text-sky-500">{artist}</span>
        </div>
      </div>
        </>
     );
}

export default Card;
