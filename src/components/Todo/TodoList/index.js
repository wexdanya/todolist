import React from "react";
import TodoTask from "./TodoTask/index";
const TodoList = (props) => {
  const { tasks, removeTask, setIsDone, wiew } = props;
  const renderTasks = (task) => {
    const { id } = task;
    return (
      <TodoTask
        key={id}
        id={id}
        task={task}
        removeTask={removeTask}
        setIsDone={setIsDone}
      />
    );
  };
  if (wiew === "all") {
    return <ul>{tasks.map((task) => renderTasks(task))}</ul>;
  }
  if (wiew === "done") {
    return (
      <ul>
        {tasks.map((task) =>
          task.isDone === true ? renderTasks(task) : false
        )}
      </ul>
    );
  }
  if (wiew === "active") {
    return (
      <ul>
        {tasks.map((task) =>
          task.isDone === false ? renderTasks(task) : false
        )}
      </ul>
    );
  }
};

export default TodoList;
