import './App.css';
import React from 'react';
import { useState } from 'react';
import Title from "./title/title";
import TaskTable from "./task-table/task-table";
export default function App() {
  const [listOfTasks, setListOfTasks] = useState([
    {priority: 1, name: "Prepare presentation", id: 1},
    {priority: 3, name: "Wash dishes", id: 2},
    {priority: 2, name: "Yoga", id: 3},
    {priority: 2, name: "Groceries", id: 4},
    {priority: 1, name: "Pay bills", id: 5},
    {priority: 3, name: "Buy flowers", id: 6}
  ]);
  const [counter, setCounter] = useState(7);

  function handleAddTask(newTask) {
    setCounter(counter + 1);
    setListOfTasks([
      ...listOfTasks,
      {priority: newTask.priority, name: newTask.name, id: counter}
    ]);
  }

  function handleDeleteTask(id) {
    setListOfTasks(listOfTasks.filter(lt => lt.id !== id));
  }

  function handleDeleteAllTasks() {
    setListOfTasks([]);
  }

  return (
    <div>
      <Title />
      <TaskTable tasks={listOfTasks}
                 handleDeleteTask={handleDeleteTask}
                 handleAddTask={handleAddTask}
                 handleDeleteAllTasks={handleDeleteAllTasks}/>
    </div>
  );
}
