/* eslint-disable react/prop-types */
import React, {useState} from "react";

export default function BtnEdit() {
  return (  
    <div
      className='
            cursor-pointer
            flex
            justify-center
            items-center
            w-24
            py-1
            bg-sky-700 
            text-white
            text-center  
            rounded
            border-solid 
            border-1 '
    >
      <i className="fa-solid fa-pen text-[12px] pr-2"></i>
      <span className="pr-3">EDIT</span>
    </div>
    
  );
}
