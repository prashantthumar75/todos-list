import React from "react";

export const NestedTodo = ({todoArr}) => {
  return (
    <div className="container">
       {todoArr.sno},
       {todoArr.title}
       {todoArr.desc}
    </div>
  );
};
