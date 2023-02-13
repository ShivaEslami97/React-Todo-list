import React, { useReducer, useState } from "react";
import TasksFilter from "../TasksFilter/TasksFilter";
import "./Tasks.css";
import AddTask from "../AddTask/AddTask";
import TasksItems from "../TasksItems/TasksItems";

function reducer(tasks, action) {
  let newState;
  switch (action.type) {
    case "added":
      newState = [action.task, ...tasks];
      console.log(newState);
      break;
    case "deleted":
      newState = tasks.filter((task) => task.id !== action.id);

      break;
    case "completed":
      newState = tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
      break;
    case "edited":
      newState = tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, isEditing: !task.isEditing };
        }
        return task;
      });
      break;
    case "saveEdit":
      newState = tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, task: action.text, isEditing: !task.isEditing };
        }
        return task;
      });
      break;
    default:
      throw new Error();
  }
  return newState;
}

const Tasks = ({ items }) => {
  const [tasks, dispatch] = useReducer(reducer, items);
  const [filteredDay, setfilteredDay] = useState("Today");

  /// filter tasks by day
  const filterChangeHandler = (selectedDay) => {
    setfilteredDay(selectedDay);
  };
  const filteredTasks = tasks.filter((task) => {
    return task.date === filteredDay;
  });

  /// task completed toggle
  const toggleTaskCompleted = (id) => {
    dispatch({ type: "completed", id: id });
  };
  /// delete task
  const deleteTask = (id) => {
    // const remainingTasks = tasks.filter((task) => task.id !== id);
    dispatch({ type: "deleted", id: id });
  };
  /// add task
  const addTaskHandler = (task) => {
    dispatch({ type: "added", task: task });
  };
  /// edit task
  const editTaskHandler = (id) => {
    dispatch({ type: "edited", id: id });
  };
  /// save edit task
  const saveEditTaskHandler = (id, text) => {
    dispatch({ type: "saveEdit", id: id, text: text });
  };

  return (
    <div className="toDo__body">
      <AddTask onAddTask={addTaskHandler} />
      <TasksFilter onChangeFilter={filterChangeHandler} />
      <TasksItems
        tasks={filteredTasks}
        onDeleteTask={deleteTask}
        onToggleTaskCompleted={toggleTaskCompleted}
        onEditTask={editTaskHandler}
        onSaveEdit={saveEditTaskHandler}
      />
    </div>
  );
};
export default Tasks;
