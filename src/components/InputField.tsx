import React from "react";
import "./style.css";

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
}

const inputField = ({ todo, setTodo }: Props) => {
  return (
    <div>
      <form className="input">
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
