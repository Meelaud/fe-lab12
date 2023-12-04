import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

function Todo({ task, index, toggleTaskCompletion, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString();
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  const saveEdit = () => {
    if (editedTask.trim() !== '') {
      const editedText = task.completed ? `${editedTask} - Completed at ${getCurrentTime()}` : editedTask;
      toggleTaskCompletion(index, editedText);
      setIsEditing(false);
    }
  };

  return (
    <div className="todo">
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(index, task.text)}
        defaultChecked color="success"
      />
      {isEditing ? (
        <div className="editBox">
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <Button onClick={saveEdit}>Save</Button>
          <Button onClick={cancelEdit}>Cancel</Button>
        </div>
      ) : (
        <span className={task.completed ? 'completed' : ''}>
          {task.text} - Started at {getCurrentTime()}
        </span>
      )}
      <Button onClick={() => setIsEditing(true)} variant="outlined">Edit</Button>
      <Button onClick={() => deleteTask(index)} variant="contained" color="error">Remove</Button>
    </div>
  );
}

export default Todo;