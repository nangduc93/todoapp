import { useState } from "react";
import "./App.css";

import Todoform from "./Component/Todoform";
import Todolist from "./Component/Todolist";
import TodoProvider from "./Component/Contexts/TodoProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TodoProvider>
      <div className="todo-app-container">
        <div className="todo-app">
          <div className="title">Simple Todo App</div>

          <Todoform />

          <Todolist />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
