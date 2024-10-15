import { useContext } from "react";
import { TodoContext } from "../Component/Contexts/TodoContext";

export const useTodo = () => {
  const { state, dispatch } = useContext(TodoContext);

  const addTodo = (text) => {
    dispatch({ type: "ADD", payload: text });
  };

  // const toggleComplete = (id) => {
  //   dispatch(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const clearTodo = () => {
    dispatch({ type: "CLEAR" });
  };
  return {
    state,
    addTodo,
    deleteTodo,
    clearTodo,
  };
};
