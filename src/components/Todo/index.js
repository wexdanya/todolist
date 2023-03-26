import React from "react";
import TodoList from "./TodoList/index";
import TodoForm from "./TodoForm/index";
import { useTodo } from "../../hooks";
import styles from "./Todo.module.scss";
import TodoSort from "./TodoSort/index";
const Todo = () => {
  const { tasks, removeTask, addTask, setIsDone, wiew, setWiew } = useTodo();
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Todo</h2>
      <TodoForm addTask={addTask} />
      <TodoSort setWiew={setWiew} wiew={wiew} />
      <TodoList
        tasks={tasks}
        wiew={wiew}
        removeTask={removeTask}
        setIsDone={setIsDone}
      />
    </section>
  );
};

export default Todo;
