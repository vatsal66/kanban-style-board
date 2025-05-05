import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../constants';

const TaskCard = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: { ...task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }), [task]);

  return (
    <div ref={drag} className={`task-card ${isDragging ? 'dragging' : ''}`}>
      <h4>{task.title}</h4>
      {task.description && <p>{task.description}</p>}
    </div>
  );
};

export default TaskCard;