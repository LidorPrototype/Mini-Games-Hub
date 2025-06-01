import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './TicTacToe.css'
import { Board } from './components/Board/Board'
import { ResultModal } from './components/ResultModal/ResultModal';
import { calculateWinner } from './utils/WinnerCalculator';

export const TicTacToe = () => {
  const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '']);
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [numberOfTurnsLeft, setNumberofTurnsLeft] = useState(9);
  const [winner, setWinner] = useState();
  const [winningCombination, setWinningCombination] = useState([]);
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem('ttt-score');
    return saved ? JSON.parse(saved) : { X: 0, O: 0 };
  });

  useEffect(() => {
    localStorage.setItem('ttt-score', JSON.stringify(score));
  }, [score]);

  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';
  
  const restartGame = () => {
    setCellValues(['', '', '', '', '', '', '', '', '']);
    setXIsNext(true);
    setIsGameOver(false);
    setNumberofTurnsLeft(9);
    setWinner(undefined);
    setWinningCombination([]);
  }

  const onCellClicked = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const updatedCellValues = [...cellValues];
      updatedCellValues[cellIndex] = xIsNext ? 'X' : 'O';
      const newNumberOfTurnsLeft = numberOfTurnsLeft - 1;
      const calculateResult = calculateWinner(updatedCellValues, newNumberOfTurnsLeft, cellIndex);

      if (calculateResult.winner) {
        console.log(`winner: '${calculateResult.winner}'`);
        setScore(prev => ({
          ...prev,
          [calculateResult.winner]: prev[calculateResult.winner] + 1
        }));
      }

      setCellValues(updatedCellValues);
      setXIsNext(!xIsNext);
      setIsGameOver(calculateResult.hasResult);
      setNumberofTurnsLeft(newNumberOfTurnsLeft);
      setWinner(calculateResult.winner);
      setWinningCombination(calculateResult.winningCombination);
    }
  }

  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board cellValues={cellValues} winningCombination={winningCombination} cellClicked={onCellClicked} />
        <div className="player-score-row">
          <span>Player X: <strong>{score.X}</strong></span>
          <Link to="/" className="back-button">Back to Home</Link>
          <span>Player O: <strong>{score.O}</strong></span>
        </div>
      </div>
      <ResultModal 
        isGameOver={isGameOver} 
        winner={winner} 
        onNewGameClicked={restartGame} 
      />
    </>
  )
}
