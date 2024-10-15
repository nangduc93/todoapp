import { useTodo } from "../hooks/useTodo";
import Plus from "./Icons/Plus";

export default function Todoform() {
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    addTodo(text);
    e.target.reset();
  };
  return (
    <form action="" className="todo-form" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" />
      <button className="button-create">
        <Plus /> Add
      </button>
    </form>
  );
}
