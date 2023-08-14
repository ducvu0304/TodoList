/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./header.css";

import BtnEdit from "./shared/BtnEdit";
import BtnDelete from "./shared/BtnDelete";


const Task = ({item, handleDeleteItem, handleUpdateItem }) => {
  return (
    <div className="flex mb-2">
      <lable className="w-[80px] flex items-center justify-between">
        <input type="checkbox" />
        {item.name}
      </lable>
      <div className="flex ml-4 ">
        <span onClick={() => handleUpdateItem(item.id)}><BtnEdit /></span>
        <span onClick={() => handleDeleteItem(item.id)}><BtnDelete /></span>
      </div>
    </div>
  );
};

export default Task;
