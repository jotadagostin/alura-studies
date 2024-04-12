import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List/List";
import style from "./App.module.scss";
import Timer from "../components/Timer";
import { ITask } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectedTask(taskSelected: ITask) {
    setSelected(taskSelected);
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectedTask={selectedTask} />
      <Timer />
    </div>
  );
}

export default App;
