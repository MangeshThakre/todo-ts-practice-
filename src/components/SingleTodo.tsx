import React from "react";
import { useState } from "react";
interface Props {
  todo: { todo: string; id: Date; isDone: boolean };
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const SingleTodo = ({ todo, setTodo }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);

  function done() {
    setEdit(!edit);
  }

  return (
    <div>
      <input type="text" disabled={!edit} value={todo.todo} />
      {!edit ? <button onClick={() => setEdit(!edit)}>edit</button> : ""}
      {edit ? <button onClick={() => edit}>done</button> : ""}
      {edit ? <button onClick={() => done()}>cancle</button> : ""}
    </div>
  );
};

export default SingleTodo;
