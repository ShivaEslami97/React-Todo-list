import "./TasksItems.css";
import { useState } from "react";
import TasksItem from "../TasksItem/TasksItem";

const TasksItems = ({
  tasks,
  onToggleTaskCompleted,
  onDeleteTask,
  onEditTask,
  onSaveEdit,
}) => {
  const [editData, setEditData] = useState({});

  const tasksCompletedHandler = (taskId) => {
    onToggleTaskCompleted(taskId);
  };
  const tasksDeleteHandler = (taskId) => {
    onDeleteTask(taskId);
  };
  const tasksSaveHandler = (taskId, text) => {
    if (text.trim() === "") return;
    onSaveEdit(taskId, text);
  };
  const EditTaskHandler = (key, value, type) => {
    const values = { ...editData };
    values[key] = value;
    setEditData(values);
    if (type !== "change") {
      onEditTask(key);
    }
  };

  return (
    <ul className="tasks">
      {tasks.length > 0 ? (
        tasks.map((item) => {
          return (
            <TasksItem
              item={item}
              key={item.id}
              tasksCompletedHandler={tasksCompletedHandler}
              tasksDeleteHandler={tasksDeleteHandler}
              tasksSaveHandler={tasksSaveHandler}
              EditTaskHandler={EditTaskHandler}
              editData={editData}
            />
          );
        })
      ) : (
        <p className="no-task">No tasks found!</p>
      )}
    </ul>
  );
};
export default TasksItems;
