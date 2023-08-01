import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddTodo = ({ PushTodo, ediTable, EditTodo }) => {
  const [value, setValue] = useState({});

  const handleValue = (e) => {
    const result = { ...value, [e.target.name]: e.target.value };
    setValue(result);
  };

  const handleaddTodo = (e) => {
    e.preventDefault();
    if (Object.keys(value).length === 0) {
      toast.error("Please type a Todo");
      return value;
    } else if (ediTable) {
      EditTodo(value);
    } else {
      PushTodo(value);
    }
    const result = { todo: "" };
    setValue(result);
  };

  useEffect(() => {
    setValue(ediTable);
  }, [ediTable]);

  return (
    <div>
      <form onSubmit={handleaddTodo} className="text-center mt-5">
        <input
          type="text"
          placeholder="Add todo"
          name="todo"
          value={value?.todo || ""}
          onChange={handleValue}
          className="input input-bordered w-4/12"
        />
        <input
          className="btn btn-primary ml-5 w-32"
          type="submit"
          value={ediTable ? "Edit" : "Add"}
        />
      </form>
    </div>
  );
};

export default AddTodo;
