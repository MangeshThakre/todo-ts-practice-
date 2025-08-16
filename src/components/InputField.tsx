import React from "react";
import "./style.css";
import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todoList: object[];
  setTodoList: React.Dispatch<React.SetStateAction<object[]>>;
}

const InputField = ({ todo, setTodo, todoList, setTodoList }: Props) => {
  const inputValue = useRef<HTMLInputElement>(null);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTodoList([{ todo: todo, date: Date.now(), isDone: false }, ...todoList]);
    setTodo("");
  }

  return (
    <div>
      <form className="input" onSubmit={(e) => submit(e)}>
        <input
          type="input"
          ref={inputValue}
          placeholder="Enter a task"
          className="input__box"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
