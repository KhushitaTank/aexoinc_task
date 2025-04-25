import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../utils/Context";
// import { TodosContext } from "./context";

function List({ todosList, toggleCompletion }) {
  // const [todosList, setTodosList] = useState([]);
  // const { todos } = useContext(TodosContext);

  // useEffect(() => {
  //   setTodosList(todos);
  // }, [todos]);

  // const toggleCompletion = (id) => {
  //   setTodosList((list) => {
  //     return list.map((item) =>
  //       item.id === id ? { ...item, completed: !item.completed } : item
  //     );
  //   });
  // };

  return (
    <div className="p-4 flex flex-col gap-2 max-w-[700px] max-h-[500px] overflow-auto border-border border-2 rounded-lg">
      {todosList?.map((todo) => {
        return (
          <div
            className="flex gap-4"
            key={todo.id}
            onClick={() => toggleCompletion(todo.id)}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {}}
            />
            <div className="flex flex-col">
              <h2>{todo.title}</h2>
              <p
                className={
                  todo.completed ? "text-brand font-medium" : "text-error"
                }>
                {todo.completed ? "Completed" : "Not Completed"}
              </p>
            </div>
            {/* {JSON.stringify(todo)} */}
          </div>
        );
      })}
    </div>
  );
}

export default List;
