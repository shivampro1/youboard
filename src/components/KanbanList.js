import React from "react";
import { useDrop } from "react-dnd";
import KanbanTask from "./KanbanTask";
import { KanbanContext } from "../contexts/KanbanContext";
import { useContext } from "react";
const KanbanList = ({ title, tasks }) => {
  const { kanban, setKanban } = useContext(KanbanContext);

  const [, drop] = useDrop({
    accept: "task",
    drop: (item) => moveTask(item.id, title),
  });

  const moveTask = (id, newStatus) => {
    const newKanban = { ...kanban };
    let task;
    // Iterate over each status
    Object.keys(newKanban).forEach((status) => {
      newKanban[status] = newKanban[status].filter((t) => {
        if (t.id === id) {
          task = t;
          return false;
        }
        return true;
      });
    });

    if (task) {
      newKanban[newStatus].push(task);
      setKanban(newKanban);
    }
  };

  return (
    <div ref={drop} className="kanban-list">
      <h2>{title}</h2>
      {tasks.map((task) => (
        <KanbanTask key={task.id} id={task.id} name={task.title} status={title} />
      ))}
    </div>
  );
};

export default KanbanList;
