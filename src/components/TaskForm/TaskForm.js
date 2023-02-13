import "./TaskForm.css";
import Button from "../Button/Button";
import { useState } from "react";

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDay, setEnteredDay] = useState("Today");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dayChangeHandler = (event) => {
    setEnteredDay(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredTitle) {
      return;
    }
    const taskData = {
      task: enteredTitle,
      date: enteredDay,
    };
    props.onSaveTaskData(taskData);
    setEnteredTitle("");
    setEnteredDay("Today");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="add-task__controls">
        <div className="add-task__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="add-task__control">
          <label>Day</label>
          <select value={enteredDay} onChange={dayChangeHandler}>
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
          </select>
        </div>
      </div>
      <div className="add-task__actions">
        <Button className="red" type="button" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button className="default" type="submit">
          Add Task
        </Button>
      </div>
    </form>
  );
};
export default TaskForm;
