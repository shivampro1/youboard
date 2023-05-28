import React, { useState, createContext } from "react";

export const KanbanContext = createContext();

export const KanbanProvider = ({ children }) => {
  const [kanban, setKanban] = useState({
    "Video Ideas": [
      { id: "1", title: "Video 1" },
      { id: "2", title: "Video 2" },
    ],
    Scripting: [
      { id: "3", title: "Script 1" },
      { id: "4", title: "Script 2" },
    ],
    "Voice Over": [
      { id: "5", title: "Voice Over 1" },
      { id: "6", title: "Voice Over 2" },
    ],
    Editing: [
      { id: "7", title: "Edit 1" },
      { id: "8", title: "Edit 2" },
    ],
    Uploaded: [
      { id: "9", title: "Uploaded 1" },
      { id: "10", title: "Uploaded 2" },
    ],
  });

  return <KanbanContext.Provider value={{ kanban, setKanban }}>{children}</KanbanContext.Provider>;
};
