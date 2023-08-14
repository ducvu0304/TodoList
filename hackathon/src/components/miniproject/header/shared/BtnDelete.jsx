import React from "react";

export default function BtnDelete() {
  return (
    <div
      className="
            cursor-pointer
            flex
            justify-center
            items-center
            ml-5
            w-24
            py-1
            bg-red-500
            text-white
            text-center  
            rounded
            border-solid 
            border-1 "
    >
      <i className="fa-solid fa-trash text-[12px] pr-2"></i>
      <span className="pr-3">DELETE</span>
    </div>
  );
}
