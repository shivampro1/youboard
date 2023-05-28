import React from "react";
import { useDrag } from "react-dnd";

const TaskCard = ({ title }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { title },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="task-card" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <p>{title}</p>
    </div>
  );
};

export default TaskCard;
