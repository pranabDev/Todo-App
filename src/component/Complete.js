import React, { useContext } from "react";
import TodoContect from "./Contect/TodoContect";
import CompleteTodo from "./CompleteTodo";

const Complete = ({ deleteTodo, AllDelete }) => {
  const todo = useContext(TodoContect);
  const filter = todo.filter((to) => to.check === true);

  return (
    <div>
      {filter.map((fill) => (
        <CompleteTodo
          key={fill.id}
          deleteTodo={deleteTodo}
          todos={fill}
        ></CompleteTodo>
      ))}
      <div className="w-40 mx-auto mt-3">
        <button
          onClick={() => AllDelete(filter)}
          className="btn btn-error text-white"
        >
          delete all
        </button>
      </div>
    </div>
  );
};

export default Complete;
