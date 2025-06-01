import { Link } from 'react-router-dom';
import './Home.css';
import ticTacToeImage from '../../assets/tic-tac-toe.png';
import hangmanImage from '../../assets/hangman.png';
import colorsMemoryImage from '../../assets/colors-memory.png';
import tenziesImage from '../../assets/tenzies-game.png';
import triviaImage from '../../assets/trivia.png';
import blackjackImage from '../../assets/blackJack.png';
import calculationsImage from '../../assets/calculations.png';

export const Home = () => {
  const games = [
    {
      name: 'Tic Tac Toe',
      path: '/tic-tac-toe',
      image: ticTacToeImage,
    },
    {
      name: 'Hangman',
      path: '/hangman',
      image: hangmanImage,
    },
    {
      name: 'ColorsMemory',
      path: '/colors-memory',
      image: colorsMemoryImage,
    },
    {
      name: 'TenziesGame',
      path: '/tenzies-game',
      image: tenziesImage,
    },
    {
      name: 'Trivia',
      path: '/trivia',
      image: triviaImage,
    },
    {
      name: 'BlackJack',
      path: '/blackJack',
      image: blackjackImage,
    },
    {
      name: 'Calculations',
      path: '/calculations',
      image: calculationsImage,
    },
  ];

  return (
    <div className="home-container">
      <h1 className="title">🎮 Mini Game Hub</h1>
      <hr />
      <br />
      <div className="game-grid">
        {games.map((game, idx) => (
          <Link to={game.path} key={idx} className="game-card">
            <img src={game.image} alt={game.name} className="game-icon" />
            <span className="game-label">{game.name}</span>
          </Link>
        ))}
      </div>
      <footer className="footer">
        <p>&copy; Author: Lidor Cowboy</p>
      </footer>
    </div>
  );
}
