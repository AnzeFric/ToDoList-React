import React from 'react';
import { Button } from '@carbon/react';
import CustomCheckbox from '../CustomCheckBox';
import './ToDoItem.css';

const ToDoItem = ({ task, index, onToggleComplete, onDeleteTask }) => {
  const handleToggle = () => {
    onToggleComplete(index);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDeleteTask(index);
  };

  return (
    <div
      className={`todo-item ${task.completed ? 'completed' : ''}`}
      onClick={handleToggle}
      style={{ cursor: 'pointer', backgroundColor: task.color }}
    >
      <div className="todo-item-header">
        <CustomCheckbox
          id={task.index}
          labelText={task.title}
          checked={task.completed}
          onChange={handleToggle}
        />
        <p className="todo-item-content">{task.content}</p>
      </div>
      
      <Button className="btn-item-delete" kind="danger" onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default ToDoItem;