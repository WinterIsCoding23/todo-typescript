import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  // ...:void -> return-type of a function that doesnt return anything
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    // newTask-object created because otherwise error:
    // "Type 'string' is not assignable to type 'ITask'." ...for 'task' in setTodoList
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    console.log(newTask);
    setTask("");
    setDeadline(0);
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          ></input>
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          ></input>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
