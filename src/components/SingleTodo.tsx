import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const SingleTodo = ({ todo, setTodo }: Props) => {
  return <div>singleTodo</div>;
};

export default SingleTodo;
