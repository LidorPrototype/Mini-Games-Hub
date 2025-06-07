import "./DifficultySelector.css";

export const DifficultySelector = ({ difficulty, setDifficulty }) => (
  <div className="difficulty-toggle">
    <span>Difficulty: </span>
    <button
      className={difficulty === 2 ? "difficulty-button active" : "difficulty-button"}
      onClick={() => setDifficulty(2)}
      title="Only 2 options. Great for beginners or kids."
    >
      Easy 😌
    </button>
    <button
      className={difficulty === 3 ? "difficulty-button active" : "difficulty-button"}
      onClick={() => setDifficulty(3)}
      title="Standard mode with 3 color options."
    >
      Medium 😐
    </button>
    <button
      className={difficulty === 5 ? "difficulty-button active" : "difficulty-button"}
      onClick={() => setDifficulty(5)}
      title="5 color choices. Can you handle the chaos?"
    >
      Hard 😈
    </button>
    <button
      className={difficulty === 7 ? "difficulty-button active" : "difficulty-button"}
      onClick={() => setDifficulty(7)}
      title="7 color choices in timer mode. No mercy! Insanity?!?!"
    >
      Extreme 🔥
    </button>
  </div>
);
