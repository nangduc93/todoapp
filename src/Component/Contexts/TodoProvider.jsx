import { useReducer } from "react";
import { TodoContext } from "./TodoContext";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload,
            status: "active",
          },
        ],
      };
    }

    case "DELETE":
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    case "CLEAR": {
      return {
        ...state,
        todos: [],
      };
    }
    default: {
      throw new Error("Unhandled action");
    }
  }
};

export default function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(TodoReducer, {
    todos: [
      {
        id: 1,
        text: "Stale",
        status: "active",
      },
      {
        id: 2,
        text: "Prop",
        status: "completed",
      },
      {
        id: 3,
        text: "Component",
        status: "completed",
      },
      {
        id: 4,
        text: "JSX",
        status: "completed",
      },
    ],
  });
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
