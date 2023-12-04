import React from 'react';
import Todo from './Todo';

function Todos({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="todos">
      {tasks.map((task, index) => (
        <Todo
          key={index}
          task={task}
          index={index}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default Todos;