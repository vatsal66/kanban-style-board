import React, { useState } from 'react';
import { STATUS_LIST } from '../constants';

const TaskForm = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(STATUS_LIST[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = { title, description, status };
    onSave(newTask);
    onClose();
  };

  return (
    <div className="modal">
      <form className="task-form" onSubmit={handleSubmit}>
        <h3>New Task</h3>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          {STATUS_LIST.map((s) => <option key={s}>{s}</option>)}
        </select>
        <button type="submit">Add Task</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default TaskForm;