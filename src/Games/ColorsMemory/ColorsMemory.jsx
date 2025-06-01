import { useState } from 'react'
import { Link } from 'react-router-dom';

import './ColorsMemory.css';
import Title from './components/Title/Title';
import Stats from './components/Stats/Stats'
import Cards from './components/Cards/Cards';
import { useEffect } from 'react';
import GameOver from './components/GameOver/GameOver';

let overlayStyle = {
  visibility: 'hidden',
  opacity: '0%'
}

let modalStyle = {
  transform: 'translate(0%, 0%)'
}


export const ColorsMemory = () => {
  const [level, setLevel] = useState(1);
  const [gameState, setGameState] = useState('');
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    (gameState === 'next level') && setLevel(level + 1);

    return () => {
      setGameState('');
    }
  }, [gameState, level])

  useEffect(() => {
    if (gameState === 'game over') {
      overlayStyle = {
        opacity: '100%'
      }
      modalStyle = {
        transform: 'translate(0%, 50%)'
      }
    }

    return () => {
      overlayStyle = {
        visibility: 'hidden',
        opacity: '0%'
      }

      modalStyle = {
        transform: 'translate(0%, 0%)'
      }
    }
  }, [gameState])

  useEffect(() => {
    (score > highestScore) && setHighestScore(score);
  }, [score, highestScore])

  const resetGame = () => {
    setGameState('new game');
    setScore(0);
    setLevel(1);
  }

  return (
    <>
      <header>
        <Title/>
        <Stats level={level} score={score} highestScore={highestScore}/>
      </header>
      <main>
        <Link to="/" className="back-button" style={{position: "absolute", top: 15, left: 15}}>Back to Home</Link>
        <Cards 
        level={level} 
        gameState={gameState}
        setGameState={setGameState} 
        setScore={setScore} score={score}/>
      </main>
      <GameOver 
      highestScore={highestScore} 
      overlayStyle={overlayStyle} 
      modalStyle={modalStyle}
      resetGame={resetGame}/>
    </>
  )
}
