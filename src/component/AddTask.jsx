import { useState } from "react";

function AddTask({ addTask }) {
  const [task, setTask] = useState("");

  const prepAndAddTask = () => {
    addTask(task);
    setTask("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="border-brand border-2"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button
        className="px-4 mx-4 bg-brand rounded-lg text-white"
        onClick={() => prepAndAddTask()}>
        Add
      </button>
    </div>
  );
}

export default AddTask;
