import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { DifficultySelector } from './components/DifficultySelector/DifficultySelector';
import { GameRules } from './components/GameRules/GameRules';
import { ColorButton } from './components/ColorButton/ColorButton';
import { ScoreBoard } from "./components/ScoreBoard/ScoreBoard";
import { Timer } from "./components/Timer/Timer";
import "./GuessTheColor.css";


export const GuessTheColor = () => {
    const [randomColors, setRandomColors] = useState([]);
    const [guessColor, setGuessColor] = useState("");
    const [isCorrect, setIsCorrect] = useState("");
    const [newGame, setNewGame] = useState(false)
    const [feedbackColor, setFeedbackColor] = useState(null);
    const [difficulty, setDifficulty] = useState(3);
    const [score, setScore] = useState(0);
    const [rounds, setRounds] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);
  
    useEffect(() => {
        const startNewGame = () => {
            const guessableColors = generateRandomColors(difficulty);
            setRandomColors(guessableColors);
            const randomIndex = Math.floor(Math.random() * guessableColors.length);
            setGuessColor(guessableColors[randomIndex]);
            setIsCorrect("");
            setFeedbackColor(null);

            if (difficulty === 7) {
                setTimerActive(true);
                setTimeLeft(10);
            } else {
                setTimerActive(false);
                setTimeLeft(null);
            }
        };

        startNewGame();
    }, [newGame, difficulty]);


    useEffect(() => {
        if (isCorrect) {
            const timer = setTimeout(() => setFeedbackColor(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [isCorrect]);

    useEffect(() => {
        if (!timerActive || timeLeft === null) return;
        if (timeLeft === 0 && isCorrect === "") {
            setIsCorrect("No");
            setFeedbackColor({});
            setRounds(r => r + 1);
            setTimerActive(false);
            setTimeLeft(null);

            setTimeout(() => {
                setIsCorrect("");
                setNewGame(Date.now());
            }, 3500);

            return;
        }

        const interval = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [timerActive, timeLeft, isCorrect]);

    const handleColorGuess = (e) => {
        const selectedColor = e.currentTarget.value;
        setRounds(r => r + 1);
        if (selectedColor === guessColor) {
            setIsCorrect("Yes")
            setScore(s => s + 1);
            setFeedbackColor({ [selectedColor]: "correct" });
            setNewGame(prev => !prev)
        } else {
            setIsCorrect("No")
            setFeedbackColor({ [selectedColor]: "wrong" });
        }
    }

    const generateRandomColors = (count = 3) => {
        return Array.from({ length: count }, () =>
            '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')
        );
    };

    return (
        <div className="GuessTheColor">
            <Link to="/" className="back-button" style={{position: "absolute", top: 15, left: 15}}>Back to Home</Link>
            <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />
            <h1>Guess the color</h1>    
            <div className="color-cont" style={{backgroundColor: guessColor}}></div>
            <ScoreBoard score={score} rounds={rounds} />
            {timerActive && timeLeft !== null && (
                <Timer timeLeft={timeLeft} />
            )}
            <div className="button-group-cont">
                {randomColors.map((color, idx) => (
                    <ColorButton
                        key={idx}
                        color={color}
                        feedbackState={feedbackColor?.[color]}
                        onClick={handleColorGuess}
                    />
                ))}
            </div>
            <GameRules /> 
            <h4 className="lbl-guess-checker">
            {isCorrect === "Yes" ? "Correct! ✅" : 
            isCorrect === "No" ? `Bad guess ❌ (Try again 😜)` : null}
            </h4>
        </div>
    );
}