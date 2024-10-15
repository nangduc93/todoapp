import Close from "../Component/Icons/Close";
import { useTodo } from "../hooks/useTodo";
import Todoitem from "./Todoitem";

export default function Todolist() {
  const { state, clearTodo } = useTodo();
  return (
    <div>
      <div className="todo-list">
        {state.todos.map((todo) => (
          <Todoitem key={todo.id} todo={todo} />
        ))}
      </div>

      <div className="todo-list-footer">
        <p className="todo-count">You have 1 pending task</p>
        <button className="button-clear" onClick={clearTodo}>
          <Close />
          Clear
        </button>
      </div>
    </div>
  );
}
