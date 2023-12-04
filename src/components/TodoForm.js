import React from 'react';
import Button from '@mui/material/Button';


function TodoForm({ newTask, setNewTask, addTask }) {
  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Add new task!"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button onClick={addTask} variant="contained" color="success">Add Task</Button>
    </div>
  );
}

export default TodoForm;