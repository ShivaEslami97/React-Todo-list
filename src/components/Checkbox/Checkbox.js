import "./Checkbox.css";

const Checkbox = ({ task, id, onClick, checked }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        name="todo"
        checked={checked}
        onChange={onClick}
      />
      <label htmlFor={id} data-content={task}>
        {task}
      </label>
    </div>
  );
};

export default Checkbox;
