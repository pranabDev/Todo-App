import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import useDispatchContext from "./Hooks/DispatchHooks";

const AllTodo = ({ todo}) => {
  const dispatch = useDispatchContext();

  const [ediTable, setEdiTable] = useState(null);
  const PushTodo = (e) => {
    dispatch({ type: "ADD_TODO", payload: e });
  };

  const EditTodo = (e) => {
    dispatch({ type: "EDIT_TODO", payload: e });
  };

  const handleEdit = (e) => {
    const find = todo.find((t) => t.id === e.id);
    setEdiTable(find);
  };

  const AddSwitch = (e) => {
    for (const value of e) {
      dispatch({ type: "ADD_CHECK_BOX", payload: value });
    }
  };

  return (
    <>
      <AddTodo
        PushTodo={PushTodo}
        ediTable={ediTable}
        EditTodo={EditTodo}
      ></AddTodo>
      {todo?.map((t) => (
        <TodoList
          key={t?.id}
          todos={t}
          handleEdit={handleEdit}
          AddSwitch={AddSwitch}
        ></TodoList>
      ))}
    </>
  );
};

export default AllTodo;
