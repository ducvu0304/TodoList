import React, { useState, useEffect } from "react";
import Header from "./header/header";
import TaskManager from "./header/TaskManager";

const MiniProject = () => {
  const [taskList, setTaskList] = useState([]);
  const [updateList, setUpdateList] = useState([]);
  const [updateTask, setUpdateTask] = useState({});
  let [isAdd, setIsAdd] = useState(true);

  const handleAddTask = (taskName) => {
    event.preventDefault();
    const uuID = () => {
      let id = Math.floor(Math.random() * 999999);
      return id;
    };

    let task = {
      id: uuID(),
      name: taskName,
    };

    setTaskList((prevState) => [...prevState, task]);
    localStorage.setItem("tasks", JSON.stringify(taskList));
  };

  const handleDeleteItem = (id) => {
    const updateData = taskList.filter((item) => item.id !== id);
    setUpdateList(updateData);

    localStorage.setItem("tasks", JSON.stringify(updateData));
  };

  const handleUpdateItem = (id) => {
    for (let i in taskList) {
      if (taskList[i].id === id) {
        setUpdateTask(taskList[i]);
      }
    }
    setIsAdd(false);
  };

  const handleUpdateList = (id, name) => {
    for (let i in taskList) {
      if (taskList[i].id === id) {
        taskList[i].name = name;
      }
    }

    const arr = taskList;
    setUpdateList(arr);
    setIsAdd(true);
    setUpdateTask({});
    localStorage.setItem("tasks", JSON.stringify(arr));
  };

  useEffect(() => {
    let listData = JSON.parse(localStorage.getItem("tasks")) || [];
    setTaskList(listData);
  }, [updateList]);

  return (
    <div>
      <Header
        isAdd={isAdd}
        item={updateTask}
        handleUpdateList={handleUpdateList}
        handleAddTask={handleAddTask}
      
      />
      {taskList.length > 0 && (
        <TaskManager
          list={taskList}
          handleDeleteItem={handleDeleteItem}
          handleUpdateItem={handleUpdateItem}
        />
      )}
    </div>
  );
};
export default MiniProject;
