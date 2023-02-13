import { useState } from "react";
import { nanoid } from "nanoid";
import Button from "../Button/Button";
import TaskForm from "../TaskForm/TaskForm";
const AddTask = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      id: nanoid(),
      ...enteredTaskData,
      done: false,
      isEditing: false,
    };
    props.onAddTask(taskData);
  };

  return (
    <div className="add-task">
      {!isEditing && (
        <Button onClick={startEditingHandler} className="default btn--lg">
          Add New Task
        </Button>
      )}
      {isEditing && (
        <TaskForm
          onSaveTaskData={saveTaskDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default AddTask;
