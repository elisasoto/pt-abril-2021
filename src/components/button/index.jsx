import "./index.css";

export default function Button({ text, handleClick, enableButton }) {
  return (
    <div
      className={`button button-action-${text} button-type-${text}`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}
