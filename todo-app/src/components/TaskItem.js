import React, { useState } from 'react';

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (editing) onEdit(task.id, editText);
    setEditing(!editing);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''} ${task.priority.toLowerCase()}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {editing ? (
        <input value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        <span>{task.text}</span>
      )}
      <div className="controls">
        <button onClick={handleEdit}>{editing ? 'Save' : 'Edit'}</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
