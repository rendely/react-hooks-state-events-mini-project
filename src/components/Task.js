import React from "react";

function Task({text, category, removeTask}) {
  function handleClick(event){
    removeTask(event.target.name);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick} name={text}>X</button>
    </div>
  );
}

export default Task;
