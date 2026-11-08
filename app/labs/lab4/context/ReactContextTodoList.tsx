import { useState } from "react";
import { TodosProvider, useTodosContext, type Todo } from "./todosContext";

function TodoListBody() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  // The draft being typed; id is set only while editing an existing todo
  const [todo, setTodo] = useState<Todo>({ id: "", title: "" });
  return (
    <div id="wd-context-todo-list">
      <h3>Todo List (React Context)</h3>
      <input
        className="me-2 rounded border border-neutral-300 px-3 py-1.5"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        id="wd-context-todo-title"
      />
      <button
        type="button"
        onClick={() => {
          addTodo(todo.title);
          setTodo({ id: "", title: "" });
        }}
        id="wd-context-todo-add"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Add
      </button>
      <button
        type="button"
        onClick={() => {
          updateTodo(todo);
          setTodo({ id: "", title: "" });
        }}
        id="wd-context-todo-update"
        className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
      >
        Update
      </button>
      <ul className="m-0 mt-2 max-w-md list-none p-0">
        {todos.map((t) => (
          <li
            key={t.id}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
          >
            <span>{t.title}</span>
            <span>
              <button
                type="button"
                onClick={() => setTodo(t)}
                className="me-2 rounded bg-blue-600 px-2 py-0.5 text-sm font-medium text-white"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => deleteTodo(t.id)}
                className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ReactContextTodoList() {
  return (
    <TodosProvider>
      <TodoListBody />
    </TodosProvider>
  );
}
