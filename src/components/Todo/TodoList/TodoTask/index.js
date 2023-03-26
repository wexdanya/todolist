import React from "react";
import styles from "./TodoTask.module.scss";
import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import cx from "classnames";

const TodoTask = (props) => {
  const {
    task: { task, isDone },
    removeTask,
    id,
    setIsDone,
  } = props;
  const isDoneClasses = cx(styles.wrapper, { [styles.done]: isDone === true });
  return (
    <div className={isDoneClasses} >
      <li className={styles.task}>
        <p className={styles.text}> {task}</p>
      </li>
      <span id={id} onClick={(e) => setIsDone(id)} className={styles.isDone}>
        <AiOutlineCheck style={{ fontSize: "1.6em" }} />
      </span>
      <button onClick={() => removeTask(id)} className={styles.delete}>
        <AiFillDelete style={{ fontSize: "1.7em" }} />
      </button>
    </div>
  );
};

export default TodoTask;
