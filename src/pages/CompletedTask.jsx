import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../utils/Context";
import List from "../component/List";

function CompletedTask() {
  const [todosList, setTodosList] = useState([]);
  const { todos } = useContext(TodosContext);

  useEffect(() => {
    setTodosList(todos?.filter((i) => i?.completed));
  }, [todos]);

  const toggleCompletion = (id) => {
    setTodosList((list) => {
      return list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
    });
  };
  return (
    <div className=" h-full  flex items-center justify-center w-full ">
      <List todosList={todosList} toggleCompletion={toggleCompletion} />
    </div>
  );
}

export default CompletedTask;
