import './App.css';
import React, {useState} from 'react';
import {AddBarContainer} from './Containers/AddBarContainer.js';
import {TaskListContainer} from './Containers/TaskListContainer';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'first task'
    },
    {
      id: 1,
      text: 'second task'
    }
  ]);

  const addTask = (task) => {
    setTasks((prev) => {
      return [task, ...prev];
    });
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddBarContainer addTask={addTask} />
      <TaskListContainer tasks={tasks} />
    </div>
  );
}

export default App;
