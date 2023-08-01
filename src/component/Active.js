import React, { useContext } from 'react';
import AddTodo from './AddTodo';
import TodoContect from './Contect/TodoContect';
import ActiveTodo from './ActiveTodo';

const Active = () => {
    const todo = useContext(TodoContect);
    const filter= todo.filter(to=>to.check !== true);


    return (
        <div>
          <AddTodo></AddTodo>
          {
            filter.map(fill=><ActiveTodo key={fill.id} todos={fill}></ActiveTodo>)
          }
        </div>
    );
};

export default Active;