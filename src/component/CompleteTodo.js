import React from "react";

const CompleteTodo = ({ todos, deleteTodo }) => {
  const { todo, check } = todos;
  return (
    <div className="flex justify-between align-middle items-center w-5/12 mx-auto mt-5 mb-7">
      <div className="flex align-middle items-center">
        <input
          type="checkbox"
          checked={check}
          className="checkbox checkbox-info"
        />
        <p className="ml-3">{todo}</p>
      </div>
      <div onClick={() => deleteTodo(todos)}>
        <img
          className="h-5 w-5 cursor-pointer"
          src="https://i.ibb.co/vcJWKr3/delete.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default CompleteTodo;
