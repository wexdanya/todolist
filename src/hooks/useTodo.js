import { useState } from "react";
const useTodo = () => {
  const [wiew, setWiew] = useState("all");
  const [tasks, setTasks] = useState([
    { id: Date.now(), task: "123", isDone: false },
  ]);
  const addTask = (task) => {
    const { task: text } = task;
    setTasks([...tasks, { id: Date.now(), task: text, isDone: false }]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const setIsDone = (id) => {
    tasks.map((task) =>
      task.id === id ? (task.isDone = !task.isDone) : false
    );
    setTasks([...tasks]);
  };

  return { tasks, addTask, removeTask, setIsDone, wiew, setWiew };
};
export default useTodo;
