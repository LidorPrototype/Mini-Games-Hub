import "./ScoreBoard.css";

export const ScoreBoard = ({ score, rounds }) => {
  const accuracy = rounds > 0 ? Math.round((score / rounds) * 100) : 0;

  return (
    <div className="score-display">
      <h4>Score: {score}/{rounds} ({accuracy}%)</h4>
    </div>
  );
};
