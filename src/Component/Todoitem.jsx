import Close from "../Component/Icons/Close";
import { useTodo } from "../hooks/useTodo";

export default function Todoitem({ todo }) {
  const { deleteTodo } = useTodo();
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.status === "completed"}
      />
      <span className="todo-label">{todo.text}</span>
      <button className="button-delete" onClick={() => deleteTodo(todo.id)}>
        <Close />
        Delete
      </button>
    </div>
  );
}
