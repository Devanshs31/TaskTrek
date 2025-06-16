import React from 'react'
import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import './App.css'

const oldTasks = localStorage.getItem('tasks');

const App = () => {

  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  const handleDelete = (taskIndex) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(updatedTasks);
  }

  return (
    <div className='app'>
        <TaskForm  setTasks = {setTasks} />
        <main className="app_main">
            <TaskColumn title="To Do" tasks={tasks} status="todo" handleDelete={handleDelete} />
            <TaskColumn title="Doing..." tasks={tasks} status="doing" handleDelete={handleDelete} />
            <TaskColumn title="Done" tasks={tasks} status="done" handleDelete={handleDelete} />
        </main>
    </div>
  )
}

export default App
