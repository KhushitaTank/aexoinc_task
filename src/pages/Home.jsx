import React, { useContext, useEffect, useState } from "react";
import List from "../component/List";
import { TodosContext } from "../utils/Context";
import Filter from "../component/Filters";
import AddTask from "../component/AddTask";

function Home() {
  const [filterCompleted, setFilterCompleted] = useState(false);
  const [todosList, setTodosList] = useState([]);
  const { todos, saveTodos } = useContext(TodosContext);

  useEffect(() => {
    // if (filterCompleted) setTodosList(todos?.filter((i) => i?.completed));
    // else setTodosList(todos);
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

  const addTask = (task) => {
    setTodosList((list) => {
      const newList = [
        ...list,
        { userId: 1, title: task, completed: false, id: list.length + 1 },
      ];
      saveTodos(newList);
      return newList;
    });
  };

  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="flex justify-end">
        <Filter state={filterCompleted} setState={setFilterCompleted} />
      </div>
      <div className=" h-full  flex items-center justify-center w-full">
        <List
          todosList={todosList}
          toggleCompletion={toggleCompletion}
          filterCompleted={filterCompleted}
        />
      </div>
      <div className="flex justify-center">
        <AddTask addTask={addTask} />
      </div>
    </div>
  );
}

export default Home;
