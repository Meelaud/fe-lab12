import React, { useState } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const creationTime = new Date().toLocaleTimeString();
      setTasks((prevTasks) => [
        ...prevTasks,
        { text: newTask, completed: false, creationTime },
      ]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const task = updatedTasks[index];

      if (!task.completed) {
        task.text = task.text + ` - Completed at ${new Date().toLocaleTimeString()}`;
      } else {
        task.text = task.text.split('-')[0].trim();
      }

      task.completed = !task.completed;
      return updatedTasks;
    });
  };


  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index, newText) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        text: newText,
      };
      return updatedTasks;
    });
  };

  return (
    <div className="App">
      <h1>Task Management App!</h1>
      <TodoForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
        editTask={editTask}
      />
      <Todos
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        editTask={editTask} 
      />
    </div>
  );
}

export default App;


