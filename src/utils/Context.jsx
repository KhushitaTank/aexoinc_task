import React, { useEffect, useState } from "react";
import { getStored, setStored } from "./localStorage";
import { Outlet } from "react-router-dom";

export const TodosContext = React.createContext();

export const TodosProvider = (props) => {
  const [todos, setTodos] = useState();

  const getTodos = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((result) => result)
      .catch((error) => console.log("error happened", error));
  };

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
  };

  useEffect(() => {
    setStored("todos", todos);
  }, [todos]);

  useEffect(() => {
    // TODO: Check local storage before fetch
    getTodos().then((result) => {
      setTodos(result.slice(0, 10)); // Restricting to 10 items
    });
  }, []);

  return (
    <TodosContext.Provider value={{ todos, saveTodos }}>
      {/* {props.children} */}
      <Outlet />
    </TodosContext.Provider>
  );
};
