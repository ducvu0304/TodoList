/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import ListIcon from "@mui/icons-material/List";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import "./header.css";

const Header = ({isAdd, item, handleUpdateList, handleAddTask}) => {
  let [taskName, setTaskName] = useState("");

  useEffect(() => {
    isAdd ? setTaskName("") : setTaskName(item.name);
  }, [item]);

  return (
    <div className="bg-[#246cca] py-2 mb-2">
      <div className="ml-[30px] text-white">
        <span className="mr-[20px]">Mini Project</span>
        <label className="relative">
          <span className="absolute mt-[3px] left-2 cursor-pointer">
            <ListIcon />
          </span>
          <input
            className="bg-[#457fd1] pl-[40px] py-1 border-[#457fd1] rounded"
            type="text"
            placeholder="New Task"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
          <span className="cursor-pointer ml-[10px]">
            {isAdd ? (
              <AddIcon onClick={() => handleAddTask(taskName)} />
            ) : (
              <EditIcon onClick={() => handleUpdateList(item.id, taskName)} />
            )}
          </span>
        </label>
      </div>
    </div>
  );
};

export default Header;
