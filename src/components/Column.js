import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constants';
import TaskCard from './TaskCard';

const Column = ({ status, tasks, onDropTask }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item) => {
      if (item.status !== status) {
        onDropTask(item, status);
      }
    },
  });

  return (
    <div className="column" ref={drop}>
      <h3>{status}</h3>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;