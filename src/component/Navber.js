import React, { useReducer, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AllTodo from "./AllTodo";
import Active from "./Active";
import CustomLink from "./CustomLink/CustomLink";
import Complete from "./Complete";
import TodoContect from "./Contect/TodoContect";
import { toast } from "react-toastify";
import DispatchContext from "./Contect/DispatchContext";

const Navber = () => {
  

  // const [todo, setTodo] = useState(work);
  const todoHandler = (todo, action) => {
    switch (action.type) {
      case "DELETE_TODO":
        toast.success("Delete todos");
        return todo.filter((to) => to.id !== action.payload.id);
      case "ALL_DELETE_TODO":
        return todo.filter((t) => t.check !== action.payload.check);
      case "ADD_TODO":
        toast.success("Todos added");
        return [...todo, { id: todo.length + 1, ...action.payload }];
      case "EDIT_TODO":
        const index = todo.findIndex((t) => t.id === action.payload.id);
        let exist = [...todo];
        toast.success("Edit Succesfully");
        exist.splice(index, 1, action.payload);
        return exist;
      case "ADD_CHECK_BOX":
        const indexs = todo.findIndex((to) => to.id === +action.payload);
        const checkTodo = todo.find((tod) => tod.id === +action.payload);
        let exists = [...todo];
        exists.splice(indexs, 1, { ...checkTodo, check: true });
        return exists;
      default:
        return todo;
    }
  };

  const [todo, dispatch] = useReducer(todoHandler, []);

  const deleteTodo = (e) => {
    dispatch({ type: "DELETE_TODO", payload: e });
  };

  const AllDelete = (e) => {
    for (let value of e) {
      dispatch({ type: "ALL_DELETE_TODO", payload: value });
    }
  };

  return (
    <>
      <h3 className="text-center font-bold text-3xl mt-5 mb-10 text-blue-500">
        #Todo Application
      </h3>
      <div className="max-w-xs mx-auto mb-0">
        <div className="flex justify-between overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
          <CustomLink
            to={"/all"}
            className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 font-semibold"
          >
            All
          </CustomLink>

          <CustomLink
            to={"/active"}
            className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 font-semibold"
          >
            Active
          </CustomLink>

          <CustomLink
            to={"/completed"}
            className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 font-semibold"
          >
            Completed
          </CustomLink>
        </div>
      </div>
      <div className="divider mt-0 mb-0"></div>
      <Outlet />
      <DispatchContext.Provider value={dispatch}>
        <TodoContect.Provider value={todo}>
          <Routes>
            <Route path="/" element={<AllTodo todo={todo} />}></Route>
            <Route path="/all" element={<AllTodo todo={todo} />}></Route>
            <Route path="/active" element={<Active />}></Route>
            <Route
              path="/completed"
              element={
                <Complete AllDelete={AllDelete} deleteTodo={deleteTodo} />
              }
            ></Route>
          </Routes>
        </TodoContect.Provider>
      </DispatchContext.Provider>
    </>
  );
};

export default Navber;
