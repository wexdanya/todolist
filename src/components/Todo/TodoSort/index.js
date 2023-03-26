import React from "react";
import styles from "./TodoSort.module.scss";
import cx from "classnames";
const TodoSort = (props) => {
  const { setWiew } = props;
  const linksStyles = cx(styles.link);
  const changeWiew = (e) => {
    setWiew(e.target.id)
  };
  return (
    <div>
      <span id="all" className={linksStyles} onClick={changeWiew}>
        All
      </span>
      <span id="active" className={linksStyles} onClick={changeWiew}>
        Active
      </span>
      <span id="done" className={linksStyles} onClick={changeWiew}>
        Done
      </span>
    </div>
  );
};

export default TodoSort;
