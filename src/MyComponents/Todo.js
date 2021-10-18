import React from "react";
import { NestedTodo } from "./NestedTodo";

export const Todo = (props) => {
  return (
    <div className="container-fluid">
      <h1 className="text-center my-3"> todo list</h1>
      {props.TodoArr.map((todo) => {
        return <NestedTodo todoArr={todo} key={todo.sno}/>;
      })}
    </div>
  );
};


