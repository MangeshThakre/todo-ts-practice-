import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todoList: object[];
  setTodoList: React.Dispatch<React.SetStateAction<object[]>>;
}

const inputField = ({ todo, setTodo }: Props) => {
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div>
      <form className="input" onSubmit={(e) => submit(e)}>
        <input
          type="input"
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

export default inputField;
