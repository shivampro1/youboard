import React from "react";
import { useDrop } from "react-dnd";
import KanbanTask from "./KanbanTask";

const KanbanList = ({ title, tasks }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "task",
    drop: (item) => console.log(`Dropped ${item.name} into ${title}`),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`kanban-list ${isOver ? "kanban-list--over" : ""}`}>
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <KanbanTask key={index} id={task.id} name={task.title} />
      ))}
    </div>
  );
};

export default KanbanList;
