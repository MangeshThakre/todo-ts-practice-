import React from "react";
import { useState } from "react";
import SingleTodo from "./SingleTodo";
import { Todo } from "./modal";
interface Props {
  todo: string;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const TodoList = ({ todo, todos, setTodos }: Props) => {
  return (
    <div>
      {todos.map((todo: Todo) => {
        return <SingleTodo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
