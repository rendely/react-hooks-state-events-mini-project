import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, updateTasks] = useState(TASKS);
  const [selectedFilter, updateFilter] = useState('All');

  console.log('Tasks initialized',tasks);

  function onTaskFormSubmit(newTask){
    console.log('submitted new task', newTask);
    updateTasks([...tasks, newTask]);
  }

  function onFilterClicked(category){
    updateFilter(category);
  }

  function removeTask(taskText){
    console.log('removing', taskText);
    const updatedTasks = tasks.slice();
    updateTasks(updatedTasks.filter(task => task.text !== taskText));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilterClicked={onFilterClicked} selectedFilter={selectedFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks.filter(t => t.category === selectedFilter || selectedFilter === 'All')} removeTask={removeTask}/>
    </div>
  );
}

export default App;
