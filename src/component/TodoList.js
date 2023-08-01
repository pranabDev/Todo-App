import React, { useEffect, useState } from "react";

const TodoList = ({ todos, handleEdit, AddSwitch }) => {
  const { todo, check } = todos;

  const [toggle, setoggle] = useState(undefined);

  const [dataArray, setdataArray] = useState([]);

  const handleChange = (e) => {
    // setoggle(e.target.checked)
    setoggle(e?.target?.checked);
    // setisChecked(e.target.checked);
    if (e.target.checked === true) {
      setdataArray([...dataArray, e.target.value]);
    } else if (e.target.checked === false) {
      const result = dataArray.filter((res) => res !== e.target.value);
      setdataArray(result);
    }
  };

  useEffect(() => {
    AddSwitch(dataArray);
  }, [dataArray]);

  return (
    <div className="flex justify-between align-middle items-center w-5/12 mx-auto mt-5 mb-7">
      <div className="flex align-middle items-center">
        <input
          type="checkbox"
          checked={check}
          value={todos.id}
          onChange={(e) => handleChange(e)}
          className="checkbox checkbox-info"
        />
        {toggle ? (
          <del className="text-black ml-3">{todo}</del>
        ) : (
          <p className="ml-3">{todo}</p>
        )}
      </div>
      <div onClick={() => handleEdit(todos)}>
        <img
          className="h-5 w-5 cursor-pointer"
          src="https://i.ibb.co/TmMv9cj/editing.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default TodoList;
