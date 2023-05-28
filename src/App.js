import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { KanbanProvider } from "./contexts/KanbanContext";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <KanbanProvider>
        <KanbanBoard />
      </KanbanProvider>
    </DndProvider>
  );
}

export default App;
