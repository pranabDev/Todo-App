import React from 'react';

const ActiveTodo = ({todos}) => {
    const {todo,check} = todos;
    return (
        <>
        <div className="flex justify-between align-middle items-center w-5/12 mx-auto mt-5 mb-7">
         <div className="flex align-middle items-center">
          <input type="checkbox" checked={check}  className="checkbox checkbox-info" />
          <p className="ml-3">{todo}</p>
        </div>
         
      </div>
      
      </>
    );
};

export default ActiveTodo;