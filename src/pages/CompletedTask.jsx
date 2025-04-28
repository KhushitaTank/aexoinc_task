import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../utils/Context";
import List from "../component/List";

function CompletedTask() {
  const [todosList, setTodosList] = useState([]);
  const { todos, saveTodos } = useContext(TodosContext);

  useEffect(() => {
    setTodosList(todos);
  }, [todos]);

  const toggleCompletion = (id) => {
    setTodosList((list) => {
      const newList = list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      saveTodos(newList);
      return newList;
    });
  };
  return (
    <div className=" h-full  flex items-center justify-center w-full p-4">
      <List
        todosList={todosList}
        toggleCompletion={toggleCompletion}
        filterCompleted={true}
      />
    </div>
  );
}

export default CompletedTask;
