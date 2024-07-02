import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import { ListItem } from '@carbon/react';
import './ToDoList.css';

const ToDoList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <div className="todo-item-container">
      {tasks.map((task, index) => (
        <div key={index} className="todo-item-wrapper">
          <ListItem>
            <ToDoItem
              task={task}
              index={index}
              onToggleComplete={onToggleComplete}
              onDeleteTask={onDeleteTask}
            />
          </ListItem>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;