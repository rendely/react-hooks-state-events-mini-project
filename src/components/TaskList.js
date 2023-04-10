import React from "react";
import Task from "./Task"

function TaskList({tasks, removeTask}) {
  return (
    <div className="tasks">
      {tasks.map(task =>(
        <Task removeTask={removeTask} key={task.text} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
