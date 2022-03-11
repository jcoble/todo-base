import { proxy } from "valtio";
import  { todoStore } from "../Store"

// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface todoStore {
  id: number;
  todos: Todo[];
  newTodo: "";
  addTodo: () => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => boolean;
  updateTodo: (id: number, text: string) => void;
}
export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done
  }));

export const removeTodo = (todos: Todo[], id: number): Tcodo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false
  }
];
export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text
  }));

const todoState = proxy<todoStore>({
  todos = [],
  newTodo = "",
  addTodo() {
    todoState.todos = addTodo(todoState.todos, todoState.newTodo);
    todoState.newTodo = "";
  },
  removeTodo() {
    todoState.todos = removeTodo(todoState.todos, todoState.id);
  },
  toggleTodo() {
    todoState.todos = toggleTodo(todoState.todos, todoState.id);
  },
  updateTodo() {
    todoState.todos = updateTodo(
      todoState.todos,
      todoState.id,
      todoState.newTodo
    );
  }
});
export default todoState;
