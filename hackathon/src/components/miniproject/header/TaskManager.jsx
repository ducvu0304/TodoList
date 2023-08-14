/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Task from "./Task";

function TaskManager({list, handleDeleteItem, handleUpdateItem }) {
  return (
    <div className="flex flex-col px-20 justify-center items-center">
      <p>You have {list.length} tasks to complete</p>
      <div className="text-center mt-5 shadow-3xl p-[10px] ">
        {list.map((item, index) => (
            <Task 
              key={index} item={item} 
              handleDeleteItem={handleDeleteItem} 
              handleUpdateItem={handleUpdateItem} />
        ))}
      </div>
    </div>
  );
}
export default TaskManager;
