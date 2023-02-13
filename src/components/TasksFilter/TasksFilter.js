import "./TasksFilter.css";

const TasksFilter = (props) => {
  const taskChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="tasks-filter">
      <div className="tasks-filter__control">
        <label>Filter by Day</label>
        <select onChange={taskChangeHandler}>
          <option value="Today">Today</option>
          <option value="Tomorrow">Tomorrow</option>
        </select>
      </div>
    </div>
  );
};
export default TasksFilter;
