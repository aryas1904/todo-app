import React, { useEffect, useState } from 'react';
import { loadTasks, saveTasks } from './utils/storage';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(loadTasks());
  const [filter, setFilter] = useState('All');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    document.body.className = dark ? 'dark' : '';
  }, [dark]);

  const filtered = tasks.filter(task =>
    filter === 'All' ? true :
    filter === 'Completed' ? task.completed :
    !task.completed
  );

  const sortPriority = (list) => {
    const order = { High: 1, Medium: 2, Low: 3 };
    return [...list].sort((a, b) => order[a.priority] - order[b.priority]);
  };

  const addTask = (task) => setTasks([...tasks, task]);
  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));
  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  return (
    <div className="container">
      <h2>ToDo App</h2>
      <TaskForm onAdd={addTask} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <ThemeToggle dark={dark} toggleDark={() => setDark(!dark)} />
      <TaskList
        tasks={sortPriority(filtered)}
        onToggle={toggleComplete}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;
