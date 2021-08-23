import React, { useState } from "react";

const AddTask = () => {
  return (
    <div className="add-task-dialog">
      <input />
      <div className="add-task-actions-container">
        <div className="btns-container">
          <button className="add-btn">Add Task</button>
          <button className="cancel-btn">Cancel</button>
        </div>
        <div className="icon-container"></div>
      </div>
    </div>
  );
};
const Tasks = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  return (
    <div className="tasks">
      <h1>Inbox</h1>
      <div
        className="add-task-btn"
        onClick={() => setShowAddTask((prevState) => !prevState)}
      >
        <span className="pius">+</span>
        <spam className="add-task-text">Add Task</spam>
      </div>
      {showAddTask && <AddTask />}
    </div>
  );
};

export default Tasks;
