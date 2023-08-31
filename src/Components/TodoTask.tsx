import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  // '?' marks an optional prop
  // task?: ITask;
  task: ITask;
}

const TodoTask = ({ task }: Props) => {
  return (
    <div>
      <div>
        <div>{task.taskName}</div>
        <div>{task.deadline}</div>
      </div>
    </div>
  );
};

export default TodoTask;
