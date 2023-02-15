import React from "react";
import { FaRegBookmark, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";

const TasksItem = ({
  item,
  tasksCompletedHandler,
  EditTaskHandler,
  tasksSaveHandler,
  tasksDeleteHandler,
  editData,
}) => {
  return (
    <li className="tasks__list">
      {!item.isEditing ? (
        <Checkbox
          task={item.task}
          id={item.id}
          checked={item.done ? "checked" : ""}
          onClick={() => tasksCompletedHandler(item.id)}
        />
      ) : (
        <div className="add-task__control">
          <input
            value={editData[item.id]}
            type="text"
            onChange={(e) => EditTaskHandler(item.id, e.target.value, "change")}
          />
        </div>
      )}

      <div className="tasks__actions">
        {!item.isEditing ? (
          <Button
            className="icon edit"
            type="button"
            onClick={() => EditTaskHandler(item.id, item.task, "edit")}
          >
            <FaRegEdit />
          </Button>
        ) : (
          <Button
            className="icon edit"
            type="button"
            onClick={() => tasksSaveHandler(item.id, editData[item.id])}
          >
            <FaRegBookmark />
          </Button>
        )}
        <Button
          className="icon delete"
          type="button"
          onClick={() => tasksDeleteHandler(item.id)}
        >
          <FaTrashAlt />
        </Button>
      </div>
    </li>
  );
};

export default TasksItem;
