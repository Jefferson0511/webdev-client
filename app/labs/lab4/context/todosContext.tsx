import { createContext, useContext, useState, type ReactNode } from "react";

export type Todo = { id: string; title: string };

type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

// The provider owns the todos array; children change it only through these functions
export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Context" },
    { id: "3", title: "Finish Lab 4" },
  ]);
  const addTodo = (title: string) =>
    setTodos([...todos, { id: new Date().getTime().toString(), title }]);
  const updateTodo = (todo: Todo) =>
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  const deleteTodo = (id: string) => setTodos(todos.filter((t) => t.id !== id));
  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}
