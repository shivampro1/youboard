import React from "react";
import { useDrag } from "react-dnd";

const KanbanTask = ({ id, name, status }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "task",
    item: { id, name, status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} className="kanban-task">
      {name}
    </div>
  );
};

export default KanbanTask;
