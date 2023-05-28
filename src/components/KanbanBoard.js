import React, { useContext, useState } from "react";
import KanbanList from "./KanbanList";
import { KanbanContext } from "../contexts/KanbanContext";

const KanbanBoard = () => {
  const { kanban, setKanban } = useContext(KanbanContext);
  const [taskTitle, setTaskTitle] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    setKanban((prevKanban) => ({
      ...prevKanban,
      "Video Ideas": [...prevKanban["Video Ideas"], { title: taskTitle }],
    }));
    setTaskTitle("");
  };

  return (
    <div className="kanban-board">
      {Object.entries(kanban).map(([title, tasks], index) => (
        <KanbanList key={index} title={title} tasks={tasks} />
      ))}
      <form onSubmit={addTask}>
        <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="New task title..." />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default KanbanBoard;
