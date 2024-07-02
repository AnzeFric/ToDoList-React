import React, { useState, useEffect } from 'react';
import { TextInput, TextArea, Button, Grid, Column } from '@carbon/react';
import ToDoList from './components/ToDoList/ToDoList';
import './App.css';
import './globals.scss';

const App = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  const colors = ['#fed5aa', '#fdf2b5', '#d0ebed', '#ffdadb'];

  const [tasks, setTasks] = useState(storedTasks || []);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (title.trim() !== "" && content.trim() !== "") {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      setTasks([...tasks, { title, content, completed: false, color: randomColor }]);
      setTitle("");
      setContent("");
    }
  };

  const handleToggleComplete = (index) => {
    const newTasks = tasks.map((t, i) => i === index ? { ...t, completed: !t.completed } : t);
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <Grid fullWidth className="grid">
        <Column sm={4} md={3} lg={4} className="menu">
          <h1>Menu</h1>
          <div className="Add-task">
            <h4>Add task</h4>
            <TextInput
              id="task-input-title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextArea
              id="task-input-content"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
            />
            <Button id="btn-add-task" onClick={handleAddTask}>Add</Button>
          </div>
        </Column>
        <Column sm={4} md={5} lg={12} className="list">
          <h1>Sticky Wall</h1>
          <ToDoList tasks={tasks} onToggleComplete={handleToggleComplete} onDeleteTask={handleDeleteTask} />
        </Column>
      </Grid>
    </div>
  );
};

export default App;