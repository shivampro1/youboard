import React, { useState, useContext } from "react";
import { KanbanContext } from "../contexts/KanbanContext";

const KanbanAddTask = () => {
  const [name, setName] = useState("");
  const { addTask } = useContext(KanbanContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addTask("todo", name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add task" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default KanbanAddTask;
