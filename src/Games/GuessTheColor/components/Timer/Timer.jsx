import "./Timer.css";

export const Timer = ({ timeLeft }) => {
  return (
    <div className={`timer-display ${timeLeft <= 3 ? 'urgent' : ''}`}>
      Time Left: {Math.max(timeLeft, 0)}s
    </div>
  );
};
