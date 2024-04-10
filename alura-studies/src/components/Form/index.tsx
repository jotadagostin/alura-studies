import React from "react";
import style from "./Form.module.scss";
import Button from "../Button";

class Form extends React.Component {
  state = {
    task: "",
    time: "00:00",
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("state: ", this.state);
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Add a new study</label>
          <input
            type="text"
            name="task"
            id="task"
            value={this.state.task}
            onChange={(event) =>
              this.setState({ ...this.state, task: event.target.value })
            }
            placeholder="What do you want to study?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time"></label>
          <input
            type="time"
            step="1"
            name="time"
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button>Add</Button>
      </form>
    );
  }
}

export default Form;
