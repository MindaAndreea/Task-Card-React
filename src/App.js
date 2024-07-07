import "./App.css";
import TaskCard from "./components/TaskCard/TaskCard";

function App() {
  return (
    <div className="App">
      <h1 className="title">Task Manager</h1>
      <div className="container">
      <TaskCard type="T-1" status="To Do" text="Create a design system for Enum Workspace" duedate="24/ 01 /2021"/>
      <TaskCard type="T-1" status="To Do" text="Create a design system for Enum Workspace" duedate="24/ 01 /2021"/>
      <TaskCard type="T-2" status="In Progress" text="Create a design system for Enum Workspace" duedate="24/ 01 /2021"/>
      <TaskCard type="T-2" status="In Progress" text="Create a design system for Enum Workspace" duedate="24/ 01 /2021"/>
      <TaskCard type="T-3" status="Completed" text="Create a design system for Enum Workspace" duedate="24/ 01 /2021"/>
      <TaskCard type="T-3" status="Completed" text="Create a design system for Enum Workspace" duedate="24/ 01 /2021"/>
      <TaskCard type="T-4" status="Done" text="Create a design system for Enum Workspace" duedate="24/ 01 /2021"/>
      </div>
    </div>
  );
}

export default App;
