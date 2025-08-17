import React from "react";
import { useState } from "react";
import { Todo } from "./modal";
interface Props {
  todo: Todo;
}

const SingleTodo = ({ todo }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  function done() {
    setEdit(!edit);
  }

  console.log(todo.id);

  return (
    <div>
      <input type="text" disabled={!edit} value={todo.item} />
      {!edit ? <button onClick={() => setEdit(!edit)}>edit</button> : ""}
      {edit ? <button onClick={() => edit}>done</button> : ""}
      {edit ? <button onClick={() => done()}>cancle</button> : ""}
    </div>
  );
};

export default SingleTodo;
