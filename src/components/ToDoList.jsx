import React, { useState } from "react"; 

function ToDoList() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState("");

  function InputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="flex flex-col items-center p-4">
        <img src="/img.jpg" alt="My Image"className="rounded-4xl h-40 w-40 mb-3.5"  />
      <h1 className="text-2xl font-bold text-black mb-5"> Ubay To Do List </h1>
      <div className="flex gap-5">
        <input
          type="text"
          placeholder="Enter a task here"
          value={newTask}
          onChange={InputChange}
          className="flex px-4 py-2 border-2 border-black rounded-3xl"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-3xl"
        >
          Add Task
        </button>
      </div>
      <ul className="w-2xl">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-2 border m-2"
          >
            <span className="text-black text-2xl">{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="px-2 py-2 bg-blue-500 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
  );
}

export default ToDoList;
