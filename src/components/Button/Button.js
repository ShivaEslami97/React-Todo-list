import "./Button.css";

const Button = (props) => {
  return (
    <button
      id={props.id}
      type={props.type}
      onClick={props.onClick}
      className={`btn btn__${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
