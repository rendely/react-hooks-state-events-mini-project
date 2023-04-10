import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
   
  const [newTask, setNewTask] = useState({text: "", category:"Code"})
  console.log(newTask);

  function handleChange(event){
    const key = event.target.name;
    const val = event.target.value;
    setNewTask({...newTask, [key]:val})
  }
  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit(newTask);
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {categories.filter(category=> (category !== 'All')
          ).map(category=>(
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
