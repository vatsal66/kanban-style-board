import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import TaskForm from './components/TaskForm';
import { STATUS_LIST } from './constants';

const API_URL = 'http://localhost:3001/tasks'; // json-server endpoint

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTask = async (task) => {
    try {
      const res = await axios.post(API_URL, task);
      setTasks(prev => [...prev, res.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDropTask = async (task, newStatus) => {
    try {
      const updatedTask = { ...task, status: newStatus };
      await axios.patch(`${API_URL}/${task.id}`, { status: newStatus });
      setTasks(prev => prev.map(t => t.id === task.id ? updatedTask : t));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <header>
          <h1>Task Dashboard</h1>
          <button onClick={() => setShowForm(true)}>+ Add New Task</button>
        </header>
        <div className="board">
          {STATUS_LIST.map((status) => (
            <Column
              key={status}
              status={status}
              tasks={tasks.filter((task) => task.status === status)}
              onDropTask={handleDropTask}
            />
          ))}
        </div>
        {showForm && <TaskForm onClose={() => setShowForm(false)} onSave={handleAddTask} />}
      </div>
    </DndProvider>
  );
};

export default App;