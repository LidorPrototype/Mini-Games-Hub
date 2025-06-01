import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { TicTacToe } from './Games/TicTacToe/TicTacToe'
import { Hangman } from './Games/Hangman/Hangman';
import { ColorsMemory } from './Games/ColorsMemory/ColorsMemory';
import { TenziesGame } from './Games/TenziesGame/TenziesGame';
import { Trivia } from './Games/Trivia/Trivia';
import { BlackJack } from './Games/BlackJack/BlackJack';
import { Calculations } from './Games/Calculations/Calculations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/hangman" element={<Hangman />} />
        <Route path="/colors-memory" element={<ColorsMemory />} />
        <Route path="/tenzies-game" element={<TenziesGame />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/blackJack" element={<BlackJack />} />
        <Route path="/calculations" element={<Calculations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App
