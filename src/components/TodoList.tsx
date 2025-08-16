import React from "react";
import { useState } from "react";
import SingleTodo from "./SingleTodo";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todoList: object[];
  setTodoList: React.Dispatch<React.SetStateAction<object[]>>;
}

const TodoList = ({ todo, setTodo, todoList }: Props) => {
  return (
    <div>
      {todoList.map((todo) => {
        return <SingleTodo todo={todo} setTodo={setTodo} />;
      })}
    </div>
  );
};

export default TodoList;
