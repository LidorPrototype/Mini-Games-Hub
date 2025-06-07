import "./ColorButton.css";

export const ColorButton = ({ color, feedbackState, onClick }) => {
  return (
    <button
        className={`cool-button ${feedbackState || ""}`}
        value={color}
        aria-label={`Guess ${color}`}
        onClick={onClick}
    >
        {color}
    </button>
  );
};
